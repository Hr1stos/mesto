const initialCards = [
	{
		name: 'Канада',
		link: 'https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhbmFkYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
	},
	{
		name: 'Аргентина',
		link: 'https://images.unsplash.com/photo-1610680224983-f9759ce81c7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGFyZ2VudGluYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
	},
	{
		name: 'Швейцария',
		link: 'https://images.unsplash.com/photo-1675503989795-a5661ebd1536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHNjaHdlaXplcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
	},
	{
		name: 'США',
		link: 'https://images.unsplash.com/photo-1580752300984-a479ef2f97dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHVzYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
	},
	{
		name: 'Грузия',
		link: 'https://images.unsplash.com/photo-1568490891363-466fe21bede2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=290&q=80'
	},
	{
		name: 'Россия',
		link: 'https://images.unsplash.com/photo-1520106212299-d99c443e4568?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
	}
];

const validationConfig = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__submit-button',
	inactiveButtonClass: 'popup__submit-button_disabled',
	inputErrorClass: 'popup__input_type_error',
	errorClass: 'popup__error_visible'
};

export { initialCards, validationConfig };