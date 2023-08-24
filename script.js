const contentBoard = document.getElementById("contentBoard");
let size = 16;
let squareSize = size * size;

for (let i = 0; i < squareSize; i++) {
	let pixel = document.createElement("div");
	pixel.classList.add("pixel");

	contentBoard.appendChild(pixel);
}

const pixels = document.querySelectorAll(".pixel");
pixels.forEach((pixel) =>
	pixel.addEventListener("mouseover", (event) => {
		event.target.classList.add("hover");
	})
);

document.getElementById("resize").addEventListener("click", resize);

function resize() {
	size = parseInt(prompt("choose size"));
	squareSize = size * size;
	contentBoard.replaceChildren("");
	for (let i = 0; i < squareSize; i++) {
		let pixel = document.createElement("div");
		pixel.classList.add("pixel");
		pixel.addEventListener("mouseover", (event) => {
			event.target.classList.add("hover");
		});
		contentBoard.appendChild(pixel);
	}
	contentBoard.setAttribute(
		"style",
		`grid-template-columns: repeat(${size}, auto); grid-template-rows: repeat(${size}, auto)`
	);
}
