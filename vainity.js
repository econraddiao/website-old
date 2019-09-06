// JavaScript Document
var colorShifter = setInterval(shift, 500);
function shift() {
    let aboutImg = document.getElementById("0").firstChild.firstChild;
    aboutImg.style.clipPath = "circle(50%)";
    aboutImg.style.-webkit-clipPath = "circle(50%)";
    let color = "rgba(" + (Math.random()*255).toString() + "," + (Math.random()*255).toString() + "," + (Math.random()*255).toString() + ",1.00)"
    aboutImg.style.background = color;
}
