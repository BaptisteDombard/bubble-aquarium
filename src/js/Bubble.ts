import {random} from "./helpers/math";
import {settings} from "./settings";

export class Bubble{
    private radius:number;
    private color:string;
    private position:{x: number, y: number};
    private ctx:CanvasRenderingContext2D;
    private canvas:HTMLCanvasElement;
    private opacity: number;
    private speed: {x: number,y: number};
    private mouse:{x: number ,y: number};

    constructor(ctx:CanvasRenderingContext2D, canvas:HTMLCanvasElement, mouse:{x:number,y:number}) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.mouse = mouse;
        this.generate();
    }
    generate(){
        this.opacity = Math.random();
        this.speed = {
            x:random(settings.bubble.speed.x.min, settings.bubble.speed.x.max),
            y:random(settings.bubble.speed.y.min, settings.bubble.speed.y.max)
        };
        this.radius = random(settings.bubble.radius.min, settings.bubble.radius.max);
        this.position = {
            x: random(this.radius,this.canvas.width - this.radius),
            y: random(this.canvas.height*0.5, this.canvas.height + this.radius *2)
        };
        this.color = settings.bubble.colors[random(0,settings.bubble.colors.length,false)];
    }
    draw(){
        this.ctx.beginPath();
        this.ctx.globalAlpha = this.opacity;
        this.ctx.fillStyle = this.color;
        this.ctx.arc(this.position.x, this.position.y, this.radius,0,2*Math.PI);
        this.ctx.fill();
        this.ctx.globalAlpha = 1;
    }
    update(){
        if (this.position.y <= -this.radius){
            this.position.y = this.canvas.height + this.radius;
        }
        const hypothenuse = Math.sqrt(Math.pow(this.position.x - this.mouse.x, 2) + Math.pow(this.position.y - this.mouse.y, 2));
        if (hypothenuse <= this.radius + settings.mouse.radius){
            this.color = 'blue';
        }else {
            this.color = 'red';
        }
        this.position.y -= this.speed.y;
        // this.position.x += this.speed.x;
        this.draw();
    }
}