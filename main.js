function setup() {
  canvas = createCanvas(300, 300);
  canvas.position(550,120);
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier("MobileNet",modelloaded);
}
function draw(){
  image(video,0,0,300,300);
classifier.classify(video,getresult);
}
function modelloaded(){
  console.log("model loaded succesfully");
}

function getresult(E,R){
  if(E){
    console.error(E);
    }
    else{
      console.log(R);
      object_name=R[0].label;
      object_accuracy=R[0].confidence.toFixed(3);
      document.getElementById("object_name").innerHTML=object_name;
      document.getElementById("object_accuracy").innerHTML=Math.floor(object_accuracy*100)+"%";
      
    }
}