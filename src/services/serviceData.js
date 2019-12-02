export default class ServiceData {
  constructor() {
    this._apiBase = 'http://localhost:3000';
  }

  getResource = (url) => {
    return fetch(`${this._apiBase}${url}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(err => {
        console.log(err);
        return Promise.reject(new Error(`Could not fetch ${url}: ${err.message}`));
      })
  }

  getAllCards = async () => {
    const res = await this.getResource('/cards/');
    return res;
  }

  getLearningCards = async () => {
    const res = await this.getResource('/cards/');
    // filter
    return res;
  }

  updateCards = async (arr) => {
    return fetch(`${this._apiBase}/cards/`, {
      method: 'PUT',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ cards: arr })
    }).then((data) => {
      console.log(data);
      console.log('data changes');
    }).catch((err) => {
      console.log(err);
    });
  }

  updateCard = async (id, data) => {
    return fetch(`${this._apiBase}/cards/${id}`, {
      method: 'PATCH',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((data) => {
      console.log(data);
      console.log('data changes');
    }).catch((err) => {
      console.log(err);
    });
  }

}
