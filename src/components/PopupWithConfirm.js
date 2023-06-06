import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
	constructor(popupSelector) {
		super(popupSelector);
		this._form = this._popup.querySelector('.popup__form');
	}

	submitCallback(del) {
		this._handleSubmit = del;
	}

	setEventListeners() {
		super.setEventListener();
		this._form.addEventListener('submit', (event) => {
			event.preventDefault();
			this._handleSubmit();
		});
	}
}