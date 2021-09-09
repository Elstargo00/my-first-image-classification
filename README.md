# My first image classification
[Modified on: 10/09/21]
coding web app to classify image by using HTML/CSS/JS

Me (in 2021): I built a static website with HTML and CSS corresponding to my_index.html and my_index.css.
To play with it just clone the repo and drag my_index.html to your favorite browser. Have Fun!!

First of all we load model in between <script> tag:
```
  <script src="https://unpkg.com/@tensorflow/tfjs"></script>
  <script src="https://unpkg.com/@tensorflow-models/mobilenet"></script>
```
  and control the whole operation with "my_index.js" by importing with the following:
 ```
  <script src="my_index.js"></script>
  ```
  Mobilenet model has been loaded to an object name "net"
  <br>
When you click the button "Classify this image", the addEventListener of id="classify" have been triggered and it also implement classifyImg function. The mobile net object implement method of classify to classify the uploaded image
  <br>

![alt text](https://github.com/Elstargo00/my-first-image-classification/blob/master/Screenshot%20example.png)
