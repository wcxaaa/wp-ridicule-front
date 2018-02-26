<template>
  <section class="categoryDetail">

    <div class="sub" v-if="subCategories.length > 0">
      <header>
        <h1>subCategories of {{ cateName }}</h1>
      </header>

      <!-- Show sub category section if there is a sub category -->
      <main>
        <ul>
          <li v-for="(subcats) of subCategories" v-bind:key="subcats.id">
            <router-link v-bind:to="`/categories/${subcats.id}`">{{ subcats.name }}</router-link>
          </li>
        </ul>
      </main>

    </div>

    <div class="posts" v-if="posts.length > 0">
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

          <main v-html="post.excerpt.rendered"> </main>

          <footer v-if="post.tagNameList.length > 0">
            <h1>Tags:</h1>
            <ul>
              <li v-for="(tagName, index) of post.tagNameList" v-bind:key="index">
                {{ tagName }}
              </li>
            </ul>
          </footer>

        </article>
      </main>
    </div>

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
    subCategories: any[] = [];
    tagNameList: string[] = [];

    async getSubCategories(parentID: number) {
      let subCats = await this.getCategories({parent: parentID, fields: ["id", "name"]});
      if (subCats.length > 0) {
        this.subCategories = subCats;
      }
    }

    /**
      Converts tag id list to string list
    */
    async getTagNames(tagIndexList: number[]) {
      let tagNameList: string[] = [];
      for (let i = 0; i < tagIndexList.length; i++) {
        let tag = await this.getTag(tagIndexList[i]);
        if (tag) {
          tagNameList[i] = tag.name;
        } else {
          tagNameList[i] = "(error not found)";
        }
      }
      return tagNameList;
    }

    async main() {
      let cateID: number = parseInt(this.$route.params.id);

      // get sub categories
      await this.getSubCategories(cateID);

      // get posts under current category
      let category = await this.getCategory(cateID);
      if (category) {
        this.cateName = category.name;

        // form a query token of the current category
        let qcate: number[] = [];
        qcate.push(cateID);

        // retrieve posts
        let posts = await this.getPosts({categories: qcate, field: ["id", "title", "excerpt"]});

        // get post tag names
        for (let post of posts) {
          post.tagNameList = await this.getTagNames(post.tags);
        }

        this.posts = posts;

      }
    }

    created() {
      this.main();
    }
  }
</script>