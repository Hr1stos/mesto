export default class Section {
	constructor({ items, renderer }, cardsContainer) {
		this._items = items;
		this._renderer = renderer;
		this._cardsContainer = cardsContainer;
	}

	renderCards() {
		this._items.forEach((item) => {
			this._renderer(item);
		})
	}

	addItem(item) {
		this._cardsContainer.prepend(item);
	}

	newAddItem(item) {
		this._cardsContainer.prepend(item);
	}
}