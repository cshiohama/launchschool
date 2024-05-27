document.addEventListener('DOMContentLoaded', () => {
  const message = document.querySelector("#message");
  const spaces = document.querySelector("#spaces");
  const guesses = document.querySelector("#guesses");
  const apples = document.querySelector("#apples");
  const replay = document.querySelector("#replay");
  
  class Game {
    constructor() {
      this.incorrectGuesses = 0;
      this.guessed = [];
      this.allowedGuesses = 6;
      this.gameOver = false;
      this.word = randomWord();
      this.resetBlanks();
      this.resetApples();

      if (this.word) {
        console.log(this.word);
        this.createBlanks();
      } else {
        this.displayMessage('Sorry, you have run out of words!');
        spaces.textContent = '';
        guesses.textContent = '';
      }
    }

    displayMessage(msg) {
      message.textContent = msg;
    }

    resetBlanks() {
      spaces.textContent = '';
      let h2 = document.createElement('h2');
      h2.textContent = 'Word:';
      spaces.appendChild(h2);

      guesses.textContent = '';
      h2 = document.createElement('h2');
      h2.textContent = 'Guesses:';
      guesses.append(h2);
    }

    createBlanks() {
      for (let i = 0; i < this.word.length; i++) {
        spaces.appendChild(document.createElement('span'));
      }
    }

    guess(letter) {
      if (this.word.includes(letter)) {
        if (!this.guessed.includes(letter)) {
          this.addLetter(letter);
          this.guessed.push(letter);
          this.updateGuesses(letter);
        }
      } else {
        if (!this.guessed.includes(letter)) {
          this.guessed.push(letter);
          this.updateGuesses(letter);
          this.incorrectGuesses++;
          this.removeApple();
        }
      }

      if (!this.guessed.includes(letter)) {
        this.guessed.push(letter);
        this.updateGuesses(letter);
      }

      if (this.incorrectGuesses === this.allowedGuesses) {
        this.loseGame();
      }

      if (this.wordGuessed()) {
        this.winGame();
      }

    }

    resetApples() {
      apples.classList.remove(...apples.classList);
      apples.classList.add('guess_0');
    }

    removeApple() {
      let n = [...apples.classList][0];
      n = +n[n.length - 1] + 1;
      
      apples.classList.remove(...apples.classList);
      apples.classList.add(`guess_${n}`);
    }

    addLetter(letter) {
      for (let i = 0; i < this.word.length; i++) {
        if (this.word[i] === letter) {
          spaces.children[i + 1].textContent = letter.toUpperCase();
        }
      }
    }

    updateGuesses(letter) {
      let guess = document.createElement('span');
      guess.textContent = letter.toUpperCase();
      guesses.append(guess);
    }

    wordGuessed() {
      for (let letter of this.word) {
        if (!this.guessed.includes(letter)) {
          return false;
        }
      }

      return true;
    }

    loseGame() {
      this.gameOver = true;
      message.textContent = "Sorry, you're out of guesses!";
    }

    winGame() {
      this.gameOver = true;
      message.textContent = "You win!";
    }

  }

  let randomWord = (function () {
    let words = ['apple', 'banana', 'coconut'];
    
    return function () {
      if (words.length === 0) return null;
      let index = Math.floor(Math.random() * words.length);
      let [word] = words.splice(index, 1);
      return word;
    }
  })();

  document.getElementById('replay').addEventListener('click', event => {
    event.preventDefault();
    game = new Game();
  });

  document.addEventListener('keydown', event => {
    if (game.gameOver === false) {
      let letter = event.key;
      if (/[a-z]/.test(letter)) {
        game.guess(event.key);
      }
    }
  });
    
  let game = new Game();
});