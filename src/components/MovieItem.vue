<template>

    <router-link :to="{name: 'movie_detail', params: {movieId: movie.id}}"><div id="movie-item" class="bg-white rounded-lg border border-gray-200 shadow-md w-56 hover:scale-105">
        <img :src="getImage(movie) " alt="placeholder image" class="w-full rounded-t-lg object-cover">
        <div class="p-3 w-full">
            <router-link :to="{}" class="underline text-lg text-black-200 hover:underline font-normal">{{ movie.title }}</router-link>>
            <div class="mt-2">
                <p class="text-sm"><span class="font-semibold">Rating:</span> {{ movie.vote_average }} <font-awesome-icon icon='fa-solid fa-star' />
</p>
                <p><span class="font-semibold">Release date</span> - {{ movie.release_date }}</p>
            </div>
        </div>
    </div></router-link>

</template>

<script setup>
import { defineProps } from 'vue';
import router from '../router';

defineProps({
    movie: {
        type: Object,
        required: true
    }
})

let getImage = (item) => {
    if (item.poster_path) {
        return `https://image.tmdb.org/t/p/original/${item.poster_path}`
    }

    return 'https://picsum.photos/2000/3000'
}

</script>

<style scoped>


</style>