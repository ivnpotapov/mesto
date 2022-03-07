class FormValidator {
  constructor(configValidation, formElement, profileButtonEdit, addCardForm) {
    this._formSelector = configValidation.formSelector
    this._inputSelector = configValidation.inputSelector
    this._submitButtonSelector = configValidation.submitButtonSelector
    this._errorClass = configValidation.errorClass
    this._inputErrorClass = configValidation.inputErrorClass
    this._inactiveButtonClass = configValidation.inactiveButtonClass
    this._formElement = formElement
    this._profileButtonEdit = profileButtonEdit
    this._addCardForm = addCardForm
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid
    })
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._inactiveButtonClass)
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass)
    }
  }

  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.popup__${inputElement.name}-error`)
    inputElement.classList.add(this._inputErrorClass)
    errorElement.textContent = inputElement.validationMessage
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
      this._showInputError(inputElement)
    } else {
      this._hideInputError(inputElement)
    }
  }

  _setEventListeners() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector))
    const buttonElement = this._formElement.querySelector(this._submitButtonSelector)

    this._toggleButtonState(inputList, buttonElement)

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement)
        this._toggleButtonState(inputList, buttonElement)
      })
      this._profileButtonEdit.addEventListener('click', () => {
        this._toggleButtonState(inputList, buttonElement)
      })
      this._addCardForm.addEventListener('submit', () => {
        this._toggleButtonState(inputList, buttonElement)
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
