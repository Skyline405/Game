
import {GraphicObject} from './GraphicObject';
import {Vector2} from '../Vector2';


export class Sprite extends GraphicObject {

	constructor(options){
		super(options);
		var { image, offset = [0,0], scale = [1,1], animation,  } = options;

		this.image = image;
		this.offset = Vector2.fromArray(offset);
		this.scale = scale;

		let { frames = 1, speed } = animation;
		this.animation = {
			frames: frames,
			speed: speed
		};

	}

	draw(renderer){
		let ctx = renderer.ctx;
		let [x,y] = this.position.toArray();
		let [dx,dy] = this.offset.toArray();
		let [w,h] = this.size.toArray();
		let [sw,sh] = this.scale;
		sh = sh || sw;
		ctx.drawImage(this.image, dx,dy, w,h, x,y, w*sw,h*sh);
	}

}