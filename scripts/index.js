const initialCards = [
	{
		name: 'Infiniti',
		link: 'https://images.unsplash.com/photo-1661615342977-bb4378751028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGluZmluaXRpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
	},
	{
		name: 'Audi',
		link: 'https://images.unsplash.com/photo-1669265178536-378625854dbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fGF1ZGklMjBhN3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
	},
	{
		name: 'Mercedes-Benz',
		link: 'https://images.unsplash.com/photo-1624085568108-36410cfe4d24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
	},
	{
		name: 'Challenger',
		link: 'https://images.unsplash.com/photo-1614220683044-58f9e9548df6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Q2hhbGxlbmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
	},
	{
		name: 'BMW',
		link: 'https://images.unsplash.com/photo-1556448851-9359658faa54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
	},
	{
		name: 'McLaren',
		link: 'https://images.unsplash.com/photo-1621615541963-49e6f4612daa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
	}
];

const pageContainer = document.querySelector('.page__container');
const editButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileOpsane = document.querySelector('.profile__opsane');
const templateCards = document.querySelector('.template_cards').content;
const popupContainer = document.querySelector('.popup');
const closeButton = popupContainer.querySelector('.popup__close-button');
const popupInfo = popupContainer.querySelector('.popup__form');
const nameImput = popupContainer.querySelector('.popup__input_type_name');
const opsaneImput = popupContainer.querySelector('.popup__input_type_opsane');
const cards = document.querySelector('.cards__container');
//const likeButton = templateCards.querySelector('.cards__button_like');

//console.log(likeButton)


function openPopup() {
	popupContainer.classList.add('popup_opened');

	nameImput.value = profileName.textContent;
	opsaneImput.value = profileOpsane.textContent;
}

function closePopup() {
	popupContainer.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup);

closeButton.addEventListener('click', closePopup);


popupInfo.addEventListener('submit', function (event) {
	event.preventDefault();

	profileName.textContent = nameImput.value;
	profileOpsane.textContent = opsaneImput.value;

	closePopup();
})



//Новый функцонал


//Загрузка карточек на странцу
initialCards.forEach(renderItem);

function renderItem (item) {
	const htmlElement = templateCards.cloneNode(true);
	htmlElement.querySelector('.cards__image').src = item.link;
	htmlElement.querySelector('.cards__image').alt = item.name;
	htmlElement.querySelector('.cards__title').textContent = item.name;
	setEventListener(htmlElement);
	cards.append(htmlElement);
}

function setEventListener(htmlElement) {
	htmlElement.querySelector('.cards__button_delete').addEventListener('click', handleDelete);
	htmlElement.querySelector('.cards__button_like').addEventListener('click', handleLike);
}

//Удаление карточки
function handleDelete (event) {
	const card = event.target.closest('.cards__item');
	card.remove();
}

//Нажатие лайка
function handleLike (event) {
	event.target.classList.toggle('cards__button_like_active');
}

//Добавление новой карточки на страницу
//const handleSubmit () => {
//	const velue = ИМЯ переменной Кнопки.value;
//	renderItem(value);
//}