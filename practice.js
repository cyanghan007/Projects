//|| = or operater, for "or" statements only 1 side needs to be true for the code to mvoe on
// && = and operater, for "and" statements both sides need to be true for the code to work
// ! = Not operater, this returns true if the expressions is false
// if and else statements can only have 1 else statement inside the {brackets}. Else if can have as many as you want
// Operatrer precedence ((!) Not has a higher precednece than && and ||) && has a higher precedence than
//|| but these can be altered with ()//


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
