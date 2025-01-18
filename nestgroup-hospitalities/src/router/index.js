/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import CoHome from '@/pages/hostels/CoHome.vue';
import Home from '@/pages/Home.vue';
import CoLife from '@/pages/hostels/CoLife.vue';
import Vanitha from '@/pages/hostels/Vanitha.vue';
import Womens from '@/pages/hostels/Womens.vue';
import CoSpace from '@/pages/hostels/CoSpace.vue';
import About from '@/pages/About.vue';
import Contact from '@/pages/Contact.vue';

let routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  }, {
    path: '/cohome',
    name: 'cohome',
    component: CoHome,
  }, {
    path: '/colife',
    name: 'colife',
    component: CoLife,
  },
  {
    path: '/vanitha',
    name: 'vanitha',
    component: Vanitha,
  },
  {
    path: '/womens',
    name: 'womens',
    component: Womens,
  },
  {
    path: '/cospace',
    name: 'cospace',
    component: CoSpace,
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    component: About
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
});

routes.forEach(route => router.addRoute(route));

export default router
