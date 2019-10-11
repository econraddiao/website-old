function Project(name, date, description, images, tag, index) {
    this.name = name;
    this.date = date;
    this.description = description;
    this.images = images;
    this.tag = tag;
    this.index = index;
}

let projects = [
    {
        name: "Caricature Cubes",
        date: "Fall 2019",
        description: "The contemporary virtual landscape is becoming more populated and polluted every day as our digital footprints are becoming unmanageably large, and our appearance and actions online are scrutinized by more and more friends or followers or fans. Our reaction to these trends is made clear by the rapid proliferation and adoption of automated assistants designed to simplify everything: finance, diet, shopping, scheduling, communicating, Et al. We are surrendering authorship and autonomy in as many areas of our lives as possible -- both virtual and real. Our stuff, the things that we consume and surround ourselves with, one of the most authentic and indeleble markers of our personalities. Caricature Cubes is a critical project which aims to highlight the absurdity of our impending virtualization of the real.  Consumerist and vain desires are understood as merely popular idiosyncrasies and by celebrating absurd conditions, we question our aesthetic and social celebrations and frustrate the images of our personalities.",
        images: ["img/projects/UG3_X4_1.jpg", "img/projects/UG3_X4_2.jpg", "img/projects/UG3_X4_3.jpg"],
        tag: "architecture",
    },
    {
        name: "West Park House",
        date: "Winter 2018",
        description: "The West Park House, located at the enterance to Ann Arbor's centrally located park, imagines a mode of co-living among groups whose traditional domestic requirements are considered incompatible. A family of four, a couple, and two solo occupants all share a single residence. The program of this house is organized by a regular interval of rectangular volumes which contain the prinicpal domestic apparatuses for eating, sleeping, and bathing, and which also serve to break-up the footprint of each living space -- making ambiguous the nature of the varied domestic condition for each occupant. This project was first and foremost a study of the illustration style of MOS Architects.",
        images: ["img/projects/UG2_X3_1.jpg"],
        tag: "architecture",
    },
    {
        name: "Plinth Platter House",
        date: "Winter 2018",
        description: "The first architecture project of my undergrad which considered a site, the Plinth Platter House explores a raised bridge-like plinth over a work valley which showcases 4 domiciles as mutations on a common regulating grid system to suit different modes of living.",
        images: ["img/projects/UG2_X2_1.jpg", "img/projects/UG2_X2_2.jpg", "img/projects/UG2_X2_3.jpg"],
        tag: "architecture",
    },
    {
        name: "Reality, Superimposed",
        date: "Fall 2016",
        description: "Reality, Superimposed realizes the virtual by mapping a 2-dimensional projection onto 3-dimensional space. Alternatively, this relationship could be interepreted in reverse, as we consider the effects 3-dimensions have on the reality of the projected image. Once constructed, the scene was rendered permanent in hand drafted drawings, and the phenomenon was returned to 2-dimensions.",
        images: ["img/projects/202_X1_1.jpg", "img/projects/202_X1_2.jpg", "img/projects/202_X1_3.jpg", "img/projects/202_X1_4.jpg"],
        tag: "architecture",
    },
    {
        name: "Paper Cuts",
        date: "Fall 2016",
        description: "Paper Cuts is an study of the application of algorithmic subtractive manufacture of a keepsake. The book is a deeply cultral artifact, filled with humanity's stories and which serves as a phisical memory through additive manufacturing, specifically printing. This book offers a new paradigm of communication represents oncoming technological change. The book was designed parametrically by sampling random noise to generate seeds which served as the centroid of each cell which radiates to form a voronoi pattern. This pattern was copied in negative and positive along the head and tail of the book, adding to its complexity in fabrication.",
        images: ["img/projects/202_X3_1.jpg", "img/projects/202_X3_2.jpg", "img/projects/202_X3_3.jpg", "img/projects/202_X3_4.jpg"],
        tag: "architecture",
    },
    {
        name: "Villa Sul Lago Study",
        date: "Fall 2018",
        description: "A precedent study of Giuseppe Terragni's unbuilt Villa Sul Lago. The only orignal documentation of the project were the plans and elevations, lacking any relationship to site, or labeling of program. This made for a very interesting study as we were left to interpret Terragni's disposition towards the doemstic condition with nothing but plans, and the legacy of his work as the architect of the Casa del Fascio.",
        images: ["img/projects/202_X4_1.jpg", "img/projects/202_X4_2.jpg", "img/projects/202_X4_3.jpg", "img/projects/202_X4_5.jpg", "img/projects/202_X4_6.jpg", "img/projects/202_X4_7.jpg"],
        tag: "photography",
    },
    {
        name: "hi.",
        date: "1997",
        description: "My name is Conrad Diao, thanks for stopping by. I hope you like some of my work on display.\r\n\r\nSan Francisco, CA by way of\r\nAnn Arbor, MI by way of\r\nExeter, NH by way of\r\nSan Francisco, CA. \r\n\r\n In the past I've worked at <a href=\"https://salesforce.com\">Salesforce</a>, <a href=\"https://numie.co\">Numie</a>, <a href=\"https://poshly.com\">Poshly</a>, and <a href=\"https://qb3.org/about\">QB3</a>.",
        images: ["img/headshot-full.png"],
        tag: "about",
    }
];
