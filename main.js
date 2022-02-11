Webcam.set({

    width: 350,
    height: 270,
    image_format: 'png',
    png_quality: 90,

})

camera = document.getElementById("camera") // Defines camera to identify people

Webcam.attach('#camera')

function takeSnapshot() {

    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "image" src = "'+data_uri+'"></img>'; // Takes snapshot
    });

}

console.log('ml5 version', ml5.version)   // Consoles Ml5 version

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ijgG2eOhG/model.json',modelLoaded);

function modelLoaded() {
    console.log('modelLoaded');
}

function check(){
    img = document.getElementById('image')
    classifier.classify(img,gotResult)
}

function gotResult(error,result){
    if (error){
        console.error(error)
    
    }
    else{
        
        console.log(result)
        object = result[0].label
        accuracy = result[0].confidence.toFixed(1)
        document.getElementById("result-object").innerHTML = object;
        document.getElementById("result-accuracy").innerHTML = accuracy * 100 + " %";
    }
}
 