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


// display selected row data into input text
function selectedRowToInput()
{

for(var i = 1; i < table.rows.length; i++)
{
table.rows[i].onclick = function()
{
       // get the seected row index
       rIndex = this.rowIndex;
       console.log(rIndex);
       document.getElementById("number").value = this.cells[0].innerHTML;
       document.getElementById("role").value = this.cells[1].innerHTML;
       document.getElementById("created_at").value = this.cells[2].innerHTML;
       document.getElementById("updated_at").value = this.cells[3].innerHTML;
      };
     }
    }
    selectedRowToInput();

    function editHtmlTbleSelectedRow()
    {
      var number = document.getElementById("number").value,
          role = document.getElementById("role").value,
          created_at = document.getElementById("created_at").value,
          updated_at = document.getElementById("updated_at").value;   
    	if(!checkEmptyInput()){
    		table.rows[rIndex].cells[0].innerHTML = number;
        table.rows[rIndex].cells[1].innerHTML = role;
        table.rows[rIndex].cells[2].innerHTML = created_at;
        table.rows[rIndex].cells[3].innerHTML = updated_at;
    	}
    }

    function removeSelectedRow()
    {
 {
     table.deleteRow(rIndex);
     // clear input text
     document.getElementById("number").value = "";
     document.getElementById("role").value = "";
     document.getElementById("created_at").value = "";
     document.getElementById("updated_at").value = "";
 }
}