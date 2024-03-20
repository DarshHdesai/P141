rigth_wristY = "";
rigth_wristX = "";
left_wristY = "";
left_wristX = "";

function setup()
{
canvas = createCanvas(1240 , 640);
canvas.parent('canvas');

}

function modelLoaded()
{
    console.log('model loaded !');

}

function start()
{
    poseNet = ml5.poseNet(video , modeLoaded);
    poseNet.on('pose' , gotPoses);
}

function gotPoses()
{
    if(results.length > 0)
{
	console.log(results);
	rigth_wristX = results[0].pose.nose.x;
	rigth_wristY = results[0].pose.nose.y;

}
}

function draw()
{
    if(right_wrrist > 0.2)
    {
        fill("#FF0000");
        stroke("FF0000");
        circle(300,90,270,);
    }
}