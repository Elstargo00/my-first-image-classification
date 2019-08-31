const img_output =  document.getElementById('img-output');

function loadFile(event){
  img_output.src = URL.createObjectURL(event.target.files[0]);
}

async function classifyImg(){
  console.log("Classify in progress...");
  const result = await net.classify(img_output);
  console.log("Classification completed");
  document.getElementById('answer').innerText = `
    Prediction: \n${result[0].className}
  `
}

async function app() {
  console.log('Loading mobilenet..');

  // Load the model.
  net = await mobilenet.load();
  console.log('Sucessfully loaded model');

  // Make a prediction through the model on our image.
  document.getElementById('classify').addEventListener("click", classifyImg);
}

app();
