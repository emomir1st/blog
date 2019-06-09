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
   alert("Category Cannot Be Empty");
   isEmpty = true;
}
else if(mode === ""){
   alert("Publication Mode Cannot Be Empty");
   isEmpty = true;
}
else if(co === ""){
   alert("Content Cannot Be Empty");
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
       document.getElementById("no").value = this.cells[0].innerHTML;
       document.getElementById("cate").value = this.cells[1].innerHTML;
       document.getElementById("mode").value = this.cells[2].innerHTML;
       document.getElementById("co").value = this.cells[3].innerHTML;
      };
     }
    }
    selectedRowToInput();

    function editHtmlTbleSelectedRow()
    {
      var no = document.getElementById("no").value,
          cate = document.getElementById("cate").value,
          mode = document.getElementById("mode").value,
         co = document.getElementById("co").value;   

    	if(!checkEmptyInput()){
    		table.rows[rIndex].cells[0].innerHTML = no;
        table.rows[rIndex].cells[1].innerHTML = cate;
        table.rows[rIndex].cells[2].innerHTML = mode;
        table.rows[rIndex].cells[3].innerHTML = co;
        var alert = document.getElementById('sua');
        alert.classList.toggle('huy');
    	}
      
    }

    function removeSelectedRow()
    {
 {
     table.deleteRow(rIndex);
     // clear input text
     document.getElementById("no").value = "";
     document.getElementById("cate").value = "";
     document.getElementById("mode").value = "";
     document.getElementById("co").value = "";
 }
 var alert = document.getElementById('xoa');
      alert.classList.toggle('huy');
}