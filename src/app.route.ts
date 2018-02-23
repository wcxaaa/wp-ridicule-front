import index from './components/index.vue';
import http404 from './components/http404.vue';

import categoryList from './components/category/category-list.vue';
import categoryDetail from './components/category/category-detail.vue';

import postList from './components/post/post-list.vue';
import postDetail from './components/post/post-detail.vue';

// pages
import pageDefault from './components/page/page-default.vue';

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
    name: "postList",
    path: "/posts",
    component: postList
  },

  {
    name: "postDetail",
    path: "/posts/:id",
    component: postDetail
  },

  {
    name: "page-default",
    path: "/pages/default/:id",
    component: pageDefault
  },

  {
    name: "http404",
    path: "**",
    component: http404
  }
];
