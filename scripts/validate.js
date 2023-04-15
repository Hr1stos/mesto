//****Добавть ошибку на инпут****
function showInputError({ inputErrorClass, errorClass }, input, errorElement) {
	input.classList.add(inputErrorClass);
	errorElement.textContent = input.validationMessage;
	errorElement.classList.add(errorClass);
};

//****Убрать ошибку с инпута****
function hideInputError({ inputErrorClass, errorClass }, input, errorElement) {
	input.classList.remove(inputErrorClass);
	errorElement.textContent = '';
	errorElement.classList.remove(errorClass);
};

//****Проверка валидност инпута****
function checkInputValidity(config, input, form) {
	const errorElement = form.querySelector(`#error-${input.id}`);

	if (input.checkValidity()) {
		hideInputError(config, input, errorElement)
	} else {
		showInputError(config, input, errorElement)
	}
};

//****Заблокировать кнопку****
function disableButton({ inactiveButtonClass }, button) {
	button.setAttribute('disabled', '');
	button.classList.add(inactiveButtonClass);
};

//****Разблокировать кнопку****
function enableButton({ inactiveButtonClass }, button) {
	button.removeAttribute('disabled')
	button.classList.remove(inactiveButtonClass);
};

//****Перекулючатель кнопки****
function toggleButtonState({ submitButtonSelector, ...rest }, form) {
	const submitButton = form.querySelector(submitButtonSelector);

	if (form.checkValidity()) {
		enableButton(rest, submitButton);
	} else {
		disableButton(rest, submitButton);
	}
};

//****Сброс формы****
function setSubmitListener(config, form) {
	form.addEventListener('submit', function (event) {
		event.preventDefault();
		toggleButtonState(config, form);
	});
};



function setEventListeners(form, {inputSelector, ...rest }) {
	setSubmitListener(rest, form)
	toggleButtonState(rest, form);

	const inputsList = Array.from(form.querySelectorAll(inputSelector));

	inputsList.forEach(function(input) {
		input.addEventListener('input', () => {
			checkInputValidity(rest, input, form);
			toggleButtonState(rest, form);
		})
	});
};

function enableValidation({ formSelector, ...rest }) {
	const formsList = Array.from(document.querySelectorAll(formSelector));

	formsList.forEach(function(form) {
		setEventListeners(form, rest);
	});
};

enableValidation({
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__submit-button',
	inactiveButtonClass: 'popup__submit-button_disabled',
	inputErrorClass: 'popup__input_type_error',
	errorClass: 'popup__error_visible'
});