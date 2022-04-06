import './index.css'
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithConfirmation from '../components/PopupWithConfirmation.js'
import UserInfo from '../components/UserInfo.js'
import api from '../components/Api'
import {
  configValidation,
  sectionForCardsSelector,
  templateCardSelector,
  popupWithImageSelector,
  popupCardAddSelector,
  popupCardDeleteSelector,
  popupProfileSelector,
  popupAvatarSelector,
  userInfoSelectors,
  profileButtonEdit,
  avatarEditButton,
  inputName,
  inputJob,
  cardAddButton,
  formValidators,
} from '../utils/constants.js'
let userIdApi
let cardList

// validation
function validation(configValidation) {
  const formList = Array.from(document.querySelectorAll(configValidation.formSelector))

  formList.forEach((el) => {
    formValidators[`${el.name}`] = new FormValidator(configValidation, el)
    formValidators[`${el.name}`].enableValidation()
  })
}

validation(configValidation)

// img Full
const popupWithImage = new PopupWithImage(popupWithImageSelector)

// delete card
const popupCardDelete = new PopupWithConfirmation(popupCardDeleteSelector)

// create Card
function handleCardClick(name, link) {
  popupWithImage.open(name, link)
}

function createCard(data) {
  const card = new Card({
    data,
    userIdApi,
    templateCardSelector,
    handleCardClick,
    handleDeleteCard: (id) => {
      popupCardDelete.open()
      popupCardDelete.setHandleFormSubmit(() => {
        api
          .deleteCardApi(id)
          .then(() => {
            card.deleteCard()
            popupCardDelete.close()
          })
          .catch((err) => {
            console.log(err)
          })
      })
    },
    handleLikeClick: (id) => {
      if (card.isLiked()) {
        api
          .deleteLikeApi(id)
          .then((res) => {
            card.likeCard(res.likes)
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        api
          .addLikeApi(id)
          .then((res) => {
            card.likeCard(res.likes)
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
  })
  return card.createCard()
}

// profile
const userInfo = new UserInfo(userInfoSelectors)

// render Initial Cards
function renderCard(item) {
  const cardElement = createCard(item)
  cardList.addItem(cardElement)
}

Promise.all([api.getUserInfoApi(), api.getInitialCardsApi()])
  .then(([resUser, resCard]) => {
    // fill profile
    userIdApi = resUser._id
    userInfo.setUserInfo(resUser)

    // fill Initial Cards
    cardList = new Section(
      {
        data: resCard,
        renderer: renderCard,
      },
      sectionForCardsSelector,
    )

    cardList.renderItems()
  })
  .catch((err) => {
    console.log(err)
  })
// add card

function handleCardAddSubmit(data) {
  popupCardAdd.renderLoading(true)
  api
    .addNewCardApi(data)
    .then((res) => {
      renderCard(res)
      popupCardAdd.close()
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      popupCardAdd.renderLoading(false)
    })
}

const popupCardAdd = new PopupWithForm(popupCardAddSelector, handleCardAddSubmit)

cardAddButton.addEventListener('click', () => {
  formValidators.add.toggleButtonState()
  popupCardAdd.open()
})

// profile edit

function handleProfileEditSubmit(inputsValue) {
  popupProfileEdit.renderLoading(true)
  api
    .setUserInfoApi(inputsValue)
    .then((res) => {
      userInfo.setUserInfo(res)
      popupProfileEdit.close()
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      popupProfileEdit.renderLoading(false)
    })
}

const popupProfileEdit = new PopupWithForm(popupProfileSelector, handleProfileEditSubmit)

profileButtonEdit.addEventListener('click', () => {
  const userInfos = userInfo.getUserInfo()
  inputName.value = userInfos.name
  inputJob.value = userInfos.about
  formValidators.profile.toggleButtonState()
  popupProfileEdit.open()
})

// avatar
function handleAvatarEditSubmit(inputsValue) {
  popupAvatarEdit.renderLoading(true)
  api
    .editAvatarApi(inputsValue)
    .then((res) => {
      userInfo.setUserInfo(res)
      popupAvatarEdit.close()
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      popupAvatarEdit.renderLoading(false)
    })
}

const popupAvatarEdit = new PopupWithForm(popupAvatarSelector, handleAvatarEditSubmit)

avatarEditButton.addEventListener('click', () => {
  formValidators.avatar.toggleButtonState()
  popupAvatarEdit.open()
})
