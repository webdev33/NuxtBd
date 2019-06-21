<template>
  <section>
    <h1>Editeur de la galerie</h1>
    <NuxtLink to="/admin">Back to the admin page</NuxtLink>

    <section class="gallery">
      <br>
      <form>
        <input name="filter" placeholder="Filtrer" type="text" autocomplete="off">
      </form>

      <ul>
        <li>Agathe</li>
        <li>Alice</li>
        <li>Ambre</li>
        <li>Arthur</li>
        <li>Camille</li>
        <li>Chloé</li>
        <li>Gabin</li>
        <li>Gabriel</li>
        <li>Hugo</li>
        <li>Jade</li>
        <li>Julia</li>
        <li>Léa</li>
        <li>Léo</li>
        <li>Louis</li>
        <li>Louise</li>
        <li>Maël</li>
        <li>Mila</li>
        <li>Paul</li>
        <li>Théo</li>
        <li>Valentin</li>
      </ul>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      gallery: null,
      article: [
        "Agathe",
        "Alice",
        "Ambre",
        "Arthur",
        "Camille",
        "Chloé",
        "Gabin",
        "Gabriel",
        "Hugo",
        "Jade",
        "Julia",
        "Léa",
        "Léo",
        "Louis",
        "Louise",
        "Maël",
        "Mila",
        "Paul",
        "Théo",
        "Valentin"
      ],
      ul: null,
      search: null
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
  created() {},

  mounted: function mounted() {
    /*
     * Load articles
     */
    this.loadGallery();
    this.search = document.querySelector("input");
    this.ul = document.querySelector("ul");

    this.search.addEventListener("keyup", event => {
      console.log(event);
    });
    //
  }
};
</script>

