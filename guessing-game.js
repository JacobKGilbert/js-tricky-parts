function guessingGame() {
  const answer = Math.floor(Math.random() * 100)
  let guesses = 0
  let isWon = false

  return function (guess) {
    if (isWon === true) return 'The game is over, you already won!'

    guesses++

    if (guess === answer) {
      isWon = true
      return `You win! You found ${answer} in ${guesses} guesses.`
    }

    if (guess < answer) return `${guess} is too low!`
    if (guess > answer) return `${guess} is too high!`
  }
}

module.exports = { guessingGame };
