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
      >{{ article.station }}</option>
    </select>

    <!-- MODIFIER -->
    <section v-if="currentId !== null">
      <form v-on:submit.prevent>
        <!-- COLUMN station -->
        <hr>
        <p>
          Nom de la station / page :
          <input v-model="articleSelected.station" type="text">
        </p>

        <!-- COLUMN linesStation -->
        <hr>
        <p>
          Nom de la page :
          <input v-model="articleSelected.status" type="text">
        </p>

        <!-- COLUMN linesStation -->
        <hr>
        <p v-for="select in articleSelected.linesStation" :key="select._id">
          Lignes sur la station :
          <input v-model="select.ligne" type="text">
          Date de creation:
          <input v-model="select.date" type="text">
          <button @click="removeLine('linesStation', select.date)">Supprimer la ligne</button>
        </p>
        <button @click="add('linesStation')">Ajouter une ligne à la station</button>

        <!-- COLUMN linkBienvenue -->
        <hr>
        <p>
          Lien avec Bienvenüe :
          <textarea v-model="articleSelected.linkBienvenue" type="text"></textarea>
        </p>

        <!-- COLUMN explicationNom -->
        <hr>
        <p v-for="select in articleSelected.explicationNom" :key="select._id">
          Explication pour :
          <input v-model="select.name" type="text">
          Texte explicatif:
          <textarea v-model="select.text" type="text"></textarea>
          <button @click="removeLine('explicationNom', select.name)">Supprimer la ligne</button>
        </p>
        <button @click="add('explicationNom')">Ajouter une explication</button>

        <!-- COLUMN events -->
        <hr>
        <p v-for="select in articleSelected.events" :key="select._id">
          Nom de l'évenement :
          <input v-model="select.name" type="text">
          Explication de l'évement :
          <textarea v-model="select.text" type="text"></textarea>
          <button @click="removeLine('events', select.name)">Supprimer la ligne</button>
        </p>
        <button @click="add('events')">Ajouter un evement</button>

        <!-- COLUMN station -->
        <hr>
        <p v-for="select in articleSelected.nextStep" :key="select._id">
          Lien vers une autre page :
          <input v-model="select.link" type="text">
          Texte pour le lien :
          <textarea v-model="select.title" type="text"></textarea>
          <button @click="removeLine('nextStep', select.title)">Supprimer la ligne</button>
        </p>
        <button @click="add('nextStep')">Ajouter un autre lien</button>

        <!-- Button -->
        <hr>
        <br>
        <br>

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
      parseName: null,

      /* Render */
      componentKey: 0,

      /* Article select informations */
      articleSelected: {
        _id: null,
        station: null,
        status: null,
        linesStation: null,
        linkBienvenue: null,
        explicationNom: null,
        events: null,
        pictures: null,
        nextStep: null
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

        /* Give data to articleSelected */
        this.articleSelected._id = article.data.data[0]._id;
        this.articleSelected.station = article.data.data[0].station;
        this.articleSelected.status = article.data.data[0].status;
        this.articleSelected.linesStation = JSON.parse(
          article.data.data[0].linesStation
        );
        this.articleSelected.linkBienvenue = article.data.data[0].linkBienvenue;
        this.articleSelected.explicationNom = JSON.parse(
          article.data.data[0].explicationNom
        );

        this.articleSelected.events = JSON.parse(article.data.data[0].events);

        this.articleSelected.pictures = JSON.parse(
          article.data.data[0].pictures
        );
        this.articleSelected.nextStep = JSON.parse(
          article.data.data[0].nextStep
        );

        console.log(this.articleSelected)
      } catch (e) {
        this.formError = e.message;
      }
    },
    //

    /*
     * Edit
     */
    async edit() {
      console.log(this.articleSelected);
      /* try {
        await this.$store.dispatch("editArticle", {
          _id: this.articleSelected._id,
          title: this.articleSelected.title,
          content: this.articleSelected.content
        });
        this.cleaner();
      } catch (e) {
        this.formError = e.message;
      } */
    },
    //

    /*
     * Edit
     */
    async remove() {
      /* try {
        await this.$store.dispatch("removeArticle", {
          _id: this.currentId
        });
        this.cleaner();
      } catch (e) {
        this.formError = e.message;
      } */
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
    },
    //

    /*
     * Add a new component
     */
    add(select) {
      console.log(select);
      switch (select) {
        case `linesStation`:
          this.articleSelected.linesStation.push({ ligne: null, date: null });
          break;

        case `explicationNom`:
          this.articleSelected.explicationNom.push({ name: null, text: null });
          break;

        case `events`:
          this.articleSelected.events.push({ name: null, text: null });
          break;

        case `nextStep`:
          this.articleSelected.nextStep.push({ title: null, link: null });
          break;

        default:
          alert("Indisponible");
          break;
      }
    },
    //

    /*
     * Remove select line
     */
    removeLine(selectRemove, data) {
      this.articleSelected[selectRemove].forEach((select, i) => {
        data === select.date || data === select.name || data === select.title
          ? this.articleSelected[selectRemove].splice(i, 1)
          : 0;
      });
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
