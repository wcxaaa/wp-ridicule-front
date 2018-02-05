<template>
  <section>
    index works
  </section>
</template>

<style scoped>

</style>

<script lang="ts">
import { Mixins, Component } from 'vue-mixin-decorator';

import { DataService } from '../mixins/data.service';

@Component
export default class Index extends Mixins<DataService>(DataService) {

  created() {
    this.testData();
  }

  async testData() {
    let data = await this.getData('https://jsonplaceholder.typicode.com/posts/1', (boom) => {boom.title='boom'});
    data.subscribe(
      (next) => {
        console.log(next);
      },
      (error) => {
        console.log(error);
      }
    );
  };


}



</script>