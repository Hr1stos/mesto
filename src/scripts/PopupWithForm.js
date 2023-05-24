import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
	constructor(popupSelector, { handlerFormSubmit } ) {
		super(popupSelector);
		this._handlerFormSubmit = handlerFormSubmit;
		this._popupForm = this._popup.querySelector('.popup__form');
		this._inputList = this._popup.querySelectorAll('.popup__input');
	}

	_getInputValues() {
		this._formData = {};
		this._inputList.forEach((input) => {this._formData[input.name] = input.value});
		
		return this._formData;
	}

	setEventListeners() {
		this._popupForm.addEventListener('submit', (evt) => {
			evt.preventDefault();
			this._handlerFormSubmit(this._getInputValues())
		})
		
		super.setEventListener();
	}

	close() {
		super.close();
		this._popupForm.reset();
	}
}