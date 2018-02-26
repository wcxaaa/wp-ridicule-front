<template>
  <section class="tagList">
    <header>
      <h1>tag list</h1>
    </header>

    <main>
      <ul>
        <li v-for="(tag) of tags" v-bind:key="tag.id">
          <router-link v-bind:to="`/tags/${tag.id}`">{{ tag.name }}</router-link>
        </li>
      </ul>
    </main>
  </section>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
  import Component, { mixins } from 'vue-class-component';
  import { WPQueryService } from '../../mixins/wpquery.service';

  @Component({name: "tagList"})
  export default class TagList extends mixins(WPQueryService) {

    tags: any[] = [];

    async main() {
      this.tags = await this.getTags();

    }

    created() {
      this.main();
    }

  }
</script>