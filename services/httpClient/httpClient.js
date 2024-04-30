const httpClient = {
  baseURL:
    "https://www.rijksmuseum.nl/api/nl/collection?key=RujdMKAf&involvedMaker=Rembrandt+van+Rijn",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  get: async function fetchData() {
    //might use it later
    // const { pending, data: posts } = await useLazyFetch('/api/posts')

    const reponse = await fetch(this.baseURL);
    return reponse.json();
  },
};

export default httpClient;
