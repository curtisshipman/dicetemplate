var newDice = rollDice();
document.querySelector(".img1").setAttribute("src", newDice);
function rollDice() {
    var randomNumber = Math.ceil(Math.random() * 6);

    return randomNumber;
}
newDice1 = rollDice();
diceRoll1 = "./images/dice" + newDice1 + ".png";
document.querySelector(".img1").setAttribute("src", diceRoll1);
newDice2 = rollDice();
diceRoll2 = "./images/dice" + newDice2 + ".png";
document.querySelector(".img2").setAttribute("src", diceRoll2);

if (diceRoll1 === diceRoll2) {
    document.querySelector("h1").textContent = "Draw";
} else if (diceRoll1 > diceRoll2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
} else {
    document.querySelector("h1").textContent = "Player 2 Wins!";
}
