let txt = document.getElementById("keylogger");

document.addEventListener("keypress", addCharacter);


function addCharacter(event) {
  txt.value=txt.value+event.key; 
}