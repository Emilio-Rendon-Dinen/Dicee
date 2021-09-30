var lista = [0,"dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
var rnd1 = Math.floor(Math.random() * 6) + 1;
var rnd2 = Math.floor(Math.random() * 6) + 1;

function imagen1(){
  document.querySelectorAll("img")[0].setAttribute("src", "images/" + lista[rnd1]);
}
function imagen2(){
  document.querySelectorAll("img")[1].setAttribute("src", "images/" + lista[rnd2]);
}

function ganador (){
  if (rnd1 > rnd2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (rnd2 > rnd1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}

function mostrar(){
  imagen1();
  imagen2();
  ganador();
}
 document.onload = mostrar();
