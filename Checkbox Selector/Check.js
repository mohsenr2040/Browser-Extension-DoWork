
var lines= new Array();
var grid = document.getElementById("Table1");

var newRow = grid.insertRow(0);

// Insert a cell at the end of the row
var newCell = newRow.insertCell();
var button = document.createElement('input');
button.type = 'file';
button.id = 'filetocheck';
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
    lines[lines.length-1]=lines[lines.length-1]+' ';
    
  var checkboxes = grid.querySelectorAll('input[type=checkbox]')

  for(var j=0;j<lines.length;j++)
  {
      for (var i = 0; i < checkboxes.length; i++) {
          var row = checkboxes[i].parentNode.parentNode;
          if(lines[j].substring(0,lines[j].length-1)==row.cells[3].innerText)
               {
                    checkboxes[i].checked = true;
               }
      }
    }
  };
  reader.readAsText(file);
}

newCell.appendChild(button);
