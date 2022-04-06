export default class Card {
  constructor({ data, userIdApi, templateCardSelector, handleCardClick, handleDeleteCard, handleLikeClick }) {
    this._link = data.link
    this._title = data.name
    this._likes = data.likes
    this._cardId = data._id
    this._ownerId = data.owner._id
    this._userIdApi = userIdApi
    this._templateCardSelector = templateCardSelector
    this._handleCardClick = handleCardClick
    this._handleDeleteCard = handleDeleteCard
    this._handleLikeClick = handleLikeClick
  }

  _getTemplate() {
    return document.querySelector(this._templateCardSelector).content.querySelector('.element').cloneNode(true)
  }

  isLiked() {
    return this._likes.find((el) => el._id === this._userIdApi)
  }

  likeCard(likesArr) {
    this._likes = likesArr
    this._likeCounter.textContent = this._likes.length

    if (this.isLiked()) {
      this._buttonLike.classList.add('element__button-like_active')
    } else {
      this._buttonLike.classList.remove('element__button-like_active')
    }
  }

  deleteCard() {
    this._element.remove()
    this._element = null
  }

  _addListeners() {
    this._buttonLike.addEventListener('click', () => this._handleLikeClick(this._cardId))
    this._trashBin.addEventListener('click', () => this._handleDeleteCard(this._cardId))
    this._elementImage.addEventListener('click', () => this._handleCardClick(this._title, this._link))
  }

  createCard() {
    this._element = this._getTemplate()
    this._elementImage = this._element.querySelector('.element__image')
    this._trashBin = this._element.querySelector('.element__trash')
    this._buttonLike = this._element.querySelector('.element__button-like')
    this._likeCounter = this._element.querySelector('.element__like-counter')

    this._element.querySelector('.element__name').textContent = this._title
    this._elementImage.src = this._link
    this._elementImage.alt = this._title
    this._likeCounter.textContent = this._likes.length

    if (this._userIdApi !== this._ownerId) {
      this._trashBin.style.display = 'none'
    }

    this.likeCard(this._likes)
    this._addListeners()

    return this._element
  }
}
