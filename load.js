//index.html document elements
let animContainer = document.getElementById("load-anim-container");
let percBar = document.getElementById("load-percent-bar");
let loadButton = document.getElementById("button-container");
let header = document.getElementById("tr-header");
let main = document.getElementById("main");
let galleryWrapper = document.getElementById("gallery-wrapper");
let gallery = document.getElementById("gallery");
let img = document.getElementById("load-image");
let projectButton;

//delcare global var projects
let projects;
let galleryElements;

//new xhr for projects.json
let xhr = new XMLHttpRequest();
xhr.open('GET', 'projects.json');

//if xhr load data into projects and build gallery
xhr.onload = function () {
    if (xhr.status >= 400 && xhr.status < 600) {
        projects = JSON.parse(this.responseText);
        buildAllGalleryItems(projects);
        filterProjects("");
        vanity();
        let galleryElements = document.getElementsByClassName("project-container");
    } else {
        console.error('ERROR XMLHttpRequest returned error!');
    }

}
//handle error
xhr.onerror = function () {
    console.error('ERROR XMLHttpRequest failed!');
};

xhr.send();
//animate site enter
function enter() {
    console.log("entering...");
    percBar.style.top = "0";
    main.style.visibility = "visible";
    loadButton.style.display = "none";
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
