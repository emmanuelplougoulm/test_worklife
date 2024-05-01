import { defineStore } from 'pinia'
import httpClient from "@/services/httpClient/httpClient";


export const useStore = defineStore('store', {
    state: () => {
        return {
            currentSearch: { value: '' },
            results: [] as any[],
            currentPage: 1,
            perPage: 12
    actions: {
        async fetchImages(currentSearch: any) {
            try {
                const response = await httpClient.get(currentSearch.value.value, this.currentPage);
                console.log('response', response)
                if (response.count > 0) {
                    // searchResults.value = { ...response };
                    // console.log('response.artObjects', response.artObjects)
                    this.$state.results = [...response.artObjects];
                    console.log('TOTO')
                }
            } catch (error) {
                console.error(error);
            }
        },
})