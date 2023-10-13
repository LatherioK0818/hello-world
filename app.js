'use strict';

// Function to ask for the favorite game
function askFavGame() {
    let gameAnswer = prompt('What is your favorite game?');
    document.write('User\'s favorite game is: ' + gameAnswer +" .");
    console.log(gameAnswer);
    if (gameAnswer === '') {
        gameAnswer = prompt('Please enter your favorite game: ');
    }
    return gameAnswer;
}

// Function to ask about the gaming system
function askSystem() {
    let consoleAnswer = prompt("What's your favorite gaming System?");
    document.write("User's favorite gaming system is: " + consoleAnswer +" .");
    
    if (consoleAnswer.toLowerCase() === 'playstation') {
        let psAnswer = prompt(" Did you like the PS5? ");
        if (psAnswer.toLowerCase() === 'yes') {
            document.write("So do I! Welcome, friend!");
        } else if (psAnswer.toLowerCase() === 'no') {
            document.write(" BOO!!!!!!!!!!!");
        }
    } else if (consoleAnswer.toLowerCase() === 'xbox') {
        document.write(" Hello, my nemesis. You may enter at your own risk! ");
    } else if (consoleAnswer.toLowerCase() === 'nintendo') {
        document.write(" Alright, move it along, Mario! ");
    }
    
    return consoleAnswer;
}

// Call the functions
askFavGame();
askSystem();

