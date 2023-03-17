class Bg{
    constructor(img, bgX){
        this.img = img
        this.bgX = bgX;
        this.bgY = 0;
        this.bgW = width;
        this.bgH = height;
        this.SCROLL_SPEED = 3;
    }

    draw(){
        image(this.img, this.bgX, this.bgY, this.bgW ,this.bgH);
    }

    scroll(){
        this.bgX -= this.SCROLL_SPEED;

        if(this.bgX < -width){
            this.bgX = width;
        }
    }
}