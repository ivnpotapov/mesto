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

const templateCard = document.querySelector('#template-card').content
const elements = document.querySelector('.elements')

const profileButtonEdit = document.querySelector('.profile__button-edit')
const profileName = document.querySelector('.profile__name-text')
const profileJob = document.querySelector('.profile__job')
const profilePopup = document.querySelector('.popup_name_profile')
const profileForm = document.querySelector('.popup_name_profile .popup__form')
const inputName = document.querySelector('.popup__input[name="username"]')
const inputJob = document.querySelector('.popup__input[name="job"]')
const profilePopupClose = document.querySelector('.popup_name_profile .popup__close-icon')

const addCardButton = document.querySelector('.profile__button-plus')
const addCardPopup = document.querySelector('.popup_name_add')
const addCardForm = document.querySelector('.popup_name_add .popup__form')
const inputTitle = document.querySelector('.popup__input[name="title"]')
const inputLink = document.querySelector('.popup__input[name="link"]')
const addCardPopupClose = document.querySelector('.popup_name_add .popup__close-icon')

const fullImgPopup = document.querySelector('.popup_name_img')
const fullImg = document.querySelector('.popup__img')
const fullImgLabel = document.querySelector('.popup__img-label')
const fullImgPopupClose = document.querySelector('.popup_name_img .popup__close-icon')

function closePopup(popup) {
  popup.classList.remove('popup_opened')
  popup.removeEventListener('click', closePopupByOverlay)
  document.removeEventListener('keydown', closePopupByESC)
}

function closePopupByESC(e) {
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
  document.addEventListener('keydown', closePopupByESC)
}

function likeCard(e) {
  e.target.classList.toggle('element__button-like_active')
}

function deleteCard(e) {
  e.target.closest('.element').remove()
}

function openFullImg(e) {
  const imgData = e.target
  fullImgLabel.textContent = imgData.alt
  fullImg.src = imgData.src
  fullImg.alt = imgData.alt
  openPopup(fullImgPopup)
}

function addListeners(card) {
  card.querySelector('.element__button-like').addEventListener('click', likeCard)
  card.querySelector('.element__trash').addEventListener('click', deleteCard)
  card.querySelector('.element__image').addEventListener('click', openFullImg)
}

function createCard(newCard) {
  const card = templateCard.cloneNode(true),
    cardImage = card.querySelector('.element__image')

  card.querySelector('.element__name').textContent = newCard.cardTitle
  cardImage.src = newCard.cardLink
  cardImage.alt = newCard.cardTitle
  addListeners(card)
  return card
}

function renderCard(newCard) {
  elements.prepend(createCard(newCard))
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
})

// addCard
addCardButton.addEventListener('click', () => {
  openPopup(addCardPopup)
})

addCardPopupClose.addEventListener('click', () => {
  closePopup(addCardPopup)
})

addCardForm.addEventListener('submit', (e) => {
  e.preventDefault()
  renderCard({ cardTitle: inputTitle.value, cardLink: inputLink.value })
  closePopup(addCardPopup)
  addCardForm.reset()
})

// fullImg
fullImgPopupClose.addEventListener('click', () => {
  closePopup(fullImgPopup)
})

// document.addEventListener('click', (e, popup) => {
//   closePopupByESC(e, popup)
// })
// document.addEventListener('keydown', (e, popup) => {
//   closePopupByOverlay(e, popup)
// })
