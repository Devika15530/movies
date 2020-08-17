var selectedRow = null ;
  function onFormSubmit()
  {
   
     if (validate()) 
     {

        if (selectedRow == null)
        insertNewRecord();
    else
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






 function insertNewRecord() {

    var table = document.getElementById("mytable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML =document.getElementById("title").value;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = document.getElementById("boxOffice").value;
     cell3= newRow.insertCell(2);
var type=document.getElementsByName("active");
if(type[0].checked)
{
var val=type[0].value;

cell3.innerHTML =val;
}
else if(type[1].checked)
{

var val=type[1].value;

cell3.innerHTML =val;
}
var newdate=document.getElementById("dateOfLaunch").value;
console.log(newdate);

  cell4 = newRow.insertCell(3);

cell4.innerHTML=newdate;
  cell5= newRow.insertCell(4);


cell5.innerHTML=document.getElementById("genre").value;

var hasteaser=document.getElementsByName("hasTeaser");

cell6=newRow.insertCell(5);


if(hasteaser[0].checked)
{
 cell6.innerHTML ='Yes';
}
else 
{
 cell6.innerHTML ='No';
}
 cell7 = newRow.insertCell(6);
 cell7.innerHTML = ` <a onClick="onEdit(this)">Edit</a>`;

 cell8 = newRow.insertCell(7);
cell8.innerHTML = ` <a onClick="onDelete(this)">Delete</a>`;

}





function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
                var k=selectedRow.cells[0].innerHTML;
                console.log(k);  
    document.getElementById("title").value = selectedRow.cells[0].innerHTML;

 document.getElementById("boxOffice").value = selectedRow.cells[1].innerHTML;


var active=selectedRow.cells[2].innerHTML

if(active=="yes")
document.getElementById("active").checked=true;
else if(active=="No")
document.getElementById("active1").checked=true;

var gdate=selectedRow.cells[3].innerHTML
console.log(gdate);
document.getElementById("dateOfLaunch").value = gdate;
document.getElementById("genre").value = selectedRow.cells[4].innerHTML;
var hasteaser=selectedRow.cells[5].innerHTML;
if(hasteaser=='Yes')
document.getElementById("hasTeaser").checked=true;
else if(hasteaser=='No')
document.getElementById("hasTeaser").checked=false;
 }






 function updateRecord() {
    selectedRow.cells[0].innerHTML = document.getElementById("title").value;
   selectedRow.cells[1].innerHTML = document.getElementById("boxOffice").value;
 var type=document.getElementsByName("active");
if(type[0].checked)
{
selectedRow.cells[2].innerHTML ='Yes';
}
else if(type[1].checked)
{
selectedRow.cells[2].innerHTML ='No';
}
  
var newdate=document.getElementById("dateOfLaunch").value;
console.log(newdate);
  selectedRow.cells[3].innerHTML =newdate;

var catg=document.getElementById("genre").value;

 selectedRow.cells[4].innerHTML =catg;
var fdelivery=document.getElementsByName("hasTeaser");
console.log(fdelivery);
if(fdelivery[0].checked)
{
 selectedRow.cells[5].innerHTML ='Yes';
}
else
{
 selectedRow.cells[5].innerHTML ='No';
}


}

function myReset() {
  document.getElementById("myForm").reset();
}



//delete the data

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
row = td.parentElement.parentElement;
        document.getElementById("mytable").deleteRow(row.rowIndex);
        
    }

}

 
  