<template>
  <section class="gallery">
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"
    >
    <h1>Editeur de la galerie</h1>
    <NuxtLink to="/admin">Back to the admin page</NuxtLink>

    <section class="article__select gallery__article">
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

        <!--  <li class="list-group-item">Agathe</li>
        <li class="list-group-item">Alice</li>
        <li class="list-group-item">Ambre</li>
        <li class="list-group-item">Arthur</li>
        <li class="list-group-item">Camille</li>
        <li class="list-group-item">Chloé</li>
        <li class="list-group-item">Gabin</li>
        <li class="list-group-item">Gabriel</li>
        <li class="list-group-item">Hugo</li>
        <li class="list-group-item">Jade</li>
        <li class="list-group-item">Julia</li>
        <li class="list-group-item">Léa</li>
        <li class="list-group-item">Léo</li>
        <li class="list-group-item">Louis</li>
        <li class="list-group-item">Louise</li>
        <li class="list-group-item">Maël</li>
        <li class="list-group-item">Mila</li>
        <li class="list-group-item">Paul</li>
        <li class="list-group-item">Théo</li>
        <li class="list-group-item">Valentin</li>-->
      </ul>
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
      currentId: null,

      /* Select */
      articleSelected: {
        _id: null,
        link: null,
        legend: null,
        categorie: null,
        date: null,
      },
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
          _id: this.currentId,
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
</style>
