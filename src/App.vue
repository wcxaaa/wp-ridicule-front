<template>
  <section class="app">
    <nav class="app">
      
    </nav>
    <main class="router">
      <router-view></router-view>
    </main>
  </section>
</template>



<script lang="ts">

import Component, { mixins } from 'vue-class-component';

import { WPQueryService } from './mixins/wpquery.service';

@Component
export default class App extends mixins(WPQueryService) {

  async main() {
    let menus = await this.getMenuItems({id: 3});
    console.log(menus);
    menus = await this.getMenuItems({location: 'top'});
    console.log(menus);
    menus = await this.getMenuItems({});
    console.log(menus);
  }

  created() {
    this.main();
  }

}

</script>

<style>

</style>
