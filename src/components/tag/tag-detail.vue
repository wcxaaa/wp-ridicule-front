<template>
  <section class="tagDetail">
    <header>
      <h1>Posts tagged {{ tag.name }}</h1>
    </header>

    <main>
      <article v-for="(post) of posts" v-bind:key="post.id">

        <header>
          <h2>
            <router-link v-bind:to="`/posts/${post.id}`">{{ post.title.rendered }}</router-link>
          </h2>
          <small>{{ post.date }}</small>
        </header>

        <main v-html="post.excerpt.rendered"> </main>

      </article>
    </main>

  </section>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
  import Component, { mixins } from 'vue-class-component';
  import { WPQueryService } from '../../mixins/wpquery.service';

  @Component({name: "tagDetail"})
  export default class TagDetail extends mixins(WPQueryService) {

    tag: any = {
      name: "loading..."
    }

    posts: any[] = [
      {
        title: {},
        excerpt: {}
      }
    ];

    async main() {
      let tagID: number = parseInt(this.$route.params.id);
      let tag = await this.getTag(tagID);
      if (tag) {
        this.tag = tag;
      }

      // get posts tagged with this tag
      this.posts = await this.getPosts({tags: [tagID], field: ["id", "title", "excerpt"]});

    }

    created() {
      this.main();
    }
  }
</script>