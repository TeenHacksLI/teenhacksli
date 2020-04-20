window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  if (document.body.scrollTop > 80) {
    document.getElementById(".navS").style.backgroundColor = "white";
  } else {
    document.getElementById(".navS").style.backgroundColor = "black";
  }
}
