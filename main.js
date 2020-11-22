function preload()
{}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
}



function take_snapshot()
{
    save('Satyajit.png');
}

function draw()
{

 
    circle(50, 150, 80);
 
    circle(50, 250, 80);
    circle(50, 350, 80);

    circle(150, 450, 80);
    circle(250, 450, 80);
    circle(350, 450, 80);
    circle(450, 450, 80);
    circle(550, 450, 80);

    circle(600, 350, 80);
    circle(600, 250, 80);
    circle(600, 150, 80);

    circle(150, 50, 80);
    circle(250, 50, 80);
    circle(350, 50, 80);
    circle(450, 50, 80);
    circle(550, 50, 80);
    fill (0,128,0); 
    image(video, 125, 100, 400, 300);

    rect(30, 10, 200, 75);
    rect(200, 10, 200, 75);
    rect(400, 10, 200, 75);
    rect(400, 400, 200, 75);
    rect(200, 400, 200, 75);
    rect(30, 400, 200, 75);
    fill(255, 0, 0);
}

// 
//    video = createCapture(VIDEO);
//video.hide();
//function applyFrame()
{

}