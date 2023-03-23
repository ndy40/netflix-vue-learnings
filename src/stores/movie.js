import { defineStore } from "pinia";

const OMDB_URL = ''

export const useMovieStore = defineStore('movie', {
    state: () => ({
        movies: []
    }),
    actions: {
        async searchMovie (searchTerm) {
            
        }
    }

})