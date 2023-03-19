const editButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileOpsane = document.querySelector('.profile__opsane');
const container = document.querySelector('.popup');
const closeButton = container.querySelector('.popup__close-button');
const popupInfo = container.querySelector('.popup__form');
const nameImput = container.querySelector('.popup__input_type_name')
const opsaneImput = container.querySelector('.popup__input_type_opsane')

function openPopup() {
	container.classList.add('popup_opened');

	nameImput.value = profileName.textContent;
	opsaneImput.value = profileOpsane.textContent;
}

function closePopup() {
	container.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup)

closeButton.addEventListener('click', closePopup);

popupInfo.addEventListener('submit', function(event) {
	event.preventDefault();

	profileName.textContent = nameImput.value;
	profileOpsane.textContent = opsaneImput.value;

	closePopup();
})