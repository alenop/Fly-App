import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';        // Importer Login.vue
import HomeView from '../views/HomeView.vue';  // Si tu as une autre page d'accueil

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',          // Route par défaut
      component: Login,       // Charger Login.vue à la racine
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,    // Page d'accueil après connexion (optionnelle)
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'), // Autres pages
    },
  ],
});

export default router;
