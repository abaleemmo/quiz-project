let bluePetalButton = document.querySelector(".q1-a1");
let yellowPetalButton = document.querySelector(".q1-a2");
let darkGreenStemButton = document.querySelector(".q2-a1");
let lightGreenStemButton = document.querySelector(".q2-a2");
let whiteFaceButton = document.querySelector(".q3-a1");
let lightBrownFaceButton = document.querySelector(".q3-a2");
let blackPotButton = document.querySelector(".q4-a1");
let brownPotButton = document.querySelector(".q4-a2");
let lightRedMouthButton = document.querySelector(".q5-a1");
let blackMouthButton = document.querySelector(".q5-a2");

let petalColor;
let stemColor;
let faceColor;
let mouthColor;

let mouth = document.querySelector(".flower__nose");
let stem = document.querySelector(".flower__stem");
let face = document.querySelector(".flower__head");
let pot = document.querySelector(".flower__pot");
let potShadow = document.querySelector(".flower__pot--shadow");
let potBottom = document.querySelector(".flower__pot--bottom");
let petals = document.querySelector(".flower__petal");


bluePetalButton.addEventListener("click", function(){
    petalColor = "Blue";
})
yellowPetalButton.addEventListener("click", function(){
    petalColor = "Yellow";
})


darkGreenStemButton.addEventListener("click", function(){
    stemColor = "Dark Green";
    stem.style.background = "darkgreen";
});
lightGreenStemButton.addEventListener("click", function(){
    stemColor = "Light Green";
    stem.style.background = "#51d691";
    leaves.style.background = "#51d691";
});


whiteFaceButton.addEventListener("click", function(){
    faceColor = "White";
    face.style.background = "lightyellow";
});
lightBrownFaceButton.addEventListener("click", function(){
    faceColor = "Light Brown";
    face.style.background = "#C4A484";
});


blackPotButton.addEventListener("click", function(){
    pot.style.background = "Black";
    pot.style.boxShadow = "Black";
    potShadow.style.background = "Black";
    potBottom.style.background = "Black";
});
brownPotButton.addEventListener("click", function(){
    pot.style.background = "#FF7043";
    pot.style.boxShadow = "#FF7043";
    potShadow.style.background = "#FF7043";
    potBottom.style.background = "#FF7043";
});


lightRedMouthButton.addEventListener("click", function(){
    mouthColor = "Light Red";
    mouth.style.background = "#ffc0cb";
});
blackMouthButton.addEventListener("click", function(){
    mouthColor = "Black";
    mouth.style.background = "Black";
});