let cols = 10;
let rows = 20;
let cells = [];
let spacing;
let fr = 40;
let tpstr = "10 PRINT CHR$(205.5+RND(1)); : GOTO 10"
let inconsolata;
let clicks = 0;
let img1, img2, img3, img4;
let images = [];
var gif;

function preload() {
	img1 = loadImage('/img1.png');
	img2 = loadImage('/img2.png');
	img3 = loadImage('/img3.png');
	img4 = loadImage('/img4.png');
	images = [img1, img2, img3, img4];
	gif = loadGif("/gif1.gif");
	inconsolata = loadFont('/inconsolata.otf');
}

function setup() {
	frameRate(fr);
	let cnv = createCanvas(windowWidth, windowHeight);
	background(0);
	stroke(255);

	spacing = floor(min(width, height) / max(cols + 2, rows + 2));
}

function draw() {
	type();

	for(let i = 0; i < 2 * rows * cols; i++) {
		let x = ((i % cols) + 1) * spacing;
		let y = floor((i / cols) + 1) * spacing;
		let rand = random(1);
		let cell = {x:x, y:y, rand:rand};
		cells.push(cell);
	}
	let frequency = 0.05;
	let red   = Math.sin(frequency*frameCount + 0) * 127 + 128;
	let green = Math.sin(frequency*frameCount + 2) * 127 + 128;
	let blue  = Math.sin(frequency*frameCount + 4) * 127 + 128;
	obj = cells[(frameCount - 1)% (rows * cols)];
	stroke('rgba(0,0,0,0)');
	strokeWeight(2);
	fill('rgba(0, 0, 0, 0.9)');
	//rect(spacing, spacing, spacing * cols, spacing * rows);
	rect(obj.x, obj.y, spacing, spacing);
	stroke(255);
	obj.rand < 0.5 ?
		line(obj.x, obj.y, obj.x + spacing, obj.y + spacing) :
		line(obj.x, obj.y + spacing, obj.x + spacing, obj.y);
		cells = [];

	fill('rgba(0,0,0,0)');
	rect(spacing, spacing, spacing * cols, spacing * rows);

if(clicks % images.length != 0) {
fill(0);
stroke(0);
strokeWeight(2);
rect((cols + 3) * spacing, 6 * spacing,
	width - (cols + 5) * spacing, height - 8 * spacing);
	image(images[clicks % images.length], (cols + 3) * spacing, 6 * spacing,
		width - (cols + 5) * spacing, (rows - 6) * spacing)
	} else {
		stroke('rgba(0,0,0,0)');
		fill(255);
		textSize(spacing / 2);
		textFont(inconsolata);
		text("I made a script in grasshopper to recreate this maze-like effect by lightpainting with the Kuka and an adafruit mircocontroller as in P1 and P2. In order to achieve the discontiuous lines, the program utilizes the accelerometer on the adafruit mircocontroller to turn off the LEDs as it retracts from the painting plane. \n\nUnfortunately, I wasn't able to demo this with the Kuka | PRC plugin, but I've gone through the process of of parametrically generating a tool path. This has been much more difficult than I imagined, and  think it goes to show the comedy of recreating such a simple and elegant piece of code in such a laborious way!",
			(cols + 3) * spacing, 6 * spacing,
			width - (cols + 5) * spacing, height - 6 * spacing);
}
			fill('rgba(0,0,0,0)');
			strokeWeight(2);
			stroke(255);
			textSize(spacing * 1.25);

			text(tpstr, (cols + 3) * spacing, 1.5 * spacing,
				width - (cols + 2) * spacing, 2 * spacing);
			stroke('rgba(0,0,0,0)');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function type() {
	fill(0);
	strokeWeight(4);
	rect((cols + 2) * spacing, spacing,
		width - (cols + 3) * spacing, rows * spacing);
	fill('rgba(0,0,0,0)');
	rect((cols + 2) * spacing, spacing,
		width - (cols + 3) * spacing, rows * spacing);
	fill(255);
	textSize(spacing / 2);
	textFont(inconsolata);
	text("A single line of BASIC code, for the Commodore 64, the program affectionately known as 10 Print serves as a historic precedent of creative computing and a time when the digital was clear. As an excercise in continuity, I've taken this program, which originally printed text to a command-line interface, and recreated in Grasshopper and on the web using P5.js.",
		(cols + 3) * spacing, 3 * spacing,
		width - (cols + 5) * spacing, height - 4 * spacing);
}

function mousePressed() {
	mouseButton == LEFT ? clicks++ : false;
	document.oncontextmenu = new Function("return false;");

}
