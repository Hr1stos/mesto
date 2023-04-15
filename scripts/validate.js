//...rest

//enableValidation({
//	formSelector: '.popup__form',
//	inputSelector: '.popup__input',
//	submitButtonSelector: '.popup__save-button',
//	inactiveButtonClass: 'popup__save-button_disabled',
//	inputErrorClass: 'popup__input_type_error',
//	errorClass: 'popup__error_visible'
//});

//enableValidation({
//	formSelector: '.popup__form',
//	inputSelector: '.popup__input',
//	submitButtonSelector: '.popup__button',
//	inactiveButtonClass: 'popup__button_disabled',
//	inputErrorClass: 'popup__input_type_error',
//	errorClass: 'popup__error_visible'
//});

//****Добавть ошибку на инпут****
function setInputInvalidState(input, errorElement) {
	input.classList.add('popup__input_type_error');
	errorElement.textContent = input.validationMessage;
	errorElement.classList.add('popup__error_visible');
};

//****Убрать ошибку с инпута****
function setInputValidState(input, errorElement) {
	input.classList.remove('popup__input_type_error');
	errorElement.textContent = '';
	errorElement.classList.remove('popup__error_visible');
};

//****Проверка валидност инпута****
function checkInputValidity(input, form) {
	const errorElement = form.querySelector(`#error-${input.id}`);

	if (input.checkValidity()) {
		setInputValidState(input, errorElement)
	} else {
		setInputInvalidState(input, errorElement)
	}
};

const hasInvalidInput = (inputList) => {
	return inputList.some((inputElement) => {
		return !inputElement.validity.valid;
	})
};

//****Заблокировать кнопку****
function disableButton(button) {
	button.setAttribute('disabled', '');
	button.classList.add('popup__submit-button_disabled');
};

//****Разблокировать кнопку****
function enableButton(button) {
	button.removeAttribute('disabled')
	button.classList.remove('popup__submit-button_disabled');
};

//****Перекулючатель кнопки****
function toggleButtonValidity(form) {
	const submitButton = form.querySelector('.popup__submit-button');

	if (form.checkValidity()) {
		enableButton(submitButton);
	} else {
		disableButton(submitButton);
	}
};

//****Сброс формы****
function setSubmitListener(form) {
	form.addEventListener('submit', function (event) {
		event.preventDefault();
		toggleButtonValidity(form);
	});
};

//****Проверка валидности формы****
function enableValidation() {
	const form = document.querySelector('.popup__form');

	setSubmitListener(form)
	toggleButtonValidity(form);

	const inputs = form.querySelectorAll('.popup__input');
	const inputsArray = Array.from(inputs)
	inputsArray.forEach(function (input) {
		input.addEventListener('input', () => {
			checkInputValidity(input, form);
			toggleButtonValidity(form);
		})
	});
};

enableValidation()