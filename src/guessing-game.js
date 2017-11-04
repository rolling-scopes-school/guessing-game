class GuessingGame {

    constructor() {}

    setRange(min, max) {
    	this.min = min;
    	this.max = max;
    }

    guess() {
    	return Math.ceil((this.max + this.min)/2);
    }

    lower() {
    	this.max = Math.ceil((this.max + this.min)/2);
    }

    greater() {
    	this.min = Math.ceil((this.max + this.min)/2);
    }
}

module.exports = GuessingGame;
