import { defineStore } from 'pinia'
import httpClient from "@/services/httpClient/httpClient";


export const useStore = defineStore('store', {
    state: () => {
        return {
            currentSearch: { value: '' },
            currentArtwork: {},
            results: [] as any[],
            currentPage: 0,
            perPage: 20
        }
    },
    getters: {
        artworks: (state) => state.results
    },
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
        setCurrentArtwork(id: string) {
            const current = this.$state.results.filter((item) => item.id === id);
            console.log("current", current);
            this.$state.currentArtwork = current[0];
        }
        // async loadMoreImages() {
        //     this.currentPage++;
        //     await this.fetchImages();
        // }
    },
})