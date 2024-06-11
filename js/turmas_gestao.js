'use script'
var btn = document.querySelector(".new-class-button");
var modal = document.getElementById("myModal");


btn.onclick = function() {
  modal.style.display = "block";
}


var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
