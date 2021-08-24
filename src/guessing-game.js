class GuessingGame {
    constructor() {
        this.left = null;
        this.rigth = null;
        this.middle = null;

    }

    setRange(min, max) {
        this.left  = min;
        this.rigth = max;
    }

    guess() {
        let middle =  Math.floor( ( this.left + this.right ) / 2 ) + this.left;
        this.middle  = middle
        return middle
    }

    lower() {
        this.rigth = this.middle;
    }

    greater() {
        this.left =  this.middle;
    }
}

module.exports = GuessingGame;
