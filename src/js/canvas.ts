import {settings} from "./settings";

export const canvas ={
    init(mouse:{x: number ,y: number}){
        this.canvas = document.getElementById('my-canvas') as HTMLCanvasElement
        this.ctx = this.canvas.getContext('2d');
        this.mouse = mouse;
        this.resizeCanvas();
        this.addEventListeners();
        this.generateGradient();
        this.draw();
        return this;
    },
    generateGradient(){
        this.gradient = this.ctx.createLinearGradient(0,0,this.canvas.width,this.canvas.height);
        for (let i = 0; i < settings.gradient.length; i++){
            // to do
        }
        this.gradient.addColorStop(0,settings.gradient[0]);
        this.gradient.addColorStop(1,settings.gradient[1]);
    },
    resizeCanvas(){
        this.canvas.width = window.innerWidth * settings.canvasRatioWidth;
        this.canvas.height = window.innerHeight * settings.canvasRatioHeight;
        this.generateGradient();
    },
    draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle = this.gradient;
        this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
        this.ctx.closePath();
        this.ctx.beginPath();
        this.ctx.fillStyle = "red";
        this.ctx.arc(this.mouse.x,this.mouse.y, settings.bubble.radius.max, 0, 2*Math.PI);
        this.ctx.fill();
        this.ctx.closePath();
        return this;
    },
    addEventListeners(){
        window.addEventListener('resize', () => {
            this.resizeCanvas()
        });
        this.canvas.addEventListener('mousemove',(event:MouseEvent)=>{
            this.mouse.y = event.y - this.canvas.getBoundingClientRect().y + parseInt(getComputedStyle(this.canvas).borderWidth);
            this.mouse.x = event.x - this.canvas.getBoundingClientRect().x + parseInt(getComputedStyle(this.canvas).borderWidth);
        })
    },
};