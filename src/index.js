
import {Game} from './Game';
import {Sprite} from './objects/Sprite';


export class App {

	constructor(){
		this.game = new Game({
			target: '#game',
			size: [650, 650]
		});
		this.scene = this.game.getScene();

		let image = new Image();
		image.src = 'resources/sprites/sprites.png';

		let rect = new Sprite({
			image: image,
			position: [50, 50],
			size: [17, 12],
			offset: [264, 64],
			scale: [2],
			update(delta){
				this.position.x += 30 * delta;
				if(this.position.x > 650){
					this.position.x = -17;
				}
			}
		});
		this.scene.addObject(rect);

		this.game.start();
	}

}


window.app = new App();