

leftWrist_x = 0;
rightWrist_x = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(540,500);
    

    canvas = createCanvas(550,400);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelDone);
    poseNet.on('pose',gotposes);
}

function draw(){
    background("aliceblue");
    document.getElementById("font_size").innerHTML = "Font size of the Text will be = "+difference+"px";
    textSize(difference);
    fill("black");
    text('Insert Text Here',50,400);
}

function modelDone(){
    console.log("PoseNet Is Initialized!");
}

function gotposes(results,error){
    if(error){
        console.error(error);
    }
    if(results.length > 0){
        console.log(results);

        leftWrist_x = results[0].pose.leftWrist.x;
        rightWrist_x = results[0].pose.rightWrist.x;

        difference = floor(leftWrist_x - rightWrist_x);

        console.log("rightWrist_x = "+results[0].pose.rightWrist.x + " rightWrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y = "+results[0].pose.leftWrist.y);
    }
}