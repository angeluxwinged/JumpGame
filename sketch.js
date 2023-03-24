var bgImg;
var bg;
var bg2;
var dashImg;
var dash;
const SPACE = " ";
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
    //exeggutor = new Exeggutor(exeggutorImg);

}

function draw(){
    background('white');

    bg.draw();
    bg.scroll();
    bg2.draw();
    bg2.scroll();

    dash.draw();
    dash.update();
    
    if(random(1) < 0.005){
        exeggutors.push (new Exeggutor(exeggutorImg));
    }
    for(let exeggutor of exeggutors){
        exeggutor.draw();
        exeggutor.move();
    }

   //si choca noLoop();

}

function keyPressed(){
    if(key === SPACE && dash.dashY == height - dash.dashS){
        dash.jump();
    }
}