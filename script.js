//dropdownmenu 
function myFunction() 
{
  document.getElementById("navDrop").classList.toggle("reveal");
}
window.onclick = function($) 
{
  if (!$.target.matches('.button')) 
  {
    var navDrop = document.getElementById("navDrop");
    if (navDrop.classList.contains('reveal')) 
    {
        navDrop.classList.remove('reveal');
    }
  }
}

//slideshow 
var slideshow = 1;
showDivs(slideshow);

function currentDiv(slides) {
  showDivs(slideshow = slides);
}

function plusDivs(slides){
  showDivs(slideshow += slides);
}

function showDivs(slides){
  var y = document.getElementsByClassName('slideShow');
  var dot = document.getElementsByClassName("");
  var i;
  if (slides > y.length) {slideshow = 1}
  if (slides < 1) {slideshow = y.length};
  for (i=0;i < y.length; i++) {
    y[i].style.display="none";
  }
  for (i = 0; i < dot.length; i++) {
  }
  y[slideshow-1].style.display = "block";
}





