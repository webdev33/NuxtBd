<template>
  <section>
    <h1>Editeur d'article</h1>
    <NuxtLink to="/admin">Back to the admin page</NuxtLink>
    <p v-if="formError" class="error">{{ formError }}</p>
    <br>
    <br>

    <!-- SELECT ARTICLE -->
    <select :key="componentKey" v-model="selected" @change="selectArticle(selected)">
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
          <input v-model="articleSelected.title" type="text">
        </p>

        <p>
          Content:
          <input v-model="articleSelected.content" type="text">
        </p>
        <button v-on:click.capture="edit" type="edit">Modifier</button>
        <button v-on:click.capture="remove" type="remove">Supprimer</button>
      </form>
    </section>
    <!-- ELSE -->
    <section v-else>
      <h2>Créer un article :</h2>
      <form v-on:submit.prevent>
        <p>
          Title:
          <input v-model="articleSelected.title" type="text">
        </p>

        <p>
          Content:
          <input v-model="articleSelected.content" type="text">
        </p>
        <button v-on:click.capture="create" type="create">Créer</button>
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

      /* Render */
      componentKey: 0,

      /* Article select informations */
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
        /* Render */
        this.componentKey += 1;
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
      try {
        let article = await this.$store.dispatch("article", {
          _id: this.currentId
        });
        this.articleSelected._id = article.data.data[0]._id;
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
      try {
        await this.$store.dispatch("editArticle", {
          _id: this.articleSelected._id,
          title: this.articleSelected.title,
          content: this.articleSelected.content
        });
        this.cleaner();
      } catch (e) {
        this.formError = e.message;
      }
    },
    //

    /*
     * Edit
     */
    async remove() {
      try {
        await this.$store.dispatch("removeArticle", {
          _id: this.currentId
        });
        this.cleaner();
      } catch (e) {
        this.formError = e.message;
      }
    },
    //

    /*
     * Create article
     */
    async create(articleSelected) {
      try {
        let message = await this.$store.dispatch("createArticle", {
          title: this.articleSelected.title,
          content: this.articleSelected.content
        });
        this.cleaner();
      } catch (e) {
        this.formError = e.message;
      }
    },
    //

    /*
     * Cleaner
     */
    cleaner() {
      this.articleSelected._id = null;
      this.articleSelected.title = null;
      this.articleSelected.content = null;
      this.currentId = null;
      this.loadArticles();
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
