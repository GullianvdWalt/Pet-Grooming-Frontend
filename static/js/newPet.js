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