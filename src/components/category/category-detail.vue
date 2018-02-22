<template>
  <section>
    <header>
      <h1>Posts about {{ cateName }}</h1>
    </header>

    <main>
      <article v-for="(post) of posts" v-bind:key="post.id">
        <header>
          <h2>
            <router-link v-bind:to="`/posts/${post.id}`">{{ post.title.rendered }}</router-link>
          </h2>
          <small>{{ post.date }}</small>
        </header>

        <main v-html="post.content.rendered"> </main>

        <footer>
          <ul>
            <li v-for="(tag, index) of post.tags" v-bind:key="index">
              {{ tag }}
            </li>
          </ul>
        </footer>
      </article>
    </main>
    
  </section>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
  import Component, { mixins } from 'vue-class-component';
  import { WPQueryService } from '../../mixins/wpquery.service';

  @Component({
    name: 'categoryDetail'
  })
  export default class CategoryDetail extends mixins(WPQueryService) {

    cateName = "Loading...";
    posts: any[] = [];

    async main() {
      let cateID: number = parseInt(this.$route.params.id);
      let category = await this.getCategory(cateID);
      if (category) {
        this.cateName = category.name;

        // form a query token of the current category
        let qcate: number[] = [];
        qcate.push(cateID);

        // retrieve posts
        this.posts = await this.getPosts({categories: qcate});
      }
    }

    created() {
      this.main();
    }
  }
</script>