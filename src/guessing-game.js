class GuessingGame {
    constructor() {
    	this.min = 0;
    	this.max = 0;
    	this.value = 0;
    	this.result = 0;
    }

    setRange(min, max) {
    	this.min = min;
    	this.max = max;
    	this.value = max;
    }

    guess() {
    	this.result = Math.ceil(this.min + (this.max - this.min)/2);
    	return this.result;
    }

    lower() {
    	this.max = this.result;
    }

    greater() {
    	this.min = this.result;
    }
}

module.exports = GuessingGame;
