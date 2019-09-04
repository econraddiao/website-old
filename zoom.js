// JavaScript Document        
/*
const artworks = document.getElementsByClassName("artwork")
let zoomImg = document.getElementsByClassName("zoom")[0].children[0]
let zoomElem = document.getElementsByClassName("zoom")[0]
const zoom = (e) => {
    console.log(event.target)
    url = event.target.src
    zoomElem.style.background = "url(" + url + ")"
    zoomElem.style.backgroundSize = "contain"
    zoomElem.style.backgroundRepeat = "no-repeat"
    zoomElem.style.backgroundPosition = "center"
    zoomElem.classList.add("zoomShow")
    document.getElementsByClassName("scrolling-wrapper")[0].classList.add("hidden")
}

const unZoom = (e) => {
    console.log(event.target)
    zoomElem.classList.remove("zoomShow")
    document.getElementsByClassName("scrolling-wrapper")[0].classList.remove("hidden")
}

zoomElem.addEventListener("click", unZoom, false)

for (var i = 0; i < artworks.length; i++) {
    artworks[i].addEventListener("click", zoom, false)
}
*/