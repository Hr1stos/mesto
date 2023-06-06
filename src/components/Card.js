export default class Card {
	constructor({ data, handleCardClick, handleDeleteClick, handleSetLike, handleDeleteLike }, templateSelector, userId) {
		this._data = data;
		this._handleCardClick = handleCardClick;
		this._handleDeleteClick = handleDeleteClick;
		this._handleSetLike = handleSetLike;
		this._handleDeleteLike = handleDeleteLike;
		this._templateSelector = templateSelector;

		this._cardId = data._id;
		this._userId = userId;
		this._ownerId = data.owner._id;
		this._likes = data.likes;

		this._card = this._getTemplate();
		this._imageCard = this._card.querySelector('.card__image');
		this._titleCard = this._card.querySelector('.card__title');
		this._deleteButton = this._card.querySelector('.card__button_delete');
		this._likeButton = this._card.querySelector('.card__button_like');
		this._likeCounter = this._card.querySelector('.card__like-counter');
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
		this._imageCard.src = this._data.link;
		this._imageCard.alt = this._data.name;
		this._titleCard.textContent = this._data.name;
		this._likeCounter.textContent = this._likes.length;


		if (this._ownerId !== this._userId) {
			this._deleteButton.remove();
		}

		this._checkLikedState();
		this._setEventListeners()
		
		

		return this._card;
	}

	//****Удалть карточку****
	deleteCard = () => {
		if (this._card) {
			this._card.remove();
			this._card = null;
		}
	}

	//****Поставить лайк****
	handleLike(data) {
		this._likes = data.likes;
		this._likeCounter.textContent = this._likes.length;
		this._likeButton.classList.toggle('card__button_like_active');
	}

	_checkLikedState() {
			this._data.likes.forEach((like) => {
			if (like._id === this._userId) {
				this._likeButton.classList.add('card__button_like_active');
			}
		})
	}

	getId() {
		return this._cardId
	}

	//****Слушатель событий****
	_setEventListeners = () => {
		this._deleteButton.addEventListener('click', this._handleDeleteClick);
		this._likeButton.addEventListener('click', () => {
			if (this._likeButton.classList.contains('card__button_like_active')) {
				this._handleDeleteLike(this._cardId);
			} else {
				this._handleSetLike(this._cardId);
			}
		});
		this._imageCard.addEventListener('click', () =>
			this._handleCardClick(this._data.name, this._data.link));
	}
}