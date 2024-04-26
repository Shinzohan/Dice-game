function rollTheDice(){

  let diceNum1 = document.querySelector(".img1");
  let diceNum2 = document.querySelector(".img2");

  diceNum1.setAttribute("src", "dice.gif")
  diceNum2.setAttribute("src", "dice.gif")

  setTimeout(() => {
var randomNumber = Math.floor(Math.random() * 6) + 1;



diceNum1.setAttribute('src', 'dice' + randomNumber + '.png');



var randomNumber2 = Math.floor(Math.random() * 6) + 1;



diceNum2.setAttribute('src', 'dice' + randomNumber2 + '.png');

if(randomNumber > randomNumber2){
  document.querySelector("h1").innerHTML = " Player 1 is giga chad 💪"
}
else if(randomNumber2 > randomNumber){
  document.querySelector("h1").innerHTML = " Player 2 is  giga chad 💪 "

}

else{
  document.querySelector("h1").innerHTML = "DRAW 🍨"
}

}, 2500);

}
