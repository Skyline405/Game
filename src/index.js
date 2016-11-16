
import {Game} from './Game';
import {Sprite} from './objects/Sprite';


export class App {

	constructor(){
		this.game = new Game({
			target: '#game',
			size: [480, 640]
		});
		this.scene = this.game.getScene();

		this.createBG();
		this.createBird();

		this.game.start();
	}

	createBG(){
		let backgroundImg = new Image();
		backgroundImg.src = 'resources/sprites/background.png';

		let background = new Sprite({
			image: backgroundImg,
			position: [0, 0],
			size: [144, 256],
			offset: [0, 0],
			scale: 2
		});
		this.scene.addObject(background);
	}

	createBird(){
		let birdImg = new Image();
		birdImg.src = 'resources/sprites/bird.png';

		let bird = new Sprite({
			image: birdImg,
			position: [50, 50],
			size: [17, 12],
			offset: [0, 0],
			scale: 2,
			animation: {
				frames: 3,
				duration: 5
			},
			update(delta){
				this.position.x += 50 * delta;
				if(this.position.x > 480){
					this.position.x = -17;
				}
			}
		});
		this.scene.addObject(bird);
	}

}


window.app = new App();