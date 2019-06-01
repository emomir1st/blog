//Script for CRUD
var rIndex,
table = document.getElementById("table");
console.log(table);

// check the empty input
function checkEmptyInput()
{
var isEmpty = false,
role = document.getElementById("role").value;

if(role === ""){
alert("First Name Connot Be Empty");
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
 	role = document.getElementById("role").value;

 	cell1.innerHTML = role;
 // call the function to set the event to the new row
 selectedRowToInput();
}
}

// display selected row data into input text
function selectedRowToInput()
{

for(var i = 1; i < table.rows.length; i++)
{
table.rows[i].onclick = function()
{
       // get the seected row index
       rIndex = this.rowIndex;
       document.getElementById("role").value = this.cells[0].innerHTML;

      };
     }
    }
    selectedRowToInput();

    function editHtmlTbleSelectedRow()
    {
    	var role = document.getElementById("role").value;
    	if(!checkEmptyInput()){
    		table.rows[rIndex].cells[0].innerHTML = role;
    	}
    }

    function removeSelectedRow()
    {
    	table.deleteRow(rIndex);
 // clear input text
 document.getElementById("role").value = "";
}