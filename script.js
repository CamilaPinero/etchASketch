const contentBoard = document.getElementById("contentBoard");
let size = 16;
let squareSize = size * size;
let mode = "grayscale";

for (let i = 0; i < squareSize; i++) {
	let pixel = document.createElement("div");
	pixel.classList.add("pixel");
	contentBoard.appendChild(pixel);
}

const pixels = document.querySelectorAll(".pixel");
const eraser = document.getElementById("eraser");
const colors = document.getElementById("colors");
const grayscale = document.getElementById("grayscale");

function hoverChangeColors(pixel) {
	pixel.addEventListener("mouseover", (event) => {
		event.target.style = `background-color: #${Math.floor(
			Math.random() * 16999000
		).toString(16)}`;
	});
}

function hoverChangeGrayscale(pixel) {
	let opacity = 0.1;
	pixel.addEventListener("mouseover", (event) => {
		event.target.style = `background-color: red;`;
		event.target.style.opacity = `${(opacity += 0.1)}`;
	});
	eraser.addEventListener("click", () => (opacity = 0.1));
}

grayscale.addEventListener("click", () => {
	mode = "grayscale";
	resetPixels();
});
colors.addEventListener("click", () => {
	mode = "colors";
	resetPixels();
});

function hoverChange(pixel) {
	if (mode === "colors") {
		hoverChangeColors(pixel);
	} else {
		hoverChangeGrayscale(pixel);
	}
}

pixels.forEach((pixel) => hoverChange(pixel));

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
	output.innerHTML = this.value;
	resize(this.value);
};

function resetPixels() {
	contentBoard.replaceChildren("");
	for (let i = 0; i < squareSize; i++) {
		let pixel = document.createElement("div");
		pixel.classList.add("pixel");
		hoverChange(pixel);
		contentBoard.appendChild(pixel);
	}
}

function resize(size) {
	squareSize = size * size;
	resetPixels();
	contentBoard.setAttribute(
		"style",
		`grid-template-columns: repeat(${size}, auto); grid-template-rows: repeat(${size}, auto)`
	);
}

eraser.addEventListener("click", () => {
	let pixels = document.querySelectorAll(".pixel");
	pixels.forEach((pixel) => (pixel.style = `background-color: none;`));
});
