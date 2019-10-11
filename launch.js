let button = document.querySelector("project-button");

button.addEventListener("click", launch(this));

function launch(id) {
    console.log("launching project " + id);
    //history.pushState(null, null, id);
    console.log(history.state);
    document.getElementById("projects-tab").classList.remove("active");
    
    clearProjects();
    buildLaunchedProject(id);
    let soloProject = document.getElementsByClassName("solo")[0];
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
