const body = document.querySelector("body");
const print_button = document.querySelector("#print-button");

const printDoc = () => {
	window.print();
};

print_button.addEventListener('click' , printDoc);