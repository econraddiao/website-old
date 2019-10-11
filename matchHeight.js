// JavaScript Document
window.addEventListener("resize", function () {
    resizeAll();
});

function resizeAll() {
    let galleryElements = document.getElementsByClassName("project-container");
        for(let els in galleryElements) {
        let id = document.getElementById(i);
        let item1 = id.firstChild;
        let item2 = id.lastChild;
        let img = item1.firstChild;
        let text = item2.children[1];

        if (window.innerWidth > 799) {
            item2.style.height = item1.clientHeight - 100 + "px";
        } else {
            item2.style.height = null;
        }
    };
}
