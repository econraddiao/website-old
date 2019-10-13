window.addEventListener("popstate", function(e) {
    showAll();
});

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('project-button') && !(event.target.parentNode.parentNode.classList.contains('about'))) {
        launch(event.target.parentNode.parentNode.id);
    }
}, false);

function launch(id) {
    console.log("launching project " + id);
    document.getElementById("projects-tab").classList.remove("active");
    clearProjects();
    buildLaunchedProject(id);
    history.pushState(null, null, );
}

function buildLaunchedProject(id) {
    let newProject = document.createElement("div");
    newProject.className = "project-container solo " + projects[id].tag + " " + id;
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
