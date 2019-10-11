// JavaScript Document
window.addEventListener("resize", function () {
    resizeAll();
});

function resizeAll() {
    let galleryElements = document.getElementsByClassName("project-container");
    console.log(galleryElements);
        for(let els of galleryElements) {
        console.log(els);
        let item1 = els.firstChild;
        let item2 = els.lastChild;
        let img = item1.firstChild;
        let text = item2.children[1];

        if (window.innerWidth > 799) {
            item2.style.height = item1.clientHeight - 100 + "px";
        } else {
            item2.style.height = null;
        }
    };
}
