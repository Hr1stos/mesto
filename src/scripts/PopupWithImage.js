import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
	constructor(popupElement) {
		super(popupElement);
		this._imageCard = this._popup.querySelector('.popup__img');
		this._caption = this._popup.querySelector('.popup__caption');
	}

	open(name, link) {
		this._imageCard.src = link;
		this._caption.textContent = name;
		this._imageCard.alt = name;

		super.open();
	}
}