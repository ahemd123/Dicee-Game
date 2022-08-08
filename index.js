
//window.onload(document.querySelector("h1").innerHTML = "Refresh Me");


var img1 = Math.ceil(Math.random()*6);
var img2 = Math.ceil(Math.random()*6);

document.querySelector(".img1").setAttribute("src","images/dice"+img1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+img2+".png");

if(img1 > img2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}else if(img2 > img1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
}



