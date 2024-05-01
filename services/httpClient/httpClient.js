const API_KEY = "RujdMKAf";

const httpClient = {
  baseURL: `https://www.rijksmuseum.nl/api/nl/collection?key=${API_KEY}&q=`,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  get: async function fetchData(search) {
    const reponse = await fetch(`${this.baseURL}${search}`);
    return reponse.json();
  },
};

export default httpClient;
