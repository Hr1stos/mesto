import { initialCards } from "./constants.js";

const cardsTemplate = document.querySelector('.template_cards');
const cardsContainer = document.querySelector('.cards__container');
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const editButtonPopup = document.querySelector('.profile__edit-button');
const addButtonPopup = document.querySelector('.profile__add-button');
const closeButtonPopupEdit = popupEdit.querySelector('.popup__close-button_edit');
const closeButtonPopupAdd = popupAdd.querySelector('.popup__close-button_add');
const inputNamePopupEdit = popupEdit.querySelector('.popup__input_type_name');
const inputOpsanePopupEdit = popupEdit.querySelector('.popup__input_type_opsane');
const inputNamePopupAdd = popupAdd.querySelector('.popup__input_type_name');
const inputLinkPopupAdd = popupAdd.querySelector('.popup__input_type_link');
const profileName = document.querySelector('.profile__name');
const profileOpsane = document.querySelector('.profile__opsane');
const formPopupEdit = popupEdit.querySelector('.popup__form');
const formPopupAdd = popupAdd.querySelector('.popup__form');

//Создание карточек на страницу, лайки, удаление карточки
function createCardElement (cardData) {
	const cardElement = cardsTemplate.content
		.querySelector('.cards__item')
		.cloneNode(true);

	const linkCard = cardElement.querySelector('.cards__image');
	const altCard = cardElement.querySelector('.cards__image');
	const nameCerd = cardElement.querySelector('.cards__title');

	linkCard.src = cardData.link;
	altCard.alt = cardData.name;
	nameCerd.textContent = cardData.name;

	const likeButton = cardElement.querySelector('.cards__button_like');
	const deleteButton = cardElement.querySelector('.cards__button_delete');

	function handleLike() {
		likeButton.classList.toggle('cards__button_like_active')
	};

	likeButton.addEventListener('click', handleLike);

	function handleDelete() {
		cardElement.remove();
	};

	deleteButton.addEventListener('click', handleDelete);
	
	return cardElement
};

//Загрузка карточек на странцу
function renderCardElement(cardElement) {
	cardsContainer.prepend(cardElement);
};

initialCards.forEach(function (cards) {
	const item = createCardElement(cards);
	renderCardElement(item);
});

//Открыть popup
function openPopup(popup) {
	popup.classList.add('popup_opened');
};

editButtonPopup.addEventListener('click', () => {
	openPopup(popupEdit);

	inputNamePopupEdit.value = profileName.textContent;
	inputOpsanePopupEdit.value = profileOpsane.textContent;
});

addButtonPopup.addEventListener('click', () => {
	openPopup(popupAdd);

	inputNamePopupAdd.value = '';
	inputLinkPopupAdd.value = '';
});

//Закрыть popup
function closePopup(popup) {
	popup.classList.remove('popup_opened');
};

closeButtonPopupEdit.addEventListener('click', () => {
	closePopup(popupEdit);
});

closeButtonPopupAdd.addEventListener('click', () => {
	closePopup(popupAdd);
});

//Сохранть изменения popupEdit
formPopupEdit.addEventListener('submit', (event) => {
	event.preventDefault();

	profileName.textContent = inputNamePopupEdit.value;
	profileOpsane.textContent = inputOpsanePopupEdit.value;

	closePopup(popupEdit);
});

//Сохранить измененя popupAdd
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