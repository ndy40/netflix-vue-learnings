<script setup>
    import TheSearchBox from '@/components/TheSearchBox.vue';
    import SearchResultList from '@/components/SearchResultList.vue';
    import { useMovieStore } from '@/stores/movie';

    const movie = useMovieStore()

    let showMessage = async (search) => {
        movie.searchMovies(search)
    }

</script>

<template>
  <div id="wrapper">
    <div class="flex flex-col m-6 gap-4 flex-wrap">
        <TheSearchBox placeholder="Search Movie" @on-search="showMessage"/>
        <hr class="h-px my-4 bg-gray-200 border-0">
        <SearchResultList :results="movie.movies"></SearchResultList>
    </div>
  </div>
</template>

<style scoped>
  
</style>
