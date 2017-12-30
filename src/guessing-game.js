class GuessingGame {
    constructor() {
        this.left = 0;
        this.right = 0;
        this.mid = 0;
    }

    setRange(min, max) {
        this.left = min;
        this.right = max;
    }

    guess() {
        return this.mid = Math.ceil(this.left + (this.right - this.left)/2);
    }

    lower() {
        this.setRange(this.left, this.mid);
    }

    greater() {
        this.setRange(this.mid, this.right);
    }
}

module.exports = GuessingGame;
