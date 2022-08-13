class GuessingGame {
	constructor() {
		this.max = 0
		this.min = 0
		this.prew = 0
	}
	setRange(min, max) {
		this.max = max;
		this.min = min;
	}

	guess() {
		return Math.round(this.min + ((this.max - this.min) / 2))
	}

	lower() {
		this.max = this.guess();
	}

	greater() {
		this.min = this.guess();
	}
}

module.exports = GuessingGame;

const game = new GuessingGame();
game.setRange(0, 3445)

game.lower();
game.lower();
game.lower();
game.greater();
game.lower();
game.greater();
game.lower();
game.lower();
game.greater();
game.lower();

console.log(game.guess())
console.log(game.max)
console.log(game.min)

