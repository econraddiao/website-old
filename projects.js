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
        images: ["img/large/UG3_X4_1.jpg", "img/large/UG3_X4_2.jpg", "img/large/UG3_X4_3.jpg"],
        tag: "architecture",
    },
    {
        name: "West Park House",
        date: "Winter 2018",
        description: "The contemporary virtual landscape is becoming more populated and polluted every day as our digital footprints are becoming unmanageably large, and our appearance and actions online are scrutinized by more and more friends or followers or fans. Our reaction to these trends is made clear by the rapid proliferation and adoption of automated assistants designed to simplify everything: finance, diet, shopping, scheduling, communicating, Et al. We are surrendering authorship and autonomy in as many areas of our lives as possible -- both virtual and real. Our stuff, the things that we consume and surround ourselves with, one of the most authentic and indeleble markers of our personalities. Caricature Cubes is a critical project which aims to highlight the absurdity of our impending virtualization of the real.  Consumerist and vain desires are understood as merely popular idiosyncrasies and by celebrating absurd conditions, we question our aesthetic and social celebrations and frustrate the images of our personalities.",
        images: ["img/large/UG2_X3_1.jpg"],
        tag: "architecture",
    },
    {
        name: "Plinth Platter House",
        date: "Winter 2018",
        description: "The contemporary virtual landscape is becoming more populated and polluted every day as our digital footprints are becoming unmanageably large, and our appearance and actions online are scrutinized by more and more friends or followers or fans. Our reaction to these trends is made clear by the rapid proliferation and adoption of automated assistants designed to simplify everything: finance, diet, shopping, scheduling, communicating, Et al. We are surrendering authorship and autonomy in as many areas of our lives as possible -- both virtual and real. Our stuff, the things that we consume and surround ourselves with, one of the most authentic and indeleble markers of our personalities. Caricature Cubes is a critical project which aims to highlight the absurdity of our impending virtualization of the real.  Consumerist and vain desires are understood as merely popular idiosyncrasies and by celebrating absurd conditions, we question our aesthetic and social celebrations and frustrate the images of our personalities.",
        images: ["img/large/UG2_X2_1.jpg", "img/large/UG2_X2_2.jpg", "img/large/UG2_X2_3.jpg"],
        tag: "architecture",
    },
    {
        name: "Reality, Superimposed",
        date: "Fall 2016",
        description: "Paper Cuts is an study of the application of algorithmic subtractive manufacture of a keepsake. The book is a deeply cultral artifact, filled with humanity's stories and which serves as a phisical memory through additive manufacturing, specifically printing. This book offers a new paradigm of communication represents oncoming technological change. The book was designed parametrically by sampling random noise to generate seeds which served as the centroid of each cell which radiates to form a voronoi pattern. This pattern was copied in negative and positive along the head and tail of the book, adding to its complexity in fabrication.",
        images: ["img/large/202_X1_1.jpg", "img/large/202_X1_2.jpg", "img/large/202_X1_3.jpg", "img/large/202_X1_4.jpg"],
        tag: "architecture",
    },
    {
        name: "Paper Cuts",
        date: "Fall 2016",
        description: "Paper Cuts is an study of the application of algorithmic subtractive manufacture of a keepsake. The book is a deeply cultral artifact, filled with humanity's stories and which serves as a phisical memory through additive manufacturing, specifically printing. This book offers a new paradigm of communication represents oncoming technological change. The book was designed parametrically by sampling random noise to generate seeds which served as the centroid of each cell which radiates to form a voronoi pattern. This pattern was copied in negative and positive along the head and tail of the book, adding to its complexity in fabrication.",
        images: ["img/large/202_X3_1.jpg", "img/large/202_X3_2.jpg", "img/large/202_X3_3.jpg", "img/large/202_X3_4.jpg"],
        tag: "architecture",
    },
    {
        name: "Villa Sul Lago Study",
        date: "Fall 2018",
        description: "Bluh Blih",
        images: ["img/large/202_X4_1.jpg", "img/large/202_X4_2.jpg", "img/large/202_X4_3.jpg", "img/large/202_X4_5.jpg", "img/large/202_X4_6.jpg", "img/large/202_X4_7.jpg"],
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
