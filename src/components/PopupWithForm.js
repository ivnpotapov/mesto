import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector)
    this._handleFormSubmit = handleFormSubmit
    this._form = this._popup.querySelector('.popup__form')
    this._submitButton = this._form.querySelector('.popup__button')
    this._tempSubmitButtonText = this._submitButton.textContent
    this._inputList = Array.from(this._form.querySelectorAll('.popup__input'))
  }

  _getInputValues = () => {
    return this._inputList.reduce((acc, el) => {
      acc[el.name] = el.value
      return acc
    }, {})
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = 'Сохранение...'
    } else {
      this._submitButton.textContent = this._tempSubmitButtonText
    }
  }

  _handleSubmit = (e) => {
    e.preventDefault()
    this._handleFormSubmit(this._getInputValues())
  }

  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener('submit', this._handleSubmit)
  }

  _removeEventListeners() {
    super._removeEventListeners()
    this._form.removeEventListener('submit', this._handleSubmit)
  }

  close() {
    super.close()
    this._form.reset()
  }
}
