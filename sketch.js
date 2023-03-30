const SPACE = " ";
var score = 0;
var bgImg;
var bg;
var bg2;
var dashImg;
var dash;
let exeggutorImg;
let exeggutors = [];


function preload(){
    bgImg = loadImage('assets/bg.png');
    dashImg = loadImage('assets/rapidash.png');
    exeggutorImg = loadImage('assets/exeggutor.png');

}

function setup(){
    createCanvas(windowWidth, windowHeight);
    bg = new Bg(bgImg, 0);
    bg2 = new Bg(bgImg, width);
    dash = new Rapidash(dashImg);

}

function draw(){
    background('white');

    bg.draw();
    bg2.draw();
    bg.scroll();
    bg2.scroll();

    dash.draw();
    dash.update();
    
    if(frameCount % 30 == 0 && random(1) < 0.500){
        exeggutors.push (new Exeggutor(exeggutorImg));
    }
    for(let exeggutor of exeggutors){
        exeggutor.draw();
        exeggutor.move();

        let dashRight = dash.dashX + dash.dashS/2;
        let dashBottom = dash.dashY + dash.dashS/2;
        let exeLeft = exeggutor.x;
        let exeRight = exeggutor.x + exeggutor.s;
        let exeTop = exeggutor.y;
        let exeBottom = exeggutor.y + exeggutor.s;
        
        if (dashRight >= exeLeft && dash.dashX <= exeRight && dashBottom >= exeTop && dash.dashY <= exeBottom) {
            let gameOver = "GAME OVER";
            let gameOverW = textWidth(gameOver);
            textSize(38);
            text(gameOver, width/2-gameOverW/2, height/2);
            noLoop();
        }

        if (exeggutor.x < dash.dashX - exeggutor.s) {
            exeggutors.splice(exeggutor, 1);
            score++;
        }
    }
    
    textSize(32);
    text("SCORE: " + score, 10, 40);
 
}

function keyPressed(){
    if(key === SPACE && dash.dashY == height - dash.dashS){
        dash.jump();
    }

}