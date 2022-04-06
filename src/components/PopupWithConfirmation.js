import Popup from './Popup.js'

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._submitButton = this._popup.querySelector('.popup__button')
  }

  setHandleFormSubmit(handleFormSubmit) {
    this._handleFormSubmit = handleFormSubmit
  }

  _handleSubmit = (e) => {
    e.preventDefault()
    this._handleFormSubmit()
  }

  _removeEventListeners() {
    super._removeEventListeners()
    this._submitButton.removeEventListener('click', this._handleSubmit)
  }

  setEventListeners() {
    super.setEventListeners()
    this._submitButton.addEventListener('click', this._handleSubmit)
  }
}
