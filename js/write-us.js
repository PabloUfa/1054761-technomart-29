const lostedUserLink = document.querySelector(".contacts-button");
const writeUsPopup = document.querySelector(".modal-write-us");
const writeUsForm = writeUsPopup.querySelector(".write-us-form");
const loginClose = writeUsPopup.querySelector(".modal-close");
const userName = writeUsPopup.querySelector(".write-us-form-name");
const userMail = writeUsPopup.querySelector(".write-us-form-mail");

lostedUserLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.add("modal-show");

  userName.focus();
});

writeUsForm.addEventListener("submit", function (evt) {
  if (!userName.value || !userMail.value) {
    evt.preventDefault();
    writeUsPopup.classList.remove("modal-error");
    writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
    writeUsPopup.classList.add("modal-error");
  }
});

loginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.remove("modal-show");
  writeUsPopup.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writeUsPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      writeUsPopup.classList.remove("modal-show");
      writeUsPopup.classList.remove("modal-error");
    }
  }
});
