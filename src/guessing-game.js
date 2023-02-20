class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.min = min + 1;
    this.max = max;
  }

  guess() {
    this.res = Math.floor((this.min + this.max) / 2);
    if (this.min === this.max) return this.min;
    return this.res;
  }

  lower() {
    this.max = this.res;
    console.log(this.min, "", this.max);
  }

  greater() {
    this.min = this.res + 1;
    console.log(this.min, "", this.max);
  }
}

module.exports = GuessingGame;
