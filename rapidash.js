class Rapidash{
    constructor(img){
        this.img = img
        this.dashX = 0;
        this.dashS = 100;
        this.dashY = height -  this.dashS-100;
    }

    draw(){
        image(this.img, this.dashX, this.dashY, this.dashS ,this.dashS);
    }
}