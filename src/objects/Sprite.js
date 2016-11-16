
import {GraphicObject} from './GraphicObject';
import {Vector2} from '../Vector2';
import {Animation} from './Animation';


export class Sprite extends GraphicObject {

	frameIndex = 0;
	ticksCount = 0;

	constructor(options){
		super(options);
		var { image, offset = [0,0], scale = 1, animation = {frames: 1, duration: 0}  } = options;

		this.image = image;
		this.offset = Vector2.fromArray(offset);
		this.scale = scale;

		this.animation = animation;

	}

	update(deltaTime){
		super.update(deltaTime);

		this.ticksCount++;
		if (this.ticksCount > this.animation.duration) {
			this.ticksCount = 0;
			this.frameIndex++;
			if (this.frameIndex >= this.animation.frames) {
				this.frameIndex = 0;
			}
		}
	}

	draw(renderer){
		let ctx = renderer.ctx;
		let [x,y] = this.position.toArray();
		let [w,h] = this.size.toArray();

		let [dx,dy] = this.offset.toArray();
		let offset = dx + this.frameIndex * w;

		ctx.drawImage(this.image,
				offset, dy, // отступ от края спрайта
				w, h, // размеры спрайта
				x, y, // координаты на холсте
				w*this.scale, h*this.scale // масштабироание (растягивание)
		);
	}

}