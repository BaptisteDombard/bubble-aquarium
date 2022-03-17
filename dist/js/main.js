/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Bubble.ts":
/*!**************************!*\
  !*** ./src/js/Bubble.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Bubble = void 0;\n\nvar math_1 = __webpack_require__(/*! ./helpers/math */ \"./src/js/helpers/math.ts\");\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/js/settings.ts\");\n\nvar Bubble = function () {\n  function Bubble(ctx, canvas, mouse) {\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.mouse = mouse;\n    this.generate();\n  }\n\n  Bubble.prototype.generate = function () {\n    this.opacity = Math.random();\n    this.speed = {\n      x: (0, math_1.random)(settings_1.settings.bubble.speed.x.min, settings_1.settings.bubble.speed.x.max),\n      y: (0, math_1.random)(settings_1.settings.bubble.speed.y.min, settings_1.settings.bubble.speed.y.max)\n    };\n    this.radius = (0, math_1.random)(settings_1.settings.bubble.radius.min, settings_1.settings.bubble.radius.max);\n    this.position = {\n      x: (0, math_1.random)(this.radius, this.canvas.width - this.radius),\n      y: (0, math_1.random)(this.canvas.height * 0.5, this.canvas.height + this.radius * 2)\n    };\n    this.color = settings_1.settings.bubble.colors[(0, math_1.random)(0, settings_1.settings.bubble.colors.length, false)];\n  };\n\n  Bubble.prototype.draw = function () {\n    this.ctx.beginPath();\n    this.ctx.globalAlpha = this.opacity;\n    this.ctx.fillStyle = this.color;\n    this.ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);\n    this.ctx.fill();\n    this.ctx.globalAlpha = 1;\n  };\n\n  Bubble.prototype.update = function () {\n    if (this.position.y <= -this.radius) {}\n\n    this.position.y -= this.speed.y;\n    this.position.x += this.speed.x;\n    this.draw();\n  };\n\n  return Bubble;\n}();\n\nexports.Bubble = Bubble;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvQnViYmxlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7QUFVSSxrQkFBWUEsR0FBWixFQUEwQ0MsTUFBMUMsRUFBb0VDLEtBQXBFLEVBQTZGO0FBQ3pGLFNBQUtELE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtELEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtFLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLFFBQUw7QUFDSDs7QUFDREM7QUFDSSxTQUFLQyxPQUFMLEdBQWVDLElBQUksQ0FBQ0MsTUFBTCxFQUFmO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1RDLE9BQUMsRUFBQyxtQkFBT0Msb0JBQVNDLE1BQVQsQ0FBZ0JILEtBQWhCLENBQXNCQyxDQUF0QixDQUF3QkcsR0FBL0IsRUFBb0NGLG9CQUFTQyxNQUFULENBQWdCSCxLQUFoQixDQUFzQkMsQ0FBdEIsQ0FBd0JJLEdBQTVELENBRE87QUFFVEMsT0FBQyxFQUFDLG1CQUFPSixvQkFBU0MsTUFBVCxDQUFnQkgsS0FBaEIsQ0FBc0JNLENBQXRCLENBQXdCRixHQUEvQixFQUFvQ0Ysb0JBQVNDLE1BQVQsQ0FBZ0JILEtBQWhCLENBQXNCTSxDQUF0QixDQUF3QkQsR0FBNUQ7QUFGTyxLQUFiO0FBSUEsU0FBS0UsTUFBTCxHQUFjLG1CQUFPTCxvQkFBU0MsTUFBVCxDQUFnQkksTUFBaEIsQ0FBdUJILEdBQTlCLEVBQW1DRixvQkFBU0MsTUFBVCxDQUFnQkksTUFBaEIsQ0FBdUJGLEdBQTFELENBQWQ7QUFDQSxTQUFLRyxRQUFMLEdBQWdCO0FBQ1pQLE9BQUMsRUFBRSxtQkFBTyxLQUFLTSxNQUFaLEVBQW1CLEtBQUtkLE1BQUwsQ0FBWWdCLEtBQVosR0FBb0IsS0FBS0YsTUFBNUMsQ0FEUztBQUVaRCxPQUFDLEVBQUUsbUJBQU8sS0FBS2IsTUFBTCxDQUFZaUIsTUFBWixHQUFtQixHQUExQixFQUErQixLQUFLakIsTUFBTCxDQUFZaUIsTUFBWixHQUFxQixLQUFLSCxNQUFMLEdBQWEsQ0FBakU7QUFGUyxLQUFoQjtBQUlBLFNBQUtJLEtBQUwsR0FBYVQsb0JBQVNDLE1BQVQsQ0FBZ0JTLE1BQWhCLENBQXVCLG1CQUFPLENBQVAsRUFBU1Ysb0JBQVNDLE1BQVQsQ0FBZ0JTLE1BQWhCLENBQXVCQyxNQUFoQyxFQUF1QyxLQUF2QyxDQUF2QixDQUFiO0FBQ0gsR0FaRDs7QUFhQWpCO0FBQ0ksU0FBS0osR0FBTCxDQUFTc0IsU0FBVDtBQUNBLFNBQUt0QixHQUFMLENBQVN1QixXQUFULEdBQXVCLEtBQUtsQixPQUE1QjtBQUNBLFNBQUtMLEdBQUwsQ0FBU3dCLFNBQVQsR0FBcUIsS0FBS0wsS0FBMUI7QUFDQSxTQUFLbkIsR0FBTCxDQUFTeUIsR0FBVCxDQUFhLEtBQUtULFFBQUwsQ0FBY1AsQ0FBM0IsRUFBOEIsS0FBS08sUUFBTCxDQUFjRixDQUE1QyxFQUErQyxLQUFLQyxNQUFwRCxFQUEyRCxDQUEzRCxFQUE2RCxJQUFFVCxJQUFJLENBQUNvQixFQUFwRTtBQUNBLFNBQUsxQixHQUFMLENBQVMyQixJQUFUO0FBQ0EsU0FBSzNCLEdBQUwsQ0FBU3VCLFdBQVQsR0FBdUIsQ0FBdkI7QUFDSCxHQVBEOztBQVFBbkI7QUFDSSxRQUFJLEtBQUtZLFFBQUwsQ0FBY0YsQ0FBZCxJQUFtQixDQUFDLEtBQUtDLE1BQTdCLEVBQW9DLENBRW5DOztBQUNELFNBQUtDLFFBQUwsQ0FBY0YsQ0FBZCxJQUFtQixLQUFLTixLQUFMLENBQVdNLENBQTlCO0FBQ0EsU0FBS0UsUUFBTCxDQUFjUCxDQUFkLElBQW1CLEtBQUtELEtBQUwsQ0FBV0MsQ0FBOUI7QUFDQSxTQUFLbUIsSUFBTDtBQUNILEdBUEQ7O0FBUUo7QUFBQyxDQTdDRDs7QUFBYUMsY0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idWJibGUtYXF1YXJpdW0vLi9zcmMvanMvQnViYmxlLnRzP2RhMDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtyYW5kb219IGZyb20gXCIuL2hlbHBlcnMvbWF0aFwiO1xyXG5pbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJ1YmJsZXtcclxuICAgIHByaXZhdGUgcmFkaXVzOm51bWJlcjtcclxuICAgIHByaXZhdGUgY29sb3I6c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBwb3NpdGlvbjp7eDogbnVtYmVyLCB5OiBudW1iZXJ9O1xyXG4gICAgcHJpdmF0ZSBjdHg6Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgcHJpdmF0ZSBjYW52YXM6SFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIG9wYWNpdHk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgc3BlZWQ6IHt4OiBudW1iZXIseTogbnVtYmVyfTtcclxuICAgIHByaXZhdGUgbW91c2U6e3g6IG51bWJlciAseTogbnVtYmVyfTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjdHg6Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjYW52YXM6SFRNTENhbnZhc0VsZW1lbnQsIG1vdXNlOnt4Om51bWJlcix5Om51bWJlcn0pIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgICAgICB0aGlzLm1vdXNlID0gbW91c2U7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZSgpO1xyXG4gICAgfVxyXG4gICAgZ2VuZXJhdGUoKXtcclxuICAgICAgICB0aGlzLm9wYWNpdHkgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSB7XHJcbiAgICAgICAgICAgIHg6cmFuZG9tKHNldHRpbmdzLmJ1YmJsZS5zcGVlZC54Lm1pbiwgc2V0dGluZ3MuYnViYmxlLnNwZWVkLngubWF4KSxcclxuICAgICAgICAgICAgeTpyYW5kb20oc2V0dGluZ3MuYnViYmxlLnNwZWVkLnkubWluLCBzZXR0aW5ncy5idWJibGUuc3BlZWQueS5tYXgpXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhbmRvbShzZXR0aW5ncy5idWJibGUucmFkaXVzLm1pbiwgc2V0dGluZ3MuYnViYmxlLnJhZGl1cy5tYXgpO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XHJcbiAgICAgICAgICAgIHg6IHJhbmRvbSh0aGlzLnJhZGl1cyx0aGlzLmNhbnZhcy53aWR0aCAtIHRoaXMucmFkaXVzKSxcclxuICAgICAgICAgICAgeTogcmFuZG9tKHRoaXMuY2FudmFzLmhlaWdodCowLjUsIHRoaXMuY2FudmFzLmhlaWdodCArIHRoaXMucmFkaXVzICoyKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IHNldHRpbmdzLmJ1YmJsZS5jb2xvcnNbcmFuZG9tKDAsc2V0dGluZ3MuYnViYmxlLmNvbG9ycy5sZW5ndGgsZmFsc2UpXTtcclxuICAgIH1cclxuICAgIGRyYXcoKXtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IHRoaXMub3BhY2l0eTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5yYWRpdXMsMCwyKk1hdGguUEkpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IDE7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoKXtcclxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55IDw9IC10aGlzLnJhZGl1cyl7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLT0gdGhpcy5zcGVlZC55O1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnNwZWVkLng7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiY3R4IiwiY2FudmFzIiwibW91c2UiLCJnZW5lcmF0ZSIsIkJ1YmJsZSIsIm9wYWNpdHkiLCJNYXRoIiwicmFuZG9tIiwic3BlZWQiLCJ4Iiwic2V0dGluZ3NfMSIsImJ1YmJsZSIsIm1pbiIsIm1heCIsInkiLCJyYWRpdXMiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwiY29sb3IiLCJjb2xvcnMiLCJsZW5ndGgiLCJiZWdpblBhdGgiLCJnbG9iYWxBbHBoYSIsImZpbGxTdHlsZSIsImFyYyIsIlBJIiwiZmlsbCIsImRyYXciLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/Bubble.ts\n");

