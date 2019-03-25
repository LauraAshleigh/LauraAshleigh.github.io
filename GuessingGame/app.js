var guess, theNumber, message, triesLeft, playAgain;

window.onload = function(){
    document.getElementById('txt-guess').focus();
    document.getElementById('txt-guess').select();
};

theNumber = 0;
newGame();

function newGame()
{
    document.getElementById('txt-guess').textContent = "";
    theNumber = Math.floor(Math.random() * 100) + 1;
    document.querySelector('.lbl-tries').textContent = 'You have 7 tries remaining';
    document.querySelector('#lbl-guess').textContent = 'Guess a number between 1 and 100:';
    document.querySelector('.lbl-output').textContent = 'Enter a number above, and click \'Guess\'.';
    triesLeft = 7;   
}

function checkGuess()
{
    // Gets the user's guess
    guess = document.getElementById('txt-guess').value;
    
    message = "";
    try
        {
            // Count this as one try
            triesLeft --;

            //Too high
            if(guess > theNumber)
                {
                    message = guess + ' was too high. Guess again.';
                    document.querySelector('.lbl-output').textContent = message;
                    document.querySelector('.lbl-tries').textContent = 'You have ' + triesLeft + ' remaining';
                }
            else if(guess < theNumber)
                {
                    message = guess + ' was too low. Guess again.';
                    document.querySelector('.lbl-output').textContent = message;
                    document.querySelector('.lbl-tries').textContent = 'You have ' + triesLeft + ' remaining';
                }
            else
                {
                    message = guess + ' was correct. You win! \nLet\'s play again!.';
                    document.querySelector('.lbl-output').textContent = message;
                    document.querySelector('.lbl-tries').textContent = 'You guessed in ' + (7 - triesLeft) + ' tries';
                    playAgain = confirm('Well done! Would you like to play again?')
                    if(playAgain == true)
                        {
                            newGame();   
                        }
                }

            if(triesLeft <= 0)
                {
                    playAgain = confirm('You ran out of tries. The number was ' + theNumber + '\nPlay again?');
                    if(playAgain == true)
                        {
                            newGame();
                        }
                }
        }
    catch(e)
        {
            document.querySelector('.lbl-output').textContent = 'Enter a whole number between 1 and 100.';
        }
    finally
        {
            document.getElementById('txt-guess').focus();
            document.getElementById('txt-guess').select();
        }
}

document.querySelector('.btn-guess').addEventListener('click', checkGuess);
document.getElementById('txt-guess').addEventListener('keyup', function(event){
    if(event.keyCode == 13)
        {
            event.preventDefault();
            checkGuess();
        }
});
