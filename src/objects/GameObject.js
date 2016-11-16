
import {Vector2} from '../Vector2';


export class GameObject {

	constructor({ position, size, update = function(){} }){
		this.position = Vector2.fromArray(position);
		this.size = Vector2.fromArray(size);
		this.onUpdate = update.bind(this);
	}

	update(deltaTime){
		this.onUpdate(deltaTime);
	}

	setScene(scene){
		scene.addObject(this);
	}

}