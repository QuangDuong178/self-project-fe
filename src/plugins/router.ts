import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '@/router/routes';
import type { App } from 'vue';
export default {
  install(app: App<Element>) {
    const router = createRouter({
      history: createWebHistory(),
      routes,
    });
    router.beforeEach((to, from, next) => {
      // handle middleware Ex: return 404 if route not found
      return next();
    });

    app.use(router);
  },
};
