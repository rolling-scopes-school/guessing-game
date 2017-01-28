class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.mid = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.mid = (this.min + (this.min + this.max)/2);
        return this.mid;
    }

    lower() {
        this.max = this.mid - 1;
    }

    greater() {
        this.min = this.mid + 1;
    }
}

module.exports = GuessingGame;
