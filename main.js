nosex = 0;
nosey = 0;

function preload()
{
 clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png')
}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', getPoses)
}
function modelLoaded()
{
    console.log('PoseNet is initialized');
}
function getPoses(results)
{
if (results.lenght > 0)
{
    console.log(results);
    noseX = resuls[0].pose.nose.x;
    noseY = resuls[0].pose.nose.y;
    console.log("nose x = " + noseX);
    console.log("nose y = " + noseY);
}
}
function draw()
{
 image(video, 0, 0, 300, 300);
 //fill(255, 0, 0);
 //stroke(255, 0, 0);
 //circle(noseX, noseY, 20);
 image(clown_nose, noseX, noseY, 30, 30);
}
function take_snapshot()
{
   save('myFilterimage.png');
}