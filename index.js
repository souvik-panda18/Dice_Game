var randomNumber1= Math.floor(Math.random()*6)+
1;
var randomNumber2=Math.floor(Math.random()*6)+
1;



var randomDiceimage= "dice"+randomNumber1+".png";
var randomDiceimage1= "dice"+randomNumber2+".png";

var randomInput="images/"+randomDiceimage;
var randomInput1="images/"+randomDiceimage1;


var image1= document.querySelectorAll("img")[0];
var image2 =  document.querySelectorAll("img")[1];
image1.setAttribute("src",randomInput);
image2.setAttribute("src",randomInput1);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="player1Wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="player2Wins";
}
else if(randomNumber1=randomNumber2){
    document.querySelector("h1").innerHTML="its a Draw";
}