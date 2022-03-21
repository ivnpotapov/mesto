import Popup from '../components/Popup.js'

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this.fullImg = this._popup.querySelector('.popup__img')
    this.fullImgLabel = this._popup.querySelector('.popup__img-label')
  }

  open(alt, src) {
    this.fullImg.src = src
    this.fullImg.alt = alt
    this.fullImgLabel.textContent = alt
    super.open()
  }
}
