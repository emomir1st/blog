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
cate = document.getElementById("cate").value,
co = document.getElementById("co").value,
mode = document.getElementById("mode").value;

if(no === ""){
alert("no Cannot Be Empty");
isEmpty = true;
}
else if(cate === ""){
   alert("Category Connot Be Empty");
   isEmpty = true;
}
else if(mode === ""){
   alert("Publication Mode Connot Be Empty");
   isEmpty = true;
}
else if(co === ""){
   alert("Content Cannot Be Empty");
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
  cell6 = newRow.insertCell(5)
  
  addno = document.getElementById("no").value,
 	addCate = document.getElementById("cate").value,
  addMode = document.getElementById("mode").value,
  addco = document.getElementById("co").value;
  // console.log(no);
  // console.log(roleName);
  cell1.innerHTML = "2"
 	cell2.innerHTML = addno;
  cell3.innerHTML = addMode;
  cell4.innerHTML = addCate;
  cell5.innerHTML = addco;
  cell6.innerHTML = "<a class='btn btn-primary'><i class='fas fa-pencil-alt' style='color:white'></i></a> <a class='btn btn-danger'><i class='fas fa-trash-alt' style='color:white'></i></a>";
  var alert = document.getElementById('themmoi');
  alert.classList.toggle('huy');
 // call the function to set the event to the new row
 selectedRowToInput();
}
}

