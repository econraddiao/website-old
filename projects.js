
console.log("fetching projects JSON...");

let object;

fetch("./data/projects.json", {
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  })
  .then(response => {
    const projectsJSON = response.json();
    return projectsJSON;
  })
  .then(json => {
    object = json;
    console.log(json);
    pushToLegend(json);

  })
  .catch(err => {
    console.error("Fetch error!");
  });

function pushToLegend(projectsJSON) {
  console.log("populating legend...")
  const legend = document.getElementById("legend");
  projectsJSON.forEach(function(d) {
    let legendItem = document.createElement("li");
    let a = document.createElement("a");
    let itemValue = d.title;
    a.innerHTML = itemValue;
    a.setAttribute("href", "#");
    a.setAttribute("onclick", `curateGallery("${itemValue}")`);

    legendItem.appendChild(a);
    legend.appendChild(legendItem);
  });
}

function curateGallery(projectTitle) {
  console.log("curating gallery...");
  gallery = document.getElementById("gallery");
  gallery.style.background = "fuchsia";
  console.log(projectTitle);
  gallery.innerHTML = objectToString(getData(projectTitle));
}

function getData(projectTitle) {
  console.log(object);
  for (let i = 0; i < object.length; i++) {
    console.log(object[i].title);
    if(object[i].title === projectTitle) return object[i];
  }
}

function objectToString(thing) {
  return `title: ${thing.title}
          year: ${thing.year}
          description: ${thing.description}
          images: ${thing.images}`
}
