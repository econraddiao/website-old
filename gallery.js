function buildGalleryItem(proj, index) {
    console.log("building...");
    let thumbnail = proj.images[0];

    let newProject = document.createElement("div");
    newProject.className = "project-container" + " " + proj.tag + " " + index;
    newProject.setAttribute("id", index);
    newProject.setAttribute("style", "display: none");
    gallery.appendChild(newProject);
    let item1 = document.createElement("div");
    item1.setAttribute("class", "item1");
    newProject.appendChild(item1);

    let img = document.createElement("img");
    img.setAttribute("src", thumbnail);
    item1.appendChild(img);

    let item2 = document.createElement("div");
    item2.setAttribute("class", "item2");
    newProject.appendChild(item2);

    let h1 = document.createElement("h1");
    h1.innerHTML = proj.name;
    item2.appendChild(h1);

    let text = document.createElement("div");
    text.setAttribute("class", "text");
    text.innerHTML = proj.description;
    item2.appendChild(text);

    let button = document.createElement("button");
    button.setAttribute("class", "project-button");
    if (proj.tag == "about") {
        button.innerHTML = "Reach Me";
        button.setAttribute("onClick", "location.href='https://www.linkedin.com/in/ecdiao/';");
    } else {
        button.innerHTML = "Launch Project";
    }
    item2.appendChild(button);
}

function buildAllGalleryItems(projects) {
    for (i = 0; i < projects.length; i++) {
        buildGalleryItem(projects[i], i);
    }
}

function showProject(project) {
    console.log("showing...");
    project.style.display = null;
}

function filterProjects(filter) {
    console.log("filtering... " + filter);
    let passCheck;
    if (filter) {
        passCheck = document.getElementsByClassName(filter);
    } else {
        passCheck = document.getElementsByClassName("project-container");
    }
    for (i = 0; i < passCheck.length; i++) {
        showProject(passCheck[i]);
    }
}

function clearProjects() {
    let projectsDisplayed = document.getElementsByClassName("project-container");
    let i;
    for (i = 0; i < projectsDisplayed.length; i++) {
        projectsDisplayed[i].setAttribute("style", "display: none");
    }
}

function showAll() {
    clearProjects();
    filterProjects("");
    document.getElementById("projects-tab").classList.add("active");
    let els = document.getElementsByClassName("solo");
    while (els[0]) {
        gallery.removeChild(els[0]);
    }
    document.getElementById("gallery-wrapper").scroll(0, 0);
}

function showAbout() {
    showAll();
    document.getElementById("gallery-wrapper").scroll(0, 99999);
}

// JavaScript Document
window.addEventListener("resize", function () {
    resizeAll();
});

function resizeAll() {
    let galleryElements = document.getElementsByClassName("project-container");
    for (let els of galleryElements) {
        let item1 = els.firstChild;
        let item2 = els.lastChild;
        let img = item1.firstChild;
        let text = item2.children[1];
        let p = text.firstChild;
        if (window.innerWidth > 799) {
            item2.style.height = item1.clientHeight - 100 + "px";
        } else {
            item2.style.height = null;
        }
        let clampHeight = text.offsetHeight / 22.4;
        console.log(text.getBoundingClientRect);
        $clamp(text, {clamp: clampHeight});
    };
}

function vanity() {
    let item1 = document.getElementsByClassName("about")[0].firstChild;
    let aboutImg = item1.firstChild;

    let colorShifter = setInterval(shift, 500);

    function shift() {
        let color = "rgba(" + (Math.random() * 255).toString() + "," + (Math.random() * 255).toString() + "," + (Math.random() * 255).toString() + ",1.00)"
        aboutImg.style.background = color;
    }
}
