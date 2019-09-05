// JavaScript Document
function demo() {
    console.log("demoing...")
    let item1 = document.getElementsByClassName("item1");
    let item2 = document.getElementsByClassName("item2");
    console.log(item1[4].clientHeight);
    console.log(item1[4].getAttribute("style", "height"));
    console.log(item2[4].clientHeight);
}


function matchHeight() {
    let item1 = document.getElementsByClassName("item1")[0];
    let item2 = document.getElementsByClassName("item2")[0];
    while(true) {
            item2.style.height = item1.style.height;
    }
}