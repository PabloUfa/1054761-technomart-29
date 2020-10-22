const productBuyLink = document.querySelectorAll(".product-action-button-buy");
const productBuyPopup = document.querySelector(".modal-in-cart");
const productBuyClose = productBuyPopup.querySelector(".modal-close");
const keepShopping = productBuyPopup.querySelector(".modal-in-cart-button-keep-shopping");

// productBuyLink.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   productBuyPopup.classList.add("modal-show");
// });

for (let i = 0; i < productBuyLink.length; i++)
  productBuyLink[i].addEventListener("click", function(evt) {
        evt.preventDefault(),
        productBuyPopup.classList.add("modal-show")
  });

keepShopping.addEventListener("click", function (evt) {
  evt.preventDefault();
  productBuyPopup.classList.remove("modal-show");
});

productBuyClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  productBuyPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (productBuyPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      productBuyPopup.classList.remove("modal-show");
    }
  }
});
