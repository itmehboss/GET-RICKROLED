var bg, bgimg;


function preload(){

    bgimg = loadImage("background.jpg")

}


function setup(){
createCanvas(1500,700)
    bg = createSprite(500,300);
    bg.addImage(bgimg);
    bg.scale = 2.0;


}

function draw(){

    background(0);

    drawSprites();
}