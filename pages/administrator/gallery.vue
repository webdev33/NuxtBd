<template>
  <section class="admin">
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"
    >
    <h1>Editeur de la galerie</h1>
    <NuxtLink to="/admin">Retourner à la page de connection</NuxtLink>

    <br>
    <br>
    <button class="btn btn-success" @click="appearSection()">{{ actionTodo.text }}</button>

    <br>
    <br>

    <!-- Alerts -->
    <p class="alert alert-primary alert-success" v-show="formSuccess != null">{{ formSuccess }}</p>
    <p class="alert alert-primary alert-danger" v-show="formError != null">{{ formError }}</p>

    <section v-if="actionTodo.boolean === false">
      <section v-if="currentId === null" class="article__select gallery__article">
        <br>
        <form>
          <input
            v-on:keyup="keypress"
            class="form-control"
            name="filter"
            placeholder="Filtrer"
            type="text"
            autocomplete="off"
          >
          <br>
        </form>

        <ul class="list-group li" :key="componentKey">
          <li
            class="li__head"
            v-for="article in articlesSelected"
            :value="article._id"
            :key="article._id"
            @click="chooseArticle(article._id)"
          >
            <p class="li__text">{{ article.legend }}</p>
            <img class="li__img" v-bind:src="article.link">
          </li>
        </ul>
      </section>

      <section v-else>
        <br>
        <h4>Vous modifier : {{ articleSelected.legend }}</h4>
        <form v-on:submit.prevent>
          <!-- Link -->
          <hr>
          <p>Lien de l'image :</p>
          <input class="form-control input" v-model="articleSelected.link" type="text">
          <article class="input__imgParent">
            <img class="input__img" v-bind:src="articleSelected.link">
          </article>
          <!-- Legend -->
          <hr>
          <p>Légende de l'image :</p>
          <input class="form-control input" v-model="articleSelected.legend" type="text">

          <!-- categorie -->
          <hr>
          <p>Choississez les catégories de l'image :</p>
          <!-- <input class="form-control input" v-model="articleSelected.categorie" type="text"> -->
          <article
            class="items__parent"
            v-for="select in articleSelected.categorie"
            :key="select._id"
          >
            <div class="items__child">
              <p>Catégorie :</p>
              <input class="form-control input input__status" v-model="select.name" type="text">
              <button
                class="btn btn-danger btn__status"
                @click="removeLine('categorie', select.name)"
              >Supprimer la ligne</button>
            </div>
          </article>
          <button class="btn btn-light" @click="add('categorie')">Ajouter une autre catégorie</button>

          <!-- date -->
          <hr>
          <p>Date de l'image :</p>
          <input class="form-control input" v-model="articleSelected.date" type="text">

          <hr>
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
          <button
            class="btn btn-light changeButton"
            @click="currentId = null"
          >Selectionner un autre article</button>
        </form>
      </section>
    </section>

    <!-- /////////////////////////////// CREATE /////////////////////////////// -->
    <section v-else>
      <br>
      <h4>Vous allez créer une nouvelle photo !</h4>
      <form v-on:submit.prevent>
        <!-- Link -->
        <hr>
        <p>Lien de l'image :</p>
        <input class="form-control input" v-model="articleSelected.link" type="text">
        <article class="input__imgParent">
          <img class="input__img" v-bind:src="articleSelected.link">
        </article>
        <!-- Legend -->
        <hr>
        <p>Légende de l'image :</p>
        <input class="form-control input" v-model="articleSelected.legend" type="text">

        <!-- categorie -->
        <hr>
        <p>Choississez les catégories de l'image :</p>
        <!-- <input class="form-control input" v-model="articleSelected.categorie" type="text"> -->
        <article
          class="items__parent"
          v-for="select in articleSelected.categorie"
          :key="select._id"
        >
          <div class="items__child">
            <p>Catégorie :</p>
            <input class="form-control input input__status" v-model="select.name" type="text">
            <button
              class="btn btn-danger btn__status"
              @click="removeLine('categorie', select.name)"
            >Supprimer la ligne</button>
          </div>
        </article>
        <button class="btn btn-light" @click="add('categorie')">Ajouter une autre catégorie</button>

        <!-- date -->
        <hr>
        <p>Date de l'image :</p>
        <input class="form-control input" v-model="articleSelected.date" type="text">

        <hr>
        <button
          class="btn btn-success btn-end"
          style="margin-bottom: 25px;"
          v-on:click.capture="createArticle"
          type="createArticle"
        >Créer une nouvelle photo !</button>
      </form>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      /* Search bar */
      gallery: null,
      article: [],
      ul: null,
      search: null,
      articlesSelected: [],

      /* Article select */
      actionTodo: { boolean: false, text: `Créer une nouvelle image` },
      currentId: null,

      componentKey: 0,
      /* Confirmation */
      selectorInputs: null,
      booleanLife: false,
      confirmation: null,

      /* Message */
      formError: null,
      formSuccess: null,

      /* Select */
      articleSelected: {
        _id: null,
        link: null,
        legend: null,
        categorie: null,
        date: null
      }
    };
  },

  middleware: "auth",

  methods: {
    /*
     * Load Gallery
     */
    async loadGallery() {
      try {
        let gallery = await this.$store.dispatch("gallery");
        this.gallery = gallery.data.data;

        this.gallery.forEach(select => {
          this.articlesSelected.push({
            legend: select.legend,
            link: select.link,
            _id: select._id
          });
          this.article.push({
            legend: select.legend,
            link: select.link,
            _id: select._id
          });
        });
      } catch (e) {
        this.formError = e.message;
      }
    },
    //

    /*
     * Call the select article
     */
    async chooseArticle(select) {
      this.currentId = select;
      try {
        let article = await this.$store.dispatch("galleryArticle", {
          _id: this.currentId
        });
        this.articleSelected._id = article.data.data[0]._id;
        this.articleSelected.link = article.data.data[0].link;
        this.articleSelected.legend = article.data.data[0].legend;
        this.articleSelected.categorie = JSON.parse(
          article.data.data[0].categorie
        );
        this.articleSelected.date = article.data.data[0].date;
      } catch (e) {
        this.formError = e.message;
      }
    },
    //

    /*
     * Appear the desired section
     */
    appearSection() {
      this.actionTodo.boolean = !this.actionTodo.boolean;
      this.actionTodo.text = this.actionTodo.boolean
        ? `Modifier une image`
        : `Créer une nouvelle image`;
      this.cleaner();
    },
    //

    /*
     * Edit
     */
    async edit() {
      if (this.inputVerification(`modifier`) === true) {
        try {
          await this.$store.dispatch("editArticleGallery", {
            _id: this.articleSelected._id,
            link: this.articleSelected.link,
            legend: this.articleSelected.legend,
            categorie: JSON.stringify(this.articleSelected.categorie),
            date: this.articleSelected.date
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
     * Remove
     */
    async remove() {
      if (this.confirmationValidation(`supprimer`) === true) {
        try {
          await this.$store.dispatch("removeArticleGallery", {
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
          await this.$store.dispatch("createArticleGallery", {
            _id: this.articleSelected._id,
            link: this.articleSelected.link,
            legend: this.articleSelected.legend,
            categorie: JSON.stringify(this.articleSelected.categorie),
            date: this.articleSelected.date
          });
          this.actionTodo.boolean = false;
          this.formSuccess = `L'article a bien été créé`;
          this.cleaner();
          this.removeAlert();
        } catch (e) {
          this.formError = e.message;
        }
      }
    },
    //

    /*
     * Remove select line
     */
    removeLine(selectRemove, data) {
      this.articleSelected[selectRemove].forEach((select, i) => {
        data === select.name
          ? this.articleSelected[selectRemove].splice(i, 1)
          : 0;
      });
    },
    //

    /*
     * Add a new component
     */
    add(select) {
      switch (select) {
        case `categorie`:
          this.articleSelected.categorie.push({ name: null, select: false });
          break;

        default:
          alert("Indisponible");
          break;
      }
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

    cleaner() {
      this.articleSelected.link = "";
      this.articleSelected.legend = "";
      this.articleSelected.categorie = [];
      this.articleSelected.date = "";
      this.currentId = null;
      this.selected = null;
      this.articlesSelected = [];
      this.loadGallery();
    },
    //

    /*
     * Remove alert
     */
    removeAlert() {
      setTimeout(() => {
        this.formSuccess = null;
      }, 3000);
    },
    //

    keypress(event) {
      this.ul.innerHTML = "";
      this.articlesSelected = [];
      this.article.forEach(select => {
        if (
          select.legend
            .toLowerCase()
            .indexOf(this.search.value.toLowerCase()) != -1
        ) {
          this.articlesSelected.push(select);
          this.componentKey += 1;
        }
      });
    }
  },
  mounted: function mounted() {
    /*
     * Load articles
     */
    this.loadGallery();
    this.search = document.querySelector("input");
    this.ul = document.querySelector("ul");
  }
  //
};
</script>