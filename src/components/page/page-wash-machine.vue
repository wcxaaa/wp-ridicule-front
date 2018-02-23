<template>
  <section class="pageWashMachine">

    <header>
      <h1> {{ page.title.rendered }} </h1>
    </header>

    <main>

      <aside>
        <ul>
          <li v-for="(item) of l2MenuItems" v-bind:key="item.id">
            <router-link v-bind:to="`/pages/wash-machine/${item.id}`">{{ item.title }}</router-link>
          </li>
        </ul>
      </aside>

      <article v-html="page.content.rendered">

      </article>
      
    </main>

  </section>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
  import Component, { mixins } from 'vue-class-component';
  import { PageService } from '../../mixins/page.service';

  @Component({
    name: 'pageWashMachine'
  })
  export default class PageWashMachine extends mixins(PageService) {

    page = {
      title: {},
      content: {}
    };

    l2MenuItems: any[] = [];
    // e.g.
    // {
    //   id: 17,
    //   title: "海尔EG8014HB39GU1"
    // }

    async main() {
      let page = await this.getPageByID(parseInt(this.$route.params.id));
      if (page) this.page = page;

      // build up level2 nav menu
      this.l2MenuItems = await this.getL2MenuItems("洗衣机");

    }

    created() {
      this.main();
    }
  }
</script>