/***/ }),

/***/ "./src/js/animation.ts":
/*!*****************************!*\
  !*** ./src/js/animation.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.animation = void 0;\nexports.animation = {\n  init: function init(canvas, bubbles) {\n    this.bubbles = bubbles;\n    this.canvas = canvas;\n    this.animate();\n    return this;\n  },\n  animate: function animate() {\n    var _this = this;\n\n    this.canvas.draw();\n    this.bubbles.forEach(function (bubble) {\n      bubble.update();\n    });\n    requestAnimationFrame(function () {\n      _this.animate();\n    });\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYW5pbWF0aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFHYUEsaUJBQUFBLEdBQVk7QUFFckJDLE1BQUksZ0JBQUNDLE1BQUQsRUFBU0MsT0FBVCxFQUFnQjtBQUNoQixTQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLRCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLRSxPQUFMO0FBQ0EsV0FBTyxJQUFQO0FBQ0gsR0FQb0I7QUFRckJBLFNBQU8sRUFBUDtBQUFBOztBQUNJLFNBQUtGLE1BQUwsQ0FBWUcsSUFBWjtBQUNBLFNBQUtGLE9BQUwsQ0FBYUcsT0FBYixDQUFxQixVQUFDQyxNQUFELEVBQWU7QUFDaENBLFlBQU0sQ0FBQ0MsTUFBUDtBQUNILEtBRkQ7QUFHQUMseUJBQXFCLENBQUM7QUFDbEJDLFdBQUksQ0FBQ04sT0FBTDtBQUNILEtBRm9CLENBQXJCO0FBR0g7QUFoQm9CLENBQVoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idWJibGUtYXF1YXJpdW0vLi9zcmMvanMvYW5pbWF0aW9uLnRzP2M5MjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjYW52YXN9IGZyb20gXCIuL2NhbnZhc1wiO1xyXG5pbXBvcnQge0J1YmJsZX0gZnJvbSBcIi4vQnViYmxlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYW5pbWF0aW9uID0ge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgaW5pdChjYW52YXMsIGJ1YmJsZXMpe1xyXG4gICAgICAgIHRoaXMuYnViYmxlcyA9IGJ1YmJsZXM7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgYW5pbWF0ZSgpe1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmJ1YmJsZXMuZm9yRWFjaCgoYnViYmxlOiBCdWJibGUpPT57XHJcbiAgICAgICAgICAgIGJ1YmJsZS51cGRhdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiZXhwb3J0cyIsImluaXQiLCJjYW52YXMiLCJidWJibGVzIiwiYW5pbWF0ZSIsImRyYXciLCJmb3JFYWNoIiwiYnViYmxlIiwidXBkYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiX3RoaXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/animation.ts\n");

/***/ }),

