function launch(id) {
    console.log("launching... " + id);
    clearProjects();
    buildLaunchedProject(id);
    let soloProject = document.getElementsByClassName("solo")[0];    
    /*let soloAnim = document.createElement("div");
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
    */
}

function buildLaunchedProject(id) {
    let newProject = document.createElement("div");
    newProject.className = "project-container solo" + " " + projects[id].tag + " " + id;
    newProject.setAttribute("id", id);
    gallery.appendChild(newProject);
    
    let h1 = document.createElement("h1");
    h1.innerHTML = projects[id].name;
    newProject.appendChild(h1);

    let p = document.createElement("p");
    p.innerHTML = projects[id].description;
    newProject.appendChild(p);

    for (let i = 0; i < projects[id].images.length; i++) {
        let img = document.createElement("img");
        img.setAttribute("src", projects[id].images[i]);
        newProject.appendChild(img);
    }
}