function preload(){
    bed=loadImage("bedroom.png");
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}
function draw(){
    image(bed,0,0,640,420);
    fill("#FF0000")
}