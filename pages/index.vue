<template>
  <section class="index">
    <!-- Alert -->
    <p class="alert alert-primary alert-danger" v-show="formError != null">{{ formError }}</p>

    <div class="intro__box">
      <h1>Le Pere du Metro</h1>
      <p>Un hommage du Fulgence Bienvenüe, qui a relasie des premieres lignes des metro a Paris du 19 centery.</p>
    </div>

     <div class="intro__video">
      <video src="../assets/ressources/img/metro.mp4" autoplay></video>
    </div>


    <footer class="footer--comic footer--index">
      <img src="../assets/ressources/img/mec.png" class="mec mec--big" alt>

      <nuxt-link to="/content/navigation">
        <button>
          <img src="../assets/ressources/img/icon.png" alt>
        </button>
      </nuxt-link>
    </footer>
    
  </section>
</template>

<script>
export default {
  data() {
    return {
      articles: null,
      formError: null,

      article: true
    };
  },

  methods: {
    /*
     * Load articles
     */
    async loadArticles() {
      try {
        let articles = await this.$store.dispatch("articles");
        this.articles = articles.data.data;
      } catch (e) {
        this.formError = e.message;
      }
    },
    //

    router() {
      let article = 2
      this.$router.push({ path: `content/article/${article}`})
    }
  },

  mounted: function mounted() {

    let mec = document.querySelector(".mec");
    console.log(mec)
    window.addEventListener("scroll", () => {
     
      if (window.matchMedia("(min-width: 640px)").matches) {
    
        if (document.documentElement.scrollTop >window.innerHeight * 0.3) {
          mec.classList.remove("mec--big");
        } else {
          mec.classList.add("mec--big");
        }
      }
    });



    /*
     * Load articles
     */
    this.loadArticles();
    //
  }
};
</script>
