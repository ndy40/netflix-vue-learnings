import { defineStore } from "pinia";
import { computed, ref } from "vue";

import {URL, MovieUrl} from '@/config.js'

export const useMovieStore = defineStore('movie', () => {
    const movies = ref([]);

    const selectedMovie = ref({})

    async function searchMovies (searchTerm) {
        const endpoint = `${URL}` + searchTerm
        const result = await fetch(endpoint)
        movies.value = (await result.json())['results']
    }

    async function fetchMovie (movieId) {
        const endpoint = MovieUrl.replace('movie_id', movieId)
        const result = await fetch(endpoint)
        const current_result = await result.json()
        selectedMovie.value = current_result
    }

    

    return {movies, currentMovie, searchMovies, fetchMovie}
})