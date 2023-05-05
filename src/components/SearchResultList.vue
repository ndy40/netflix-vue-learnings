<template>
    <div v-if="results.length" class="flex flex-row flex-wrap justify-around gap-y-7 gap-x-5 last:justify-start">    
        <MovieItem v-for="item in results" :key="item.id" :movie="item"/>
    </div>
    <p v-else class="font-light">No data</p>
</template>

<script setup>
import MovieItem from './MovieItem.vue';
import { defineProps } from 'vue';

const props = defineProps({
    results: {
        type: Array,
        required: true
    }
})

</script>
