var winnerNumber;

function createButtons(){
   var x = ""
   for(i = 1; i <= document.getElementById("numberOfButtons").value; ++i)
      x += "<button type=button onclick=winnerButton(" + i + ");> Button" + i + "</button>"
   document.getElementById('MyID').innerHTML = x
   winnerNumber = Math.floor(Math.random() * ((document.getElementById("numberOfButtons").value) - 1) + 1);
 }
 
 function winnerButton(s){
  if(s==winnerNumber)
    document.getElementById('MyID').innerHTML = winnerNumber
  else
    document.getElementById('MyID').innerHTML = winnerNumber
 }