// WEEK 11 HANGMAN CONSTRUCTOR FILE
// letter.js
// Controls whether or not a letter appears as a "_" or as itself on-screen

// Letter is a constructor, a function that takes the input of letter
var Letter = function(letter) {
    //take the letter the user guessed and make it lower case
    this.guess = letter.toLowerCase();
    // create a boolean variable for if the letter guessed is correct or not
    this.correctGuess = false;
    // a function to decide to show the letter or a blank (right or wrong guess)
    this.letterShow = function() {
            // if correct guess is true, return the letter the user guessed
            if(this.correctGuess) {
                    return this.letter;
            // if correct guess is false
          } else {
                    // show the underscore
                    return "_ ";
          }
          }
    }
}

// export function so I can use it in the word.js files
exports.Letter = Letter;