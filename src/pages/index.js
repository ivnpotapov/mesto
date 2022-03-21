import './index.css'
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'
import {
  initialCards,
  configValidation,
  sectionForCardsSelector,
  templateCardSelector,
  popupWithImageSelector,
  cardAddPopupSelector,
  userInfoSelectors,
  profilePopupSelector,
  profileButtonEdit,
  inputName,
  inputJob,
  cardAddButton,
  formValidators,
} from '../utils/constants.js'

// img Full

const popupWithImage = new PopupWithImage(popupWithImageSelector)

function handleCardClick(name, link) {
  popupWithImage.open(name, link)
}

function createCard(newCard) {
  return new Card(newCard, templateCardSelector, handleCardClick).createCard()
}

// render Initial Cards

const cardList = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item, templateCardSelector, handleCardClick)
      cardList.addItem(cardElement)
    },
  },
  sectionForCardsSelector,
)

cardList.renderItems()

// add card

const cardAddForm = new PopupWithForm(cardAddPopupSelector, (item) => {
  const cardElement = createCard(item, templateCardSelector, handleCardClick)
  cardList.addItem(cardElement)
})

cardAddButton.addEventListener('click', () => cardAddForm.open())

// profile

const userInfo = new UserInfo(userInfoSelectors)
const profileForm = new PopupWithForm(profilePopupSelector, (inputsValue) => {
  userInfo.setUserInfo(inputsValue)
})

profileButtonEdit.addEventListener('click', () => {
  const userInfos = userInfo.getUserInfo()
  inputName.value = userInfos.profileName
  inputJob.value = userInfos.profileJob
  profileForm.open()
})

// validation

function validation(configValidation) {
  const formList = Array.from(document.querySelectorAll(configValidation.formSelector))

  formList.forEach((formElement) => {
    formValidators[`${formElement.name}`] = new FormValidator(configValidation, formElement)
    formValidators[`${formElement.name}`].enableValidation()
  })
}

validation(configValidation)
