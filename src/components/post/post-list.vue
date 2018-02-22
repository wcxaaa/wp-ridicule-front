<template>
  <section>

    <header>
      <h1>post list</h1>
    </header>

    <main>
      <ul>
        <li v-for="(post) of posts" v-bind:key="post.id">
          <router-link v-bind:to="`/posts/${post.id}`">{{ post.title.rendered }}</router-link>
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

  @Component({
    name: 'postList'
  })
  export default class PostList extends mixins(WPQueryService) {

    posts: any[] = [];

    async main() {
      this.posts = await this.getPosts();
    }

    created() {
      this.main();
    }

  }
</script>