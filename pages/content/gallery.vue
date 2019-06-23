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
      /* console.log(this.checkedNames) */

      /* Checked */
      this.checkedNames.forEach(selectChecked => {
        /* console.log(selectChecked) */

        /* for each Article */
        this.article.forEach(selectArticle => {
          /* console.log(selectArticle.categorie); */

          /* For each categorie of article */
          selectArticle.categorie.forEach(selectCategorie => {

            /* console.log(selectCategorie.name); */
            if (selectChecked === selectCategorie.name) {
              /* console.log('oui') */

              /* this.checkedNames.forEach(selectCheckedVerification => { */
              /* }) */

console.log(this.checkedNames)
console.log(selectCategorie.name)

              if (this.checkedNames.indexOf(selectCategorie.name) != -1) {
                console.log('fefef')
              }
            }
          });
        });
      });

      console.log("////////////////////////////////////////////////////");

      // this.article.forEach(selectArticle => {
      //   selectArticle.categorie.forEach(selectArticleCategorie => {
      //     this.checkedNames.forEach(selectCategorie => {
      //       if (selectCategorie === selectArticleCategorie.name) {
      //         console.log(selectArticleCategorie.name)
      //         /* console.log(this.selectedCategorie.indexOf(selectCategorie)); */
      //         /* if (this.selectedCategorie.indexOf(selectCategorie) === -1) {
      //           this.selectedCategorie.push(selectCategorie);
      //         } else if (this.selectedCategorie.length === 0) {
      //           this.selectedCategorie.push(selectCategorie);
      //         }
      //         console.log(this.selectedCategorie);
      //         console.log(this.checkedNames) */
      //         /* console.log(selectArticle); */
      //         /* this.ul.innerHTML += `<li class="li__head"><p class="li__text">${
      //           selectArticle.legend
      //         }</p><img class="li__img" src="${selectArticle.link}"></li>`; */
      //       }
      //     });
      //   });
      // });

      if (this.checkedNames.length === 0) {
        this.article.forEach(select => {
          this.ul.innerHTML += `<li class="li__head"><p class="li__text">${
            select.legend
          }</p><img class="li__img" src="${select.link}"></li>`;
        });
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
      console.log(this.articlesSelected);
    });
  }
};
</script>