/***/ "./src/js/canvas.ts":
/*!**************************!*\
  !*** ./src/js/canvas.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.canvas = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/js/settings.ts\");\n\nexports.canvas = {\n  init: function init(mouse) {\n    this.canvas = document.getElementById('my-canvas');\n    this.ctx = this.canvas.getContext('2d');\n    this.mouse = mouse;\n    this.resizeCanvas();\n    this.addEventListeners();\n    this.generateGradient();\n    this.draw();\n    return this;\n  },\n  generateGradient: function generateGradient() {\n    this.gradient = this.ctx.createLinearGradient(0, 0, this.canvas.width, this.canvas.height);\n\n    for (var i = 0; i < settings_1.settings.gradient.length; i++) {}\n\n    this.gradient.addColorStop(0, settings_1.settings.gradient[0]);\n    this.gradient.addColorStop(1, settings_1.settings.gradient[1]);\n  },\n  resizeCanvas: function resizeCanvas() {\n    this.canvas.width = window.innerWidth * settings_1.settings.canvasRatioWidth;\n    this.canvas.height = window.innerHeight * settings_1.settings.canvasRatioHeight;\n    this.generateGradient();\n  },\n  draw: function draw() {\n    this.ctx.beginPath();\n    this.ctx.fillStyle = this.gradient;\n    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n    this.ctx.closePath();\n    this.ctx.beginPath();\n    this.ctx.fillStyle = \"red\";\n    this.ctx.arc(this.mouse.x, this.mouse.y, settings_1.settings.bubble.radius.max, 0, 2 * Math.PI);\n    this.ctx.fill();\n    this.ctx.closePath();\n    return this;\n  },\n  addEventListeners: function addEventListeners() {\n    var _this = this;\n\n    window.addEventListener('resize', function () {\n      _this.resizeCanvas();\n    });\n    this.canvas.addEventListener('mousemove', function (event) {\n      _this.mouse.y = event.y - _this.canvas.getBoundingClientRect().y + parseInt(getComputedStyle(_this.canvas).borderWidth);\n      _this.mouse.x = event.x - _this.canvas.getBoundingClientRect().x + parseInt(getComputedStyle(_this.canvas).borderWidth);\n    });\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ0MsZ0JBQWdCLENBQUNKLEtBQUksQ0FBQ3BDLE1BQU4sQ0FBaEIsQ0FBOEJ5QyxXQUEvQixDQUF6RTtBQUNBTCxXQUFJLENBQUNyQyxLQUFMLENBQVc0QixDQUFYLEdBQWVVLEtBQUssQ0FBQ1YsQ0FBTixHQUFVUyxLQUFJLENBQUNwQyxNQUFMLENBQVlzQyxxQkFBWixHQUFvQ1gsQ0FBOUMsR0FBa0RZLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUNKLEtBQUksQ0FBQ3BDLE1BQU4sQ0FBaEIsQ0FBOEJ5QyxXQUEvQixDQUF6RTtBQUNILEtBSEQ7QUFJSDtBQTVDZ0IsQ0FBUiIsInNvdXJjZXMiOlsid2VicGFjazovL2J1YmJsZS1hcXVhcml1bS8uL3NyYy9qcy9jYW52YXMudHM/NmJkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhbnZhcyA9e1xyXG4gICAgaW5pdChtb3VzZTp7eDogbnVtYmVyICx5OiBudW1iZXJ9KXtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteS1jYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudFxyXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB0aGlzLm1vdXNlID0gbW91c2U7XHJcbiAgICAgICAgdGhpcy5yZXNpemVDYW52YXMoKTtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUdyYWRpZW50KCk7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgZ2VuZXJhdGVHcmFkaWVudCgpe1xyXG4gICAgICAgIHRoaXMuZ3JhZGllbnQgPSB0aGlzLmN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLDAsdGhpcy5jYW52YXMud2lkdGgsdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNldHRpbmdzLmdyYWRpZW50Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgLy8gdG8gZG9cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ncmFkaWVudC5hZGRDb2xvclN0b3AoMCxzZXR0aW5ncy5ncmFkaWVudFswXSk7XHJcbiAgICAgICAgdGhpcy5ncmFkaWVudC5hZGRDb2xvclN0b3AoMSxzZXR0aW5ncy5ncmFkaWVudFsxXSk7XHJcbiAgICB9LFxyXG4gICAgcmVzaXplQ2FudmFzKCl7XHJcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIHNldHRpbmdzLmNhbnZhc1JhdGlvV2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICogc2V0dGluZ3MuY2FudmFzUmF0aW9IZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUdyYWRpZW50KCk7XHJcbiAgICB9LFxyXG4gICAgZHJhdygpe1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuZ3JhZGllbnQ7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwwLHRoaXMuY2FudmFzLndpZHRoLHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcclxuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy5tb3VzZS54LHRoaXMubW91c2UueSwgc2V0dGluZ3MuYnViYmxlLnJhZGl1cy5tYXgsIDAsIDIqTWF0aC5QSSk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCl7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZXNpemVDYW52YXMoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsKGV2ZW50Ok1vdXNlRXZlbnQpPT57XHJcbiAgICAgICAgICAgIHRoaXMubW91c2UueSA9IGV2ZW50LnkgLSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55ICsgcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmNhbnZhcykuYm9yZGVyV2lkdGgpO1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlLnggPSBldmVudC54IC0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueCArIHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUodGhpcy5jYW52YXMpLmJvcmRlcldpZHRoKTtcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxufTsiXSwibmFtZXMiOlsiZXhwb3J0cyIsImluaXQiLCJtb3VzZSIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwicmVzaXplQ2FudmFzIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJnZW5lcmF0ZUdyYWRpZW50IiwiZHJhdyIsImdyYWRpZW50IiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJ3aWR0aCIsImhlaWdodCIsImkiLCJzZXR0aW5nc18xIiwibGVuZ3RoIiwiYWRkQ29sb3JTdG9wIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImNhbnZhc1JhdGlvV2lkdGgiLCJpbm5lckhlaWdodCIsImNhbnZhc1JhdGlvSGVpZ2h0IiwiYmVnaW5QYXRoIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJjbG9zZVBhdGgiLCJhcmMiLCJ4IiwieSIsImJ1YmJsZSIsInJhZGl1cyIsIm1heCIsIk1hdGgiLCJQSSIsImZpbGwiLCJhZGRFdmVudExpc3RlbmVyIiwiX3RoaXMiLCJldmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcnNlSW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImJvcmRlcldpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/canvas.ts\n");

/***/ }),

