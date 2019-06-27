<template>
  <section class="gallery archive">
    <div class="wrapper--achive">
      <div class="filter">
        <header>
          <h1>Galerie</h1>
          <div class="headlineIntro"></div>
        </header>
        <!-- Alert -->
        <!-- <p class="gallery__alert" v-show="formError != null" role="alert">{{ formError }}</p> -->

        <!-- Instruction -->
        <div class="filterBox">
          <section class="gallery__form">
            <form>
              <!-- Search bar -->
              <input
                class="searchbar"
                name="filter"
                placeholder="Filtrer"
                type="text"
                autocomplete="off"
              >

              <!-- Option -->
              <div class="inputGroup">
                <div class="categoryBox">
                  <label class="container" for="Entrance">
                    Bouches de stations
                    <input
                      type="radio"
                      id="Entrance"
                      value="Entrance"
                      v-model="picked"
                      @change="option"
                    >
                    <span class="checkmark"></span>
                  </label>
                </div>

                <div class="inputGroup">
                  <label class="container" for="Station">
                    Stations
                    <input
                      type="radio"
                      id="Station"
                      value="Station"
                      v-model="picked"
                      @change="option"
                    >
                    <span class="checkmark"></span>
                  </label>
                </div>

                <div class="inputGroup">
                  <label class="container" for="Train">
                    Rames de métro
                    <input
                      type="radio"
                      id="Train"
                      value="Train"
                      v-model="picked"
                      @change="option"
                    >
                    <span class="checkmark"></span>
                  </label>
                </div>

                <div class="inputGroup">
                  <label class="container" for="PostCard">
                    Cartes postales
                    <input
                      type="radio"
                      id="PostCard"
                      value="PostCard"
                      v-model="picked"
                      @change="option"
                    >
                    <span class="checkmark"></span>
                  </label>
                </div>

                <div class="inputGroup">
                  <label class="container" for="Event">
                    Évènements
                    <input
                      type="radio"
                      id="Event"
                      value="Event"
                      v-model="picked"
                      @change="option"
                    >
                    <span class="checkmark"></span>
                  </label>
                </div>

                <div class="inputGroup">
                  <label class="container" for="Building">
                    En construction
                    <input
                      type="radio"
                      id="Building"
                      value="Building"
                      v-model="picked"
                      @change="option"
                    >
                    <span class="checkmark"></span>
                  </label>
                </div>

                <div class="inputGroup">
                  <label class="container" for="Normal">
                    Pas de filtre
                    <input
                      type="radio"
                      id="Normal"
                      value="Normal"
                      v-model="picked"
                      @change="option"
                    >
                    <span class="checkmark checked"></span>
                  </label>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>

      <div class="wrapp--images">
        <!-- <div id="example-3">
          <br>
          <span>Noms cochés : {{ checkedNames }}</span>
        </div>-->

        <div
          class="archive__imageBox"
          v-for="article in gallery"
          :value="article._id"
          :key="article._id"
        >
          <img class="archive__imageBox__image" v-bind:src="article.link">
          <p>
            <span>{{ article.date }}</span>
            {{ article.legend }}
          </p>
        </div>
      </div>
    </div>
    <footer class="footer--comic" style="position: fixed">
      <!-- <img src="../../assets/ressources/img/mec.png" class="mec" alt> -->
      <nuxt-link to="/content/navigation">
        <button>
          <img src="../../assets/ressources/img/icon.png" alt>
        </button>
      </nuxt-link>
      <!-- <script src="js/comic.js"></script> -->
    </footer>
  </section>
</template>

<script>
export default {
  transition: `article`,
  
  data() {
    return {
      picked: null,

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
     * Option
     */
    option() {
      document.querySelector(".checked")
        ? document.querySelector(".checked").classList.remove("checked")
        : 0;
      this.ul.innerHTML = "";

      if (this.picked != "Normal") {
        this.selectCategorie(this.picked);
      } else {
        this.article.forEach(select => {
          this.appearContent(select.legend, select.link, select.date);
        });
      }
    },
    //

    /*
     *
     */
    selectCategorie(selectCategorie) {
      this.article.forEach(selectArticle => {
        /* console.log(selectArticle) */
        selectArticle.categorie.forEach(select => {
          if (select.name === selectCategorie) {
            this.appearContent(
              selectArticle.legend,
              selectArticle.link,
              selectArticle.date
            );
          }
        });
      });
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
      <div class="archive__imageBox">
        <img class="archive__imageBox__image" src="${link}">
        <p>
          <span>${date}</span>
          ${legend}
        </p>
      </div>`;
    }
    //
  },

  mounted: function mounted() {
    /*
     * Load articles
     */
    this.loadGallery();
    this.search = document.querySelector("input");
    this.ul = document.querySelector(".wrapp--images");
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