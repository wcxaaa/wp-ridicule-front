<template>
  <section class="index">
    home sweet home
  </section>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">

import Component, { mixins } from 'vue-class-component';
import { WPQueryService } from '../mixins/wpquery.service';

@Component({
  name: 'index'
})
export default class Index extends mixins(WPQueryService) {

  async main() {
    // let cate = await this.getPage(2);
    // console.log(cate);
  }

  created() {
    this.main();
  }

}

</script>