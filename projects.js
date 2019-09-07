function Project(name, date, description, images, tag, index) {
    this.name = name;
    this.date = date;
    this.description = description;
    this.images = images;
    this.tag = tag;
    this.index = index;
}

function buildLaunchedProject(id) {
    console.log(id);
    console.log(projects);
    console.log(projects[id]);
    let newProject = document.createElement("div");
    newProject.className = "project-container solo" + " " + projects[id].tag + " " + projects[id].index;
    newProject.setAttribute("id", projects[id].index);
    newProject.setAttribute("style", "height: calc(100% - 24px)");
    gallery.appendChild(newProject);

    let item1 = document.createElement("div");
    item1.setAttribute("class", "item1");
    newProject.appendChild(item1);

    for (let i = 0; i < projects[i].images.length; i++) {
        let img = document.createElement("img");
        img.setAttribute("src", "img/" + "loading.gif");
        //(projects[id].images.[i]).toString()
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

    //let p = document.createElement("p");
    //text.appendChild(p);
}

function buildGalleryItem(proj) {
    console.log("building...");
    let thumbnail = proj.images[0];

    let newProject = document.createElement("div");
    newProject.className = "project-container" + " " + proj.tag + " " + proj.index;
    newProject.setAttribute("id", proj.index);
    newProject.setAttribute("style", "display: none");
    gallery.appendChild(newProject);

    let item1 = document.createElement("div");
    item1.setAttribute("class", "item1");
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
    text.innerHTML = proj.description;
    item2.appendChild(text);

    //let p = document.createElement("p");
    //text.appendChild(p);

    let button = document.createElement("div");
    button.setAttribute("class", "project-button");
    if (proj.tag == "about") {
        button.innerHTML = "Reach Me";
    } else {
        button.innerHTML = "Launch Project";
        button.setAttribute("onClick", "launch(this.parentNode.parentNode.id)");
    }
    item2.appendChild(button);
    item2.style.height = item1.clientHeight + "px";
}

function buildAllGalleryItems() {
    for (i = 0; i < projects.length; i++) {
        buildGalleryItem(projects[i]);
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
    filterProjects("about");
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
        els[0].classList.remove("solo");
    }
}

function launch(id) {
    console.log("launching... " + id);
    clearProjects();
    buildLaunchedProject(id);
    /*
    let soloProject = document.getElementsByClassName(id)[0];
    soloProject.classList.add("solo");
    /*
    let soloProject = document.getElementsByClassName(id)[0];
    soloProject.classList.add("solo");
    
    let soloAnim = document.createElement("div");
    soloAnim.setAttribute("class", "launchAnim");
    soloAnim.style.position = "absolute";
    soloAnim.style.width = "calc(100% - 24px)";
    soloAnim.style.height = "calc(100% - 24px)";
    soloAnim.style.opacity = "1";
    soloAnim.style.transition = "opacity .5s";
    soloAnim.style.background = "rgba(234, 64, 237, 1.00)";
    soloAnim.style.color = "rgba(115, 251, 253, 1.00)";    
    soloAnim.innerHTML = "BLASTOFF!";
    soloProject.appendChild(soloAnim);
    */
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
        description: "hi. My name is Conrad Diao, welcome to my website. I am a person with a passion for many things: Photography, Architecture, Business, Writing, and so much more.\r\n\r\nSan Francisco, CA by way of\r\nAnn Arbor, MI by way of\r\nExeter, NH by way of\r\nSan Francisco, CA. \r\n\r\n In the past I've worked at <a href=\"https://salesforce.com\">Salesforce</a>, <a href=\"https://numie.co\">Numie</a>, <a href=\"https://poshly.com\">Poshly</a>, and <a href=\"https://qb3.org/about\">QB3</a>.",
        images: ["_DSC6153-transparent.png"],
        tag: "about",
        index: 0
    }
];
