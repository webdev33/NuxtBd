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
          /* console.log(select) */
          this.article.push({
            legend: select.legend,
            link: select.link,
            categorie: JSON.parse(select.categorie)
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

      this.article.forEach(selectArticle => {
        this.checkedNames.forEach(selectChecked => {
          selectArticle.categorie.forEach(selectCategorie => {
            if (this.checkedNames.indexOf(selectCategorie.name) != -1) {
              selectCategorie.select = true;
            }
          });
        });
      });

      this.article.forEach(selectArticle => {
        selectArticle.categorie.forEach(selectCategorie => {

          console.log(this.checkedNames.indexOf(selectCategorie.name))
          this.checkedNames.forEach(selectChecked => {
            if(this.checkedNames.indexOf(selectCategorie.name) === 0) {
              console.log('On sélectionne cet article')

            } else {
              console.log('On ne sélectionne pas cet article')
              selectArticle.categorie.forEach(selectCategorie => {
                selectCategorie.select = false;
              });
            }

          });

        });

        console.log("////// end this.article /////");
      });

      console.log("///////////");
      console.log(this.article);
      console.log("///////////");
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
      console.log(this.articlesSelected);
    });
  }
};
</script>