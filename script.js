
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function scrollToPanda() {
    window.scrollBy(100, 0);
}



//Stefans changes below


function showMe(caller) {
  var txtWWF = "Världsnaturfonden WWF (engelska: World Wide Fund for Nature, ursprungligen World Wildlife Fund) är en internationell organisation inom naturvård. Den bildades 1961 och är en partipolitiskt obunden ideell organisation. Internationellt sett är den en av de största privata miljö- och naturvårdsorganisationerna. Den har sitt huvudkontor i Gland i Schweiz.";
  var txtLS = "For the science geek in everyone, Live Science breaks down the stories behind the most interesting news and photos on the Internet, while also digging up fascinating discoveries that hit on a broad range of fields, from dinosaurs and archaeology to wacky physics and astronomy to health and human behavior. If you want to learn something interesting every day, Live Science is the place for you."
  var txtNG = "National Geographic Channel är tv-kanalen från mediakoncernerna National Geographic Society och Rupert Murdochs mediekoncern News Corporation. Den förstnämnda är mest känd för tidningen med samma namn.";
  document.getElementById("hi").style.visibility="Visible";
  if (caller == "wwf") {
    txt = txtWWF;
  } else if (caller == "LS") {
    txt = txtLS;
  } else if (caller == "NG") {
    txt = txtNG;
  }
  document.getElementById("hi").innerText=txt;
}

function hideMe() {
  document.getElementById("hi").style.visibility="hidden";
}
