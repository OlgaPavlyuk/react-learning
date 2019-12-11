export default class ServiceData {
  constructor() {
    this.apiBase = 'http://localhost:3000';
  }

  /* there are some bad code for the dynamic behavior emulation on the githubpages */

  getResource = async (url) => {
    const source = process.env.NODE_ENV !== 'production'
      ? `${this.apiBase}${url}`
      : 'https://github.com/OlgaPavlyuk/react-learning/blob/master/db.json';
    console.log(source);
    return fetch(source)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch((err) => Promise.reject(new Error(`Could not fetch ${url}: ${err.message}`)));
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
    try {
      const data = await fetch(`${this.apiBase}/cards/`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cards: arr }),
      });
      console.log('data changes');
      return data;
    } catch (error) {
      console.log(error);
      return new Error(`Could not update cards: ${error.message}`);
    }
  }

  updateCard = async (id, data) => {
    if (process.env.NODE_ENV === 'production') {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('fake update Card');
          resolve('fake update Card');
        }, 50);
      });
    }

    try {
      const response = await fetch(`${this.apiBase}/cards/${id}`, {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return response;
    } catch (error) {
      console.log(error);
      return new Error(`Could not update card: ${error.message}`);
    }
  }
}
