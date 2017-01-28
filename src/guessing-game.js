class GuessingGame {
    constructor() {
      this.min = 0;
      this.max = 0;
      this.current = 0;
    }

    setRange(min, max) {
      this.min = 0;
      this.max = max;
    }

    guess() {
      this.current = Math.ceil((this.min + this.max) / 2);
      return this.current; //253
    }

    lower() {
      this.max = this.current; //410
    }

    greater() {
      this.min = this.current; //379
    }
}

module.exports = GuessingGame;
