const GuessingGame = require('../src/guessing-game.js')

describe('GuessingGame', () => {
describe('#guess', () => {

    it('should guess number 409 with max value 4048', () => {
        const number = 409;
        const game = new GuessingGame();
        game.setRange(0, 4048)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 279 with max value 3445', () => {
        const number = 279;
        const game = new GuessingGame();
        game.setRange(0, 3445)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 598 with max value 2574', () => {
        const number = 598;
        const game = new GuessingGame();
        game.setRange(0, 2574)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 986 with max value 3678', () => {
        const number = 986;
        const game = new GuessingGame();
        game.setRange(0, 3678)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 286 with max value 1501', () => {
        const number = 286;
        const game = new GuessingGame();
        game.setRange(0, 1501)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 598 with max value 3183', () => {
        const number = 598;
        const game = new GuessingGame();
        game.setRange(0, 3183)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 747 with max value 810', () => {
        const number = 747;
        const game = new GuessingGame();
        game.setRange(0, 810)

        let result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 399 with max value 7972', () => {
        const number = 399;
        const game = new GuessingGame();
        game.setRange(0, 7972)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 403 with max value 9367', () => {
        const number = 403;
        const game = new GuessingGame();
        game.setRange(0, 9367)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 671 with max value 7340', () => {
        const number = 671;
        const game = new GuessingGame();
        game.setRange(0, 7340)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 519 with max value 3428', () => {
        const number = 519;
        const game = new GuessingGame();
        game.setRange(0, 3428)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 18 with max value 5442', () => {
        const number = 18;
        const game = new GuessingGame();
        game.setRange(0, 5442)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 819 with max value 6018', () => {
        const number = 819;
        const game = new GuessingGame();
        game.setRange(0, 6018)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 521 with max value 1888', () => {
        const number = 521;
        const game = new GuessingGame();
        game.setRange(0, 1888)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 3 with max value 8095', () => {
        const number = 3;
        const game = new GuessingGame();
        game.setRange(0, 8095)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 1 with max value 5263', () => {
        const number = 1;
        const game = new GuessingGame();
        game.setRange(0, 5263)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 47 with max value 1138', () => {
        const number = 47;
        const game = new GuessingGame();
        game.setRange(0, 1138)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 435 with max value 2570', () => {
        const number = 435;
        const game = new GuessingGame();
        game.setRange(0, 2570)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 472 with max value 9760', () => {
        const number = 472;
        const game = new GuessingGame();
        game.setRange(0, 9760)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 586 with max value 1886', () => {
        const number = 586;
        const game = new GuessingGame();
        game.setRange(0, 1886)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 554 with max value 7340', () => {
        const number = 554;
        const game = new GuessingGame();
        game.setRange(0, 7340)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 648 with max value 4010', () => {
        const number = 648;
        const game = new GuessingGame();
        game.setRange(0, 4010)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 281 with max value 496', () => {
        const number = 281;
        const game = new GuessingGame();
        game.setRange(0, 496)

        let result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 212 with max value 8060', () => {
        const number = 212;
        const game = new GuessingGame();
        game.setRange(0, 8060)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 190 with max value 8349', () => {
        const number = 190;
        const game = new GuessingGame();
        game.setRange(0, 8349)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 987 with max value 7393', () => {
        const number = 987;
        const game = new GuessingGame();
        game.setRange(0, 7393)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 444 with max value 6773', () => {
        const number = 444;
        const game = new GuessingGame();
        game.setRange(0, 6773)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 517 with max value 941', () => {
        const number = 517;
        const game = new GuessingGame();
        game.setRange(0, 941)

        let result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 145 with max value 6545', () => {
        const number = 145;
        const game = new GuessingGame();
        game.setRange(0, 6545)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 162 with max value 8308', () => {
        const number = 162;
        const game = new GuessingGame();
        game.setRange(0, 8308)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 831 with max value 8644', () => {
        const number = 831;
        const game = new GuessingGame();
        game.setRange(0, 8644)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 846 with max value 7915', () => {
        const number = 846;
        const game = new GuessingGame();
        game.setRange(0, 7915)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 200 with max value 4409', () => {
        const number = 200;
        const game = new GuessingGame();
        game.setRange(0, 4409)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 42 with max value 8851', () => {
        const number = 42;
        const game = new GuessingGame();
        game.setRange(0, 8851)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 678 with max value 9615', () => {
        const number = 678;
        const game = new GuessingGame();
        game.setRange(0, 9615)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 600 with max value 4063', () => {
        const number = 600;
        const game = new GuessingGame();
        game.setRange(0, 4063)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 427 with max value 7404', () => {
        const number = 427;
        const game = new GuessingGame();
        game.setRange(0, 7404)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 163 with max value 2734', () => {
        const number = 163;
        const game = new GuessingGame();
        game.setRange(0, 2734)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 118 with max value 6003', () => {
        const number = 118;
        const game = new GuessingGame();
        game.setRange(0, 6003)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 792 with max value 2478', () => {
        const number = 792;
        const game = new GuessingGame();
        game.setRange(0, 2478)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 912 with max value 1721', () => {
        const number = 912;
        const game = new GuessingGame();
        game.setRange(0, 1721)

        let result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 405 with max value 8568', () => {
        const number = 405;
        const game = new GuessingGame();
        game.setRange(0, 8568)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 403 with max value 7439', () => {
        const number = 403;
        const game = new GuessingGame();
        game.setRange(0, 7439)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 180 with max value 4052', () => {
        const number = 180;
        const game = new GuessingGame();
        game.setRange(0, 4052)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 763 with max value 7310', () => {
        const number = 763;
        const game = new GuessingGame();
        game.setRange(0, 7310)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 446 with max value 6918', () => {
        const number = 446;
        const game = new GuessingGame();
        game.setRange(0, 6918)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 241 with max value 6068', () => {
        const number = 241;
        const game = new GuessingGame();
        game.setRange(0, 6068)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 812 with max value 9175', () => {
        const number = 812;
        const game = new GuessingGame();
        game.setRange(0, 9175)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 170 with max value 1251', () => {
        const number = 170;
        const game = new GuessingGame();
        game.setRange(0, 1251)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 247 with max value 3526', () => {
        const number = 247;
        const game = new GuessingGame();
        game.setRange(0, 3526)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 421 with max value 4350', () => {
        const number = 421;
        const game = new GuessingGame();
        game.setRange(0, 4350)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 359 with max value 385', () => {
        const number = 359;
        const game = new GuessingGame();
        game.setRange(0, 385)

        let result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 874 with max value 8502', () => {
        const number = 874;
        const game = new GuessingGame();
        game.setRange(0, 8502)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 745 with max value 2611', () => {
        const number = 745;
        const game = new GuessingGame();
        game.setRange(0, 2611)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 790 with max value 5484', () => {
        const number = 790;
        const game = new GuessingGame();
        game.setRange(0, 5484)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 903 with max value 5126', () => {
        const number = 903;
        const game = new GuessingGame();
        game.setRange(0, 5126)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 101 with max value 1179', () => {
        const number = 101;
        const game = new GuessingGame();
        game.setRange(0, 1179)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 231 with max value 9542', () => {
        const number = 231;
        const game = new GuessingGame();
        game.setRange(0, 9542)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 614 with max value 9078', () => {
        const number = 614;
        const game = new GuessingGame();
        game.setRange(0, 9078)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 73 with max value 8707', () => {
        const number = 73;
        const game = new GuessingGame();
        game.setRange(0, 8707)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 468 with max value 6418', () => {
        const number = 468;
        const game = new GuessingGame();
        game.setRange(0, 6418)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 253 with max value 6013', () => {
        const number = 253;
        const game = new GuessingGame();
        game.setRange(0, 6013)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 920 with max value 7149', () => {
        const number = 920;
        const game = new GuessingGame();
        game.setRange(0, 7149)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 50 with max value 4862', () => {
        const number = 50;
        const game = new GuessingGame();
        game.setRange(0, 4862)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 537 with max value 9772', () => {
        const number = 537;
        const game = new GuessingGame();
        game.setRange(0, 9772)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 616 with max value 6979', () => {
        const number = 616;
        const game = new GuessingGame();
        game.setRange(0, 6979)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 273 with max value 8613', () => {
        const number = 273;
        const game = new GuessingGame();
        game.setRange(0, 8613)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 48 with max value 6393', () => {
        const number = 48;
        const game = new GuessingGame();
        game.setRange(0, 6393)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 33 with max value 6562', () => {
        const number = 33;
        const game = new GuessingGame();
        game.setRange(0, 6562)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 135 with max value 6771', () => {
        const number = 135;
        const game = new GuessingGame();
        game.setRange(0, 6771)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 274 with max value 3500', () => {
        const number = 274;
        const game = new GuessingGame();
        game.setRange(0, 3500)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 302 with max value 3879', () => {
        const number = 302;
        const game = new GuessingGame();
        game.setRange(0, 3879)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 284 with max value 6042', () => {
        const number = 284;
        const game = new GuessingGame();
        game.setRange(0, 6042)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 218 with max value 6838', () => {
        const number = 218;
        const game = new GuessingGame();
        game.setRange(0, 6838)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 620 with max value 9963', () => {
        const number = 620;
        const game = new GuessingGame();
        game.setRange(0, 9963)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 94 with max value 1847', () => {
        const number = 94;
        const game = new GuessingGame();
        game.setRange(0, 1847)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 782 with max value 3198', () => {
        const number = 782;
        const game = new GuessingGame();
        game.setRange(0, 3198)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 101 with max value 4535', () => {
        const number = 101;
        const game = new GuessingGame();
        game.setRange(0, 4535)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 362 with max value 703', () => {
        const number = 362;
        const game = new GuessingGame();
        game.setRange(0, 703)

        let result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 281 with max value 4026', () => {
        const number = 281;
        const game = new GuessingGame();
        game.setRange(0, 4026)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 249 with max value 4952', () => {
        const number = 249;
        const game = new GuessingGame();
        game.setRange(0, 4952)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 589 with max value 1908', () => {
        const number = 589;
        const game = new GuessingGame();
        game.setRange(0, 1908)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 393 with max value 1041', () => {
        const number = 393;
        const game = new GuessingGame();
        game.setRange(0, 1041)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 260 with max value 2811', () => {
        const number = 260;
        const game = new GuessingGame();
        game.setRange(0, 2811)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 922 with max value 7856', () => {
        const number = 922;
        const game = new GuessingGame();
        game.setRange(0, 7856)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 488 with max value 5799', () => {
        const number = 488;
        const game = new GuessingGame();
        game.setRange(0, 5799)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 933 with max value 6655', () => {
        const number = 933;
        const game = new GuessingGame();
        game.setRange(0, 6655)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 365 with max value 7197', () => {
        const number = 365;
        const game = new GuessingGame();
        game.setRange(0, 7197)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 532 with max value 4852', () => {
        const number = 532;
        const game = new GuessingGame();
        game.setRange(0, 4852)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 62 with max value 5603', () => {
        const number = 62;
        const game = new GuessingGame();
        game.setRange(0, 5603)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 651 with max value 3952', () => {
        const number = 651;
        const game = new GuessingGame();
        game.setRange(0, 3952)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 648 with max value 845', () => {
        const number = 648;
        const game = new GuessingGame();
        game.setRange(0, 845)

        let result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 221 with max value 7553', () => {
        const number = 221;
        const game = new GuessingGame();
        game.setRange(0, 7553)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 552 with max value 7290', () => {
        const number = 552;
        const game = new GuessingGame();
        game.setRange(0, 7290)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 917 with max value 8542', () => {
        const number = 917;
        const game = new GuessingGame();
        game.setRange(0, 8542)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 481 with max value 6223', () => {
        const number = 481;
        const game = new GuessingGame();
        game.setRange(0, 6223)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 503 with max value 9653', () => {
        const number = 503;
        const game = new GuessingGame();
        game.setRange(0, 9653)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 426 with max value 2400', () => {
        const number = 426;
        const game = new GuessingGame();
        game.setRange(0, 2400)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 212 with max value 5125', () => {
        const number = 212;
        const game = new GuessingGame();
        game.setRange(0, 5125)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();

        expect(result).to.equal(number);
    });

    it('should guess number 998 with max value 6118', () => {
        const number = 998;
        const game = new GuessingGame();
        game.setRange(0, 6118)

        let result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.greater();
        result = game.guess();
        game.lower();
        result = game.guess();
        game.greater();
        result = game.guess();

        expect(result).to.equal(number);
    });
});
});
