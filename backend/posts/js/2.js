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
title = document.getElementById("title").value,
cate = document.getElementById("cate").value,
mode = document.getElementById("mode").value,
content = document.getElementById("content").value,
file = document.getElementById("file").value;

if(title === ""){
alert("Title Cannot Be Empty");
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
else if(content === ""){
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
       document.getElementById("title").value = this.cells[0].innerHTML;
       document.getElementById("cate").value = this.cells[1].innerHTML;
       document.getElementById("mode").value = this.cells[2].innerHTML;
       document.getElementById("content").value = this.cells[3].innerHTML;
      document.getElementById("file").value = this.cells[4].innerHTML;
      };
     }
    }
    selectedRowToInput();

    function editHtmlTbleSelectedRow()
    {
      var title = document.getElementById("title").value,
          cate = document.getElementById("cate").value,
          mode = document.getElementById("mode").value,
         content = document.getElementById("content").value;   
         file = document.getElementById("file").value;

    	if(!checkEmptyInput()){
    		table.rows[rIndex].cells[0].innerHTML = title;
        table.rows[rIndex].cells[1].innerHTML = cate;
        table.rows[rIndex].cells[2].innerHTML = mode;
        table.rows[rIndex].cells[3].innerHTML = content;
    	}
      var alert = document.getElementById('sua');
      alert.classList.toggle('huy');
    }

    function removeSelectedRow()
    {
 {
     table.deleteRow(rIndex);
     // clear input text
     document.getElementById("title").value = "";
     document.getElementById("cate").value = "";
     document.getElementById("mode").value = "";
     document.getElementById("content").value = "";
     document.getElementById("file").value = "";
 }
 var alert = document.getElementById('xoa');
      alert.classList.toggle('huy');
}