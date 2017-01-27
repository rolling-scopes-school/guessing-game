### Guessing game

---
⚠️ DO NOT SUBMIT PRS WITH SOLUTIONS TO THIS REPO ⚠️

### Description

Your task is to implement `GuessingGame` class

#### Methods:

##### `setRange(min, max)`
this method accepts min and max value of range of number to guess

##### `guess()`
this method returns solution candidate (you make an assumption based on range and previous assumptions)

##### `lower()`
this method is called if prev call of `guess()` returned number which is lower than answer

##### `greater()`
this method is called if prev call of `guess()` returned number which is greater than answer

Your implementation should use [binary search algorithm](https://en.wikipedia.org/wiki/Binary_search_algorithm) under the hood to pass all tests

### Prerequisites
* Install [nodejs](https://nodejs.org/en/) (>= v6.9.4)
* open bash in this folder
* `npm install`

### Run tests
```sh
npm test
```

### Run in browser
```sh
npm start
```

open http://localhost:8080

---

© [R1ZZU](https://github.com/R1ZZU)
