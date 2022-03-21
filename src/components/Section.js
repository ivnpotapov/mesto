export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data
    this._renderer = renderer
    this._container = document.querySelector(containerSelector)
  }

  addItem(element) {
    this._container.prepend(element)
  }

  _clear() {
    this._container.innerHTML = ''
  }

  renderItems() {
    this._clear()

    this._renderedItems.forEach((el) => {
      this._renderer(el)
    })
  }
}
