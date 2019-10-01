function launch(id) {
    console.log("launching... " + id);
    clearProjects();
    buildLaunchedProject(id);
    let soloProject = document.getElementsByClassName("solo")[0];    
    let soloAnim = document.createElement("div");
    soloAnim.setAttribute("class", "launchAnim");
    soloAnim.innerHTML = "BLASTOFF!";
    soloProject.appendChild(soloAnim);
    soloAnim.style.position = "absolute";
    soloAnim.style.width = null;
    soloAnim.style.height = null;
    soloAnim.style.opacity = "1";
    soloAnim.style.transition = "opacity .5s";
    soloAnim.style.background = "rgba(234, 64, 237, 1.00)";
    soloAnim.style.color = "rgba(115, 251, 253, 1.00)";    
}

function buildLaunchedProject(id) {
    let newProject = document.createElement("div");
    newProject.className = "project-container solo" + " " + projects[id].tag + " " + id;
    newProject.setAttribute("id", id);
    newProject.setAttribute("style", "height: calc(100% - 24px)");
    gallery.appendChild(newProject);

    let item1 = document.createElement("div");
    item1.setAttribute("class", "item1");
    newProject.appendChild(item1);

    for (let i = 0; i < projects.images.length; i++) {
        let img = document.createElement("img");
        img.setAttribute("src", projects[i]images[]);
        item1.appendChild(img);
    }

    let item2 = document.createElement("div");
    item2.setAttribute("class", "item2");
    newProject.appendChild(item2);


    let h1 = document.createElement("h1");
    h1.innerHTML = projects[id].name;
    item2.appendChild(h1);

    let text = document.createElement("div");
    text.setAttribute("class", "text");
    text.innerHTML = projects[id].description;
    item2.appendChild(text);
}