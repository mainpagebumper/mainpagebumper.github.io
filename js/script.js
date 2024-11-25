$(".progress").each(function(){
  
  var $bar = $(this).find(".bar");
  var $val = $(this).find("span");
  var perc = parseInt( $val.text(), 10);

  $({p:0}).animate({p:perc}, {
    duration: 3000,
    easing: "swing",
    step: function(p) {
      $bar.css({
        transform: "rotate("+ (45+(p*1.8)) +"deg)", // 100%=180° so: ° = % * 1.8
        // 45 is to add the needed rotation to have the green borders at the bottom
      });
      $val.text(p|0);
    }
  });
});


// Get the first modal
var modal = document.getElementById("myModal");

// Get the button that opens the first modal
var btn = document.getElementById("myBtn");

// Get the first <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the second modal
var secondModal = document.getElementById("mySecondModal");

// Get the button that opens the second modal
var secondBtn = document.getElementById("mySecondBtn");

// Get the second <span> element that closes the modal
var secondSpan = document.getElementsByClassName("second-close")[0];

// When the user clicks on the button, open the first modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on the button, open the second modal 
secondBtn.onclick = function() {
  secondModal.style.display = "block";
}

// When the user clicks on <span> (x), close the first modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks on <span> (x), close the second modal
secondSpan.onclick = function() {
  secondModal.style.display = "none";
}

// When the user clicks anywhere outside of the modals, close them
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } else if (event.target == secondModal) {
    secondModal.style.display = "none";
  }
}
