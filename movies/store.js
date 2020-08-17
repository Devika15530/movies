function myFunction(rownum) {
    var rowId=rownum.rowIndex;
    localStorage.setItem("RowId",rowId);
   var title=rownum.cells[0].innerHTML;
localStorage.setItem("Title",title);

var boxoffice=rownum.cells[1].innerHTML;
localStorage.setItem("Boxoffice",boxoffice);

var active=rownum.cells[2].innerHTML;
localStorage.setItem("Active",active);

var dateoflaunch=rownum.cells[3].innerHTML;
localStorage.setItem("DateOfLaunch",dateoflaunch);

var genre=rownum.cells[4].innerHTML;
localStorage.setItem("Genre",genre);

var hasteaser=rownum.cells[5].innerHTML;
localStorage.setItem("HasTeaser",hasteaser);


  }



 
  document.getElementById("title").value=localStorage.getItem("Title");
  document.getElementById("boxOffice").value=localStorage.getItem("Boxoffice");

  var active=localStorage.getItem("Active");
  if(active=='Yes')
  document.getElementById("active").checked=true;
  else if(active=='No')
  document.getElementById("active1").checked=true;
  

var dateoflaunch=localStorage.getItem("DateOfLaunch");

document.getElementById("dateOfLaunch").value = dateoflaunch;


document.getElementById("genre").value=localStorage.getItem("Genre");


var hasteaser=localStorage.getItem("HasTeaser");
if(hasteaser=='Yes')
document.getElementById("hasTeaser").checked=true;
else if(hasteaser=='No')
document.getElementById("hasTeaser").checked=false;








function onFormSubmit()
 {
    if (validate()) 
    {
    updateRecord();
   }
 } 



 function validate() {
    isValid=true;  
    var title = document.forms["myForm"]["title"].value;
     var titleLength = document.getElementById("title").value;
    var validName = /^[A-Z a-z]+$/;
     var boxOffice = document.forms["myForm"]["boxOffice"].value;
    var dateOfLaunch = document.forms["myForm"]["dateOfLaunch"].value;
        var genreSelect = document.getElementById("genre");
        var genre = genreSelect.options[genreSelect.selectedIndex].value;
      if (title == " ") 
      {
           alert("Title is required \n Title should have 2 to 65 characters(alphabets)");
           isValid=false;  
      }
    else if(!titleLength.match(validName))
     {
            alert("title is required \n Title should have 2 to 65 characters(alphabets)");
             isValid = false;     
     }
    else if(boxOffice == "")
     {
                alert("Gross must be entered");
                isValid=false;
              
     }
    
    else if(( myForm.active[0].checked == false ) && ( myForm.active[1].checked == false ))
    {
    
     alert("must select the radio button");
                isValid = false;
    
    }       
    else if( dateOfLaunch  == "") {
    
            alert("Date of Launch is required");
     isValid=false;
            }
            else if(genre == 0) {
            alert("Select one category");
     isValid=false;
            }
           return isValid;
   
}



function updateRecord() {

  var rownum=localStorage.getItem("RowId");
  console.log(rownum);

  
  
  
 var title=document.getElementById("title").value;


var boxoffice=document.getElementById("boxOffice").value;


var type=document.getElementsByName("active");
if(type[0].checked)
{
var k ='Yes';
localStorage.removeItem("Uactive");
localStorage.setItem("Uactive",k);
}
else if(type[1].checked)
{
var k ='No';
localStorage.removeItem("Uactive");
localStorage.setItem("Uactive",k);
}

var newdate=document.getElementById("dateOfLaunch").value;
localStorage.setItem("Udate",newdate);


  localStorage.removeItem("Utitle");
    localStorage.setItem("Utitle",title);
    localStorage.removeItem("UboxOffice");
    localStorage.setItem("UboxOffice",boxoffice);


var gen=document.getElementById("genre").value;
localStorage.removeItem("Ugenre");
localStorage.setItem("Ugenre",gen);






var hasteaser=document.getElementsByName("hasTeaser");

if(hasteaser[0].checked)
{
 var k ='Yes';
 localStorage.removeItem("Uteaser");
 localStorage.setItem("Uteaser",k);
}
else
{
 var k ='No';
 localStorage.removeItem("Uteaser");
 localStorage.setItem("Uteaser",k);



}





    //window.location.replace("C:\Users\845160\Documents\movies\editform.html");

    
    
  

}

/* function updateTable()
{

  var rownum=localStorage.getItem("RowId");
    console.log(rownum);

 

var k=localStorage.getItem("Utitle");
console.log(k);
var m=rownum.cells[0].innerHTML;
console.log(m);

    //window.location.replace("file:///C:/Users/845160/Documents/movies/Admin.html");
    
}
 */

