var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomPosition1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll(".img1")[0].setAttribute("src", randomPosition1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomPosition2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomPosition2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🎈 Player 1 Win!";
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent = "Player 2 Win! 🎈";
}else{
    document.querySelector("h1").textContent = "😅! Draw"
}