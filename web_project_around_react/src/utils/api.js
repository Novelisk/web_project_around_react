class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkRes(res) {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then(this._checkRes);
  }

  updateUserInfo({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ name, about }),
    }).then(this._checkRes);
  }

  updateAvatar({ avatar }) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ avatar }),
    }).then(this._checkRes);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then(this._checkRes);
  }

  addNewCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, link }),
    }).then(this._checkRes);
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._checkRes);
  }

  likeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers,
    }).then(this._checkRes);
  }

  unlikeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._checkRes);
  }

  changeLikeCardStatus(cardId, like) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: like ? 'PUT' : 'DELETE',
      headers: this._headers,
    }).then(this._checkRes);
  }

  getAppData() {
    return Promise.all([this.getUserInfo(), this.getInitialCards()]);
  }
}

// Set Api
const api = new Api({
  baseUrl: 'https://around-api.es.tripleten-services.com/v1',
  headers: {
    authorization: '28b7690c-9f2e-44f9-b1b8-d3a0a018562f',
    'Content-Type': 'application/json',
  },
});

export default api;
