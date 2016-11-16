
import {Scene} from './Scene';


export class Game {

	isRunning = false;

	constructor(options){
		this.setScene(new Scene(options));
	}

	start(){
		this.isRunning = true;
		this.nextLoop(Date.now());
	}

	stop(){
		this.isRunning = false;
	}

	nextLoop(lastTime){
		if(!this.isRunning) return;

		let now = Date.now();
		let deltaTime = (now - lastTime) / 1000;
		lastTime = now;

		this.scene.update(deltaTime);
		this.scene.draw();

		requestAnimationFrame( time => this.nextLoop(lastTime) );
	}

	setScene(scene){
		this.scene = scene;
	}

	getScene(){
		return this.scene;
	}

}