fetch("./data/projects.json", {
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  })
  .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
  .then(response => {
    pushToLegend(response);
  })
  .catch(err => {
    console.error("Fetch error!");
  });

function pushToLegend(projectsJSON) {
  const legend = document.getElementById("legend");
  projectsJSON.forEach(function(d) {
    let legendItem = document.createElement("li");
    let a = document.createElement("a");
    let itemValue = d.title;
    a.innerHTML = itemValue;
    a.setAttribute("href", "#");
    a.setAttribute("onclick", `curateGallery(${itemValue.replace(" ", "-")})`);
    a.setAttribute("onclick", `curateGallery()`);

    legendItem.appendChild(a);
    legend.appendChild(legendItem);
  });
}

function curateGallery(projectTitle) {
  gallery = document.getElementById("gallery");
  gallery.style.background = "fuchsia";
  //gallery.innerHTML = projectTitle.;
}
