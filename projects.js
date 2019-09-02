function Project(name_in, date_in, description_in, images_in) {
    this.name = name_in;
    this.date = date_in;
    this.description = description_in;
    this.images = images_in;
}

function build(proj, proj_num) {
    console.log("building project");
    let thumbnail = proj.images.split(' ', 1)[0];
    let mainContainer = document.getElementById("main-container");
    let projectTemplate = document.getElementById("project-grid-container");
    
    let newProject = document.createElement("div");
    newProject.setAttribute("id", "project-grid-container");
    newProject.setAttribute("tag", proj_num);
    mainContainer.appendChild(newProject);
    
    let item1 = document.createElement("div");
    item1.setAttribute("id", "item1");
    newProject.appendChild(item1);
    
    let item2 = document.createElement("div");
    item2.setAttribute("id", "item2");
    newProject.appendChild(item2);
    
    let img = document.createElement("img");
    img.setAttribute("src", "img/" + thumbnail);
    item1.appendChild(img);

    let h1 = document.createElement("h1");
    h1.innerHTML = proj.name;
    item2.appendChild(h1);
    
    let p = document.createElement("p");
    p.innerHTML = proj.description;
    item2.appendChild(p);
    
    let button = document.createElement("div");
    button.setAttribute("id", "project-button");
    button.innerHTML = "Launch Project";
    item2.appendChild(button);
}

function populateProjects() {
    let i;
    for(i = 0; i < projects.length; i++) {
        build(projects[i],i);
    }
}

function launchProject() {
    console.log(projects[0]);
    build(projects[0], 0);
}

let projects = [
    {
        name: "Paper Cuts",
        date: "Fall 2016",
        description: "Paper Cuts is an study of the application of algorithmic subtractive manufacture of a keepsake. The book is a deeply cultral artifact, filled with humanity's stories and which serves as a phisical memory through additive manufacturing, specifically printing. This book offers a new paradigm of communication represents oncoming technological change. The book was designed parametrically by sampling random noise to generate seeds which served as the centroid of each cell which radiates to form a voronoi pattern. This pattern was copied in negative and positive along the head and tail of the book, adding to its complexity in fabrication.",
        images: "202_X1_1.jpg 202_X1_2.jpg 202_X1_3.jpg 202_X1_4.jpg"
    },
    {
        name: "American Classics",
        date: "Fall 2017",
        description: "Blah Blah",
        images: "_DSC3506.jpg _DSC2950.jpg"
    },
    {
        name: "Non-American Non-Classics ",
        date: "Fall 2018",
        description: "Bluh Blih",
        images: "_DSC2950.jpg _DSC3506.jpg"
    },
    {
        name: "Caricature Cubes",
        date: "Fall 2019",
        description: "The contemporary virtual landscape is becoming more populated and polluted every day as our digital footprints are becoming unmanageably large, and our appearance and actions online are scrutinized by more and more friends or followers or fans. Our reaction to these trends is made clear by the rapid proliferation and adoption of automated assistants designed to simplify everything: finance, diet, shopping, scheduling, communicating, Et al. We are surrendering authorship and autonomy in as many areas of our lives as possible -- both virtual and real. Our stuff, the things that we consume and surround ourselves with, one of the most authentic and indeleble markers of our personalities. Caricature Cubes is a critical project which aims to highlight the absurdity of our impending virtualization of the real.  Consumerist and vain desires are understood as merely popular idiosyncrasies and by celebrating absurd conditions, we question our aesthetic and social celebrations and frustrate the images of our personalities.",
        images: "UG3_X4_1.jpg poop"
    }
];