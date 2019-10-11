// JavaScript Document
let animContainer = document.getElementById("load-anim-container");
let percBar = document.getElementById("load-percent-bar");
let buttonContainer = document.getElementById("button-container");
let header = document.getElementById("tr-header");
let main = document.getElementById("main");
let galleryWrapper = document.getElementById("gallery-wrapper");
let gallery = document.getElementById("gallery");
let img = document.getElementById("load-image");

let projects;

let xhr = new XMLHttpRequest();
xhr.open('GET', 'projects.json');

xhr.onload = function () {
    let projects = JSON.parse(this.responseText);
    console.log(projects[0]);
    buildAllGalleryItems(projects);
    filterProjects("");
    vanity();
}

xhr.onerror = function() {
  console.log('There was an error!');
};

xhr.send();

function enter() {
    console.log("entering...");
    percBar.style.top = "0";
    main.style.visibility = "visible";
    buttonContainer.style.display = "none";
    percBar.style.width = "100%";
    percBar.style.animationName = "enterPercentBar";
    animContainer.style.height = "60px";
    animContainer.style.pointerEvents = "none";
    header.style.opacity = 1;
    header.style.visibility = "visible";
    img.style.clipPath = "inset(0px 0px 400px 0px)";
    img.style.webkitClipPath = "inset(0px 0px 400px 0px)";
    img.style.top = "calc(50% - 22px)";
    main.style.height = null;
    main.style.overflow = "visible";
    main.style.visibility = "visible";
    resizeAll();
}
