
var lines= new Array();
var grid = document.getElementById("Table1");
if(document.getElementById("filetocheck")==null)
{
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

  for(var j=0;j<lines.length;j++)
  {
      for (var i = 2; i < grid.rows.length; i++)
      {
          var checkbox=grid.rows[i].cells[0].firstChild;
          if(lines[j].substring(0,lines[j].length-1)==grid.rows[i].cells[3].innerText)
               {
                    checkbox.checked = true;
               }
      }
    }
  };
  reader.readAsText(file);
}
newCell.appendChild(button);

var newCell2 = newRow.insertCell();
var btn_cancel = document.createElement('input');
btn_cancel.type = 'button';
btn_cancel.id = 'cancelcheck';
btn_cancel.name = 'Cancel';
btn_cancel.value="Cancel";
btn_cancel.onclick=function()
{
  var checkboxes = grid.querySelectorAll('input[type=checkbox]')
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = false;
  }
}
newCell2.appendChild(btn_cancel);

}