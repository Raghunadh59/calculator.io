let screen = document.getElementById('result');

function addToScreen(char) {
	screen.innerHTML += char;
}

function clearScreen() {
	screen.innerHTML = "";
}

function calculate() {
	screen.innerHTML = eval(screen.innerHTML);
}