


export class Vector2 {

	x = 0;
	y = 0;

	constructor(x = 0, y = 0){
		this.x = x;
		this.y = y;
	}

	add(vector){
		return new Vector2(this.x + vector.x, this.y + vector.y);
	}

	sub(vector){
		return new Vector2(this.x - vector.x, this.y - vector.y);
	}

	toArray(){
		return [this.x, this.y];
	}

	static fromArray(array){
		if(array instanceof Vector2){
			return array;
		}
		let [x, y] = array;
		return new Vector2(x, y);
	}

}