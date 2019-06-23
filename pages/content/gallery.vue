<template>
  <section class="gallery">
    <h1>Gallery</h1>

    <!-- Alert -->
    <p class="gallery__alert" v-show="formError != null" role="alert">{{ formError }}</p>

    <!-- Instruction -->

    <section class="gallery__form">
      <form>
        <!-- Search bar -->
        <input
          class="gallery__input"
          name="filter"
          placeholder="Filtrer"
          type="text"
          autocomplete="off"
        >

        <!-- Checkbox -->
        <input
          type="checkbox"
          id="Entrance"
          value="Entrance"
          v-model="checkedNames"
          @change="check"
        >
        <label for="Entrance">Entrée de station</label>

        <input type="checkbox" id="Station" value="Station" v-model="checkedNames" @change="check">
        <label for="Station">Station</label>

        <input type="checkbox" id="Train" value="Train" v-model="checkedNames" @change="check">
        <label for="Train">Train</label>

        <input
          type="checkbox"
          id="PostCard"
          value="PostCard"
          v-model="checkedNames"
          @change="check"
        >
        <label for="PostCard">Cartes postales</label>

        <input type="checkbox" id="Event" value="Event" v-model="checkedNames" @change="check">
        <label for="Event">Evenement</label>

        <input
          type="checkbox"
          id="Document"
          value="Document"
          v-model="checkedNames"
          @change="check"
        >
        <label for="Train">Train</label>

        <input
          type="checkbox"
          id="Building"
          value="Building"
          v-model="checkedNames"
          @change="check"
        >
        <label for="Building">En construction</label>
      </form>
    </section>

    <div id="example-3">
      <br>
      <span>Noms cochés : {{ checkedNames }}</span>
    </div>

    <section class="gallery__form">
      <ul class="gallery__input">
        <li class="li__head" v-for="article in gallery" :value="article._id" :key="article._id">
          <p class="li__text">{{ article.legend }}</p>
          <img class="li__img" v-bind:src="article.link">
          <p class="li__text">{{ article.date }}</p>
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
      checkedNames: [],
      gallery: null,
      article: [],
      ul: null,
      search: null,
      articlesSelected: [],
      articlesSelectedCategorie: [],
      selectedCategorie: [],
      categories: null,
      selectFinal: [],
      finalHave: [],
      
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
          this.article.push({
            legend: select.legend,
            link: select.link,
            categorie: JSON.parse(select.categorie),
            date: select.date
          });
        });
      } catch (e) {
        this.formError = e.message;
      }
    },
    //

    /*
     * Check
     */
    check() {
      this.ul.innerHTML = "";
      this.finalHave = [];

      /* If categorie is selected => true */
      this.article.forEach(selectArticle => {
        this.checkedNames.forEach(selectChecked => {
          selectArticle.categorie.forEach(selectCategorie => {
            if (
              this.checkedNames.indexOf(selectCategorie.name) != -1 &&
              this.selectFinal.indexOf(selectArticle) === -1
            ) {
              selectCategorie.select = true;
              this.selectFinal.push(selectArticle);
            }
          });
        });
      });

      this.selectFinal.forEach((selectArticle, i) => {
        for (const selectCategorie of selectArticle.categorie) {
          this.checkedNames.forEach(selectChecked => {
            selectCategorie.name === selectChecked &&
            this.finalHave.indexOf(selectChecked) === -1
              ? this.finalHave.push(selectChecked)
              : 0;
          });
        }
        this.finalHave.length === this.checkedNames.length
          ? this.appearContent(
              selectArticle.legend,
              selectArticle.link,
              selectArticle.date
            )
          : 0;
      });

      /* Show all articles */
      if (this.checkedNames.length === 0) {
        this.article.forEach(select => {
          this.appearContent(select.legend, select.link, select.date);
        });
      }
    },
    //

    /*
     * Appear the content in the ul
     */
    appearContent(legend, link, date) {
      this.ul.innerHTML += `
      <li class="li__head">
        <p class="li__text">${legend}</p>
        <img class="li__img" src="${link}">
        <p class="li__text">${date}</p>
      </li>`;
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
          this.appearContent(select.legend, select.link, select.date);
        }
      });
    });
  }
};
</script>