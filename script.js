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
let submitButton = document.querySelector(".submit-button");
let result; 
let resultDisplay = document.querySelector(".result-display");

let petalColor;
let stemColor;
let faceColor;
let mouthColor;
let potColor;

let mouth = document.querySelector(".flower__nose");
let stem = document.querySelector(".flower__stem");
let leaf1 = document.querySelector(".leaf-left");
let leaf2 = document.querySelector(".leaf-right");
let face = document.querySelector(".flower__head");
let pot = document.querySelector(".flower__pot");
let potShadow = document.querySelector(".flower__pot--shadow");
let potBottom = document.querySelector(".flower__pot--bottom");
let petal1 = document.querySelector(".petal-one");
let petal2 = document.querySelector(".petal-two");
let petal3 = document.querySelector(".petal-three");
let petal4 = document.querySelector(".petal-four");
let petal5 = document.querySelector(".petal-five");
let petal6 = document.querySelector(".petal-six");
let petal7 = document.querySelector(".petal-seven");
let petal8 = document.querySelector(".petal-eight");


bluePetalButton.addEventListener("click", function(){
    petalColor = "Blue";
    petal1.style.background = "#517bd6";
    petal1.style.boxShadow = "#517bd6";
    petal2.style.background = "#517bd6";
    petal2.style.boxShadow = "#517bd6";
    petal3.style.background = "#517bd6";
    petal3.style.boxShadow = "#517bd6";
    petal4.style.background = "#517bd6";
    petal4.style.boxShadow = "#517bd6";
    petal5.style.background = "#517bd6";
    petal5.style.boxShadow = "#517bd6";
    petal6.style.background = "#517bd6";
    petal6.style.boxShadow = "#517bd6";
    petal7.style.background = "#517bd6";
    petal7.style.boxShadow = "#517bd6";
    petal8.style.background = "#517bd6";
    petal8.style.boxShadow = "#517bd6";
})
yellowPetalButton.addEventListener("click", function(){
    petalColor = "Yellow";
    petal1.style.background = "#FFFF00";
    petal1.style.boxShadow = "#FFFF00";
    petal2.style.background = "#FFFF00";
    petal2.style.boxShadow = "#FFFF00";
    petal3.style.background = "#FFFF00";
    petal3.style.boxShadow = "#FFFF00";
    petal4.style.background = "#FFFF00";
    petal4.style.boxShadow = "#FFFF00";
    petal5.style.background = "#FFFF00";
    petal5.style.boxShadow = "#FFFF00";
    petal6.style.background = "#FFFF00";
    petal6.style.boxShadow = "#FFFF00";
    petal7.style.background = "#FFFF00";
    petal7.style.boxShadow = "#FFFF00";
    petal8.style.background = "#FFFF00";
    petal8.style.boxShadow = "#FFFF00";
})


darkGreenStemButton.addEventListener("click", function(){
    stemColor = "Dark Green";
    stem.style.background = "darkgreen";
    leaf1.style.background = "darkgreen";
    leaf2.style.background = "darkgreen";
});
lightGreenStemButton.addEventListener("click", function(){
    stemColor = "Light Green";
    stem.style.background = "#51d691";
    leaf1.style.background = "#51d691";
    leaf2.style.background = "#51d691"
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
    potColor = "Black";
});
brownPotButton.addEventListener("click", function(){
    pot.style.background = "#FF7043";
    pot.style.boxShadow = "#FF7043";
    potShadow.style.background = "#FF7043";
    potBottom.style.background = "#FF7043";
    potColor = "Brown";
});


lightRedMouthButton.addEventListener("click", function(){
    mouthColor = "Light Red";
    mouth.style.background = "#ffc0cb";
});
blackMouthButton.addEventListener("click", function(){
    mouthColor = "Black";
    mouth.style.background = "Black";
});

submitButton.addEventListener("click", function(){
   console.log(petalColor);
   console.log(stemColor);
   console.log(mouthColor);
   console.log(potColor);
   console.log(faceColor);
    if (potColor === "Brown" && petalColor === "Yellow"){
        result = "Happy";
        resultDisplay.innerHTML = result;
    } else if (stemColor === "Dark Green" && mouthColor === "Black"){
        result = "Sad";
        resultDisplay.innerHTML = result;
    } else if (faceColor === "Light Brown" && mouthColor === "Black"){
        result = "Stressed";
        resultDisplay.innerHTML = result;
    } else if (stemColor === "Light Green" && petalColor === "Yellow"){
        result = "Excited";
        resultDisplay.innerHTML = result;
    } else {
        result = "Bored";
        resultDisplay.innerHTML = result;
    }
});