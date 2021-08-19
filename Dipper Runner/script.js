const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const message = document .getElementById("message");
const game = document.getElementById("game");



function move() {
    if(dino.classList != "jump") {
        dino.classList.remove("run");
        dino.classList.add("jump");
        
        setTimeout(function () {
            dino.classList.remove("jump");
            dino.classList.add("run");
        }, 600);
    }
}

let isAlive = setInterval(function () {
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
        let dinoleft =parseInt(window.getComputedStyle(dino).getPropertyValue("left"));
        if(cactusLeft < 70 && cactusLeft > 0 && dinoTop>= 140) {
            
            message.style.display = "block";
            cactus.style.animationPlayState = "paused";
            dino.style.backgroundImage = "url(img/dip.png)";
            dino.classList.remove("run");
            dino.style.width = "80px";
            dino.style.height = "80px";
            game.style.backgroundImage = "url(img/bill1.gif)";
            game.style.backgroundPosition = "center";
            game.style.backgroundSize = "cover";
            
            
        }
        
    }, 10);

document.addEventListener("keydown", function(event) {
    move();
});