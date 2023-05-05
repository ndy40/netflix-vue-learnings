import { createRouter, createWebHistory } from 'vue-router'

import SearchPage from '../views/SearchPage.vue'
import MovieDetail from '../views/MovieDetail.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '', component: SearchPage, name: 'root'
    },
    {
      path: '/movie/:id', component: MovieDetail, name: 'movie_detail', props: true
    }
  ]
})

export default router
