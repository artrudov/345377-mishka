//  Modal window
var offerLink = document.getElementsByClassName("button--buy");

var cartPopup = document.querySelector(".modal-cart");
if (cartPopup) {
  var cartClose = cartPopup.querySelector(".modal-cart__button--close");
}

for (var i = 0; i < offerLink.length; i++) {
  offerLink[i].preventDefault;
  offerLink[i].num = i;
  offerLink[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-cart--show");
  });
}

cartClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-cart--show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("modal-cart--show")) {
      cartPopup.classList.remove("modal-cart--show");
    }
  }
});
