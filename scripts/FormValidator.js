export default class FormValidator {
	constructor(config, formElement) {
		this._formSelector = config.formSelector;
		this._inputSelector = config.inputSelector;
		this._submitButtonSelector = config.submitButtonSelector;
		this._inactiveButtonClass = config.inactiveButtonClass;
		this._inputErrorClass = config.inputErrorClass;
		this._errorClass = config.errorClass;
		this._form = formElement.querySelector(this._formSelector);
	}

	//****Добавть ошибку на инпут****
	_showInputError(input, errorElement) {
		input.classList.add(this._inputErrorClass);
		errorElement.textContent = input.validationMessage;
		errorElement.classList.add(this._errorClass);
	};

	//****Убрать ошибку с инпута****
	_hideInputError(input, errorElement) {
		input.classList.remove(this._inputErrorClass);
		errorElement.textContent = '';
		errorElement.classList.remove(this._errorClass);
	};

	//****Проверка валидност инпута****
	_checkInputValidity(input) {
		const errorElement = this._form.querySelector(`#error-${input.id}`);

		if (input.checkValidity()) {
			this._hideInputError(input, errorElement)
		} else {
			this._showInputError(input, errorElement)
		}
	};

	//****Заблокировать кнопку****
	_disableButton(button) {
		button.setAttribute('disabled', '');
		button.classList.add(this._inactiveButtonClass);
	};

	//****Разблокировать кнопку****
	_enableButton(button) {
		button.removeAttribute('disabled')
		button.classList.remove(this._inactiveButtonClass);
	};

	//****Перекулючатель кнопки****
	_toggleButtonState() {
		const submitButton = this._form.querySelector(this._submitButtonSelector);

		if (this._form.checkValidity()) {
			this._enableButton(submitButton);
		} else {
			this._disableButton(submitButton);
		}
	};

	//****Сброс формы****
	_setSubmitListener() {
		this._form.addEventListener('submit', function (event) {
			event.preventDefault();
			this._toggleButtonState();
		});
	};

	_setEventListeners() {
		this._setSubmitListener();
		this._toggleButtonState();

		const inputsList = Array.from(this._form.querySelectorAll(this._inputSelector));
		inputsList.forEach((input) => {
			input.addEventListener('input', () => {
				this._checkInputValidity(input);
				this._toggleButtonState();
			})
		});
	};

	enableValidation() {
		this._setEventListeners();
	};
}