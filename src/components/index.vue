<template>
  <section>
    index works
  </section>
</template>

<style scoped>

</style>

<script lang="ts">

import { Mixins, Component } from 'vue-mixin-decorator';
import { WPQueryService } from '../mixins/wpquery.service';

@Component
export default class Index extends Mixins<WPQueryService>(WPQueryService) {

  async main() {
    let cate = await this.getCategories({id: 4});
    console.log(cate);
  }

  constructor(){
    super();
  };

  created() {
    this.main();
  }

}



</script>