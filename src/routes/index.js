import { createRouter, createWebHistory } from 'vue-router'
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import ItemView from '../views/ItemView.vue'
import UserView from '../views/UserView.vue'
import bus from '../utils/bus.js'
import { store } from '../store/index.js'

const routes = [
  {
    path: '/',
    redirect: '/news',
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView,
  },
  {
    path: '/ask',
    name: 'ask',
    component: AskView,
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView,
  },
  {
    path: '/item/:id',
    component: ItemView,
  },
  {
    path: '/user/:id',
    component: UserView,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router guard를 이용한 데이터 호출 시점 설정
router.beforeEach((to, from, next) => {
  if(to.name === 'news' || to.name === 'ask'|| to.name === 'jobs') {
    bus.$emit('start:spinner');
    store.dispatch('FETCH_LIST', to.name)
      .then(() => {
        console.log('fetched');
        next();
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    next();
  } 
});