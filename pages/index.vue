<template>
  <section class="index">
    <h1>Welcome guys !</h1>

    <!-- Alert -->
    <p class="alert alert-primary alert-danger" v-show="formError != null">{{ formError }}</p>

    <article v-for="article in articles" :value="article._id" :key="article._id">
      <p>{{ articles.pictures }}</p>
    </article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      articles: null,
      formError: null
    };
  },

  methods: {
    /*
     * Load articles
     */
    async loadArticles() {
      try {
        let articles = await this.$store.dispatch("articles");
        this.articles = articles.data.data;
      } catch (e) {
        this.formError = e.message;
      }
    }
    //
  },

  mounted: function mounted() {
    /*
     * Load articles
     */
    this.loadArticles();
    //
  }
};
</script>
