img="";

function preload(){
   img = loadImage("bed_room.jpg");
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw(){
   image(img, 0, 0, 640, 420);
}

function back() {
    window.location = "index.html";
}