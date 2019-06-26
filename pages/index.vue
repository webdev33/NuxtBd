<template>
  <section class="index">
    <!-- Alert -->
    <p class="alert alert-primary alert-danger" v-show="formError != null">{{ formError }}</p>
    <div class="wrapper--intro">
      <div class="countdown countdown--test"></div>

      <!-- <header>
        <h1>Le pere du metro</h1>
        <div class="headlineIntro"></div>
      </header> -->

      <!-- <header>
        <h1>
          Le pere du
          <br>metro
        </h1>
        <div class="headlineIntro"></div>
      </header> -->

      <h1 class="headline--intro--first">Le Pere du Metro</h1>
      <div class="fakescroll"></div>
      <div class="intro__video">
        <video src="../assets/ressources/img/metro.mp4" autoplay></video>
      </div>

      <!-- <div class="contentBox">
        <h1 class="headline--intro--second">Bienvenüe</h1>

        <p class="dialog">Je suis heureux de me présenter à vous</p>
        <p class="dialog">Je suis Fulgence Bienvenüe</p>
        <p class="dialog">J'ai invite avent plus que 100 ans<br>la metro a Paris</p>
        <p class="dialog">C'est la raison pourqui du monde<br> m'appelle pere du metro.</p>

        <nuxt-link to="/content/map">
        <button class="button button--intro">Let's go</button>
      </nuxt-link>

      </div> -->

      <h1 class="headline--intro--second slideInButton">Le Pere du Metro</h1>

      <p class="dialog dialog--1">Je suis heureux de me présenter à vous</p>
      <p class="dialog dialog--2">Je suis Fulgence Bienvenüe</p>
      <p class="dialog dialog--3">J'ai invite avent plus que 100 ans<br>la metro a Paris</p>
      <p class="dialog dialog--4">C'est la raison pourqui du monde<br> m'appelle pere du metro.</p>

      <nuxt-link to="/content/map">
      <button class="button button--intro">Commence la voyage</button>
      </nuxt-link>

      

    </div>

    <p class="button scroll--down">Scroll Down</p>
    <footer class="footer--comic footer--index">
      <img src="../assets/ressources/img/mec.png" class="mec slideIn--later" alt>

      <nuxt-link to="/content/navigation">
        <button>
          <img src="../assets/ressources/img/icon.png" alt>
        </button>
      </nuxt-link>
      <!-- <div class="countdown countdown--intro"></div> -->
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
          mec.classList.add("fadeInLeft");
          document.querySelector(".scroll--down").style.opacity="0";
          if (document.documentElement.scrollTop >window.innerHeight * 0.7) {
            document.querySelector(".headline--intro--second").classList.add("slideIOutTop");
            if (document.documentElement.scrollTop >window.innerHeight * 0.9) {
              document.querySelector(".dialog--1").classList.add("slideInButton");
              if (document.documentElement.scrollTop >window.innerHeight * 1.3) {
                document.querySelector(".dialog--1").classList.add("slideIOutTop");
                if (document.documentElement.scrollTop >window.innerHeight * 1.5) {
                  document.querySelector(".dialog--2").classList.add("slideInButton");
                  if (document.documentElement.scrollTop >window.innerHeight * 1.9) {
                    document.querySelector(".dialog--2").classList.add("slideIOutTop");
                    if (document.documentElement.scrollTop >window.innerHeight * 2.1) {
                      document.querySelector(".dialog--3").classList.add("slideInButton");
                      if (document.documentElement.scrollTop >window.innerHeight * 2.5) {
                        document.querySelector(".dialog--3").classList.add("slideIOutTop");
                        if (document.documentElement.scrollTop >window.innerHeight * 2.7) {
                          document.querySelector(".dialog--4").classList.add("slideInButton");
                          if (document.documentElement.scrollTop >window.innerHeight * 3.1) {
                            document.querySelector(".dialog--4").classList.add("slideIOutTop");
                            if (document.documentElement.scrollTop >window.innerHeight * 3.3) {
                              document.querySelector(".button--intro").classList.add("slideInButton");
                            } else {
                            document.querySelector(".button--intro").classList.remove("slideInButton");
                            }
                          } else {
                          document.querySelector(".dialog--4").classList.remove("slideIOutTop");
                          }
                        } else {
                        document.querySelector(".dialog--4").classList.remove("slideInButton");
                        }
                                    
                      } else {
                      document.querySelector(".dialog--3").classList.remove("slideIOutTop");
                      }
                    } else {
                    document.querySelector(".dialog--3").classList.remove("slideInButton");
                    }
                  } else {
                  document.querySelector(".dialog--2").classList.remove("slideIOutTop");
                  }
                } else {
                document.querySelector(".dialog--2").classList.remove("slideInButton");
                }
              } else {
              document.querySelector(".dialog--1").classList.remove("slideIOutTop");
              }
              } else {
            document.querySelector(".dialog--1").classList.remove("slideInButton");
            }
          } else {
          document.querySelector(".headline--intro--second").classList.remove("slideIOutTop");
          }

        } else {
          // mec.style.opacity="0";
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
