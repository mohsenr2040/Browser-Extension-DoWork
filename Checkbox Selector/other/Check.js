//document.body.style.border = "15px solid red";


var lines= new Array();

var grid = document.getElementById("FlexGrid");
if(document.getElementById("filetocheck")==null)
{
  var newRow = grid.insertRow(0);
}
// Insert a cell at the end of the row
var newCell = newRow.insertCell();
var button = document.createElement('input');
button.type = 'file';
button.id = 'filetocheck';
button.name = 'file';
button.style.with= '70px';
button.style.backgroundColor='9ce1f2';
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


     var index=0;
     for(var x=0;x< grid.rows[1].cells.length;x++)
     {
         if(grid.rows[1].cells[x].innerText=="کد/شناسه ملی ")
         {
             index=x;
         }
     }
    var counter=0;

     var first=grid.rows[2].cells[7].innerText;
     var last=grid.rows[grid.rows.length -1].cells[7].innerText;
  
     var first_IL = -1;
     var last_IL = -1 ;
     for (var i = 0; i < lines.length; i++)
         {
             if (first <= lines[i] && first_IL==-1)
             {
                first_IL=i;
             }
             if(last<=lines[i] && last_IL==-1)
             {
               last_IL=i;
             }
             if(i==lines.length-1 && last_IL==-1)
             {
              last_IL=lines.length-1;
             }
             if(first_IL!=-1 && last_IL!=-1)
             {
               break;
             }
         }

        // alert(first_IL);
         //alert(last_IL);


      for (var j = first_IL; j <= last_IL;j++)
    {
        for (var i = 2; i < grid.rows.length; i++)
        {
          var checkbox=grid.rows[i].cells[0].firstChild;
          if(grid.rows[i].cells[7].innerText=="")
            continue;
            if(grid.rows[i].cells[7].innerText==lines[j].substring(0,lines[j].length-1))
                {
                  checkbox.checked = true;
                  counter=counter+1;
                  //  alert(counter);

                }
         }
         if(j==last_IL)
         {
            alert(counter);
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

// var div=document.getElementById("CPC_urvFC_Cr_Create2_lblF");

// var table = document.createElement('table');
// var row =document.createElement('tr');
// var cell0=document.createElement('td');
// var cell1=document.createElement('td');

// cell0.appendChild(button);
// cell1.appendChild(btn_cancel);

// row.appendChild(cell0);
// row.appendChild(cell1);
// table.appendChild(row);
// div.appendChild(table);
//}

