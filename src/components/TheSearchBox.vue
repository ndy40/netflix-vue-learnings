<template>
    <div class="flex gap-2 w-auto">
        <input 
            type="text" 
            name="searchbox"
            v-model="textValue"
            :placeholder="placeholder" 
            class="p-2 border border-gray-300 w-72 font-light rounded h-9"
            >
            <button @click="$emit('onSearch', textValue)" class="bg-blue-600 text-blue-200 px-4 rounded">Search</button>
    </div>
</template>
    
<script setup>
import {ref} from 'vue'

const textValue = ref('')



defineProps({
    placeholder: {
        type: String, 
        required: true
    }
})


</script>

<style lang="scss" scoped>

</style>