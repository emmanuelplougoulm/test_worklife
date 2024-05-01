// import { useConfig } from "@/composables/useConfig";

// const config = useConfig();

const httpClient = {
  baseURL: `https://www.rijksmuseum.nl/api/nl/collection?key=RujdMKAf`,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  get: async function fetchData(search, currentPage) {
    const reponse = await fetch(
      `${this.baseURL}&p=${currentPage}&ps=12&q=${search}`
    );
    return reponse.json();
  },
};

export default httpClient;
