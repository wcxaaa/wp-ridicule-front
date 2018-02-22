import Vue from 'vue';
import Component, { mixins } from 'vue-class-component';

import { DataService } from "./data.service";

import { IMenuQuery, ICategoryQuery, IPostQuery, IPageQuery } from '../interfaces/wpquery.interface';

import configs from '../configs/config';

@Component
export class WPQueryService extends mixins(DataService) {

  config = configs[0];

  async getMenu(q: IMenuQuery = {}): Promise<any> {
    let token = `${this.config.wp}/wp-json/wp-api-menus/v2/menus/?`;

    for (let key in q) {
      token += `${key}=${q[key]}&`;
    }

    let menus = await this.getData(token);
    let p: Promise<any> = new Promise((resolve, reject) => {
      menus.subscribe(
        (next: any[]) => {
          resolve(next[0]);
        },
        (error) => {
          reject({error: error});
        }
      );
    });
    return await p;
  };

  async getMenuItems(id: number) {
    let token = `${this.config.wp}/wp-json/wp-api-menus/v2/menus/${id}`;
    let menu = await this.getData(token);
    let p: Promise<any[]> = new Promise((resolve, reject) => {
      menu.subscribe(
        (next) => {
          resolve(next[0].items);
        },
        (error) => {
          reject([{error: error}]);
        }
      );
    });
    return await p;
  }

  async getCategories(q: ICategoryQuery = {}) {
    let token = `${this.config.wp}/wp-json/wp/v2/categories/?`;
    for (let key in q) {
      token += `${key}=${q[key]}&`;
    }

    let categories = await this.getData(token);
    

    let p: Promise<any[]> = new Promise((resolve, reject) => {
      let subscription = categories.subscribe(
        (next: any[]) => {
          resolve(next);
        },
        (error) => {
          reject({error: error});
        }
      );
    });
    let cates = await p;

    return await p;

  }

  async getCategory(id: number) {
    let token = `${this.config.wp}/wp-json/wp-api-menus/v2/categories/${id}`;
    let category = await this.getData(token);
    let p: Promise<any[]> = new Promise((resolve, reject) => {
      category.subscribe(
        (next) => {
          resolve(next[0]);
        },
        (error) => {
          reject([{error: error}]);
        }
      );
    });
    return await p;
  }

  async getPosts(q: IPostQuery = {}) {
    let token = `${this.config.wp}/wp-json/wp/v2/posts/?`;
    for (let key in q) {
      token += `${key}=${q[key]}&`;
    }

    let posts = await this.getData(token);

    let p: Promise<any[]> = new Promise((resolve, reject) => {
      posts.subscribe(
        (next) => {
          resolve(next);
        },
        (error) => {
          reject([{error: error}]);
        }
      );
    });
    return await p;
  }

  async getPost(id: number) {
    let token = `${this.config.wp}/wp-json/wp-api-menus/v2/posts/${id}`;
    let post = await this.getData(token);
    let p: Promise<any[]> = new Promise((resolve, reject) => {
      post.subscribe(
        (next) => {
          resolve(next[0]);
        },
        (error) => {
          reject([{error: error}]);
        }
      );
    });
    return await p;
  }

  async getPages(q: IPageQuery = {}) {
    let token = `${this.config.wp}/wp-json/wp/v2/pages/?`;
    for (let key in q) {
      token += `${key}=${q[key]}&`;
    }

    let pages = await this.getData(token);

    let p: Promise<any[]> = new Promise((resolve, reject) => {
      pages.subscribe(
        (next) => {
          resolve(next);
        },
        (error) => {
          reject([{error: error}]);
        }
      );
    });
    return await p;
  }

  async getPage(id: number) {
    let token = `${this.config.wp}/wp-json/wp/v2/pages/?${id}`;
    let page = await this.getData(token);
    let p: Promise<any[]> = new Promise((resolve, reject) => {
      page.subscribe(
        (next) => {
          resolve(next[0]);
        },
        (error) => {
          reject([{error: error}]);
        }
      );
    });
    return await p;
  }

}