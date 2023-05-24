export default class UserInfo {
	constructor({ name, opsane }) {
		this._userNameElement = name;
		this._userOpsaneElement = opsane;
	}

	getUserInfo() {		
		return {
			name: this._userNameElement.textContent,
			opsane: this._userOpsaneElement.textContent
		}
	}

	setUserInfo({ name, opsane }) {
		this._userNameElement.textContent = name;
		this._userOpsaneElement.textContent = opsane;
	}
}