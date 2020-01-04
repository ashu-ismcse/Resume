// ------------ Print Function ---------------------------------//
// fixed position button for saving resume as pdf
const print_button = document.querySelector("#print-button");

// window.print() will prompt to save the resume
print_button.addEventListener('click' , () => {
	window.print();
});

//-------------- Print Function --------------------------------//

const body = document.querySelector(".body-container");
// fixed position button for making content editable
const edit_button = document.querySelector("#edit-button");
let editableContent = null;
let isEditPossible = false;

// Make the content of resume editable
edit_button.addEventListener('click' , () => {
	if(isEditPossible == false) {
		isEditPossible = true;
		edit_button.innerHTML = `
		<p class="row-item">
		<i class="fa fa-save"></i>Save
		</p>
		`;
	} else {
		// if any content is editable then make contentEditable false
		body.contentEditable = "false";
		isEditPossible = false;
		edit_button.innerHTML = `
		<p class="row-item">
		<i class="fa fa-edit"></i>
		Edit</p>
		`;
	}
});

body.addEventListener("click" , () => {
	if(isEditPossible == false) {
		return;
	}

	body.contentEditable = "true";
});