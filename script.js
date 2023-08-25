const contentBoard = document.getElementById("contentBoard");
let size = 16;
let squareSize = size * size;

for (let i = 0; i < squareSize; i++) {
	let pixel = document.createElement("div");
	pixel.classList.add("pixel");
	contentBoard.appendChild(pixel);
}

const pixels = document.querySelectorAll(".pixel");

function hoverChange(pixel) {
	pixel.addEventListener("mouseover", (event) => {
		event.target.style = `background-color: #${Math.floor(
			Math.random() * 16999000
		).toString(16)}`;
	});
}

pixels.forEach((pixel) => hoverChange(pixel));
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
	output.innerHTML = this.value;
	resize(this.value);
};

function resize(size) {
	squareSize = size * size;
	contentBoard.replaceChildren("");
	for (let i = 0; i < squareSize; i++) {
		let pixel = document.createElement("div");
		pixel.classList.add("pixel");
		hoverChange(pixel);
		contentBoard.appendChild(pixel);
	}
	contentBoard.setAttribute(
		"style",
		`grid-template-columns: repeat(${size}, auto); grid-template-rows: repeat(${size}, auto)`
	);
}
