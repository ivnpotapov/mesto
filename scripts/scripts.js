const profileButtonEdit = document.querySelector(".profile__button-edit"),
  popProfile = document.querySelector(".pop-profile"),
  profileName = document.querySelector(".profile__name-text"),
  profileJob = document.querySelector(".profile__job"),
  inputName = document.querySelector(
    '.pop-profile__input[name="profile-name"]'
  ),
  inputJob = document.querySelector('.pop-profile__input[name="profile-job"]'),
  popProfileClose = document.querySelector(".pop-profile__close-icon"),
  popProfileButtonSave = document.querySelector(".pop-profile__button-save");

profileButtonEdit.addEventListener("click", popupOpener);
popProfileClose.addEventListener("click", popupCloser);
popProfile.addEventListener("click", function (e) {
  if (e.target === e.currentTarget) {
    popupCloser();
  }
});
popProfileButtonSave.addEventListener("click", formSubmitHandler);

function popupOpener() {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  popProfile.classList.add("pop-profile_opened");
}

function popupCloser() {
  popProfile.classList.remove("pop-profile_opened");
}

function formSubmitHandler(e) {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  popupCloser();
}
