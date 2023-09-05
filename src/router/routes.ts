import { APP_ROUTE } from '@/constants/routes';
import Home from '@/views/Home.vue';
import TellYourPersonal from '@/views/TellYourPersonal.vue';
import Login from '@/views/Login.vue';
import WorkThrough from '@/views/WorkThrough.vue';
import ResultShows from '@/views/ResultShows.vue';
import BlogDetail from '@/views/BlogDetail.vue';

export const routes = [
  {
    path: APP_ROUTE.HOME,
    component: Home,
    meta: {
      layout: 'LayoutHome',
    },
  },
  {
    path: APP_ROUTE.TELL_YOUR_PERSONAL,
    component: TellYourPersonal,
    meta: {
      layout: 'LayoutHome',
    },
  },
  {
    path: APP_ROUTE.LOGIN,
    component: Login,
    meta: {
      layout: 'LayoutDefault',
    },
  },
  {
    path: APP_ROUTE.WORKTHROUGH,
    component: WorkThrough,
    meta: {
      layout: 'LayoutDefault',
    },
  },
  {
    path: APP_ROUTE.RESULT_SHOW,
    component: ResultShows,
    meta: {
      layout: 'LayoutDefault',
    },
  },
  {
    path: APP_ROUTE.BLOG_DETAIL,
    component: BlogDetail,
    meta: {
      layout: 'LayoutDefault',
    },
  },
  // {
  //   path: APP_ROUTE.SAMPLE,
  //   component: () => import('../views/Sample.vue'),
  //   meta: {
  //     layout: 'LayoutTest',
  //   },
  // },
];
