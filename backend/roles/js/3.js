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
no = document.getElementById("no").value,
roleName = document.getElementById("roleName").value,
time = document.getElementById("time").value,
day = document.getElementById("day").value;

if(no === ""){
alert("Invalid Number");
isEmpty = true;
}
else if(roleName === ""){
   alert("RoleName Connot Be Empty");
   isEmpty = true;
}
else if(time === ""){
   alert("Time Connot Be Empty");
   isEmpty = true;
}
else if(day === ""){
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
  no = document.getElementById("no").value,
 	roleName = document.getElementById("roleName").value;
  time = document.getElementById("time").value,
  day = document.getElementById("day").value;
  // console.log(no);
  // console.log(roleName);
  cell1.innerHTML = no; 
 	cell2.innerHTML = roleName;
  cell3.innerHTML = time;
  cell4.innerHTML = day;
  cell5.innerHTML = "<a class='btn btn-primary'><i class='fas fa-pencil-alt' style='color:white'></i></a> <a class='btn btn-danger'><i class='fas fa-trash-alt' style='color:white'></i></a>";
  var alert = document.getElementById('themmoi');
  alert.classList.toggle('huy');
 // call the function to set the event to the new row
 selectedRowToInput();
}
}

