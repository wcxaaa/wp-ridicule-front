<template>
  <section class="app">
    <main class="router">
      <router-view></router-view>
    </main>
  </section>
</template>



<script lang="ts">

import { Mixins, Component } from 'vue-mixin-decorator';

import { WPQueryService } from './mixins/wpquery.service';

@Component
export default class App extends Mixins<WPQueryService>(WPQueryService) {
  created() {
    this.main();
  }

  async main() {
    await this.getConfig();
    let menu = await this.getMenu({name: "搞笑新闻"});
    let mitem = await this.getMenuItems(menu.ID);
    console.log(mitem);
  }

  async getConfig() {
    this.config = await this.loadConfig('src/configs/config.json');
  };


}
</script>

<style>

</style>
