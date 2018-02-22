<template>
  <section class="app">
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

  created() {

  }

}

</script>

<style>

</style>
