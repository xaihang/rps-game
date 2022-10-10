var wins = 0;
var loses = 0;
var draws = 0;

// options for computer to select 
var options = ["Rock", "Paper", "Scissor"]

//options for human to select 
var playGame = function () {
    var humanChoice = window.prompt("Enter Rock, Paper, or Scissor");

    if (!humanChoice) {
        return;
    }


    //random selection for computer
    var index = Math.floor(Math.random() * options.length);
    var computerChoice = options[index];

    window.alert("Computer chose: " + computerChoice);

    //make it a draws if human and computer choices are the same
    if (humanChoice === computerChoice) {
        draws++;
        window.alert("It's a draw!");

        //check every win condition for human
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissor") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissor" && computerChoice === "Paper")
    ) {
        wins++;
        window.alert("You win!");

        //if above conditions failed, default human lose
    } else {
        loses++;
        window.alert("You lost!");
    }

    //score keeper for human vs computer
    window.alert(
        "Stats:\nWins: " + wins + "\nLoses: " + loses + "\nDraws: " + draws
    );

    //asking if human wants to play again
    var playAgain = window.confirm("Do you want to play again?");

    //if human press yes/ok, run the function again
    if (playAgain) {
        playGame();
    };

};

//run the game for the first time
playGame();

