
import {Renderer} from './Renderer';


export class Scene {

	objects = [];

	constructor(options){
		this.setRenderer(new Renderer(options));
	}

	setRenderer(renderer){
		this.renderer = renderer;
	}

	getRenderer(){
		return this.renderer;
	}

	update(deltaTime){
		this.objects.forEach( object => object.update(deltaTime) );
	}

	draw(){
		this.renderer.clear();
		this.objects.forEach( object => object.draw(this.getRenderer()) );
	}

	addObject(object){
		this.objects.push(object);
	}

	removeObject(object){
		let index = this.objects.indexOf(object);
		this.objects.splice(index, 1);
	}

}