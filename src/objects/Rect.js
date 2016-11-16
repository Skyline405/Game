import {GraphicObject} from './GraphicObject';


export class Rect extends GraphicObject {

	constructor(options){
		super(options);
	}

	draw(renderer){
		let ctx = renderer.ctx;
		let {x, y} = this.position;
		let [w, h] = this.size.toArray();
		ctx.fillRect(x,y,w,h);
		ctx.fill();
	}

}