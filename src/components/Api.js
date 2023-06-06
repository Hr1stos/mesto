export default class Api {
	constructor(options) {
		this._url = options.url;
		this._headers = options.headers;
	}

	_handleResponse(res) {
		if (res.ok) {
			return res.json();
		}
		return Promise.reject(`handleResponse - ошибка: ${res.status}`);
	}

	getDataCards() {
		return fetch(`${this._url}/cards`, {
			headers: this._headers
		})
		.then(this._handleResponse)
	}

	getDataUser() {
		return fetch(`${this._url}/users/me`, {
			headers: this._headers
		})
		.then(this._handleResponse)
	}

	setDataUser(data) {
		return fetch(`${this._url}/users/me`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				name: data.name,
				about: data.about
			})
		})
		.then(this._handleResponse)
	}

	setUserAvatar(data) {
		return fetch(`${this._url}/users/me/avatar`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				avatar: data.avatar
			})
		})
		.then(this._handleResponse)
	}

	addNewCard(data) {
		return fetch(`${this._url}/cards`, {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify({
				name: data.name,
				link: data.link
			})
		})
		.then(this._handleResponse)
	}

	deleteCard(cardId) {
		return fetch(`${this._url}/cards/${cardId}`, {
			method: 'DELETE',
			headers: this._headers,
		})
		.then(this._handleResponse)
	}

	setLike(cardId) {
		return fetch(`${this._url}/cards/${cardId}/likes`, {
			method: 'PUT',
			headers: this._headers,
		})
		.then(this._handleResponse)
	}

	deleteLike(cardId) {
		return fetch(`${this._url}/cards/${cardId}/likes`, {
			method: 'DELETE',
			headers: this._headers,
		}).then(this._handleResponse)
	}
}