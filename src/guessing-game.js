class GuessingGame {
    constructor() {

    }

    setRange(min, max) {
        this.min = min
        this.max = max
    }

    guess() {
        return Math.floor((this.max + this.min) / 2)
    }

    lower() {
        this.max = Math.floor((this.max + this.min) / 2) + 1
    }

    greater() {
        this.min = Math.floor((this.max + this.min) / 2)
    }
}

module.exports = GuessingGame;
