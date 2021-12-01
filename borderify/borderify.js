//document.body.style.border = "15px solid red";


var lines= new Array();

var grid = document.getElementById("Table1");
var newRow = grid.insertRow(0);

// Insert a cell at the end of the row
var newCell = newRow.insertCell();
var button = document.createElement('input');
button.type = 'file';
button.id = 'file';
button.name = 'file';
button.onchange=function()
{
  var file = this.files[0];

  var reader = new FileReader();
  reader.onload = function(progressEvent){
    // Entire file
    console.log(this.result);

    // By lines
     lines = this.result.split('\n');
    for(var line = 0; line < lines.length; line++){
          alert(lines[line]);
    }
  };
  reader.readAsText(file);

  var checkboxes = grid.querySelectorAll('input[type=checkbox]')
alert("1");
for (var i = 0; i < checkboxes.length; i++) {
    var row = checkboxes[i].parentNode.parentNode;
    alert(lines[0]);
    if(lines[0]=="France")
        {
          checkboxes[i].checked = true;

        }

  
  //array.push(checkboxes[i].value)
      }
}
newCell.appendChild(button);






//var items = document.getElementsByName('acs');
//for (var i = 0; i < items.length; i++) {
//    if (items[i].type == 'checkbox')
//        items[i].checked = true;