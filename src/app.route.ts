import index from './components/index.vue';
import http404 from './components/http404.vue';

import categoryList from './components/category/category-list.vue';
import categoryDetail from './components/category/category-detail.vue';

import postList from './components/post/post-list.vue';
import postDetail from './components/post/post-detail.vue';

import tagList from './components/tag/tag-list.vue';
import tagDetail from './components/tag/tag-detail.vue';

// pages
import pageDefault from './components/page/page-default.vue';
import pageWashMachine from './components/page/page-wash-machine.vue';

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
    name: "tagList",
    path: "/tags",
    component: tagList
  },

  {
    name: "tagDetail",
    path: "/tags/:id",
    component: tagDetail
  },

  // pages -->

  {
    name: "pageDefault",
    path: "/pages/default/:id",
    component: pageDefault
  },

  {
    name: "pageWashMachine",
    path: "/pages/wash-machine/:id",
    component: pageWashMachine
  },

  // <-- pages


  {
    name: "http404",
    path: "**",
    component: http404
  }
];
