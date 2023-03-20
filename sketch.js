var bgImg;
var bg;
var bg2;
var dashImg;
var dash;
const SPACE = " ";

function preload(){
    bgImg = loadImage('assets/bg.png');
    dashImg = loadImage('assets/rapidash.png');
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
    bg.scroll();
    bg2.draw();
    bg2.scroll();

    dash.draw();
    dash.update();

}

function keyPressed(){
    if(key === SPACE && dash.dashY == height - dash.dashS){
        dash.jump();
    }
}
