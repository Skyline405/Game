
import {Game} from './Game';
import {Rect} from './objects/Rect';


export class App {

	constructor(){
		this.game = new Game({
			target: '#game',
			size: [650, 650]
		});
		this.scene = this.game.getScene();

		let rect = new Rect({
			position: [10, 200],
			size: [50, 50],
			update(delta){
				this.position.x += 50 * delta;
			}
		});
		this.scene.addObject(rect);

		this.game.start();
	}

}


window.app = new App();