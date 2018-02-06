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

  async main() {

  }

  constructor(){super();}

  created() {
    this.main();
  }



}
</script>

<style>

</style>
