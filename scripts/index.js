import { initialCards } from "./constants.js";


//****Создание карточек на страницу, лайки, удаление карточки, открытие PopupImage****
const cardsTemplate = document.querySelector('.template-cards');
const image = document.querySelector('.popup__img');
function createCardElement (cardData) {
	const cardElement = cardsTemplate.content
		.querySelector('.card')
		.cloneNode(true);

	const imageCard = cardElement.querySelector('.card__image');
	const nameCerd = cardElement.querySelector('.card__title');

	imageCard.src = cardData.link;
	imageCard.alt = cardData.name;
	nameCerd.textContent = cardData.name;

	const likeButton = cardElement.querySelector('.card__button_like');
	function handleLike() {
		likeButton.classList.toggle('card__button_like_active');
	};
	likeButton.addEventListener('click', handleLike);

	const buttonDeleteCard = cardElement.querySelector('.card__button_delete');
	function handleDelete() {
		cardElement.remove();
	};
	buttonDeleteCard.addEventListener('click', handleDelete);

	imageCard.addEventListener('click', () => {
		const caption = popupImage.querySelector('.popup__caption');

		image.src = imageCard.src;
		image.alt = imageCard.alt;
		caption.textContent = nameCerd.textContent;
		openPopup(popupImage);
	});

	return cardElement
};



//****Загрузка карточек на странцу****
const cardsContainer = document.querySelector('.cards__container');

function renderCardElement(cardElement) {
	cardsContainer.prepend(cardElement);
};

initialCards.forEach(function (cards) {
	const item = createCardElement(cards);
	renderCardElement(item);
});



//****Открыть popup****
const buttonPopupEdit = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const profileName = document.querySelector('.profile__name');
const profileOpsane = document.querySelector('.profile__opsane');
const buttonPopupAdd = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_type_add');
const popupFormAdd = popupAdd.querySelector('.popup__form_add');

function openPopup(popup) {
	popup.classList.add('popup_opened');
	document.addEventListener('keydown', closePopupEsc)
};

buttonPopupEdit.addEventListener('click', () => {
	openPopup(popupEdit);
	inputNamePopupEdit.value = profileName.textContent;
	inputOpsanePopupEdit.value = profileOpsane.textContent;
	disabledSubmitButton(popupEdit);
});

buttonPopupAdd.addEventListener('click', () => {
	openPopup(popupAdd);
	popupFormAdd.reset();
	disabledSubmitButton(popupAdd);
});



//****Закрыть popup****
const popupImage = document.querySelector('.popup_type_image');

function closePopup(popup) {
	popup.classList.remove('popup_opened');
	document.removeEventListener('keydown', closePopupEsc);
};

function disabledSubmitButton(popup) {
	const button = popup.querySelector('.popup__submit-button');
	button.classList.add('popup__submit-button_disabled');
	button.setAttribute('disabled', '');
};

function closePopupEsc(evt) {
	if (evt.key === 'Escape') {
		closePopup(document.querySelector('.popup_opened'));
	}
};

const popups = document.querySelectorAll('.popup');
popups.forEach(function (popup) {
	popup.addEventListener('mousedown', (evt) => {
		if (evt.target.classList.contains('popup_opened')) {
			closePopup(popup)
		};
		if (evt.target.classList.contains('popup__close')) {
			closePopup(popup)
		}
	})
});



//****Сохранить изменения popupEdit****
const formPopupEdit = popupEdit.querySelector('.popup__form');
const inputNamePopupEdit = popupEdit.querySelector('.popup__input_type_name');
const inputOpsanePopupEdit = popupEdit.querySelector('.popup__input_type_opsane');

formPopupEdit.addEventListener('submit', (event) => {
	event.preventDefault();

	profileName.textContent = inputNamePopupEdit.value;
	profileOpsane.textContent = inputOpsanePopupEdit.value;

	closePopup(popupEdit);
});



//****Сохранить измененя popupAdd****
const formPopupAdd = popupAdd.querySelector('.popup__form');
const inputNamePopupAdd = popupAdd.querySelector('.popup__input_type_name');
const inputLinkPopupAdd = popupAdd.querySelector('.popup__input_type_link');

formPopupAdd.addEventListener('submit', (event) => {
	event.preventDefault();

	const name = inputNamePopupAdd.value;
	const link = inputLinkPopupAdd.value;

	const cardNew = {
		name,
		link,
	};

	renderCardElement(createCardElement(cardNew));
	closePopup(popupAdd);
});


