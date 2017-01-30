class GuessingGame {
    constructor() {
    	this.minValue = 0;
    	this.maxValue = 0;
    	this.midValue = 0;
    }

    setRange(min, max) {
    	this.minValue = min;
    	this.maxValue = max;
    }

    guess() {
    	this.midValue = Math.round((this.minValue + this.maxValue) / 2);
    	return this.midValue ;
    }

    lower() {
    	this.maxValue = this.guess();
    }

    greater() {
    	this.minValue = this.guess();
    }
}

module.exports = GuessingGame;
