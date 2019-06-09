//Script for CRUD
var rIndex,
table = document.getElementById("table");
console.log(table);
actions = document.getElementsByTagName("td");
action = actions[3];
console.log(action);
// check the empty input
function checkEmptyInput()
{
var isEmpty = false,
email = document.getElementById("email").value,
role = document.getElementById("role").value,
created_at = document.getElementById("created_at").value,
updated_at = document.getElementById("updated_at").value;

if(email === ""){
alert("Invalid Number");
isEmpty = true;
}
else if(role === ""){
   alert("role Conemailt Be Empty");
   isEmpty = true;
}
else if(created_at === ""){
   alert("created_at Conemailt Be Empty");
   isEmpty = true;
}
else if(updated_at === ""){
   alert("updated_at Conemailt Be Empty");
   isEmpty = true;
}
return isEmpty;
}

// add Row
function addHtmlTableRow()
{
 // get the table by id
 // create a new row and cells
 // get value from input text
 // set the values into row cell's
 if(!checkEmptyInput()){

  var alert = document.getElementById('themmoi');
  
  alert.classList.toggle('alert');
  // call the function to set the event to the new row
  selectedRowToInput();
}
}

