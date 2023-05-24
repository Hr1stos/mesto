import { initialCards, validationConfig } from "./constants.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import PopupWithImage from "./PopupWithImage.js"
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
import Section from "./Section.js";

import '../pages/index.css';


//****Const****
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupImage = document.querySelector('.popup_type_image');
const profileName = document.querySelector('.profile__name');
const profileOpsane = document.querySelector('.profile__opsane');
const buttonPopupEdit = document.querySelector('.profile__edit-button');
const buttonPopupAdd = document.querySelector('.profile__add-button');
const cardsContainer = document.querySelector('.cards__container');
const inputNamePopupEdit = popupEdit.querySelector('.popup__input_type_name');
const inputOpsanePopupEdit = popupEdit.querySelector('.popup__input_type_opsane');

const inputNamePopupAdd = popupAdd.querySelector('.popup__input_type_name');
const inputLinkPopupAdd = popupAdd.querySelector('.popup__input_type_link');


const popupFormAdd = popupAdd.querySelector('.popup__form_add');
const imageCard = popupImage.querySelector('.popup__img');
const caption = popupImage.querySelector('.popup__caption');
const popups = document.querySelectorAll('.popup');
const formPopupEdit = popupEdit.querySelector('.popup__form');
const formPopupAdd = popupAdd.querySelector('.popup__form');



//****Валиидация****
const profileValidator = new FormValidator(validationConfig, popupEdit);
profileValidator.enableValidation();

const cardValidator = new FormValidator(validationConfig, popupAdd);
cardValidator.enableValidation();


//****Создание карточек на странцу****
function createCard(data) {
	const card = new Card({
		data: data,
		handleCardClick: (name, link) => {
			popupFullImage.open(name, link);
		}
	}, '.template-cards');
	const cardElement = card.getCard();

	return cardElement;
};

//****Рендер карточек****
const cards = new Section({
	items: initialCards,
	renderer: (data) => {
		cards.addItem(createCard(data));
	},
}, cardsContainer);

cards.renderCards()


//****Открыть popupImage****
const popupFullImage = new PopupWithImage(popupImage);
popupFullImage.setEventListener();


//****Открыть popupEdit****
const userInfo = new UserInfo({
	name: profileName,
	opsane: profileOpsane
});

const popupEditForm = new PopupWithForm(popupEdit, {
	handlerFormSubmit: (data) => {
		userInfo.setUserInfo(data);
	}
});
popupEditForm.setEventListeners();


buttonPopupEdit.addEventListener('click', () => {
	profileValidator.resetValidation();

	const currentUserInfo = userInfo.getUserInfo();
	inputNamePopupEdit.value = currentUserInfo.name;
	inputOpsanePopupEdit.value = currentUserInfo.opsane;

	popupEditForm.open();
});


//****Открыть popupAdd****
const popupAddForm = new PopupWithForm(popupAdd, {
	handlerFormSubmit: (data) => {
		cards.newAddItem(createCard(data));
	}
});
popupAddForm.setEventListeners();


buttonPopupAdd.addEventListener('click', () => {
	cardValidator.resetValidation();
	popupAddForm.open();
});













//function createCard(data) {
//	const card = new Card(data, '.template-cards', open);
//	return card.getCard();
//};

//initialCards.forEach(function (item) {
//	const cardNew = createCard(item);
//	cardsContainer.prepend(cardNew);
//});


////function openPopup(popup) {
////	popup.classList.add('popup_opened');
////	document.addEventListener('keydown', closePopupEsc);
////};

//buttonPopupEdit.addEventListener('click', () => {
//	openPopup(popupEdit);
//	profileValidator.resetValidation();
//	inputNamePopupEdit.value = profileName.textContent;
//	inputOpsanePopupEdit.value = profileOpsane.textContent;
//});

//buttonPopupAdd.addEventListener('click', () => {
//	openPopup(popupAdd);
//	cardValidator.resetValidation();
//	popupFormAdd.reset();
//});

//****Открыть popupImage****
//function handleCardClick(name, link) {
//	imageCard.src = link;
//	caption.textContent = name;
//	imageCard.alt = name;
//	openPopup(popupImage);
//}

//****Закрыть popup****
//function closePopup(popup) {
//	popup.classList.remove('popup_opened');
//	document.removeEventListener('keydown', closePopupEsc);
//};

//function closePopupEsc(evt) {
//	if (evt.key === 'Escape') {
//		closePopup(document.querySelector('.popup_opened'));
//	}
//};


//popups.forEach(function (popup) {
//	popup.addEventListener('mousedown', (evt) => {
//		if (evt.target.classList.contains('popup_opened')) {
//			closePopup(popup)
//		};
//		if (evt.target.classList.contains('popup__close')) {
//			closePopup(popup)
//		}
//	})
//});

//****Сохранить изменения popupEdit****


//formPopupEdit.addEventListener('submit', (event) => {
//	event.preventDefault();

//	profileName.textContent = inputNamePopupEdit.value;
//	profileOpsane.textContent = inputOpsanePopupEdit.value;

//	closePopup(popupEdit);
//});

////****Сохранить измененя popupAdd****
//formPopupAdd.addEventListener('submit', (event) => {
//	event.preventDefault();

//	const name = inputNamePopupAdd.value;
//	const link = inputLinkPopupAdd.value;

//	const cardNew = {
//		name,
//		link,
//	};

//	cardsContainer.prepend(createCard(cardNew));
//	formPopupAdd.reset();
//	closePopup(popupAdd);
//});