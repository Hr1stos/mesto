const validationConfig = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__submit-button',
	inactiveButtonClass: 'popup__submit-button_disabled',
	inputErrorClass: 'popup__input_type_error',
	errorClass: 'popup__error_visible'
};

const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupImage = document.querySelector('.popup_type_image');
const popupAvatar = document.querySelector('.popup_type_avatar');
const popupDelete = document.querySelector('.popup_type_delete');
const profileName = document.querySelector('.profile__name');
const profileOpsane = document.querySelector('.profile__opsane');
const profileAvatar = document.querySelector('.profile__avatar');
const buttonPopupAvatar= document.querySelector('.profile__avatar-edit-button');
const buttonPopupEdit = document.querySelector('.profile__edit-button');
const buttonPopupAdd = document.querySelector('.profile__add-button');
const cardsContainer = document.querySelector('.cards__container');
const inputNamePopupEdit = popupEdit.querySelector('.popup__input_type_name');
const inputAboutPopupEdit = popupEdit.querySelector('.popup__input_type_about');


export { 
	validationConfig,
	popupEdit,
	popupAdd,
	popupImage,
	popupAvatar,
	popupDelete,
	profileName,
	profileOpsane,
	profileAvatar,
	buttonPopupAvatar,
	buttonPopupEdit,
	buttonPopupAdd,
	cardsContainer,
	inputNamePopupEdit,
	inputAboutPopupEdit
};