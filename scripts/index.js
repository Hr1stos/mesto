const editButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileOpsane = document.querySelector('.profile__opsane');
const container = document.querySelector('.popup');
const saveButton = container.querySelector('.popup__save-button');
const closeButton = container.querySelector('.popup__close-button');
const popupInfo = container.querySelector('.popup__form');
const nameImput = container.querySelector('.popup__input_type_name')
const opsaneImput = container.querySelector('.popup__input_type_opsane')


editButton.addEventListener('click', function() {
	container.classList.add('popup_open');

	nameImput.value = profileName.textContent;
	opsaneImput.value = profileOpsane.textContent;
})

function closePopup() {
	container.classList.remove('popup_open');
}

saveButton.addEventListener('click', closePopup);

closeButton.addEventListener('click', closePopup);

popupInfo.addEventListener('submit', function(event) {
	event.preventDefault();

	profileName.innerHTML = nameImput.value;
	profileOpsane.innerHTML = opsaneImput.value;

	saveButton.addEventListener('click', closePopup);
})