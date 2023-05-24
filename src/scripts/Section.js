export default class Section {
	constructor({ renderer }, cardsContainer) {
		this._renderer = renderer;
		this._cardsContainer = cardsContainer;
	}

	renderItems(items) {
		items.forEach(element => {
			this._renderer(element)
		})
	}

	addItem(item) {
		this._cardsContainer.prepend(item);
	}
}