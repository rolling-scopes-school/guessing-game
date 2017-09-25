class GuessingGame {
    constructor() {
      this.minimal = 0;
      this.maximum = 0;
      this.mid = 0;
    }

    setRange(min, max) {
      this.minimal = min;
      this.maximum = max;
    }

    guess() {
      this.mid = Math.ceil((this.minimal + this.maximum) / 2);
      return this.mid;
    }

    lower() {
      this.maximum = this.mid;
    }

    greater() {
      this.minimal = this.mid;
    }
}

module.exports = GuessingGame;
