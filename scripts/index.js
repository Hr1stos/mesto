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

function openPopup(popup) {
	popup.classList.add('popup_opened');
};

buttonPopupEdit.addEventListener('click', () => {
	openPopup(popupEdit);
	inputNamePopupEdit.value = profileName.textContent;
	inputOpsanePopupEdit.value = profileOpsane.textContent;
});

buttonPopupAdd.addEventListener('click', () => {
	openPopup(popupAdd);
	inputNamePopupAdd.value = '';
	inputLinkPopupAdd.value = '';
});



//****Закрыть popup****
const closeButtonPopupEdit = popupEdit.querySelector('.popup__close-button_edit');
const closeButtonPopupAdd = popupAdd.querySelector('.popup__close-button_add');
const popupImage = document.querySelector('.popup_type_image');
const closeButtonPopupImage = popupImage.querySelector('.popup__close-button_image');

function closePopup(popup) {
	popup.classList.remove('popup_opened');
};

closeButtonPopupEdit.addEventListener('click', () => {
	closePopup(popupEdit);
});

closeButtonPopupAdd.addEventListener('click', () => {
	closePopup(popupAdd);
});

closeButtonPopupImage.addEventListener('click', () => {
	closePopup(popupImage);
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


