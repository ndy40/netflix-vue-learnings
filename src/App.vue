<script setup>
import { ref } from 'vue';
import TheSearchBox from './components/TheSearchBox.vue';
import SearchResultList from './components/SearchResultList.vue';

const theSearch = ref('')

let showMessage = (search) => { theSearch.value = search}

</script>

<template>
  <div id="wrapper">
    <div class="flex flex-col m-6 gap-4 flex-wrap">
    <TheSearchBox placeholder="Search Movie" @on-search="showMessage"></TheSearchBox>
    <hr class="h-px my-4 bg-gray-200 border-0">
    <SearchResultList></SearchResultList>
  </div>
  </div>
  
</template>

<style scoped>
  #wrapper {
    width: 960px;
  }
</style>
