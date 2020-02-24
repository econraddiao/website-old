//index.html document elements
let animContainer = document.getElementById("load-anim-container");
let percBar = document.getElementById("load-percent-bar");
let loadButton = document.getElementById("button-container");
let header = document.getElementById("tr-header");
let main = document.getElementById("main");
let galleryWrapper = document.getElementById("gallery-wrapper");
let gallery = document.getElementById("gallery");
let loadImg = document.getElementById("load-image");
let projectButton;

//delcare global var projects
let projects;
let galleryElements;

//new xhr for projects.json
let xhr = new XMLHttpRequest();
xhr.open('GET', 'projects.json');

//if xhr load data into projects and build gallery
xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 400) {
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
        
    loadButton.style.display = "none";
    
    main.style.visibility = "visible";
    main.style.height = null;
    
    percBar.style.animationDuration = "1s";
    percBar.style.animationName = "enterPercentBar";

    animContainer.style.pointerEvents = "none";
    //animContainer.style.display = "none";
    
    header.style.visibility = "visible";
    
    loadImg.style.clipPath = "inset(0px 0px 400px 0px)";
    loadImg.style.webkitClipPath = "inset(0px 0px 400px 0px)";
    loadImg.style.top = "calc(50% - 22px)";
    
    resizeAll();
}
