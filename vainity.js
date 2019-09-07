// JavaScript Document
let colorShifter = setInterval(shift, 500);
function shift() {
    let aboutImg = document.getElementsByClassName("about")[0].firstChild.firstChild;
    aboutImg.style.cssText = "clip-path: circle(50%); -webkit-clip-path: circle(50%); max-width: 75%; margin: 50px";
    let color = "rgba(" + (Math.random()*255).toString() + "," + (Math.random()*255).toString() + "," + (Math.random()*255).toString() + ",1.00)"
    aboutImg.style.background = color;
}