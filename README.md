# My first image classification
[Modified on: 10/09/21]
coding web app to classify image by using HTML/JS

Future me: I built a static website with HTML and CSS corresponding to my_index.html and my_index.css.
First of all we load model in btw <script> tag:
  
  <script src="https://unpkg.com/@tensorflow/tfjs"></script> <br>
  <script src="https://unpkg.com/@tensorflow-models/mobilenet"></script> <br><br>
  and control the whole operation with "my_index.js"
 
  <script src="my_index.js"></script>
  
  
When you click the button "Classify this image", the addEventListener of id="classify" have been triggered and implement classifyImg function. The object "net" implement method classify to classify the uploaded image
  

![alt text](https://github.com/Elstargo00/my-first-image-classification/blob/master/Screenshot%20example.png)