/***/ "./src/js/helpers/math.ts":
/*!********************************!*\
  !*** ./src/js/helpers/math.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.random = void 0;\n\nfunction random(min, max, ceil) {\n  if (ceil === void 0) {\n    ceil = true;\n  }\n\n  if (ceil) {\n    return Math.ceil(min + Math.random() * (max - min));\n  }\n\n  return Math.floor(min + Math.random() * (max - min));\n}\n\nexports.random = random;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaGVscGVycy9tYXRoLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsU0FBZ0JBLE1BQWhCLENBQXVCQyxHQUF2QixFQUFvQ0MsR0FBcEMsRUFBaURDLElBQWpELEVBQXFFO0FBQXBCO0FBQUFBO0FBQW9COztBQUNqRSxNQUFJQSxJQUFKLEVBQVM7QUFDTCxXQUFPQyxJQUFJLENBQUNELElBQUwsQ0FBVUYsR0FBRyxHQUFHRyxJQUFJLENBQUNKLE1BQUwsTUFBZ0JFLEdBQUcsR0FBR0QsR0FBdEIsQ0FBaEIsQ0FBUDtBQUNIOztBQUNELFNBQU9HLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixHQUFHLEdBQUdHLElBQUksQ0FBQ0osTUFBTCxNQUFnQkUsR0FBRyxHQUFHRCxHQUF0QixDQUFqQixDQUFQO0FBQ0g7O0FBTERLLGNBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnViYmxlLWFxdWFyaXVtLy4vc3JjL2pzL2hlbHBlcnMvbWF0aC50cz9jMjI4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiByYW5kb20obWluOiBudW1iZXIsIG1heDogbnVtYmVyLCBjZWlsOiBib29sZWFuID0gdHJ1ZSl7XHJcbiAgICBpZiAoY2VpbCl7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChtaW4gKyBNYXRoLnJhbmRvbSgpICoobWF4IC0gbWluKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihtaW4gKyBNYXRoLnJhbmRvbSgpICoobWF4IC0gbWluKSk7XHJcbn0iXSwibmFtZXMiOlsicmFuZG9tIiwibWluIiwibWF4IiwiY2VpbCIsIk1hdGgiLCJmbG9vciIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/helpers/math.ts\n");

/***/ }),

