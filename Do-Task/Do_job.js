
var data;
var data2="1271956020,";
var index=0;

if(window.location.href.startsWith("http://ittms.tax.gov.ir/Pages/AuditorS2/T91RemainViewSolr/20/1395"))
{

  var lines;
//   var file = this.files[0];

//   var reader = new FileReader();
//   reader.onload = function(progressEvent){
//     // Entire file
//     console.log(this.result);

//     // By lines
//     lines = this.result.split('\n');
//     lines[lines.length-1]=lines[lines.length-1]+' ';
//   }
//   reader.readAsText(file);

// alert(lines[0]);


  var data_=new Array();
  data_=data2.split(',');
//var fileDisplayArea = document.getElementById('fileDisplayArea');
                function readTextFile(file)
                {
                  var contentType = "application/x-www-form-urlencoded; charset=utf-8";
                  alert("1");
                    var rawFile = new XMLHttpRequest();
                    rawFile.open("GET", file, true);
                     rawFile.setRequestHeader('Content-type', contentType);
                     if (rawFile.overrideMimeType) rawFile.overrideMimeType(contentType);
                     if(file!=null)
                     {
                      alert(file.value);
                    }
                   alert("2");


                    rawFile.onreadystatechange = function ()
                    {
                  alert("3");

                        if(rawFile.readyState === 4)
                        {
                  alert("4");

                            if(rawFile.status === 200 || rawFile.status == 0)
                            {
                                alert("5");

                                var allText = rawFile.responseText;
                                if(allText=="")
                                {
                                  alert("allText is null");
                                }
                            }
                        }
                    }
                    rawFile.send(null);
                }

//readTextFile("file:///E:/Projects/Test/general_work/Haqiqi/mydata.txt");
//alert(data_[0]);
   
      //var start_second=Math.round( Date.now() / 1000);

      if(window.location.href.includes('#$'))
      {
        index=parseInt( window.location.href.split('#$')[1])+1;;
      }
      // if(data_.length< parseInt(index))
      // {
      //     break;
      // }
      data=data_[index];

      // var tbl = document.getElementsByClassName("fgButton")[0]; 
      // var td=tbl.rows[0].cells[3]; 
      // var spn=td.getElementsByClassName('btn btn-default btn-sm')[0];
    
      
      
      // spn.addEventListener('DOMCharacterDataModified', (e) => {  
      //   var checkAll = document.getElementsByClassName("checkAllgrp")[0];
      //   checkAll.click();
      //  });

     
      
      
    
      //var i=5;
         var finish1=0;
         var finish2=0;
         var finish3=0;
         var finish4=0;
        //while(i<2)
         //{
            setTimeout(() => {
                var div = document.getElementsByClassName("navbar-form dropdown")[8];
                div.className = "navbar-form dropdown open";

                var txt = document.getElementById('CPC_urvRemainViewSolr_NationalCode1');
                txt.value = data;

                var btn = div.querySelectorAll('button')[1];
                btn.click();
                finish1 = 1;
            }, 3000);
           
           
            setTimeout(() => {
                if (finish1 == 1) {
                    var tbl = document.getElementsByClassName("fgButton")[0];
                    var spn_text = tbl.rows[0].cells[3].innerText;
                    var regex = /\d+/g;
                    var rowcount = spn_text.match(regex);

                    if (rowcount < 100) {
                        var checkAll = document.getElementsByClassName("checkAllgrp")[0];
                        checkAll.click();
                        finish2 = 1;
                    }
                    else {
                      if(window.location.href.includes('#$'))
                      {
                        window.location.href = window.location.href.split('#$')[0]+ index.toString() ;
                        window.location.reload();
                      }
                    }
                }
            }, 7000);
            


           
            setTimeout(() => {
                if (finish2 == 1) {
                    var btn2 = document.getElementsByClassName("btn btn-md btn-info FlexGridHandler")[0];
                    btn2.click();
                    finish3 = 1;
                }
            }, 10000);
        
          
            setTimeout(() => {
                if (finish3 == 1) {
                    var div1 = document.getElementsByClassName("modal-footer")[0];
                    var btn3 = div1.querySelectorAll('button')[0];
                    btn3.click();
                    finish4 = 1;
                }
            }, 13000);
            
             
          
            setTimeout(() => {
                if (finish4 == 1) {
                    var div2 = document.getElementsByClassName("bootbox-body")[0];
                    var a_ = div2.querySelectorAll('a')[0];
                    a_.href = a_.href + "#$" + index;
                    a_.click();
                    finish5 = 1;
                    //i = i + 1;
                }
            }, 15000);

            setTimeout(() => {
              if(window.location.href.includes('#$'))
              {
                window.location.href = window.location.href.split('#$')[0]+ "#$"+ index.toString() ;
                window.location.reload();
              }
            }, 18000);

      // var late_second=Math.round( Date.now() / 1000);
      // while(late_second -start_second>15)
      // {
      //   alert("Expired!");
      //   window.location.href=window.location.href;
      // }
}
if(window.location.href.startsWith("http://ittms.tax.gov.ir/Pages/Remained/RemainedToCaseMIS/"))
{
  var data_=new Array();
  data_=data2.split(',');
  if(window.location.href.includes('#$'))
  {
    index= window.location.href.split('#$')[1];
  }
  data=data_[index];
   var finish1=0;
     var finish2=0;
     var finish3=0;
     var finish4=0;

  setTimeout(() =>{
  
    var div = document.getElementsByClassName("navbar-form dropdown")[3];
    div.className="navbar-form dropdown open";
  
    var txt = document.getElementById('CPC_urvRTCMIS_NationalCode');
    txt.value=data;
    var btn = div.querySelectorAll('button')[1];
    btn.click();
    finish1=1;
    
  },4000);
 


  setTimeout(() => {
    if(finish1==1)
    {
      var tbl=document.getElementById('FlexGrid');
      if(tbl.rows.length ==2)
      {
        var checkAll = document.getElementsByClassName("checkAllgrp")[0];
        finish2 = 1;
        checkAll.click();
        
      }
      else{
         var btn2 = document.getElementsByClassName("btn btn-md btn-warning FlexGridHandler")[0];
         btn2.click();
         setTimeout(() => {
           var div1 = document.getElementsByClassName("modal-footer")[0];
           var btn3 = div1.querySelectorAll('button')[0];
           btn3.click();
         }, 2000);
         setTimeout(() => {
           window.location.href = "http://ittms.tax.gov.ir/Pages/AuditorS2/T91RemainViewSolr/20/1395/2/0/9999999999999999999/#$" + index.toString();
         }, 4000);
      
      }
    }

  },7000);
   
 
    setTimeout(() => {
      var btn2 = document.getElementsByClassName("btn btn-md btn-info FlexGridHandler")[0];
    btn2.click();
    }, 10000);
    
 
 setTimeout(() => {
  var div1 = document.getElementsByClassName("modal-footer")[0];
  var btn3 = div1.querySelectorAll('button')[0];

  btn3.click();

 }, 13000);
 

 setTimeout(() => {
  var div1 = document.getElementsByClassName("modal-footer")[0];
  var btn3 = div1.querySelectorAll('button')[0];
  // btn3.click();
   window.location.href="http://ittms.tax.gov.ir/Pages/AuditorS2/T91RemainViewSolr/20/1395/2/0/9999999999999999999/#$"+index;
 }, 15000);
 

}




