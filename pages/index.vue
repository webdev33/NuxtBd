<template>
  <section class="index">
    <!-- Speaker -->
    <section class="speaker">
      <!-- Mute -->
      <section
        v-if="selectSpeaker() === false"
        v-on:click="clickSpeaker()"
        class="speaker speaker--on"
      >
        <img src="../assets/ressources/audios/icon/speakker--off.png" alt>
      </section>

      <!-- Unmute -->
      <section
        v-if="selectSpeaker() === true"
        v-on:click="clickSpeaker()"
        class="speaker speaker--off"
      >
        <img src="../assets/ressources/audios/icon/speakker--on.png" alt>
      </section>
    </section>

    <!-- Alert -->
    <div class="disclaimer" v-show="disclaimer === true">
      <button class="disclaimer__button" v-on:click="disclaimer = false">x</button>
      <p class="disclaimer__text">
        Ce site à été réalisé à des fins pédagogiques dans le cadre du cursus
        Bachelor de l’école HETIC. Les contenus présentés ne sont en aucun
        cas exploités à des fins commerciales et ne seront pas publiés
      </p>
    </div>

    <p class="alert alert-primary alert-danger" v-show="formError != null">{{ formError }}</p>
    <div class="wrapper--intro">
      <div class="countdown countdown--test"></div>

      <h1 class="headline--intro--first">Le Père du Métro</h1>
      <div class="fakescroll"></div>
      <div class="intro__video">
        <video src="../assets/ressources/img/intro.mp4" autoplay></video>
      </div>

      <h1 class="headline--intro--second">Qui a éventré Paris ?</h1>

      <p class="dialog dialog--1">Je suis heureux de me présenter à vous.</p>
      <p class="dialog dialog--2">Je suis Fulgence Bienvenüe !</p>
      <p class="dialog dialog--3">
        Je suis à l'origine de la construction
        <br>du métropolitain.
      </p>
      <p class="dialog dialog--4">
        C'est la raison pour laquelle
        <br>on me surnomme "le père du métro".
      </p>

      <nuxt-link to="/content/map">
        <button class="button button--intro">Commence le voyage</button>
      </nuxt-link>
    </div>

    <p class="button scroll--down buttonSkipIntro">Skip le intro</p>
    <p class="button scroll--down scroll--down--xs">Decouvrir</p>

    <footer class="footer--comic footer--index">
      <img src="../assets/ressources/img/mec.png" class="mec slideIn--later" alt>

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
  transition: `article`,

  data() {
    return {
      boolean: false,

      disclaimer: true,

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

    /*
     * Select the status of speaker
     */
    selectSpeaker() {
      return this.boolean;
    },
    //
    /*
     * Inverse iconBoolean
     */
    clickSpeaker() {
      this.boolean = !this.boolean;
      document.querySelector("video").muted = this.boolean;
      localStorage.setItem(`MUSIC`, this.boolean);
    },
    //

    /*
     * Router test
     */
    router() {
      let article = 2;
      this.$router.push({ path: `content/article/${article}` });
    }
  },

  mounted: function mounted() {
    /*
     * Speaker
     */
    document.querySelector("video").muted = this.boolean;
    this.boolean = JSON.parse(localStorage.getItem(`MUSIC`))
      ? JSON.parse(localStorage.getItem(`MUSIC`))
      : false;
    document.querySelector("video").muted = this.boolean;
    document.querySelector("video").volume = 0.3;
    //

    if (window.matchMedia("(min-width: 600px)").matches) {
      let mec = document.querySelector(".mec");
      console.log(mec);

      let timer = setTimeout(function() {
        document
          .querySelector(".headline--intro--second")
          .classList.add("slideIn--nowIntroTest");
        document.querySelector(".buttonSkipIntro").innerHTML = "Scroll Down";
        document.querySelector(".index").classList.add("introNoSkip");
        document.querySelector(".wrapper--intro").style.overflow = "visible";
      }, 21000);

      document
        .querySelector(".buttonSkipIntro")
        .addEventListener("click", function() {
          console.log("skip intro");
          clearTimeout(timer);
          document.querySelector(".wrapper--intro").style.overflow = "visible";
          document.querySelector(".index").classList.add("introSkip");
          document.querySelector(".buttonSkipIntro").innerHTML = "Scroll Down";
          document
            .querySelector(".headline--intro--second")
            .classList.add("slideIn--nowIntroTest");
        });

      let counter = 0;
      let counterAnimation = 0;
      let lastScrollTop = 0;
      window.addEventListener("scroll", () => {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        console.log("fff");
        counter += 1;
        if (counter % 30 === 0) {
          if (st > lastScrollTop) {
            counterAnimation += 1;
            switch (counterAnimation) {
              case 1:
                mec.classList.add("fadeInLeft");
                document.querySelector(".scroll--down").style.opacity = "0";
                break;

              case 2:
                document.querySelector(
                  ".headline--intro--second"
                ).style.opacity = "0";
                break;

              case 3:
                document
                  .querySelector(".dialog--1")
                  .classList.add("slideInButton");
                break;

              case 4:
                document
                  .querySelector(".dialog--1")
                  .classList.add("slideIOutTop");
                break;

              case 5:
                document
                  .querySelector(".dialog--2")
                  .classList.add("slideInButton");
                break;

              case 6:
                document
                  .querySelector(".dialog--2")
                  .classList.add("slideIOutTop");
                break;

              case 7:
                document
                  .querySelector(".dialog--3")
                  .classList.add("slideInButton");
                break;

              case 8:
                document
                  .querySelector(".dialog--3")
                  .classList.add("slideIOutTop");
                break;

              case 9:
                document
                  .querySelector(".dialog--4")
                  .classList.add("slideInButton");
                break;

              case 10:
                document
                  .querySelector(".dialog--4")
                  .classList.add("slideIOutTop");
                break;

              case 11:
                document
                  .querySelector(".button--intro")
                  .classList.add("slideInButton");
                break;

              default:
                break;
            }
          }

          console.log(counterAnimation);
        } else {
          //document.querySelector(".intro__video").innerHTML="";
        }

        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
      });
    }

    /*
     * Load articles
     */
    this.loadArticles();
    //
  }
};
</script>

<style lang="scss" scoped>
.disclaimer {
  //max-width: 1260px;
  position: fixed;
  top: 30px;
  left: 10px;
  width: 100vw;
  z-index: 1000;

  display: flex;
  p {
    background-color: #fff;
    color: #2623b7;
    font-weight: bold;
    font-size: 0.8em;
    padding: 2px;
  }
  button {
    color: #fff;
    border: none;
    background-color: #2623b7;
    height: 15px;
    padding: 0 5px;
    cursor: pointer;
  }
}
</style>
