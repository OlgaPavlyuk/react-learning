export default class ServiceData {
  constructor() {
    this.apiBase = process.env.NODE_ENV === 'production' ? '.' : 'http://localhost:3000';
  }

  /* https://olgapavlyuk.github.io/react-learning/db.json */

  /* there are some bad code for the dynamic behavior emulation on the githubpages */

  getResource = async () => {
    try {
      const response = await fetch(`${this.apiBase}/db.json`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch (error) {
      return new Error(`Could not fetch: ${error.message}`);
    }
  }

  getAllCards = async () => {
    const res = await this.getResource();
    return res;
  }

  getLearningCards = async () => {
    const res = await this.getResource();
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
