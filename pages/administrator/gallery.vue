<template>
  <section>
    <h1>Editeur de la galerie</h1>
    <NuxtLink to="/admin">Back to the admin page</NuxtLink>
  </section>
</template>

<script>
export default {
  data() {
    return {
      gallery: null
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

        console.log(this.gallery);


        /* Render */
        /* this.componentKey += 1; */

      } catch (e) {
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
    //
  }
};
</script>

