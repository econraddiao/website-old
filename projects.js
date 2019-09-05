function Project(name, date, description, images, tag, index) {
    this.name = name;
    this.date = date;
    this.description = description;
    this.images = images;
    this.tag = tag;
    this.index = index;
}

function build(proj) {
    console.log("building...");
    let thumbnail = proj.images[0];

    let newProject = document.createElement("div");
    newProject.className = "project-container" + " " + proj.tag + " " + proj.index;
    newProject.setAttribute("id", proj.index);
    newProject.setAttribute("style", "display: none");
    main.appendChild(newProject);

    let item1 = document.createElement("div");
    item1.setAttribute("class", "item1");
    item1.setAttribute("onClick", "resize(this.parentNode)");
    newProject.appendChild(item1);

    let img = document.createElement("img");
    img.setAttribute("src", "img/" + thumbnail);
    item1.appendChild(img);

    let item2 = document.createElement("div");
    item2.setAttribute("class", "item2");
    newProject.appendChild(item2);


    let h1 = document.createElement("h1");
    h1.innerHTML = proj.name;
    item2.appendChild(h1);

    let text = document.createElement("div");
    text.setAttribute("class", "text");
    item2.appendChild(text);

    let p = document.createElement("p");
    p.innerHTML = proj.description;
    text.appendChild(p);

    let button = document.createElement("div");
    button.setAttribute("class", "project-button");
    if (proj.tag == "about") {
        button.innerHTML = "Reach Me";
    } else {
        button.innerHTML = "Launch Project";
        button.setAttribute("onClick", "launch(this.parentNode.parentNode.className)");
    }
    item2.appendChild(button);
    item2.style.height = item1.clientHeight + "px";
}

function loadProjects() {
    for (i = 0; i < projects.length; i++) {
        build(projects[i]);
    }
}

function showProject(project) {
    console.log("showing...");
    project.setAttribute("style", "display: inline block");
}

function populateProjects(filter) {
    console.log("populating with filter: " + filter);
    let passCheck;
    if (filter) {
        passCheck = document.getElementsByClassName(filter);
    } else {
        passCheck = document.getElementsByClassName("project-container");
    }
    console.log(passCheck);
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
    clearProjects();
    populateProjects("about");
    document.getElementById("projects-tab").classList.remove("active");
    document.getElementById("about-tab").classList.add("active");
}

function showAll() {
    clearProjects();
    populateProjects("");
    document.getElementById("projects-tab").classList.add("active");
    document.getElementById("about-tab").classList.remove("active");
    let els = document.getElementsByClassName("solo");
    while (els[0]) {
        els[0].classList.remove("solo");
    }
}

function launch(id) {
    console.log("launching... " + id)
    clearProjects();
    populateProjects(id);
    let soloProject = document.getElementsByClassName(id)[0];
    let item2 = soloProject.lastChild;
    soloProject.class = soloProject.classList.add("solo");
    item2.lastChild.setAttribute("style", "display: none");

}

let projects = [{
        name: "Paper Cuts",
        date: "Fall 2016",
        description: "Paper Cuts is an study of the application of algorithmic subtractive manufacture of a keepsake. The book is a deeply cultral artifact, filled with humanity's stories and which serves as a phisical memory through additive manufacturing, specifically printing. This book offers a new paradigm of communication represents oncoming technological change. The book was designed parametrically by sampling random noise to generate seeds which served as the centroid of each cell which radiates to form a voronoi pattern. This pattern was copied in negative and positive along the head and tail of the book, adding to its complexity in fabrication.",
        images: ["202_X1_1.jpg", "202_X1_2.jpg", "202_X1_3.jpg", "202_X1_4.jpg"],
        tag: "architecture",
        index: 4
    },
    {
        name: "American Classics",
        date: "Fall 2017",
        description: "Blah Blah",
        images: ["_DSC3506.jpg", "_DSC2950.jpg"],
        tag: "photography",
        index: 3
    },
    {
        name: "Non-American Non-Classics ",
        date: "Fall 2018",
        description: "Bluh Blih",
        images: ["_DSC2950.jpg", "_DSC3506.jpg"],
        tag: "photography",
        index: 2
    },
    {
        name: "Caricature Cubes",
        date: "Fall 2019",
        description: "The contemporary virtual landscape is becoming more populated and polluted every day as our digital footprints are becoming unmanageably large, and our appearance and actions online are scrutinized by more and more friends or followers or fans. Our reaction to these trends is made clear by the rapid proliferation and adoption of automated assistants designed to simplify everything: finance, diet, shopping, scheduling, communicating, Et al. We are surrendering authorship and autonomy in as many areas of our lives as possible -- both virtual and real. Our stuff, the things that we consume and surround ourselves with, one of the most authentic and indeleble markers of our personalities. Caricature Cubes is a critical project which aims to highlight the absurdity of our impending virtualization of the real.  Consumerist and vain desires are understood as merely popular idiosyncrasies and by celebrating absurd conditions, we question our aesthetic and social celebrations and frustrate the images of our personalities.",
        images: ["UG3_X4_1.jpg"],
        tag: "architecture",
        index: 1
    },
    {
        name: "Conrad Diao",
        date: "1997",
        description: "hi. My name is Conrad Diao, welcome to my website. I am a person with a passion for many things: Photography, Architecture, Business, Writing, and so much more. \n \n San Francisco, CA by way of \n Ann Arbor, MI by way of \n Exeter, NH by way of \n San Francisco, CA. \n \n In the past I've worked at <a>Salesforce</a>, Numie, Poshly, and QB3.",
        images: ["_DSC5923.jpg"],
        tag: "about",
        index: 0
    }
];
