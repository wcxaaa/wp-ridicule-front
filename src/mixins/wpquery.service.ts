import Vue from 'vue';
import { Mixin, Mixins } from 'vue-mixin-decorator';

import { DataService } from "./data.service";

@Mixin
export class WPQueryService extends Mixins<DataService>(DataService) {

  created() {
    this.loadConfig('src/configs/config.json');
  }

  async getMenuID(name: string) {
    let menus = await this.getData(`wp-json/wp-api-menus/v2/menus/?name=${name}`);
    let p = new Promise((resolve, reject) => {
      menus.subscribe(
        (next) => {
          resolve(next);
        },
        (error) => {
          reject(error);
        }
      );
    });

    return await p;
  };

}