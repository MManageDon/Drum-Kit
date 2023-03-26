// All of the Buttons
var wButton = document.querySelectorAll("button")[0];
var aButton = document.querySelectorAll("button")[1];
var sButton = document.querySelectorAll("button")[2];
var dButton = document.querySelectorAll("button")[3];
var jButton = document.querySelectorAll("button")[4];
var kButton = document.querySelectorAll("button")[5];
var lButton = document.querySelectorAll("button")[6];

// When the Button is Pressed
function wButtonSound() {
    var wSound = new Audio("sounds/tom-1.mp3");
    wSound.play();
}
function aButtonSound() {
    var aSound = new Audio("sounds/tom-2.mp3");
    aSound.play();
}
function sButtonSound() {
    var sSound = new Audio("sounds/tom-3.mp3");
    sSound.play();
}
function dButtonSound() {
    var dSound = new Audio("sounds/tom-4.mp3");
    dSound.play();
}
function jButtonSound() {
    var jSound = new Audio("sounds/snare.mp3");
    jSound.play();
}
function kButtonSound() {
    var kSound = new Audio("sounds/crash.mp3");
    kSound.play();
}
function lButtonSound() {
    var lSound = new Audio("sounds/kick-bass.mp3");
    lSound.play();
}

// When the Keyboard os pressed
document.addEventListener("keydown", Event => {
    if (Event.key === "w") {
        wButtonSound();
    }
});

document.addEventListener("keydown", Event => {
    if (Event.key === "a") {
        aButtonSound();
    }
});

document.addEventListener("keydown", Event => {
    if (Event.key === "s") {
        sButtonSound();
    }
});

document.addEventListener("keydown", Event => {
    if (Event.key === "d") {
        dButtonSound();
    }
});

document.addEventListener("keydown", Event => {
    if (Event.key === "j") {
        jButtonSound();
    }
});

document.addEventListener("keydown", Event => {
    if (Event.key === "k") {
        kButtonSound();
    }
});

document.addEventListener("keydown", Event => {
    if (Event.key === "l") {
        lButtonSound();
    }
});