// Customer Edit Modal
// Get the modal
var modal = document.getElementById("customer-details-modal");

// Get the button that opens the modal
var button = document.getElementById("edit-button");

//Get the close modal button
var closeModal = document.getElementById("close-button");

// When the user clicks the button, open the modal 
button.onclick = function() {
  modal.style.display = "block";
}

// Close the Modal 
closeModal.onclick = function() {
  modal.style.display = "none";
}

//When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/* Add New Pet Alert*/
function addPetFunction(){
  alert("Enter Pet Details In Highlighted Fields.\n"
         + "Click The Save Button When Done.");
 document.getElementsByClassName("pet-input");
  /* Hilighted Fields */
  document.getElementById("pet-name-input").style.backgroundColor = "hotpink";
  document.getElementById("pet-input-breed").style.backgroundColor = "hotpink";
  document.getElementById("gender-male-label").style.color = "hotpink";
  document.getElementById("gender-female-label").style.color = "hotpink";
}

/*Reset Highlited Fields*/ 
function resetNameFunction(){
  document.getElementById("pet-name-input").style.backgroundColor = "white";
}

function resetBreedFunction(){
  document.getElementById("pet-input-breed").style.backgroundColor = "white";
}

function resetGenderFunction(){
  document.getElementById("gender-male-label").style.color = "#505050";
  document.getElementById("gender-female-label").style.color = "#505050";
}
    

//Delete Modal

//Display Delete Modal
// Get the modal
var deleteModal  = document.getElementById("delete-modal");

// Get the button that opens the modal
var openDeleteModal = document.getElementById("delete-button");

//Get the close modal button
var closeDeleteModal = document.getElementById("customer-delete-cancel");

// When the user clicks the button, open the modal 
openDeleteModal.onclick = function() {
  deleteModal.style.display = "block";
}
closeDeleteModal.onclick = function() {
  deleteModal.style.display = "none";
}

