let bdi = document.getElementById('nav-heading-output');
const outputs = [
  ["__marketer", "blue"],
  ["_developer", "fuchsia"],
  ["_architect", "grey"],
  ["____singer", "red"],
  ["____artist", "green"],
  ["_____skier", "gainsboro"],
  ["__futurist", "coral"],
  ["shitposter", "saddlebrown"]
];

setTimeout(func, 0);

function func() {
  let i = Math.floor(Math.random() * outputs.length);
  output = outputs[i][0];
  bdi.style.backgroundColor = outputs[i][1];
  bdi.innerHTML = "&nbsp;" + output + "&nbsp;";
  setTimeout(func, 150);
}
