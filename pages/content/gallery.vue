<template>
  <section class="gallery">
    <h1>Gallery</h1>

    <!-- Alert -->
    <p class="gallery__alert" v-show="formError != null" role="alert">{{ formError }}</p>

    <!-- Instruction -->

    <section class="gallery__form">
      <form>
        <input
          class="gallery__input"
          name="filter"
          placeholder="Filtrer"
          type="text"
          autocomplete="off"
        >
      </form>
    </section>

    <section class="gallery__form">
      <ul class="gallery__input">
        <li class="li__head" v-for="article in gallery" :value="article._id" :key="article._id">
          <p class="li__text">{{ article.legend }}</p>
          <img class="li__img" v-bind:src="article.link">
        </li>
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
      categories: null,

      /* Message */
      formError: null
    };
  },

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

        /* console.log(JSON.parse(this.gallery[0].categorie)) */
        /* this.gallery.forEach(select => { */
          /* console.log(JSON.parse(select.categorie)) */
          /* JSON.parse(select.categorie).forEach(select => {
            console.log(select);
          }); */
          /* this.article.push({ legend: select.legend, link: select.link }); */
        /* }); */
      } catch (e) {
        this.formError = e.message;
      }
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
  }
};
</script>