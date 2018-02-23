<template>
  <section>
    <header>
      <h1> {{ page.title.rendered }} </h1>
    </header>

    <main v-html="page.content.rendered">    </main>

  </section>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
  import Component, { mixins } from 'vue-class-component';
  import { WPQueryService } from '../../mixins/wpquery.service';

  @Component({
    name: 'pageDefault'
  })
  export default class PageDefault extends mixins(WPQueryService) {

    page = {
      title: {},
      content: {}
    };

    async main() {
      let pid = parseInt(this.$route.params.id);
      let page = await this.getPage(pid);
      if (page.id) {
        this.page = page;
      }
    }

    created() {
      this.main();
    }
  }
</script>