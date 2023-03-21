<script setup>
import { ref } from 'vue';
import TheSearchBox from './components/TheSearchBox.vue';

const theSearch = ref('')

let showMessage = (search) => { theSearch.value = search}

</script>

<template>
  <div class="flex flex-col m-6">
    <TheSearchBox placeholder="Search Movie" @on-search="showMessage"></TheSearchBox>
    <p>{{theSearch}}</p>
  </div>
</template>

<style scoped>
</style>
