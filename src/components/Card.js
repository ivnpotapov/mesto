export default class Card {
  constructor(newCard, templateCardSelector, handleCardClick) {
    this._link = newCard.link
    this._title = newCard.title
    this._templateCardSelector = templateCardSelector
    this._handleCardClick = handleCardClick
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

  _addListeners() {
    this._buttonLike = this._element.querySelector('.element__button-like')

    this._buttonLike.addEventListener('click', () => this._likeCard())
    this._element
      .querySelector('.element__trash')
      .addEventListener('click', () => this._deleteCard())
    this._elementImage.addEventListener('click', () =>
      this._handleCardClick(this._title, this._link),
    )
  }

  createCard() {
    this._element = this._getTemplate()
    this._elementImage = this._element.querySelector('.element__image')

    this._element.querySelector('.element__name').textContent = this._title
    this._elementImage.src = this._link
    this._elementImage.alt = this._title
    this._addListeners()
    return this._element
  }
}
