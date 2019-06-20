<template>
  <section>
    <h1>Welcome guys !</h1>

    <h3>Articles :</h3>
    <article v-for="article in articles" :value="article._id" :key="article._id">
      <p>{{ articles.pictures }}</p>
    </article>

    <!-- PROVISOIRE -->
    <img v-bind:src="test">
    <!-- PROVISOIRE -->
    
  </section>
</template>

<script>
export default {
  data() {
    return {
      articles: null,
      test: null
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

        /* console.log(this.articles); */

        /* PROVISOIRE */
        this.test = JSON.parse(this.articles[0].pictures)[0].link;
        


        /* PROVISOIRE */
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
