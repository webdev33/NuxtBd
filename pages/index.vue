<template>
  <section class="index">
    <h1>Welcome guys !</h1>

    <!-- Alert -->
    <p class="alert alert-primary alert-danger" v-show="formError != null">{{ formError }}</p>

  </section>
</template>

<script>
export default {
  data() {
    return {
      articles: null,
      formError: null,

      article: true
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
    },
    //

    router() {
      let article = 2
      this.$router.push({ path: `content/article/${article}`})
    }
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
