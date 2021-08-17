function preload(){

}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0,0,200,200);
    fill(255,0,0)
    tint(255,0,0 );
    stroke(0,255,0);
    circle( 250, 250, 20);
}

function take_snapshot(){
    save('PROJECT113.jpg');
}