class GuessingGame {
    constructor() {
        this.minValue;
        this.maxValue;
    }

    setRange(min, max) {
        this.minVal = min;
        this.maxVal = max;
    }

    guess() {
        return Math.round((this.maxVal + this.minVal)/2);
    }

    lower() {
        this.maxVal = Math.round((this.maxVal + this.minVal)/2);
    }

    greater() {
        this.minVal = Math.round((this.maxVal+this.minVal)/2);
    }
}

module.exports = GuessingGame;
