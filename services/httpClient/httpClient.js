const httpClient = {
  baseURL: `https://www.rijksmuseum.nl/api/en/collection?key=RujdMKAf`,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  get: async function fetchData(search, currentPage) {
    const LIMIT = "&ps=20";
    const PAGE = `&p=${currentPage}`;
    const SEARCH = `&q=${search}`;

    const reponse = await fetch(`${this.baseURL}${LIMIT}${PAGE}${SEARCH}`);
    return reponse.json();
  },
};

export default httpClient;
