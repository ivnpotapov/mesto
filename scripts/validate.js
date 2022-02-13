// check all inputs
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid
  })
}

const toggleButtonState = (inputList, buttonElement, { inactiveButtonClass }) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass)
  } else {
    buttonElement.classList.remove(inactiveButtonClass)
  }
}

const showInputError = (formElement, inputElement, { errorClass, inputErrorClass }) => {
  const errorElement = formElement.querySelector(`.popup__${inputElement.name}-error`)
  inputElement.classList.add(inputErrorClass)
  errorElement.textContent = inputElement.validationMessage
  errorElement.classList.add(errorClass)
}

const hideInputError = (formElement, inputElement, { errorClass, inputErrorClass }) => {
  const errorElement = formElement.querySelector(`.popup__${inputElement.name}-error`)
  inputElement.classList.remove(inputErrorClass)
  errorElement.classList.remove(errorClass)
  errorElement.textContent = ''
}

const checkInputValidity = (formElement, inputElement, restConfig) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, restConfig)
  } else {
    hideInputError(formElement, inputElement, restConfig)
  }
}

const setEventListeners = (formElement, { inputSelector, submitButtonSelector, ...restConfig }) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector))
  const buttonElement = formElement.querySelector(submitButtonSelector)

  toggleButtonState(inputList, buttonElement, restConfig)

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, restConfig)
      toggleButtonState(inputList, buttonElement, restConfig)
    })
    profileButtonEdit.addEventListener('click', () => {
      toggleButtonState(inputList, buttonElement, restConfig)
    })
  })
}

const enableValidation = ({ formSelector, ...restConfig }) => {
  const formList = Array.from(document.querySelectorAll(formSelector))

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (e) => {
      e.preventDefault()
    })

    setEventListeners(formElement, restConfig)
  })
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  errorClass: 'popup__error_visible',
  inputErrorClass: 'popup__input_type_error',
  inactiveButtonClass: 'popup__button_disabled',
})
