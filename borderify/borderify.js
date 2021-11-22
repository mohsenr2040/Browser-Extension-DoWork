//document.body.style.border = "15px solid red";


var file = './mydata.txt';
var reader = new FileReader();
reader.onload = function(progressEvent){    
  var fileContentArray = this.result.split(/\r\n|\n/);
  for(var line = 0; line < lines.length-1; line++){
    console.log(line + " --> "+ lines[line]);
  }






//var checkboxes = document.querySelectorAll('input[type=checkbox]')
var grid = document.getElementById("Table1");
var checkboxes = grid.querySelectorAll('input[type=checkbox]')

for (var i = 0; i < checkboxes.length; i++) {
    var row = checkboxes[i].parentNode.parentNode;
    if(row.cells[3].innerHTML=="India")
        {
          checkboxes[i].checked = true;

         }

  
  //array.push(checkboxes[i].value)
}
