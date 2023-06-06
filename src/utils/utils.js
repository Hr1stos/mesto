export function loading(popup, text) {
	const submitButton = popup.querySelector('.popup__submit-button')
	submitButton.textContent = text;
}