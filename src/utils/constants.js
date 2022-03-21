export const initialCards = [
  {
    title: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    title: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    title: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    title: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    title: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    title: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
]

export const configValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  errorClass: 'popup__error_visible',
  inputErrorClass: 'popup__input_type_error',
  inactiveButtonClass: 'popup__button_disabled',
}

export const sectionForCardsSelector = '.elements'
export const templateCardSelector = '.template-card'
export const popupWithImageSelector = '.popup_name_img'
export const cardAddPopupSelector = '.popup_name_add'
export const userInfoSelectors = { profileName: '.profile__name-text', profileJob: '.profile__job' }
export const profilePopupSelector = '.popup_name_profile'
export const profileButtonEdit = document.querySelector('.profile__button-edit')
export const inputName = document.querySelector('.popup__input[name="username"]')
export const inputJob = document.querySelector('.popup__input[name="job"]')
export const cardAddButton = document.querySelector('.profile__button-plus')
export const formValidators = {}
