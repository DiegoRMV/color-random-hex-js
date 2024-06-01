const display = document.querySelector("span");
const btnRandom = document.querySelector("button");

console.log(display);
console.log(btnRandom);

const generateRandom = () => {
	const digits = "0123456789ABCDEF";

	let hexaRandom = "#";

	for (let i = 0; i < 6; i++) {
		hexaRandom += digits[Math.floor(Math.random() * 16)];
	}
	return hexaRandom;
};

btnRandom.addEventListener("click", () => {
	const colorRandom = generateRandom();

	// display.innerText = colorRandom;
	display.textContent = colorRandom;
	document.body.style.backgroundColor = colorRandom;
});
