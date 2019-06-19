<template>
  <section>
    <h1>Editeur d'article</h1>
    <NuxtLink to="/">Back to the admin page</NuxtLink>
    <p v-if="formError" class="error">{{ formError }}</p>
    <br>
    <br>

    <!-- SELECT ARTICLE -->
    <select v-model="selected" @change="selectArticle(selected)">
      <option value>Choississez un article</option>
      <option
        v-for="article in articles"
        :value="article._id"
        :key="article._id"
      >{{ article.title }}</option>
    </select>

    <!-- MODIFIER -->
    <section v-if="currentId !== null">
      <form v-on:submit.prevent>
        <p>
          Title:
          <input v-model="articleSelected.title" type="text" name="username">
        </p>

        <p>
          Content:
          <input v-model="articleSelected.content" type="text" name="username">
        </p>
        <button v-on:click.capture="edit" type="edit">Modifier</button>
        <button v-on:click.capture="remove" type="remove">Supprimer</button>
      </form>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      formError: null,
      articles: null,
      selected: null,
      currentId: null,

      articleSelected: {
        _id: null,
        title: null,
        content: null
      }
    };
  },

  /* middleware: "auth", */

  methods: {
    /*
     * Load articles
     */
    async loadArticles() {
      try {
        let articles = await this.$store.dispatch("articles");
        this.articles = articles.data.data;
        console.log(this.articles);
      } catch (e) {
        this.formError = e.message;
      }
    },
    //

    /*
     * Load the select article
     */
    async selectArticle(select) {
      this.currentId = select;
      console.log(this.currentId);
      try {
        let article = await this.$store.dispatch("article", {
          _id: this.currentId
        });
        console.log(article.data.data[0]);
        this.articleSelected.title = article.data.data[0].title;
        this.articleSelected.content = article.data.data[0].content;
      } catch (e) {
        this.formError = e.message;
      }
    },
    //

    /* 
    * Edit
    */
    async edit() {
      console.log('edit');
    },
    //

    /* 
    * Edit
    */
    async remove() {
      console.log('remove');
    },
    //
  },

  mounted: function mounted() {
    this.loadArticles();
  }
};
</script>
