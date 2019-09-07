// /Create three boxes in your HTML / CSS

//Click on a box and have it rotate (45+ degrees each click)

//On the third click of each box change the color of the other two boxes

//On a click of a box, turn that box into a circle and have it move to the right




let rotateBox1 = 0;
let rotateBox2 = 0;
let rotateBox3 = 0;

const flip1 = document.getElementsByClassName("box1norm")[0];
const flip2 = document.getElementsByClassName("box1norm")[1];
const flip3 = document.getElementsByClassName("box1norm")[2];

document.getElementsByClassName("box1norm")[0].onclick =flipbox1;
document.getElementsByClassName("box1norm")[1].onclick =flipbox2;
document.getElementsByClassName("box1norm")[2].onclick =flipbox3;



function flipbox1 (){
  rotateBox1 += 45
  flip1.style.transform = "rotate("+rotateBox1+"deg)"
  if (rotateBox1===135){
    flip2.style.backgroundColor= "red";
    flip3.style.backgroundColor= "red";
  }
  shapeChange(flip1)
}

function flipbox2(){
  rotateBox2 += 45
  flip2.style.transform = "rotate("+rotateBox2+"deg)"
  if (rotateBox2===135){
    flip3.style.backgroundColor= "green";
    flip1.style.backgroundColor= "green";
  }
  shapeChange(flip2)
}

function flipbox3(){
  rotateBox3 += 45
  flip3.style.transform = "rotate("+rotateBox3+"deg)"
  if (rotateBox3===135){
    flip2.style.backgroundColor= "blue";
    flip1.style.backgroundColor= "blue";
  }
  shapeChange(flip3)
}

function shapeChange(box) {
  box.style.borderRadius = "100%"
  let style = window.getComputedStyle(box)
  // the .getComputedStyle element is used to inspect the elements style




  let currentMargin = parseInt(style.marginLeft)
  let newMargin = currentMargin + 25 + "px"
  box.style.marginLeft = newMargin
}