/***/ "./src/js/main.ts":
/*!************************!*\
  !*** ./src/js/main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar canvas_1 = __webpack_require__(/*! ./canvas */ \"./src/js/canvas.ts\");\n\nvar animation_1 = __webpack_require__(/*! ./animation */ \"./src/js/animation.ts\");\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/js/settings.ts\");\n\nvar Bubble_1 = __webpack_require__(/*! ./Bubble */ \"./src/js/Bubble.ts\");\n\nvar app = {\n  init: function init() {\n    this.bubbles = [];\n    this.mouse = {\n      x: 0,\n      y: 0\n    };\n    this.canvasElement = document.getElementById(\"my-canvas\");\n    this.ctx = this.canvasElement.getContext('2d');\n    this.canvas = canvas_1.canvas.init(this.mouse);\n    this.loadBubbles();\n    this.animation = animation_1.animation.init(this.canvas, this.bubbles);\n  },\n  loadBubbles: function loadBubbles() {\n    for (var i = 0; i < settings_1.settings.bubble.maxCount; i++) {\n      this.bubbles.push(new Bubble_1.Bubble(this.ctx, this.canvas, this.mouse));\n    }\n  }\n};\napp.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFFO0FBQ1RDLE1BQUksRUFBSjtBQUNJLFNBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQUNDLE9BQUMsRUFBQyxDQUFIO0FBQUtDLE9BQUMsRUFBQztBQUFQLEtBQWI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBckI7QUFDQSxTQUFLQyxHQUFMLEdBQVcsS0FBS0gsYUFBTCxDQUFtQkksVUFBbkIsQ0FBOEIsSUFBOUIsQ0FBWDtBQUNBLFNBQUtDLE1BQUwsR0FBY0MsZ0JBQU9YLElBQVAsQ0FBWSxLQUFLRSxLQUFqQixDQUFkO0FBQ0EsU0FBS1UsV0FBTDtBQUNBLFNBQUtDLFNBQUwsR0FBaUJDLHNCQUFVZCxJQUFWLENBQWUsS0FBS1UsTUFBcEIsRUFBNEIsS0FBS1QsT0FBakMsQ0FBakI7QUFDSCxHQVRRO0FBVVRXLGFBQVc7QUFDUCxTQUFLLElBQUlHLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdDLG9CQUFTQyxNQUFULENBQWdCQyxRQUFwQyxFQUE4Q0gsQ0FBQyxFQUEvQyxFQUFrRDtBQUM5QyxXQUFLZCxPQUFMLENBQWFrQixJQUFiLENBQWtCLElBQUlDLGVBQUosQ0FBVyxLQUFLWixHQUFoQixFQUFvQixLQUFLRSxNQUF6QixFQUFnQyxLQUFLUixLQUFyQyxDQUFsQjtBQUNIO0FBQ0o7QUFkUSxDQUFYO0FBaUJBSCxHQUFHLENBQUNDLElBQUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idWJibGUtYXF1YXJpdW0vLi9zcmMvanMvbWFpbi50cz80YjcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y2FudmFzfSBmcm9tIFwiLi9jYW52YXNcIjtcclxuaW1wb3J0IHthbmltYXRpb259IGZyb20gXCIuL2FuaW1hdGlvblwiO1xyXG5pbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xyXG5pbXBvcnQge0J1YmJsZX0gZnJvbSBcIi4vQnViYmxlXCI7XHJcblxyXG5jb25zdCBhcHAgPXtcclxuICBpbml0KCl7XHJcbiAgICAgIHRoaXMuYnViYmxlcyA9IFtdO1xyXG4gICAgICB0aGlzLm1vdXNlID0ge3g6MCx5OjB9O1xyXG4gICAgICB0aGlzLmNhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15LWNhbnZhc1wiKSBhcyBIVE1MQ2FudmFzRWxlbWVudFxyXG4gICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcy5pbml0KHRoaXMubW91c2UpO1xyXG4gICAgICB0aGlzLmxvYWRCdWJibGVzKCk7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uLmluaXQodGhpcy5jYW52YXMsIHRoaXMuYnViYmxlcyk7XHJcbiAgfSxcclxuICBsb2FkQnViYmxlcygpe1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNldHRpbmdzLmJ1YmJsZS5tYXhDb3VudDsgaSsrKXtcclxuICAgICAgICAgIHRoaXMuYnViYmxlcy5wdXNoKG5ldyBCdWJibGUodGhpcy5jdHgsdGhpcy5jYW52YXMsdGhpcy5tb3VzZSkpO1xyXG4gICAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuYXBwLmluaXQoKTsiXSwibmFtZXMiOlsiYXBwIiwiaW5pdCIsImJ1YmJsZXMiLCJtb3VzZSIsIngiLCJ5IiwiY2FudmFzRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiY2FudmFzIiwiY2FudmFzXzEiLCJsb2FkQnViYmxlcyIsImFuaW1hdGlvbiIsImFuaW1hdGlvbl8xIiwiaSIsInNldHRpbmdzXzEiLCJidWJibGUiLCJtYXhDb3VudCIsInB1c2giLCJCdWJibGVfMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/main.ts\n");

