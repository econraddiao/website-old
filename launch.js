
projectButton = document.querySelector("project-button");

if (document.addEventListener) {
    document.addEventListener("click", handleClick, false);
}
else if (document.attachEvent) {
    document.attachEvent("onclick", handleClick);
}

function handleClick(event) {
    event = event || window.event;
    event.target = event.target || event.srcElement;

    var element = event.target;

    // Climb up the document tree from the target of the event
    while (element) {
        if (element.nodeName === "BUTTON") {
            // The user clicked on a <button> or clicked on an element inside a <button>
            // with a class name called "foo"
            launch(this.parentNode.parentNode.id);
            break;
        }
        element = element.parentNode;
    }
}

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
