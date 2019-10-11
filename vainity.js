// JavaScript Document
function vanity() {
    let item1 = document.getElementsByClassName("about")[0].firstChild;
    let aboutImg = item1.firstChild;
    
    let colorShifter = setInterval(shift, 500);
    function shift() {
        let color = "rgba(" + (Math.random() * 255).toString() + "," + (Math.random() * 255).toString() + "," + (Math.random() * 255).toString() + ",1.00)"
        aboutImg.style.background = color;
    }
}