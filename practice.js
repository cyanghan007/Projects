let rating = 2 

if (rating === 3) {
    console.log('You Are a Superstar');
}
else if (rating === 2) {
    console.log("Not it");
}
else if (rating === 1) {
    console.log('Winner Winner');
}
else {
    console.log('Invalid')
}

let highScore = 1450;
let userScore = 1445;

if(userScore >= highScore) {
    console.log(`Congrats, you have the new high score of ${userScore}`);
    highScore = userScore;
}
else {
    console.log(`Good try. Your score of ${userScore} did not overtake the high score of ${highScore}`);
}