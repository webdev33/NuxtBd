<template>
  <section class="admin">
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"
    >
    <h1>Editeur d'article</h1>
    <NuxtLink to="/admin">Retourner à la page de connection</NuxtLink>
    <br>
    <br>
    <p v-if="formError" class="error">{{ formError }}</p>

    <button class="btn btn-success" @click="appearSection()">{{ actionTodo.text }}</button>
    <br>
    <br>

    <!-- Alerts -->
    <p class="alert alert-primary alert-success" v-show="formSuccess != null">{{ formSuccess }}</p>
    <p class="alert alert-primary alert-danger" v-show="formError != null">{{ formError }}</p>

    <section v-if="actionTodo.boolean === false">
      <h4>Sélectionnez un article existant :</h4>
      <br>
      <!-- SELECT ARTICLE -->

      <select
        class="form-control"
        :key="componentKey"
        v-model="selected"
        @change="selectArticle(selected)"
      >
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

          <p>Nom de la station / page :</p>
          <input class="form-control input" v-model="articleSelected.station" type="text">

          <!-- COLUMN linesStation -->
          <hr>
          <p>Nom de la page :</p>
          <input class="form-control input" v-model="articleSelected.status" type="text">

          <!-- COLUMN linesStation -->
          <hr>

          <article
            class="items__parent"
            v-for="select in articleSelected.linesStation"
            :key="select._id"
          >
            <div class="items__child">
              <p>Lignes sur la station :</p>
              <input
                class="form-control input input__status articlesPage"
                style="width: 25vw;"
                v-model="select.ligne"
                type="text"
              >
              <p>Date de creation:</p>
              <input
                class="form-control input input__status articlesPage"
                style="width: 25vw;"
                v-model="select.date"
                type="text"
              >
              <button
                class="btn btn-danger btn__status"
                @click="removeLine('linesStation', select.date)"
              >Supprimer la ligne</button>
            </div>
          </article>
          <button class="btn btn-light" @click="add('linesStation')">Ajouter une ligne à la station</button>

          <!-- COLUMN linkBienvenue -->
          <hr>
          <p>Lien avec Bienvenüe :</p>
          <textarea class="form-control input" v-model="articleSelected.linkBienvenue" type="text"></textarea>

          <!-- COLUMN explicationNom -->
          <hr>
          <article
            class="items__parent"
            v-for="select in articleSelected.explicationNom"
            :key="select._id"
          >
            <div class="items__child">
              <p>Explication pour :</p>
              <input
                class="form-control input input__status articlesPage"
                style="width: 25vw;"
                v-model="select.name"
                type="text"
              >
              <p>Texte explicatif:</p>
              <textarea
                class="form-control input"
                style="width: 25vw;"
                v-model="select.text"
                type="text"
              ></textarea>
              <button
                class="btn btn-danger btn__status"
                @click="removeLine('explicationNom', select.name)"
              >Supprimer la ligne</button>
            </div>
          </article>
          <button class="btn btn-light" @click="add('explicationNom')">Ajouter une explication</button>

          <!-- COLUMN events -->
          <hr>
          <article class="items__parent" v-for="select in articleSelected.events" :key="select._id">
            <div class="items__child">
              <p>Nom de l'évenement :</p>
              <input
                class="form-control input input__status articlesPage"
                style="width: 25vw;"
                v-model="select.name"
                type="text"
              >
              <p>Explication de l'évement :</p>
              <textarea
                class="form-control input input__status articlesPage"
                style="width: 25vw;"
                v-model="select.text"
                type="text"
              ></textarea>
              <button
                class="btn btn-danger btn__status"
                @click="removeLine('events', select.name)"
              >Supprimer la ligne</button>
            </div>
          </article>
          <button class="btn btn-light" @click="add('events')">Ajouter un évenement</button>

          <!-- COLUMN station -->
          <hr>
          <article
            class="items__parent"
            v-for="select in articleSelected.nextStep"
            :key="select._id"
          >
            <div class="items__child">
              <p>Lien vers une autre page :</p>
              <input
                class="form-control input input__status articlesPage"
                style="width: 25vw;"
                v-model="select.link"
                type="text"
              >
              <p>Texte pour le lien :</p>
              <textarea
                class="form-control input input__status articlesPage"
                style="width: 25vw;"
                v-model="select.title"
                type="text"
              ></textarea>
              <button
                class="btn btn-danger btn__status"
                @click="removeLine('nextStep', select.title)"
              >Supprimer la ligne</button>
            </div>
          </article>
          <button class="btn btn-light" @click="add('nextStep')">Ajouter un autre lien</button>

          <!-- COLUMN pictures -->
          <hr>
          <article
            class="items__parent"
            v-for="select in articleSelected.pictures"
            :key="select._id"
          >
            <div class="items__child">
              <p>Lien de l'image :</p>
              <input
                class="form-control input input__status articlesPage"
                style="width: 15vw;"
                v-model="select.link"
                type="text"
              >
              <p>Titre de l'image :</p>
              <textarea
                class="form-control input input__status articlesPage"
                style="width: 15vw;"
                v-model="select.title"
                type="text"
              ></textarea>
              <p>Date de l'image :</p>
              <textarea
                class="form-control input input__status articlesPage"
                style="width: 15vw;"
                v-model="select.date"
                type="text"
              ></textarea>
              <button
                class="btn btn-danger btn__status"
                @click="removeLine('pictures', select.title)"
              >Supprimer la ligne</button>
            </div>
          </article>
          <button class="btn btn-light" @click="add('pictures')">Ajouter une autre image</button>

          <!-- COLUMN firstPicture -->
          <hr>
          <h4>Première image de l'article :</h4>
          <article
            class="items__parent"
            v-for="select in articleSelected.firstPicture"
            :key="select._id"
          >
            <div class="items__child">
              <p>Lien de l'image :</p>
              <input
                class="form-control input input__status articlesPage"
                style="width: 15vw;"
                v-model="select.link"
                type="text"
              >
              <p>Titre de l'image :</p>
              <textarea
                class="form-control input input__status articlesPage"
                style="width: 15vw;"
                v-model="select.title"
                type="text"
              ></textarea>
              <p>Date de l'image :</p>
              <textarea
                class="form-control input input__status articlesPage"
                style="width: 15vw;"
                v-model="select.date"
                type="text"
              ></textarea>
              <!-- <button
                class="btn btn-danger btn__status"
                @click="removeLine('firstPicture', select.title)"
              >Supprimer la ligne</button>-->
            </div>
          </article>
          <!-- <button class="btn btn-light" @click="add('firstPicture')">Ajouter une autre image</button> -->

          <!-- COLUMN map -->
          <hr>
          <h4>Affichage sur la map :</h4>
          <article class="items__parent" v-for="select in articleSelected.map" :key="select._id">
            <div class="items__child">
              <p>Type du select (mettre "Ligne" ou "Station")</p>
              <input
                class="form-control input input__status articlesPage"
                style="width: 25vw;"
                v-model="select.select"
                type="text"
              >
              <p>Nom de la station ou de la ligne (pour ligne "ligne--numéro")</p>
              <textarea
                class="form-control input input__status articlesPage"
                style="width: 25vw;"
                v-model="select.name"
                type="text"
              ></textarea>
              <button
                class="btn btn-danger btn__status"
                @click="removeLine('map', select.name)"
              >Supprimer la ligne</button>
            </div>
          </article>
          <button class="btn btn-light" @click="add('map')">Ajouter un autre effet sur la carte</button>

          <!-- COLUMN video -->
          <hr>
          <article class="items__parent" v-for="select in articleSelected.videos" :key="select._id">
            <div class="items__child">
              <p>Lien de la vidéo</p>
              <input
                class="form-control input input__status articlesPage"
                style="width: 25vw;"
                v-model="select.link"
                type="text"
              >
              <p>Titre de la vidéo</p>
              <textarea
                class="form-control input input__status articlesPage"
                style="width: 25vw;"
                v-model="select.title"
                type="text"
              ></textarea>
              <button
                class="btn btn-danger btn__status"
                @click="removeLine('videos', select.title)"
              >Supprimer la ligne</button>
            </div>
          </article>
          <button class="btn btn-light" @click="add('videos')">Ajouter une autre video</button>

          <!-- COLUMN audios -->
          <hr>
          <article class="items__parent" v-for="select in articleSelected.audios" :key="select._id">
            <div class="items__child">
              <p>Lien de la musique</p>
              <input
                class="form-control input input__status articlesPage"
                style="width: 25vw;"
                v-model="select.link"
                type="text"
              >
              <p>Titre de la musique</p>
              <textarea
                class="form-control input input__status articlesPage"
                style="width: 25vw;"
                v-model="select.title"
                type="text"
              ></textarea>
              <button
                class="btn btn-danger btn__status"
                @click="removeLine('audios', select.title)"
              >Supprimer la ligne</button>
            </div>
          </article>
          <button class="btn btn-light" @click="add('audios')">Ajouter un autre audio</button>

          <!-- Button -->
          <hr>
          <br>

          <button
            class="btn btn-success"
            style="margin-bottom: 25px;"
            v-on:click.capture="edit"
            type="edit"
          >Modifier</button>
          <button
            class="btn btn-danger"
            style="margin-bottom: 25px;"
            v-on:click.capture="remove"
            type="remove"
          >Supprimer</button>
        </form>
      </section>
    </section>

    <!-- /////////////////////////////// CREATE /////////////////////////////// -->
    <section v-else>
      <h3>Créer un nouvel article</h3>
      <form v-on:submit.prevent>
        <!-- COLUMN station -->
        <hr>

        <p>Nom de la station / page :</p>
        <input class="form-control input" v-model="articleSelected.station" type="text">

        <!-- COLUMN linesStation -->
        <hr>
        <p>Nom de la page :</p>
        <input class="form-control input" v-model="articleSelected.status" type="text">

        <!-- COLUMN linesStation -->
        <hr>

        <article
          class="items__parent"
          v-for="select in articleSelected.linesStation"
          :key="select._id"
        >
          <div class="items__child">
            <p>Lignes sur la station :</p>
            <input
              class="form-control input input__status articlesPage"
              style="width: 25vw;"
              v-model="select.ligne"
              type="text"
            >
            <p>Date de creation:</p>
            <input
              class="form-control input input__status articlesPage"
              style="width: 25vw;"
              v-model="select.date"
              type="text"
            >
            <button
              class="btn btn-danger btn__status"
              @click="removeLine('linesStation', select.date)"
            >Supprimer la ligne</button>
          </div>
        </article>
        <button class="btn btn-light" @click="add('linesStation')">Ajouter une ligne à la station</button>

        <!-- COLUMN linkBienvenue -->
        <hr>
        <p>Lien avec Bienvenüe :</p>
        <textarea class="form-control input" v-model="articleSelected.linkBienvenue" type="text"></textarea>

        <!-- COLUMN explicationNom -->
        <hr>
        <article
          class="items__parent"
          v-for="select in articleSelected.explicationNom"
          :key="select._id"
        >
          <div class="items__child">
            <p>Explication pour :</p>
            <input
              class="form-control input input__status articlesPage"
              style="width: 25vw;"
              v-model="select.name"
              type="text"
            >
            <p>Texte explicatif:</p>
            <textarea
              class="form-control input"
              style="width: 25vw;"
              v-model="select.text"
              type="text"
            ></textarea>
            <button
              class="btn btn-danger btn__status"
              @click="removeLine('explicationNom', select.name)"
            >Supprimer la ligne</button>
          </div>
        </article>
        <button class="btn btn-light" @click="add('explicationNom')">Ajouter une explication</button>

        <!-- COLUMN events -->
        <hr>
        <article class="items__parent" v-for="select in articleSelected.events" :key="select._id">
          <div class="items__child">
            <p>Nom de l'évenement :</p>
            <input
              class="form-control input input__status articlesPage"
              style="width: 25vw;"
              v-model="select.name"
              type="text"
            >
            <p>Explication de l'évement :</p>
            <textarea
              class="form-control input input__status articlesPage"
              style="width: 25vw;"
              v-model="select.text"
              type="text"
            ></textarea>
            <button
              class="btn btn-danger btn__status"
              @click="removeLine('events', select.name)"
            >Supprimer la ligne</button>
          </div>
        </article>
        <button class="btn btn-light" @click="add('events')">Ajouter un évenement</button>

        <!-- COLUMN station -->
        <hr>
        <article class="items__parent" v-for="select in articleSelected.nextStep" :key="select._id">
          <div class="items__child">
            <p>Lien vers une autre page :</p>
            <input
              class="form-control input input__status articlesPage"
              style="width: 25vw;"
              v-model="select.link"
              type="text"
            >
            <p>Texte pour le lien :</p>
            <textarea
              class="form-control input input__status articlesPage"
              style="width: 25vw;"
              v-model="select.title"
              type="text"
            ></textarea>
            <button
              class="btn btn-danger btn__status"
              @click="removeLine('nextStep', select.title)"
            >Supprimer la ligne</button>
          </div>
        </article>
        <button class="btn btn-light" @click="add('nextStep')">Ajouter un autre lien</button>

        <!-- COLUMN pictures -->
        <hr>
        <article class="items__parent" v-for="select in articleSelected.pictures" :key="select._id">
          <div class="items__child">
            <p>Lien de l'image :</p>
            <input
              class="form-control input input__status articlesPage"
              style="width: 15vw;"
              v-model="select.link"
              type="text"
            >
            <p>Titre de l'image :</p>
            <textarea
              class="form-control input input__status articlesPage"
              style="width: 15vw;"
              v-model="select.title"
              type="text"
            ></textarea>
            <p>Date de l'image :</p>
            <textarea
              class="form-control input input__status articlesPage"
              style="width: 15vw;"
              v-model="select.date"
              type="text"
            ></textarea>
            <button
              class="btn btn-danger btn__status"
              @click="removeLine('pictures', select.title)"
            >Supprimer la ligne</button>
          </div>
        </article>
        <button class="btn btn-light" @click="add('pictures')">Ajouter un autre lien</button>

        <!-- COLUMN firstPicture -->
        <hr>
        <h4>Première image de l'article :</h4>
        <article
          class="items__parent"
          v-for="select in articleSelected.firstPicture"
          :key="select._id"
        >
          <div class="items__child">
            <p>Lien de l'image :</p>
            <input
              class="form-control input input__status articlesPage"
              style="width: 15vw;"
              v-model="select.link"
              type="text"
            >
            <p>Titre de l'image :</p>
            <textarea
              class="form-control input input__status articlesPage"
              style="width: 15vw;"
              v-model="select.title"
              type="text"
            ></textarea>
            <p>Date de l'image :</p>
            <textarea
              class="form-control input input__status articlesPage"
              style="width: 15vw;"
              v-model="select.date"
              type="text"
            ></textarea>
            <!-- <button
                class="btn btn-danger btn__status"
                @click="removeLine('firstPicture', select.title)"
            >Supprimer la ligne</button>-->
          </div>
        </article>
        <!-- <button class="btn btn-light" @click="add('firstPicture')">Ajouter une autre image</button> -->

        <!-- COLUMN map -->
        <hr>
        <h4>Affichage sur la map :</h4>
        <article class="items__parent" v-for="select in articleSelected.map" :key="select._id">
          <div class="items__child">
            <p>Type du select (mettre "Ligne" ou "Station")</p>
            <input
              class="form-control input input__status articlesPage"
              style="width: 25vw;"
              v-model="select.select"
              type="text"
            >
            <p>Nom de la station ou de la ligne (pour ligne "ligne--numéro")</p>
            <textarea
              class="form-control input input__status articlesPage"
              style="width: 25vw;"
              v-model="select.name"
              type="text"
            ></textarea>
            <button
              class="btn btn-danger btn__status"
              @click="removeLine('map', select.name)"
            >Supprimer la ligne</button>
          </div>
        </article>
        <button class="btn btn-light" @click="add('map')">Ajouter un autre effet sur la carte</button>

        <!-- COLUMN video -->
        <hr>
        <article class="items__parent" v-for="select in articleSelected.videos" :key="select._id">
          <div class="items__child">
            <p>Lien de la vidéo</p>
            <input
              class="form-control input input__status articlesPage"
              style="width: 25vw;"
              v-model="select.link"
              type="text"
            >
            <p>Titre de la vidéo</p>
            <textarea
              class="form-control input input__status articlesPage"
              style="width: 25vw;"
              v-model="select.title"
              type="text"
            ></textarea>
            <button
              class="btn btn-danger btn__status"
              @click="removeLine('videos', select.title)"
            >Supprimer la ligne</button>
          </div>
        </article>
        <button class="btn btn-light" @click="add('videos')">Ajouter une autre video</button>

        <!-- COLUMN audios -->
        <hr>
        <article class="items__parent" v-for="select in articleSelected.audios" :key="select._id">
          <div class="items__child">
            <p>Lien de la musique</p>
            <input
              class="form-control input input__status articlesPage"
              style="width: 25vw;"
              v-model="select.link"
              type="text"
            >
            <p>Titre de la musique</p>
            <textarea
              class="form-control input input__status articlesPage"
              style="width: 25vw;"
              v-model="select.title"
              type="text"
            ></textarea>
            <button
              class="btn btn-danger btn__status"
              @click="removeLine('audios', select.title)"
            >Supprimer la ligne</button>
          </div>
        </article>
        <button class="btn btn-light" @click="add('audios')">Ajouter un autre lien</button>

        <!-- Button -->
        <hr>
        <br>

        <button
          class="btn btn-success"
          style="margin-bottom: 25px;"
          v-on:click.capture="createArticle"
          type="createArticle"
        >Créer un nouvel article</button>
      </form>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      /* Message */
      formError: null,
      formSuccess: null,

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
        videos: null,
        audios: null,
        firstPicture: null,
        nextStep: null,
        map: null
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

        this.articleSelected.firstPicture = JSON.parse(
          article.data.data[0].firstPicture
        );

        this.articleSelected.map = JSON.parse(article.data.data[0].map);

        this.articleSelected.events = JSON.parse(article.data.data[0].events);
        this.articleSelected.videos = JSON.parse(article.data.data[0].videos);
        this.articleSelected.audios = JSON.parse(article.data.data[0].audios);
        this.articleSelected.pictures = JSON.parse(
          article.data.data[0].pictures
        );
        this.articleSelected.nextStep = JSON.parse(
          article.data.data[0].nextStep
        );
        this.formSuccess = `L'article a bien été chargé`;
        this.removeAlert();
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
            videos: JSON.stringify(this.articleSelected.videos),
            audios: JSON.stringify(this.articleSelected.audios),
            pictures: JSON.stringify(this.articleSelected.pictures),
            nextStep: JSON.stringify(this.articleSelected.nextStep),
            firstPicture: JSON.stringify(this.articleSelected.firstPicture),
            map: JSON.stringify(this.articleSelected.map)
          });
          this.formSuccess = `L'article a bien été modifié`;
          this.cleaner();
          this.removeAlert();
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
        try {
          await this.$store.dispatch("removeArticle", {
            _id: this.currentId
          });
          this.formSuccess = `L'article a bien été supprimé`;
          this.cleaner();
          this.removeAlert();
        } catch (e) {
          this.formError = e.message;
        }
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
            videos: JSON.stringify(this.articleSelected.videos),
            audios: JSON.stringify(this.articleSelected.audios),
            pictures: JSON.stringify(this.articleSelected.pictures),
            nextStep: JSON.stringify(this.articleSelected.nextStep),
            firstPicture: JSON.stringify(this.articleSelected.firstPicture),
            map: JSON.stringify(this.articleSelected.map)
          });
          this.formSuccess = `L'article a bien été créé !`;

          /* Change if page */
          this.actionTodo.boolean = false;

          this.cleaner();
          this.removeAlert();
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
      this.articleSelected.videos = [];
      this.articleSelected.nextStep = [];
      this.articleSelected.firstPicture = [
        { link: null, title: null, date: null }
      ];
      this.articleSelected.map = [];

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

        case `videos`:
          this.articleSelected.videos.push({ title: null, link: null });
          break;

        case `audios`:
          this.articleSelected.audios.push({ title: null, link: null });
          break;

        case `firstPicture`:
          this.articleSelected.firstPicture.push({
            link: null,
            title: null,
            date: null
          });
          break;

        case `map`:
          this.articleSelected.map.push({ select: null, name: null });
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
      console.log(selectRemove);
      console.log(data);
      this.articleSelected[selectRemove].forEach((select, i) => {
        data === select.date ||
        data === select.name ||
        data === select.title ||
        data === select.select
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
    },
    //

    /*
     * Remove alert
     */
    removeAlert() {
      setTimeout(() => {
        this.formSuccess = null;
      }, 3000);
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

