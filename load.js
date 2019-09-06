// JavaScript Document
var animContainer = document.getElementById("load-anim-container");
var header = document.getElementById("header");
var main = document.getElementById("main");
var percBar = document.getElementById("load-percent-bar");
var button = document.getElementById("load-button");
var img = document.getElementById("load-image");

function enter() {
    console.log("entering...");
    percBar.style.transition = "height .5s";
    percBar.style.height = "60px";
    percBar.style.backgroundColor = "#333";
    animContainer.style.visibility = "hidden";
    button.style.visibility = "hidden";
    img.style.clipPath = "inset(0px 0px 400px 0px)";
    img.style.top = "2px";
    main.style.height = null;
    main.style.overflow = "visible";
    var hider = setTimeout(hideLoad, 1000);
    function hideLoad() {
        animContainer.style.display = "none";
        percBar.style.display = "none";
        clearTimeout(hider);
    }
}

function load() {
    console.log("loading...");
    var count = 0;
    var loader = setInterval(loadAnim, 7);
    buildAllGalleryItems();
    filterProjects("");
    resizeAll();
    function loadAnim() {
        if (count == 201) {
            clearInterval(loader);
        } else {
            count++;
            if (count < 101) {
                percBar.innerHTML = count + "%";
                percBar.style.width = count + "%";

            } else if (count < 201) {
                percBar.style.height = count - 100 + "%";
                percBar.style.backgroundColor = "#333";
            } else {
                button.style.visibility = "visible";
                button.style.opacity = 1;
                header.style.visibility = "visible";
                header.style.opacity = 1;
                main.style.visibility = "visible";
            }
        }
    }
}
