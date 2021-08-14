var a=prompt("enter the first number");
var b=prompt("enter the secend number ")
function setup() {
  createCanvas(400, 400);
  var button =createButton("swap");
  button.mousePressed(swap);
}

function draw() {
  background(220);
}
function swap(){
 [a,b]=[b,a]
 console.log("value of a after swaping "+a)
 console.log("value of b after swaping "+b) 
}