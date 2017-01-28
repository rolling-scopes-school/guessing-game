class GuessingGame {
    constructor() {
      this.array = [];
      this.tmpPos = 0;
      this.currentPos = 0;
    }

    setRange(min, max) {
      do {
        this.array.push(min); // Fill array
        min++;
      } while (min != max);
      this.currentPos = (this.array.length - 1);
      this.tmpPos = this.currentPos / 2 ^ 0;
    }

    guess() {
      this.currentPos = this.currentPos - this.tmpPos;
      return this.currentPos;
    }

    lower() {
      if (this.tmpPos < 0) this.tmpPos = -this.tmpPos;
      this.tmpPos = this.CurrentBot / 2 ^ 0;
    }

    greater() {
      if (this.tmpPos > 0) this.tmpPos = -this.tmpPos;
      this.tmpPos = this.CurrentTop / 2 ^ 0;
    }
}

module.exports = GuessingGame;
