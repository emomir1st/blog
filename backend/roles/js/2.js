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
number = document.getElementById("number").value,
role = document.getElementById("role").value,
created_at = document.getElementById("created_at").value,
updated_at = document.getElementById("updated_at").value;

if(role === ""){
alert("Role Name Connot Be Empty");
isEmpty = true;
}
else if(number === ""){
   alert("Number Connot Be Empty");
   isEmpty = true;
}
else if(created_at === ""){
   alert("Time Connot Be Empty");
   isEmpty = true;
}
else if(updated_at === ""){
   alert("Day Connot Be Empty");
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
 	var newRow = table.insertRow(table.length),
  cell1 = newRow.insertCell(0),
 	cell2 = newRow.insertCell(1),
  cell3 = newRow.insertCell(2),
  cell4 = newRow.insertCell(3),
  cell5 = newRow.insertCell(4),
  number = document.getElementById("number").value,
 	role = document.getElementById("role").value;
  created_at = document.getElementById("created_at").value,
  updated_at = document.getElementById("updated_at").value;
  cell1.innerHTML = number; 
 	cell2.innerHTML = role;
  cell3.innerHTML = created_at;
  cell4.innerHTML = updated_at;
  cell5.innerHTML = "<a class='btn btn-primary'><i class='fas fa-pencil-alt' style='color:white'></i></a> <a class='btn btn-danger'><i class='fas fa-pencil-alt' style='color:white'></i></a>";
 // call the function to set the event to the new row
 // selectedRowToInput();
}
}

// // display selected row data into input text
// function selectedRowToInput()
// {

// for(var i = 1; i < table.rows.length; i++)
// {
// table.rows[i].onclick = function()
// {
//        // get the seected row index
//        rIndex = this.rowIndex;
//        document.getElementById("role").value = this.cells[0].innerHTML;

//       };
//      }
//     }
//     selectedRowToInput();

//     function editHtmlTbleSelectedRow()
//     {
//     	var role = document.getElementById("role").value;
//     	if(!checkEmptyInput()){
//     		table.rows[rIndex].cells[0].innerHTML = role;
//     	}
//     }

//     function removeSelectedRow()
//     {
//     	table.deleteRow(rIndex);
//  // clear input text
//  document.getElementById("role").value = "";
// }