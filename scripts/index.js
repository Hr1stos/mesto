import { initialCards, validationConfig } from "./constants.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

//****Загрузка карточек на странцу****
const cardsContainer = document.querySelector('.cards__container');

function createCard(data) {
	const card = new Card(data, '.template-cards');
	return card.getCard();
};

initialCards.forEach(function (item) {
	const cardNew = createCard(item);
	cardsContainer.prepend(cardNew);
});

//****Открыть popup****
const buttonPopupEdit = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const profileName = document.querySelector('.profile__name');
const profileOpsane = document.querySelector('.profile__opsane');
const buttonPopupAdd = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_type_add');
const popupFormAdd = popupAdd.querySelector('.popup__form_add');

const profileValidator = new FormValidator(validationConfig, popupEdit);
profileValidator.enableValidation();

const cardValidator = new FormValidator(validationConfig, popupAdd);
cardValidator.enableValidation();

export function openPopup(popup) {
	popup.classList.add('popup_opened');
	document.addEventListener('keydown', closePopupEsc);
};

buttonPopupEdit.addEventListener('click', () => {
	openPopup(popupEdit);
	//profileValidator.resetValidation();
	inputNamePopupEdit.value = profileName.textContent;
	inputOpsanePopupEdit.value = profileOpsane.textContent;
});

buttonPopupAdd.addEventListener('click', () => {
	openPopup(popupAdd);
	//cardValidator.resetValidation();
	popupFormAdd.reset();
});

//****Закрыть popup****
function closePopup(popup) {
	popup.classList.remove('popup_opened');
	document.removeEventListener('keydown', closePopupEsc);
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

	cardsContainer.prepend(createCard(cardNew));
	formPopupAdd.reset();
	closePopup(popupAdd);
});