export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector)
    this._popupCloseButton = this._popup.querySelector('.popup__close-icon')
    this.close = this.close.bind(this)
  }

  open() {
    this._popup.classList.add('popup_opened')
    this.setEventListeners()
  }

  close() {
    this._popup.classList.remove('popup_opened')
    this.removeEventListener()
  }

  _handleEscClose = (e) => {
    if (e.key === 'Escape') {
      this.close()
    }
  }

  _handleOverlayClose = (e) => {
    if (e.target === e.currentTarget) {
      this.close()
    }
  }

  setEventListeners() {
    document.addEventListener('keydown', this._handleEscClose)
    this._popup.addEventListener('click', this._handleOverlayClose)
    this._popupCloseButton.addEventListener('click', this.close)
  }

  removeEventListener() {
    document.removeEventListener('keydown', this._handleEscClose)
    this._popup.removeEventListener('click', this._handleOverlayClose)
    this._popupCloseButton.removeEventListener('click', this.close)
  }
}
