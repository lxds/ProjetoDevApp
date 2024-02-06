import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import OfflinePage from '../views/OfflinePage.vue';
import GroupPage from '../views/GroupPage.vue';
import TodososProjetos from '../views/TodososProjetos.vue';
import Finalizados from '../views/Finalizados.vue';
import Config from '../views/Config.vue';
import Ajuda from '../views/Ajuda.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/folder/Inbox'
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/FolderPage.vue')
  },
  {
    path: '/todososprojetos',
    name: 'TodososProjetos',    
    component: TodososProjetos
  },
  {
    path: '/offline',
    name: 'OfflinePage',    
    component: OfflinePage
  },
  {
    path: '/group',
    name: 'GroupPage',    
    component: GroupPage
  },
  {
    path: '/config',
    name: 'Config',    
    component: Config
  },
  {
    path: '/ajuda',
    name: 'Ajuda',    
    component: Ajuda
  },
  {
    path: '/finalizados',
    name: 'Finalizados',    
    component: Finalizados
  },   
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
