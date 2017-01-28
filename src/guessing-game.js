class GuessingGame {
    constructor() {
 		this.min = null;
 		this.max = null;
    }

    setRange(min, max) {
    	this.min = min;
    	this.max = max;
    }

    guess() {
    	return Math.ceil((this.min + this.max) / 2);
    }

    lower() {
    	this.max = this.guess();
    }

    greater() {
    	this.min = this.guess();
    }
}

module.exports = GuessingGame;
