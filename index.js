const GuessingGame = require('./src/guessing-game.js');

window.game = new GuessingGame();

class GuessingGame {
constructor(minValue, maxValue){
    this.minValue;
    this.maxValue;
}
setRange(min,max){
    this.minValue=min;
    this.maxValue = max;
}
guess(){
    return Math.round((this.maxValue - this.minValue)/2);
}
lower() {
    this.maxValue = Math.round((this.maxValue - this.minValue)/2);
}
greater(){
    this.minValue = Math.round((this.maxValue-this.minValue)/2);
}
}
module.exports = GuessingGame;