/***/ }),

/***/ "./src/js/settings.ts":
/*!****************************!*\
  !*** ./src/js/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  canvasRatioWidth: 0.8,\n  canvasRatioHeight: 0.6,\n  gradient: [\"hsl(165, 19%, 40%)\", \"hsl(133, 18%, 59%)\"],\n  bubble: {\n    radius: {\n      min: 10,\n      max: 30\n    },\n    speed: {\n      x: {\n        min: -2,\n        max: 2\n      },\n      y: {\n        min: 3,\n        max: 7\n      }\n    },\n    maxCount: 1,\n    colors: [\"hsl(201, 20%, 23%)\", \"hsl(186, 21%, 26%)\", \"hsl(165, 19%, 40%)\", \"hsl(133, 18%, 59%)\", \"hsl(97, 13%, 80%)\"]\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFhQSxnQkFBQUEsR0FBVztBQUNwQkMsa0JBQWdCLEVBQUUsR0FERTtBQUVwQkMsbUJBQWlCLEVBQUUsR0FGQztBQUdwQkMsVUFBUSxFQUFDLENBQUMsb0JBQUQsRUFBc0Isb0JBQXRCLENBSFc7QUFJcEJDLFFBQU0sRUFBQztBQUNIQyxVQUFNLEVBQUM7QUFBQ0MsU0FBRyxFQUFFLEVBQU47QUFBVUMsU0FBRyxFQUFFO0FBQWYsS0FESjtBQUVIQyxTQUFLLEVBQUM7QUFBQ0MsT0FBQyxFQUFDO0FBQUNILFdBQUcsRUFBRSxDQUFDLENBQVA7QUFBVUMsV0FBRyxFQUFFO0FBQWYsT0FBSDtBQUFxQkcsT0FBQyxFQUFDO0FBQUNKLFdBQUcsRUFBRSxDQUFOO0FBQVNDLFdBQUcsRUFBRTtBQUFkO0FBQXZCLEtBRkg7QUFHSEksWUFBUSxFQUFFLENBSFA7QUFJSEMsVUFBTSxFQUFFLENBQUMsb0JBQUQsRUFBc0Isb0JBQXRCLEVBQTJDLG9CQUEzQyxFQUFnRSxvQkFBaEUsRUFBcUYsbUJBQXJGO0FBSkw7QUFKYSxDQUFYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnViYmxlLWFxdWFyaXVtLy4vc3JjL2pzL3NldHRpbmdzLnRzP2M0MjEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgY2FudmFzUmF0aW9XaWR0aDogMC44LFxyXG4gICAgY2FudmFzUmF0aW9IZWlnaHQ6IDAuNixcclxuICAgIGdyYWRpZW50OltcImhzbCgxNjUsIDE5JSwgNDAlKVwiLFwiaHNsKDEzMywgMTglLCA1OSUpXCJdLFxyXG4gICAgYnViYmxlOntcclxuICAgICAgICByYWRpdXM6e21pbjogMTAsIG1heDogMzB9LFxyXG4gICAgICAgIHNwZWVkOnt4OnttaW46IC0yLCBtYXg6IDJ9LHk6e21pbjogMywgbWF4OiA3fX0sXHJcbiAgICAgICAgbWF4Q291bnQ6IDEsXHJcbiAgICAgICAgY29sb3JzOiBbXCJoc2woMjAxLCAyMCUsIDIzJSlcIixcImhzbCgxODYsIDIxJSwgMjYlKVwiLFwiaHNsKDE2NSwgMTklLCA0MCUpXCIsXCJoc2woMTMzLCAxOCUsIDU5JSlcIixcImhzbCg5NywgMTMlLCA4MCUpXCJdLFxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImV4cG9ydHMiLCJjYW52YXNSYXRpb1dpZHRoIiwiY2FudmFzUmF0aW9IZWlnaHQiLCJncmFkaWVudCIsImJ1YmJsZSIsInJhZGl1cyIsIm1pbiIsIm1heCIsInNwZWVkIiwieCIsInkiLCJtYXhDb3VudCIsImNvbG9ycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/settings.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnViYmxlLWFxdWFyaXVtLy4vc3JjL3Njc3MvbWFpbi5zY3NzP2Y3ZTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbubble_aquarium"] = self["webpackChunkbubble_aquarium"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/js/main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;