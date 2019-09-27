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
    img.setAttribute("onload", "upgradeImage(this)");
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

    let button = document.createElement("div");
    button.setAttribute("class", "project-button");
    if (proj.tag == "about") {
        button.innerHTML = "Reach Me";
        button.setAttribute("onClick","location.href='https://www.linkedin.com/in/ecdiao/';");
    } else {
        button.innerHTML = "Launch Project";
        button.setAttribute("onClick", "launch(this.parentNode.parentNode.id)");
    }
    item2.appendChild(button);
    item2.style.height = item1.clientHeight + "px";
}

function buildAllGalleryItems() {
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

function showAbout() {
    document.getElementById("projects-tab").classList.remove("active");
    document.getElementById("about-tab").classList.add("active");
}

function showAll() {
    clearProjects();
    filterProjects("");
    document.getElementById("projects-tab").classList.add("active");
    document.getElementById("about-tab").classList.remove("active");
    let els = document.getElementsByClassName("solo");
    while (els[0]) {
        gallery.removeChild(els[0]);
    }
}