class FormValidator {
  constructor(configValidation, formElement) {
    this._formSelector = configValidation.formSelector
    this._inputSelector = configValidation.inputSelector
    this._submitButtonSelector = configValidation.submitButtonSelector
    this._errorClass = configValidation.errorClass
    this._inputErrorClass = configValidation.inputErrorClass
    this._inactiveButtonClass = configValidation.inactiveButtonClass
    this._formElement = formElement
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid
    })
  }

  toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._buttonElement.classList.add(this._inactiveButtonClass)
      this._buttonElement.setAttribute('disabled', '')
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass)
      this._buttonElement.removeAttribute('disabled')
    }
  }

  _showInputError(inputElement, errorText) {
    const errorElement = this._formElement.querySelector(`.popup__${inputElement.name}-error`)
    inputElement.classList.add(this._inputErrorClass)
    errorElement.textContent = errorText
    errorElement.classList.add(this._errorClass)
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.popup__${inputElement.name}-error`)
    inputElement.classList.remove(this._inputErrorClass)
    errorElement.classList.remove(this._errorClass)
    errorElement.textContent = ''
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage)
    } else {
      this._hideInputError(inputElement)
    }
  }

  _setEventListeners() {
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector)
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector))

    this.toggleButtonState()

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement)
        this.toggleButtonState()
      })
    })
  }

  enableValidation() {
    this._formElement.addEventListener('submit', (e) => {
      e.preventDefault()
    })
    this._setEventListeners()
  }
}

export default FormValidator
