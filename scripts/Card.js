class Card {
  constructor(newCard, templateCardSelector, openPopup, fullImgPopup) {
    this._cardLink = newCard.cardLink
    this._cardTitle = newCard.cardTitle
    this._templateCardSelector = templateCardSelector
    this._openPopup = openPopup
    this._fullImgPopup = fullImgPopup
  }

  _getTemplate() {
    return document
      .querySelector(this._templateCardSelector)
      .content.querySelector('.element')
      .cloneNode(true)
  }

  _likeCard() {
    this._buttonLike.classList.toggle('element__button-like_active')
  }

  _deleteCard() {
    this._element.remove()
    this._element = null
  }

  _openFullImg() {
    this._fullImgPopup.querySelector('.popup__img-label').textContent = this._elementImage.alt
    const fullImg = this._fullImgPopup.querySelector('.popup__img')
    fullImg.src = this._elementImage.src
    fullImg.alt = this._elementImage.alt
    this._openPopup(this._fullImgPopup)
  }

  _addListeners() {
    this._buttonLike = this._element.querySelector('.element__button-like')

    this._buttonLike.addEventListener('click', () => this._likeCard())
    this._element
      .querySelector('.element__trash')
      .addEventListener('click', () => this._deleteCard())
    this._elementImage.addEventListener('click', () => this._openFullImg())
  }

  createCard() {
    this._element = this._getTemplate()
    this._elementImage = this._element.querySelector('.element__image')

    this._element.querySelector('.element__name').textContent = this._cardTitle
    this._elementImage.src = this._cardLink
    this._elementImage.alt = this._cardTitle
    this._addListeners()
    return this._element
  }
}

export default Card
