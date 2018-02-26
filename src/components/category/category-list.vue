<template>
  <section>
    <h1>category list (top level)</h1>
    <ul>
      <li v-for="(cate) of categories" v-bind:key="cate.id">
        <router-link v-bind:to="`/categories/${cate.id}`">{{ cate.name }}</router-link>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
  import Component, { mixins } from 'vue-class-component';
  import { WPQueryService } from '../../mixins/wpquery.service';

  @Component({
    name: 'categoryList'
  })
  export default class CategoryList extends mixins(WPQueryService) {

    categories: any[] = [];

    async main() {
      this.categories = await this.getCategories({parent: 0, fields: ["id", "name"]});
    }

    created() {
      this.main();
    }

  }
</script>