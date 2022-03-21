import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector)
    this._handleFormSubmit = handleFormSubmit
    this._form = this._popup.querySelector('.popup__form')
    this._inputList = Array.from(this._form.querySelectorAll('.popup__input'))
  }

  _getInputValues = () => {
    return this._inputList.reduce((acc, el) => {
      acc[el.name] = el.value
      return acc
    }, {})
  }

  _handleSubmit = () => {
    this._handleFormSubmit(this._getInputValues())
    this.close()
  }

  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener('submit', this._handleSubmit)
  }

  removeEventListener() {
    super.removeEventListener()
    this._form.removeEventListener('submit', this._handleSubmit)
  }

  close() {
    super.close()
    this._form.reset()
  }
}
