export default class Card {
	constructor({ data, handleCardClick }, templateSelector) {
		this._data = data;
		this._handleCardClick = handleCardClick;
		this._templateSelector = templateSelector;
	}

	//****Удалть карточку****
	_cardDelete = () => {
		if (this._card) {
			this._card.remove();
			this._card = null;
		}
	}

	//****Поставить лайк****
	_handleLike = () => {
		this._buttonLike.classList.toggle('card__button_like_active');
	}

//****Копированиие карточкии****
	_getTemplate() {
		const cardElement = document
			.querySelector(this._templateSelector)
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

	//****Слушатель событий****
	_setEventListeners = () => {
		this._card.querySelector('.card__button_delete').addEventListener('click', this._cardDelete);
		this._buttonLike = this._card.querySelector('.card__button_like');
		this._buttonLike.addEventListener('click', this._handleLike);
		this._imageCard.addEventListener('click', () =>
			this._handleCardClick(this._data.name, this._data.link));
	}
}