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

	addItem(item, place = 'prepend') {
		if (place === 'append') {
			this._cardsContainer.append(item);
		} else {
			this._cardsContainer.prepend(item);
		}
	}
}