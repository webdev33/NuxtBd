<template>
  <section>
    <h1>Welcome guys !</h1>

    <h3>Articles :</h3>
    <article v-for="article in articles" :value="article._id" :key="article._id">
      <p>Id : {{ article._id }} || Title : {{ article.title }} || Content : {{ article.content }}</p>
    </article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      articles: null,
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
