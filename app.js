let maximum = parseInt(prompt("Enter a number"));

//This While loop is used to check if the user enters a valid number,if they enter 0 or something else,it won't continue forward with the game
while (isNaN(maximum) || maximum <= 0) {
    maximum = parseInt(prompt("Enter a valid number"));
}
//This part gives us a random number using the Math.random method,it floors it with the Math.floor method so the number doesn't end up with decimals
//the maximum variable is used to decide the range of the numbers,which the user has put in, for example "10",this will give us a range of numbers from (1-10)
//and the +1 is used to increment the random number by 1 so the range doesn't start from 0

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);
//The main part of the code,which the game basically functions of
let guess = prompt("Enter your guess(type 'Q' to quit)");
let attempt = 1;

while (guess !== targetNum) {

    if (guess === 'Q') break;
    guess = parseInt(guess);

    if (guess > targetNum) {
        attempt++;
        guess = parseInt(prompt("Too high,try again"))
    }
    else if (guess < targetNum) {
        attempt++;
        guess = parseInt(prompt("Too low,try again"))
    }
    else if (isNaN(guess) || guess <= 0) {
        guess = prompt("Wrong input,enter a number (or 'Q' to quit)")

    }

}

if (guess === 'Q') {
    console.log("You,Quit")
}
else {
    console.log("Congratulations,you got it!!!");
    console.log(`It took you ${attempt} guesses`);
}
