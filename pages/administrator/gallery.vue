<template>
  <section class="gallery">
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"
    >
    <h1>Editeur de la galerie</h1>
    <NuxtLink to="/admin">Back to the admin page</NuxtLink>

    <br>
    <br>
    <button class="btn btn-success" @click="appearSection()">{{ actionTodo.text }}</button>

    <br>
    <br>
    <p
      class="alert alert-primary alert-success"
      v-show="formSuccess != null"
      role="alert"
    >{{ formSuccess }}</p>
    <p
      class="alert alert-primary alert-danger"
      v-show="formError != null"
      role="alert"
    >{{ formError }}</p>

    <section v-if="actionTodo.boolean === false">
      <section v-if="currentId === null" class="article__select gallery__article">
        <br>
        <form>
          <input
            class="form-control"
            name="filter"
            placeholder="Filtrer"
            type="text"
            autocomplete="off"
          >
          <br>
        </form>

        <ul class="list-group li">
          <li
            class="li__head"
            v-for="article in gallery"
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
          <button class="btn btn-light" @click="add('categorie')">Ajouter un autre lien</button>

          <!-- date -->
          <hr>
          <p>Date de l'image :</p>
          <input class="form-control input" v-model="articleSelected.date" type="text">

          <hr>
          <button class="btn btn-success" v-on:click.capture="edit" type="edit">Modifier</button>
          <button class="btn btn-danger" v-on:click.capture="remove" type="remove">Supprimer</button>
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
        <button class="btn btn-light" @click="add('categorie')">Ajouter un autre lien</button>

        <!-- date -->
        <hr>
        <p>Date de l'image :</p>
        <input class="form-control input" v-model="articleSelected.date" type="text">

        <hr>
        <button
          class="btn btn-success"
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
      actionTodo: { boolean: false, text: `Créer un article` },
      currentId: null,

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

  /* middleware: "auth", */

  methods: {
    /*
     * Load Gallery
     */
    async loadGallery() {
      try {
        let gallery = await this.$store.dispatch("gallery");
        this.gallery = gallery.data.data;

        this.gallery.forEach(select => {
          this.article.push({ legend: select.legend, link: select.link });
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
        ? `Modifier un article`
        : `Créer un article`;
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
        console.log(this.articleSelected);
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
          this.articleSelected.categorie.push({ name: null });
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
    }
    //
  },

  mounted: function mounted() {
    /*
     * Load articles
     */
    this.loadGallery();
    this.search = document.querySelector("input");
    this.ul = document.querySelector("ul");
    this.search.addEventListener("keyup", event => {
      this.ul.innerHTML = "";
      this.articlesSelected = [];
      this.article.forEach(select => {
        if (
          select.legend
            .toLowerCase()
            .indexOf(this.search.value.toLowerCase()) != -1
        ) {
          this.articlesSelected.push(select);
          this.ul.innerHTML += `<li class="li__head">
          <p class="li__text">${select.legend}</p>
          <img class="li__img" src="${select.link}">
          </li>`;
        }
      });
    });
    //
  }
};
</script>

<style lang="scss">
.gallery {
  max-width: 95vw;
  margin: 0 auto;
  position: relative;
}

.article__select {
  margin: 0 auto;
  max-width: 50vw;

  .form-control {
    background-color: #ebebeb;
  }

  .list-group-item:hover {
    background-color: #ebebeb;
  }

  p {
    padding: 15px;
  }
}
.changeButton {
  position: absolute;
  right: 0;
}
.input__status {
  max-width: 60vw;
}

.items__parent {
  .items__child {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 30px;
  }
}

.li__head {
  width: 100%;
  margin-bottom: 0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border: 1px solid #ddd;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.li__text {
  width: 75%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.li__img {
  width: 50px;
  height: 50px;
}
</style>
