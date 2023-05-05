<template>
    <div class="flex flex-row m-6">
        <img class="movie-image" :src="'https://image.tmdb.org/t/p/original/' + store.selectedMovie.backdrop_path" />
        <div class="flex flex-col gap-2 ml-5">
            <h1 class="text-gray-700 font-bold text-3xl">{{ store.selectedMovie.title }}</h1>
            <div class="text-gray-600"><span class="text-gray-500">Ratings</span> {{ store.selectedMovie.vote_average }} <font-awesome-icon icon='fa-solid fa-star' /></div>
            <div>Production Countries {{ productionCountries }}</div>
        </div>
    </div>
</template>

<script setup>

import {computed, defineProps, onMounted, watch} from 'vue';
import { useRoute } from 'vue-router';
import {useMovieStore} from '@/stores/movie';

const route = useRoute()
const store = useMovieStore()

const props = defineProps({
    id: {
        type: String, 
        required: true
    }
})

const productionCountries = computed(() => {
    return 'Nigeria'
})


onMounted(async () => {
    await store.fetchMovie(route.params.id)
})


</script>

<style scoped>

.movie-image {
    width: 415px;
    height: 400px;
}

</style>