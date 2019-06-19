<template>
  <div>
    <h1>Editeur d'article</h1>

    <select v-model="selected" @change="selectArticle(selected)">
      <option value>Choississez un article</option>
      <option
        v-for="article in articles"
        :value="article._id"
        :key="article._id"
      >{{ article.title }}</option>
    </select>
    {{ selected }}
    <NuxtLink to="/">Back to the home page</NuxtLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: null,
      selected: null,
      currentId: null
    };
  },

  /* middleware: "auth", */

  methods: {
    async loadArticles() {
      try {
        let articles = await this.$store.dispatch("articles");
        this.articles = articles.data.data;
        console.log(this.articles);
      } catch (e) {
        this.formError = e.message;
      }
    },

    async selectArticle(select) {
      this.currentId = select;
      console.log(this.currentId);
      try {
        let article = await this.$store.dispatch("article", {
          _id: this.currentId
        });
        console.log(article);
      } catch (e) {
        console.log(e);
      }
    }
  },

  mounted: function mounted() {
    this.loadArticles();
  }
};
</script>
