<template>
  <section class="app">
    <nav class="app">
      <ul>
        <li><router-link to="/categories">Category list</router-link></li>
        <li><router-link to="/posts">Post list</router-link></li>
      </ul>
    </nav>
    <main class="router">
      <router-view :key="$route.fullPath"></router-view>
    </main>
  </section>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">

import Component, { mixins } from 'vue-class-component';

import { WPQueryService } from './mixins/wpquery.service';

@Component({
  name: 'app'
})
export default class App extends mixins(WPQueryService) {

  async main() {
    
  }

  created() {
    this.main();
  }

}

</script>
