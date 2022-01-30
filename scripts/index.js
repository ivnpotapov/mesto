const profileButtonEdit = document.querySelector('.profile__button-edit'),
  popup = document.querySelector('.popup'),
  form = document.querySelector('.popup__form'),
  profileName = document.querySelector('.profile__name-text'),
  profileJob = document.querySelector('.profile__job'),
  inputName = document.querySelector('.popup__input[name="profile-name"]'),
  inputJob = document.querySelector('.popup__input[name="profile-job"]'),
  popupClose = document.querySelector('.popup__close-icon')

function popupOpener() {
  inputName.value = profileName.textContent
  inputJob.value = profileJob.textContent
  popup.classList.add('popup_opened')
}

function popupCloser() {
  popup.classList.remove('popup_opened')
}

function formSubmitHandler(e) {
  e.preventDefault()
  profileName.textContent = inputName.value
  profileJob.textContent = inputJob.value
  popupCloser()
}

profileButtonEdit.addEventListener('mousedown', popupOpener)
popupClose.addEventListener('click', popupCloser)
form.addEventListener('submit', formSubmitHandler)

// popup.addEventListener('click', function (e) {
//   if (e.target === e.currentTarget) {
//     popupCloser()
//   }
// })
