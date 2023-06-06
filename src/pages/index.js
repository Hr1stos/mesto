import './index.css';

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js"
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import Api from "../components/Api.js";

import {
	validationConfig,
	popupEdit,
	popupAdd,
	popupImage,
	popupDelete,
	popupAvatar,
	profileName,
	profileOpsane,
	profileAvatar,
	buttonPopupAvatar,
	buttonPopupEdit,
	buttonPopupAdd,
	cardsContainer,
	inputNamePopupEdit,
	inputAboutPopupEdit
} from "../utils/constants";

let userId = null;

const api = new Api({
	url: 'https://mesto.nomoreparties.co/v1/cohort-68',
	headers: {
		authorization: '44c177c0-bcd0-4b30-8fcb-5adcdab7ad45',
		'Content-Type': 'application/json',
	}
})

Promise.all([api.getDataUser(), api.getDataCards()])
	.then(([data, items]) => {
		userId = data._id;
		userInfo.setUserInfo(data);
		cardsList.renderItems(items);
	})
	.catch((err) => {
		console.log(`Promise.all - ошибка: ${err}`);
	});


//****Валиидация****
const profileValidator = new FormValidator(validationConfig, popupEdit);
profileValidator.enableValidation();

const cardValidator = new FormValidator(validationConfig, popupAdd);
cardValidator.enableValidation();

const avatarValidator = new FormValidator(validationConfig, popupAvatar);
avatarValidator.enableValidation();


//****Создание карточек на странцу****
function createCard(data) {
	const card = new Card({
		data: data,
		handleCardClick: (name, link) => {
			popupWithImage.open(name, link);
		},
		handleDeleteClick: () => {
			popupWithConfirm.open();
			popupWithConfirm.submitCallback(() => {
				//setSubmitButtonText(formDelete, 'Удаление...');
				api.deleteCard(card.getId())
					.then(() => {
						card.deleteCard();
						popupWithConfirm.close();
					})
					.catch((err) => {
						console.log(`deleteCard - ошибка: ${err}`);
					})
				//.finally(() => {
				//	setSubmitButtonText(formDelete, 'Да')
				//})
			})
		},
		handleSetLike: (cardId) => {
			api.setLike(cardId)
				.then((data) => {
					card.handleLike(data);
				})
				.catch((err) => {
					console.log(`handleSetLike - ошибка: ${err}`);
				});
		},
		handleDeleteLike: (cardId) => {
			api.deleteLike(cardId)
				.then((data) => {
					card.handleLike(data);
				})
				.catch((err) => {
					console.log(`handleDeleteLike - ошибка: ${err}`);
				});
		},
	}, '.template-cards', userId);

	const cardElement = card.getCard();

	return cardElement;
};


//****Рендер карточек****
const cardsList = new Section({
	renderer: (data) => {
		const cardArray = createCard(data);
		cardsList.addItem(cardArray, 'append');
	}
}, cardsContainer)


//****Информации о пользователе****
const userInfo = new UserInfo({
	selectorUserName: profileName,
	selectorUserAbout: profileOpsane,
	selectorUserAvatar: profileAvatar,
});


//****Открыть popupImage****
const popupWithImage = new PopupWithImage(popupImage);
popupWithImage.setEventListener();


//****Открыть popupDelete****
const popupWithConfirm = new PopupWithConfirm(popupDelete);
popupWithConfirm.setEventListeners();



//****Открыть popupEdit****
const popupEditForm = new PopupWithForm(popupEdit, {
	handleFormSubmit: (data) => {
		//setSubmitButtonText(formProfile, 'Cохранение...');
		api.setUserData(data)
			.then((res) => {
				userInfo.setUserInfo(res);
				popupEditForm.close();
			})
			.catch((err) => {
				console.log(`setDataUser - ошибка: ${err}`);
			})
			//.finally(() => {
			//	setSubmitButtonText(formProfile, 'Сохранить');
			//})
	}
})
popupEditForm.setEventListeners();


buttonPopupEdit.addEventListener('click', () => {
	profileValidator.resetValidation();

	const currentUserInfo = userInfo.getUserInfo();
	inputNamePopupEdit.value = currentUserInfo.name;
	inputAboutPopupEdit.value = currentUserInfo.about;

	popupEditForm.open();
});


//****Открыть popupAvatar****
const popupAvatarForm = new PopupWithForm(popupAvatar, {
	handleFormSubmit: (data) => {
		//setSubmitButtonText(formAvatar, 'Сохранение...');
		api.setUserAvatar(data)
			.then((res) => {
				userInfo.setUserInfo(res)
				popupAvatarForm.close();
			})
		//.catch((err) => {
		//	console.log(`setUserAvatar - ошибка: ${err}`);
		//})
		//.finally(() => {
		//	setSubmitButtonText(formAvatar, 'Сохранить')
		//})
	}
})
popupAvatarForm.setEventListeners();

buttonPopupAvatar.addEventListener('click', () => {
	avatarValidator.resetValidation();
	popupAvatarForm.open();
});


//****Открыть popupAdd****
const popupAddForm = new PopupWithForm(popupAdd, {
	handleFormSubmit: (data) => {
		//setSubmitButtonText(formNewCard, 'Сохранение...')
		api.addNewCard(data)
			.then((res) => {
				cardsList.addItem(createCard(res), 'prepend');
				popupAddForm.close();
			})
			.catch((err) => {
				console.log(`addNewCard - ошибка: ${err}`);
			})
			//.finally(() => {
			//	setSubmitButtonText(formNewCard, 'Создать')
			//})
	}
})
popupAddForm.setEventListeners();


buttonPopupAdd.addEventListener('click', () => {
	cardValidator.resetValidation();
	popupAddForm.open();
});