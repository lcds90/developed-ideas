import { createRouter, createWebHistory } from 'vue-router'
import AboutViewVue from '@/views/AboutView.vue'
import HomeViewVue from '@/views/HomeView.vue'
import ProjectsViewVue from '@/views/ProjectsView.vue'
import Bin2DecVue from '@/views/projects/Bin2Dec.vue'
import Bin2DecAboutVue from '@/views/projects/Bin2DecAbout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        about: AboutViewVue,
        default: HomeViewVue,
      }
    },
    {
      path: '/projects',
      name: 'projects',
      components: {
        about: AboutViewVue,
        default: ProjectsViewVue,
      },
    },
    {
      path: '/projects/bin2dec',
      name: 'bin-2-dec',
      components: {
        about: Bin2DecAboutVue,
        default: Bin2DecVue,
      }
    },
  ]
})

export default router
