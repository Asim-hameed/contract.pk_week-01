function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function calculate(){

  var est = document.getElementById("estimate").value;
  document.getElementById("result").innerHTML = est * 200;
}