


export class Renderer {

	constructor({ size, target, bgColor = 'white' }){
		this.container = document.querySelector(target);
		this.canvas = document.createElement('canvas');
		this.container.appendChild(this.canvas);

		let [width, height] = size;
		this.canvas.width = width;
		this.canvas.height = height;
		this.canvas.style.backgroundColor = bgColor;

		this.ctx = this.canvas.getContext('2d');
	}

	get size(){
		return [this.canvas.width, this.canvas.height];
	}

	clear(){
		let [w, h] = this.size;
		this.ctx.clearRect(0,0,w,h);
	}

}