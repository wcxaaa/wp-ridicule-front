<template>
  <section>
    
    <header>
      <h1>{{ post.title.rendered }}</h1>
      <p>{{ post.date }}</p>
    </header>

    <main v-html="post.content.rendered">

    </main>

  </section>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
  import Component, { mixins } from 'vue-class-component';
  import { WPQueryService } from '../../mixins/wpquery.service';

  @Component({
    name: 'postDetail'
  })
  export default class PostDetail extends mixins(WPQueryService) {

    post: any = {
      title: {},
      content: {}
    };

    async main() {
      let postID: number = parseInt(this.$route.params.id);
      let post = await this.getPost(postID);
      if (post) {
        this.post = post;
      }
    }

    created() {
      this.main();
    }
  }
</script>