import { openPopup } from './index.js'

export default class Card {
	constructor(data) {
		this._data = data;
		this._template = document.querySelector('.template-cards').content;
	}

	_cardDelete = () => {
		if (this._card) {
			this._card.remove();
		}
	}

	_handleLike = () => {
		this._buttonLike.classList.toggle('card__button_like_active');
	}

	_setEventListeners = () => {
		this._card.querySelector('.card__button_delete').addEventListener('click', this._cardDelete);
		this._buttonLike = this._card.querySelector('.card__button_like');
		this._buttonLike.addEventListener('click', this._handleLike);
		this._imageCard.addEventListener('click', this._openPopupImage);
	}

	_createCard = (data) => {
		this._card = this._template.cloneNode(true).children[0];
		this._imageCard = this._card.querySelector('.card__image');
		this._imageCard.src = data.link;
		this._imageCard.alt = data.name;
		this._card.querySelector('.card__title').textContent = data.name;

		this._setEventListeners();
	}

	_openPopupImage = () => {
		this._popupImage = document.querySelector('.popup_type_image');
		this._caption = document.querySelector('.popup__caption');
		this._image = this._popupImage.querySelector('.popup__img');
		this._image.src = this._imageCard.src;
		this._image.alt = this._imageCard.alt;
		this._caption.textContent = this._image.alt;

		openPopup(this._popupImage);
	}

	getCard = (data) => {
		if (!this._card) {
			this._createCard(data)
		}

		return this._card;
	}
}