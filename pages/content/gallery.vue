<template>
  <section>
    <h1>Gallery</h1>

    <p
      class="alert alert-primary alert-danger"
      v-show="formError != null"
      role="alert"
    >{{ formError }}</p>



  </section>
</template>

<script>
export default {
  data() {
    return {
      gallery: null,
      categories: null,

      /* Message */
      formError: null,
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

        /* console.log(JSON.parse(this.gallery[0].categorie)) */

        this.gallery.forEach(select => {

          /* console.log(JSON.parse(select.categorie)) */

          JSON.parse(select.categorie).forEach(select => {
            console.log(select)
          });




          /* this.article.push({ legend: select.legend, link: select.link }); */
        });
        

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
  }
};
</script>