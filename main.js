function setup() {
    canvas=createCanvas(600, 500);
    canvas.center();

    video =createCapture(VIDEO);
    video.hide();

}

function draw() {
    image(video,0,0,600,500);
}

song="";

function preload()
{
song = loadSound("Doksblog.com-Musical-Youth-Pass-The-Dutchie-Official-Music.rar")
}


function play() {
song.play();
}



