// JavaScript Document

// Add an event listener


window.addEventListener("resize", function (e) {
    resizeAll();
});

function resizeAll() {
    let i;
    for (i = 0; i < projects.length; i++) {
        let id = document.getElementById(i);
        let item1 = id.firstChild;
        let item2 = id.lastChild;
        let img = item1.firstChild;
        let text = item2.children[1];
        if (window.innerWidth > 799) {
            console.log("resizing... ");
            console.log(item1.clientHeight);
            item2.style.height = item1.clientHeight - 100 + "px";
        } else {
            item2.style.height = null;
        }
    }
}
