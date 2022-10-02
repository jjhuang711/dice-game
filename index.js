var rollButton = document.querySelector("button");
rollButton.addEventListener("click", rollDice);
rollButton.addEventListener("mousedown", function () {
  rollButton.style.transform = "translateY(10px)";
  rollButton.style.boxShadow = "0px 5px 10px #132e24";
});

function rollDice() {
  var h1 = document.querySelector("h1");
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var image1 = "images/dice" + randomNumber1 + ".png";
  var image2 = "images/dice" + randomNumber2 + ".png";

  document.querySelector(".img1").setAttribute("src", image1);
  document.querySelector(".img2").setAttribute("src", image2);

  // Can use the following too but it is not useful here.

  // var arrayOfImages = ['images/dice1.png',
  // 'images/dice2.png',
  // 'images/dice3.png',
  // 'images/dice4.png',
  // 'images/dice5.png',
  // 'images/dice6.png'];

  //  var x = document.querySelector('.img1').src= arrayOfImages[randomNumber1];

  if (randomNumber1 > randomNumber2) {
    h1.innerHTML = "🚩 Player 1 wins!";
  } else if (randomNumber1 < randomNumber2) {
    h1.innerHTML = "Player 2 wins! 🚩";
  } else {
    h1.textContent = "Draw!";
  }

  rollButton.style.transform = "translateY(0px)";
  rollButton.style.boxShadow = "0 15px 0 #2b6652";
}
