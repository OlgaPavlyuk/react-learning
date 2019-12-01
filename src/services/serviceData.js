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
    console.log(res);
    return res;
  }

  getLearningCards = async () => {
    const res = await this.getResource('/cards/');
    // filter
    return res;
  }

}
