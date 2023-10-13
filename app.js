'use strict';
// Function to ask for the favorite game
function askFavGame() {
    let gameAnswer;
    do {
        gameAnswer = prompt('What is your favorite game?');
        if (gameAnswer === '') {
            alert('Please enter your Favorite game')
        }
        gameAnswer = prompt('Please enter your favorite game: ');
    }
    while (gameAnswer === "");
    document.write('User\'s favorite game is: ' + gameAnswer + " .");
    console.log(gameAnswer);
    return gameAnswer;
}
// Function to ask about the gaming system
function askSystem() {
    let consoleAnswer;
    do {
        consoleAnswer = prompt("What's your favorite gaming System?");
        if (consoleAnswer === '') {
            alert('Please enter your favorite gaming system.');
        }  
    }
    while (consoleAnswer === "");
    if(consoleAnswer.toLowerCase() === 'playstation') {
        let psAnswer = prompt(" Did you like the PS5? ");
        if (psAnswer.toLowerCase() === 'yes') {
            document.write("So do I! Welcome, friend!");
        } else if (psAnswer.toLowerCase() === 'no') {
            document.write(" BOO!!!!!!!!!!!");
        }
    } if(consoleAnswer.toLowerCase() === 'xbox') {
        document.write(" Hello, my nemesis. You may enter at your own risk! ");
    } else if (consoleAnswer.toLowerCase() === 'nintendo') {
        document.write(" Alright, move it along, Mario! ");
    }
    document.write(" User's favorite gaming system is: " + consoleAnswer + " .");
    console.log(consoleAnswer);   
    return consoleAnswer;
}
function giveRating() {
    // Ask for the user's rating
    let userNumber;
    do {
        userNumber = prompt('What would you rate Sonic? Choose a number between 1-5. 1 being the lowest and 5 being the highest.');
        userNumber = parseInt(userNumber);
    } while (isNaN(userNumber) || userNumber < 1 || userNumber > 5);

    // Display the images based on the rating
    for (let n = 1; n <= userNumber; n++) {
        document.write('<img src="shadow.jpg">');
    }
    console.log(userNumber);
    return userNumber;
}

giveRating();
askFavGame();
askSystem();

