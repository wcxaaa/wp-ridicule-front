import index from './components/index.vue';
import http404 from './components/http404.vue';

import categoryList from './components/category/category-list.vue';
import categoryDetail from './components/category/category-detail.vue';

export const appRoute = [
  {
    name: "root",
    path: "/",
    redirect: '/index'
  },
  {
    name: "index",
    path: "/index",
    component: index
  },

  {
    name: "categoryList",
    path: "/categories",
    component: categoryList
  },

  {
    name: "categoryDetail",
    path: "/categories/:id",
    component: categoryDetail
  },

  {
    name: "http404",
    path: "**",
    component: http404
  }
];
