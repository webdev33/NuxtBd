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

        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="article in gallery"
            :value="article._id"
            :key="article._id"
            @click="chooseArticle(article._id)"
          >{{ article.legend }}</li>
        </ul>
      </section>

      <section v-else>
        <br>
        <!-- <br> -->
        <form v-on:submit.prevent>
          <!-- Link -->
          <hr>
          <p>Lien de l'image :</p>
          <input class="form-control input" v-model="articleSelected.link" type="text">

          <!-- Legend -->
          <hr>
          <p>Lien de l'image :</p>
          <input class="form-control input" v-model="articleSelected.legend" type="text">

          <!-- categorie -->
          <hr>
          <p>La categorie :</p>
          <input class="form-control input" v-model="articleSelected.categorie" type="text">

          <!-- date -->
          <hr>
          <p>Date de l'image :</p>
          <input class="form-control input" v-model="articleSelected.date" type="text">

          <hr>
          <button class="btn btn-success" v-on:click.capture="edit" type="edit">Modifier</button>
          <button class="btn btn-danger" v-on:click.capture="remove" type="remove">Supprimer</button>
          <button class="btn btn-light changeButton" @click="currentId = null">Selectionner un autre article</button>
        </form>
      </section>
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
          this.article.push(select.legend);
        });
        /* Render */
        /* this.componentKey += 1; */
      } catch (e) {
        this.formError = e.message;
      }
    },
    //

    /*
     *
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
        this.articleSelected.categorie = article.data.data[0].categorie;
        this.articleSelected.date = article.data.data[0].date;

        /* Give data to articleSelected */
      } catch (e) {
        console.log(e.message);
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
      /* this.cleaner(); */
    }
    //
  },
  //

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
          select.toLowerCase().indexOf(this.search.value.toLowerCase()) != -1
        ) {
          this.articlesSelected.push(select);
          this.ul.innerHTML += `<li class="list-group-item">${select}</li>`;
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
}

p {
  padding: 15px;
}

.changeButton {
  position: absolute;
  right: 0;
}
</style>
