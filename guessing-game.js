function guessingGame() {
    // set random number
    const answer = Math.floor(Math.random() * 100)
    let isOver = false;
    let guesses = 0;

    return function guess(num) {
        if (isOver) {
            return "Game over, you win!"
        }
        guesses++;
        if (num === answer) {
            isOver = true;
            // set it so that the grammar is correct on guess vs guesses
            const guess = guesses === 1 ? "guess" : "guesses"
            return `Win!  You found ${num} in ${guesses} ${guess}`
        }
        if (num < answer) {
            return `${num} is too low`
        }
        if (num > answer) {
            return `${num} is too high`
        }
    }
}

module.exports = { guessingGame };
