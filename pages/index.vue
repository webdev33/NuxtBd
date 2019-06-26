<template>
  <section class="index">
    <!-- Alert -->
    <p class="alert alert-primary alert-danger" v-show="formError != null">{{ formError }}</p>

    <div class="wrapper--intro">
      <header>
        <h1>
          Le pere du
          <br>metro
        </h1>
        <div class="headlineIntro"></div>
      </header>

      <h1 class="headline--intro--first">Le Pere du Metro</h1>

      <div class="intro__video">
        <video src="../assets/ressources/img/metro.mp4" autoplay></video>
      </div>

      <div class="contentBox">
        <h1 class="headline--intro--second">Bienvenüe</h1>
        <p class="dialog">Je suis heureux de vous présenter</p>
      </div>

      <nuxt-link to="/content/map">
        <button class="button button--intro">Let's go</button>
      </nuxt-link>

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
          mec.style.opacity="1";
          if (document.documentElement.scrollTop >window.innerHeight * 0.6) {
           // document.querySelector(".headline--intro--second").classList.add("fadeOutLeft");
          }
        } else {
          mec.style.opacity="0";
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
