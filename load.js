// JavaScript Document
let animContainer = document.getElementById("load-anim-container");
let percBar = document.getElementById("load-percent-bar");
let button = document.getElementById("load-button");
let header = document.getElementById("header");
let main = document.getElementById("main");
let gallery = document.getElementById("gallery-wrapper");
let img = document.getElementById("load-image");

buildAllGalleryItems();
filterProjects("");

function enter() {
    console.log("entering...");
    //percBar.style.transition = "height .5s";
    //percBar.style.height = "60px";
    //percBar.style.backgroundColor = "#333";
    header.style.opacity = 1;
    animContainer.style.visibility = "hidden";
    button.style.visibility = "hidden";
    img.style.clipPath = "inset(0px 0px 400px 0px)";
    img.style.webkitClipPath = "inset(0px 0px 400px 0px)";
    img.style.top = "calc(50% - 22px)";
    main.style.height = null;
    main.style.overflow = "visible";
    main.style.visibility = "visible";
    animContainer.style.display = "none";
    percBar.style.display = "none";
}