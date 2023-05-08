import { openPopup } from './index.js'

export default class Card {
	constructor(data, templateSelector) {
		this._data = data;
		this._templateSelector = templateSelector;
	}

	//****Удалть карточку****
	_cardDelete = () => {
		if (this._card) {
			this._card.remove();
		}
	}

	//****Поставить лайк****
	_handleLike = () => {
		this._buttonLike.classList.toggle('card__button_like_active');
	}

	//****Слушатель событий****
	_setEventListeners = () => {
		this._card.querySelector('.card__button_delete').addEventListener('click', this._cardDelete);
		this._buttonLike = this._card.querySelector('.card__button_like');
		this._buttonLike.addEventListener('click', this._handleLike);
		this._imageCard.addEventListener('click', this._openPopupImage);
	}

//****Добавть ошибку на инпут****
	_getTemplate() {
		const cardElement = document
			.querySelector('.template-cards')
			.content
			.querySelector('.card')
			.cloneNode(true);

		return cardElement;
	}

	//****Создание карточки****
	getCard() {
		this._card = this._getTemplate();

		this._imageCard = this._card.querySelector('.card__image');
		this._imageCard.src = this._data.link;
		this._imageCard.alt = this._data.name;
		this._card.querySelector('.card__title').textContent = this._data.name;
		this._cardLikeButton = this._card.querySelector('.card__button_like');
		this._deleteButton = this._card.querySelector('.card__button_delete');
		this._setEventListeners()

		return this._card;
	}

	//****Открыть popupImage****
	_openPopupImage = () => {
		this._image.src = this._imageCard.src;
		this._image.alt = this._imageCard.alt;
		this._caption.textContent = this._image.alt;

		openPopup(this._popupImage);
	}
}