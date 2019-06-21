<template>
  <section>
    <h1>Editeur d'article</h1>
    <NuxtLink to="/admin">Retourner à la page de connection</NuxtLink>
    <br>
    <br>
    <p v-if="formError" class="error">{{ formError }}</p>

    <button @click="appearSection()">{{ actionTodo.text }}</button>
    <br>
    <br>

    <section v-if="actionTodo.boolean === false">
      <h3>Modifier un article existant</h3>
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
            <input
              class="input"
              v-model="articleSelected.station"
              type="text"
            >
          </p>

          <!-- COLUMN linesStation -->
          <hr>
          <p>
            Nom de la page :
            <input class="input" v-model="articleSelected.status" type="text">
          </p>

          <!-- COLUMN linesStation -->
          <hr>
          <p v-for="select in articleSelected.linesStation" :key="select._id">
            Lignes sur la station :
            <input class="input" v-model="select.ligne" type="text">
            Date de creation:
            <input class="input" v-model="select.date" type="text">
            <button @click="removeLine('linesStation', select.date)">Supprimer la ligne</button>
          </p>
          <button @click="add('linesStation')">Ajouter une ligne à la station</button>

          <!-- COLUMN linkBienvenue -->
          <hr>
          <p>
            Lien avec Bienvenüe :
            <textarea
              class="input"
              v-model="articleSelected.linkBienvenue"
              type="text"
            ></textarea>
          </p>

          <!-- COLUMN explicationNom -->
          <hr>
          <p v-for="select in articleSelected.explicationNom" :key="select._id">
            Explication pour :
            <input class="input" v-model="select.name" type="text">
            Texte explicatif:
            <textarea class="input" v-model="select.text" type="text"></textarea>
            <button @click="removeLine('explicationNom', select.name)">Supprimer la ligne</button>
          </p>
          <button @click="add('explicationNom')">Ajouter une explication</button>

          <!-- COLUMN events -->
          <hr>
          <p v-for="select in articleSelected.events" :key="select._id">
            Nom de l'évenement :
            <input class="input" v-model="select.name" type="text">
            Explication de l'évement :
            <textarea
              class="input"
              v-model="select.text"
              type="text"
            ></textarea>
            <button @click="removeLine('events', select.name)">Supprimer la ligne</button>
          </p>
          <button @click="add('events')">Ajouter un evement</button>

          <!-- COLUMN station -->
          <hr>
          <p v-for="select in articleSelected.nextStep" :key="select._id">
            Lien vers une autre page :
            <input class="input" v-model="select.link" type="text">
            Texte pour le lien :
            <textarea
              class="input"
              v-model="select.title"
              type="text"
            ></textarea>
            <button @click="removeLine('nextStep', select.title)">Supprimer la ligne</button>
          </p>
          <button @click="add('nextStep')">Ajouter un autre lien</button>

          <!-- COLUMN pictures -->
          <hr>
          <p v-for="select in articleSelected.pictures" :key="select._id">
            Lien de l'image :
            <input class="input" v-model="select.link" type="text">
            Titre de l'image :
            <textarea
              class="input"
              v-model="select.title"
              type="text"
            ></textarea>
            Date de l'image :
            <textarea class="input" v-model="select.date" type="text"></textarea>
            <button @click="removeLine('pictures', select.title)">Supprimer la ligne</button>
          </p>
          <button @click="add('pictures')">Ajouter un autre lien</button>

          <!-- COLUMN audios -->
          <hr>
          <p v-for="select in articleSelected.audios" :key="select._id">
            Lien de la musique
            <input class="input" v-model="select.link" type="text">
            Titre de la musique
            <textarea
              class="input"
              v-model="select.title"
              type="text"
            ></textarea>
            <button @click="removeLine('audios', select.title)">Supprimer la ligne</button>
          </p>
          <button @click="add('audios')">Ajouter un autre lien</button>

          <!-- Button -->
          <hr>
          <br>
          <br>

          <button v-on:click.capture="edit" type="edit">Modifier</button>
          <button v-on:click.capture="remove" type="remove">Supprimer</button>
        </form>
      </section>
    </section>

    <!-- Create -->
    <section v-else>
      <h3>Créer un nouvel article</h3>
      <form v-on:submit.prevent>
        <!-- COLUMN station -->
        <hr>
        <p>
          Nom de la station / page :
          <input
            class="input"
            v-model="articleSelected.station"
            type="text"
          >
        </p>

        <!-- COLUMN linesStation -->
        <hr>
        <p>
          Nom de la page :
          <input class="input" v-model="articleSelected.status" type="text">
        </p>

        <!-- COLUMN linesStation -->
        <hr>
        <p v-for="select in articleSelected.linesStation" :key="select._id">
          Lignes sur la station :
          <input class="input" v-model="select.ligne" type="text">
          Date de creation:
          <input class="input" v-model="select.date" type="text">
          <button @click="removeLine('linesStation', select.date)">Supprimer la ligne</button>
        </p>
        <button @click="add('linesStation')">Ajouter une ligne à la station</button>

        <!-- COLUMN linkBienvenue -->
        <hr>
        <p>
          Lien avec Bienvenüe :
          <textarea
            class="input"
            v-model="articleSelected.linkBienvenue"
            type="text"
          ></textarea>
        </p>

        <!-- COLUMN explicationNom -->
        <hr>
        <p v-for="select in articleSelected.explicationNom" :key="select._id">
          Explication pour :
          <input class="input" v-model="select.name" type="text">
          Texte explicatif:
          <textarea class="input" v-model="select.text" type="text"></textarea>
          <button @click="removeLine('explicationNom', select.name)">Supprimer la ligne</button>
        </p>
        <button @click="add('explicationNom')">Ajouter une explication</button>

        <!-- COLUMN events -->
        <hr>
        <p v-for="select in articleSelected.events" :key="select._id">
          Nom de l'évenement :
          <input class="input" v-model="select.name" type="text">
          Explication de l'évement :
          <textarea
            class="input"
            v-model="select.text"
            type="text"
          ></textarea>
          <button @click="removeLine('events', select.name)">Supprimer la ligne</button>
        </p>
        <button @click="add('events')">Ajouter un evement</button>

        <!-- COLUMN station -->
        <hr>
        <p v-for="select in articleSelected.nextStep" :key="select._id">
          Lien vers une autre page :
          <input class="input" v-model="select.link" type="text">
          Texte pour le lien :
          <textarea class="input" v-model="select.title" type="text"></textarea>
          <button @click="removeLine('nextStep', select.title)">Supprimer la ligne</button>
        </p>
        <button @click="add('nextStep')">Ajouter un autre lien</button>

        <!-- COLUMN pictures -->
        <hr>
        <p v-for="select in articleSelected.pictures" :key="select._id">
          Lien de l'image :
          <input class="input" v-model="select.link" type="text">
          Titre de l'image :
          <textarea class="input" v-model="select.title" type="text"></textarea>
          Date de l'image :
          <textarea class="input" v-model="select.date" type="text"></textarea>
          <button @click="removeLine('pictures', select.title)">Supprimer la ligne</button>
        </p>
        <button @click="add('pictures')">Ajouter un autre lien</button>

        <!-- COLUMN audios -->
        <hr>
        <p v-for="select in articleSelected.audios" :key="select._id">
          Lien de la musique
          <input class="input" v-model="select.link" type="text">
          Titre de la musique
          <textarea class="input" v-model="select.title" type="text"></textarea>
          <button @click="removeLine('audios', select.title)">Supprimer la ligne</button>
        </p>
        <button @click="add('audios')">Ajouter un autre lien</button>

        <!-- Button -->
        <hr>
        <br>
        <br>

        <button v-on:click.capture="createArticle" type="createArticle">Créer un nouvel article</button>
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
      actionTodo: { boolean: false, text: `Créer un article` },

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
        audios: null,
        nextStep: null
      },

      /* Confirmation */
      selectorInputs: null,
      booleanLife: false,
      confirmation: null
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
        this.articleSelected.audios = JSON.parse(article.data.data[0].audios);

        this.articleSelected.pictures = JSON.parse(
          article.data.data[0].pictures
        );
        this.articleSelected.nextStep = JSON.parse(
          article.data.data[0].nextStep
        );
      } catch (e) {
        this.formError = e.message;
      }
    },
    //

    /*
     * Edit
     */
    async edit() {
      if (this.inputVerification(`modifier`) === true) {
        try {
          await this.$store.dispatch("editArticle", {
            _id: this.articleSelected._id,
            station: this.articleSelected.station,
            status: this.articleSelected.status,
            linesStation: JSON.stringify(this.articleSelected.linesStation),
            linkBienvenue: this.articleSelected.linkBienvenue,
            explicationNom: JSON.stringify(this.articleSelected.explicationNom),
            events: JSON.stringify(this.articleSelected.events),
            audios: JSON.stringify(this.articleSelected.audios),
            pictures: JSON.stringify(this.articleSelected.pictures),
            nextStep: JSON.stringify(this.articleSelected.nextStep)
          });
          this.cleaner();
        } catch (e) {
          this.formError = e.message;
        }
      }
    },
    //

    /*
     * Edit
     */
    async remove() {
      if (this.confirmationValidation(`supprimer`) === true) {
        /* try {
          await this.$store.dispatch("removeArticle", {
            _id: this.currentId
          });
          this.cleaner();
        } catch (e) {
          this.formError = e.message;
        } */
      }
    },
    //

    /*
     * Create article
     */
    async createArticle() {
      if (this.inputVerification(`créer`) === true) {
        try {
          await this.$store.dispatch("createArticle", {
            station: this.articleSelected.station,
            status: this.articleSelected.status,
            linesStation: JSON.stringify(this.articleSelected.linesStation),
            linkBienvenue: this.articleSelected.linkBienvenue,
            explicationNom: JSON.stringify(this.articleSelected.explicationNom),
            events: JSON.stringify(this.articleSelected.events),
            audios: JSON.stringify(this.articleSelected.audios),
            pictures: JSON.stringify(this.articleSelected.pictures),
            nextStep: JSON.stringify(this.articleSelected.nextStep)
          });
          this.cleaner();
        } catch (e) {
          this.formError = e.message;
        }
      }
    },
    //

    /*
     * Cleaner
     */
    cleaner() {
      this.articleSelected.station = "";
      this.articleSelected.status = "";
      this.articleSelected.linesStation = [];
      this.articleSelected.linkBienvenue = "";
      this.articleSelected.explicationNom = [];
      this.articleSelected.events = [];
      this.articleSelected.audios = [];
      this.articleSelected.pictures = [];
      this.articleSelected.nextStep = [];
      this.currentId = null;
      this.selected = null;
      this.loadArticles();
    },
    //

    /*
     * Add a new component
     */
    add(select) {
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

        case `audios`:
          this.articleSelected.audios.push({ title: null, link: null });
          break;

        case `pictures`:
          this.articleSelected.pictures.push({
            link: null,
            title: null,
            date: null
          });
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
    },
    //

    /*
     * Appear the desired section
     */
    appearSection() {
      this.actionTodo.boolean = !this.actionTodo.boolean;
      this.actionTodo.text = this.actionTodo.boolean
        ? `Modifier un article`
        : `Créer un article`;
      this.cleaner();
    },
    //

    /*
     * Verification for the empty input
     */
    inputVerification(message) {
      this.selectorInputs = document.querySelectorAll(".input");

      for (const select of this.selectorInputs) {
        this.booleanLife = select.value.length > 0 ? false : true;
        if (select.value.length) {
          this.booleanLife = false;
        } else {
          alert("Remplissez tous les champs");
          this.booleanLife = true;
          break;
        }
      }
      this.confirmation =
        this.booleanLife === true
          ? false
          : confirm(`Voulez vous vraiment ${message} cet article ?`);
      return this.confirmation;
    },
    //

    /*
     * Confirmation fonction
     */
    confirmationValidation(message) {
      return confirm(`Voulez vous vraiment ${message} cet article ?`)
        ? true
        : false;
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

