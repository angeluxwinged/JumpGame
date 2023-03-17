class Rapidash{
    constructor(img){
        this.img = img
        this.dashX = 0;
        this.dashS = 100;
        this.dashY = height -  this.dashS-100;
        this.dashV = 0;
        this.dashG = 2;
    }

    draw(){
        image(this.img, this.dashX, this.dashY, this.dashS ,this.dashS);
    }

    jump(){
        this.dashV = -35;
    }

    update(){
        this.dashY += this.dashV;
        this.dashV += this.dashG;
        this.dashY = constrain(this.dashY, 0, height - this.dashS);
    }
}