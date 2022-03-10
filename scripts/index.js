import Card from './Card.js'
import FormValidator from './FormValidator.js'

// start cards
const initialCards = [
  {
    cardTitle: 'Архыз',
    cardLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    cardTitle: 'Челябинская область',
    cardLink:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    cardTitle: 'Иваново',
    cardLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    cardTitle: 'Камчатка',
    cardLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    cardTitle: 'Холмогорский район',
    cardLink:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    cardTitle: 'Байкал',
    cardLink: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
]

const configValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  errorClass: 'popup__error_visible',
  inputErrorClass: 'popup__input_type_error',
  inactiveButtonClass: 'popup__button_disabled',
}

const sectionForCards = document.querySelector('.elements')

const profileButtonEdit = document.querySelector('.profile__button-edit')
const profileName = document.querySelector('.profile__name-text')
const profileJob = document.querySelector('.profile__job')
const profilePopup = document.querySelector('.popup_name_profile')
const profileForm = document.querySelector('.popup_name_profile .popup__form')
const inputName = document.querySelector('.popup__input[name="username"]')
const inputJob = document.querySelector('.popup__input[name="job"]')
const profilePopupClose = document.querySelector('.popup_name_profile .popup__close-icon')

const cardAddButton = document.querySelector('.profile__button-plus')
const cardAddPopup = document.querySelector('.popup_name_add')
const cardAddForm = document.querySelector('.popup_name_add .popup__form')
const inputTitle = document.querySelector('.popup__input[name="title"]')
const inputLink = document.querySelector('.popup__input[name="link"]')
const cardAddPopupClose = document.querySelector('.popup_name_add .popup__close-icon')

const imgFullPopup = document.querySelector('.popup_name_img')
const imgFullPopupClose = document.querySelector('.popup_name_img .popup__close-icon')

const formValidators = {}

function closePopup(popup) {
  popup.classList.remove('popup_opened')
  popup.removeEventListener('click', closePopupByOverlay)
  document.removeEventListener('keydown', closePopupByEsc)
}

function closePopupByEsc(e) {
  if (e.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'))
  }
}

function closePopupByOverlay(e) {
  if (e.target === e.currentTarget) {
    closePopup(e.target)
  }
}

function openPopup(popup) {
  popup.classList.add('popup_opened')
  popup.addEventListener('click', closePopupByOverlay)
  document.addEventListener('keydown', closePopupByEsc)
}

function createCard(newCard) {
  return new Card(newCard, '.template-card').createCard()
}

function renderCard(newCard) {
  sectionForCards.prepend(createCard(newCard))
}

function renderInitialCards(initialCards) {
  initialCards.forEach(renderCard)
}

renderInitialCards(initialCards)

// profile
profileButtonEdit.addEventListener('click', () => {
  inputName.value = profileName.textContent
  inputJob.value = profileJob.textContent
  openPopup(profilePopup)
})

profilePopupClose.addEventListener('click', () => {
  closePopup(profilePopup)
})

profileForm.addEventListener('submit', (e) => {
  e.preventDefault()
  profileName.textContent = inputName.value
  profileJob.textContent = inputJob.value
  closePopup(profilePopup)
  formValidators.profile.toggleButtonState()
})

// cardAdd
cardAddButton.addEventListener('click', () => {
  openPopup(cardAddPopup)
})

cardAddPopupClose.addEventListener('click', () => {
  closePopup(cardAddPopup)
})

cardAddForm.addEventListener('submit', (e) => {
  e.preventDefault()
  renderCard({ cardTitle: inputTitle.value, cardLink: inputLink.value })
  closePopup(cardAddPopup)
  cardAddForm.reset()
  formValidators.add.toggleButtonState()
})

// imgFull
imgFullPopupClose.addEventListener('click', () => {
  closePopup(imgFullPopup)
})

function validation(configValidation) {
  const formList = Array.from(document.querySelectorAll(configValidation.formSelector))

  formList.forEach((formElement) => {
    formValidators[`${formElement.name}`] = new FormValidator(configValidation, formElement)
    formValidators[`${formElement.name}`].enableValidation()
  })
}

validation(configValidation)
