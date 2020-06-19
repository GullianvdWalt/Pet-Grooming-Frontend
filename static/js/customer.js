/* Open Modal   */

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

// When the user clicks on <span> (x), close the modal
closeModal.onclick = function() {
  modal.style.display = "none";
}

//When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

