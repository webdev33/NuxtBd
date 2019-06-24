<template>
  <section class="index">
    <h1>Welcome guys !</h1>

    <!-- Alert -->
    <p class="alert alert-primary alert-danger" v-show="formError != null">{{ formError }}</p>

    <article v-for="article in articles" :value="article._id" :key="article._id">
      <p>{{ articles.pictures }}</p>
    </article>


    <!-- PROVISOIRE -->
    <hr>
    <p v-on:click="router()">Aller à sur la page article</p>
    <hr>
    <!-- PROVISOIRE -->

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

    /* PROVISOIRE */
    router() {
      
      /* this.$router.push({ path: "content/article", props: { title: false }}) */
      /* this.$router.push({ path: "content/article", params: { p: 1 }, props: true}); */
      /* this.$router.push({path: "/foo", name:"foo", component: FooComponent,  props: true} */
    }
    /* PROVISOIRE */
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
