<template>
  <section class="comic">
    <header>
      <h1>Courcelles</h1>
      <div class="headlineIntro"></div>
    </header>

    <!-- Speaker -->
    <section class="speaker">
      <!-- autoplay -->
      <audio
        :src="require('@/assets/ressources/audios/YvesMontandMetro.mp3')"
        autoplay
        class="speaker--songs"
      ></audio>

      <!-- Mute -->
      <section
        v-if="selectSpeaker() === false"
        v-on:click="clickSpeaker()"
        class="speaker speaker--on"
      >
        <img src="../../../assets/ressources/audios/icon/speakker--off.png" alt>
      </section>

      <!-- Unmute -->
      <section
        v-if="selectSpeaker() === true"
        v-on:click="clickSpeaker()"
        class="speaker speaker--off"
      >
        <img src="../../../assets/ressources/audios/icon/speakker--on.png" alt>
      </section>
    </section>

    <div class="sidebar">
      <h2>Ma vie privée</h2>
    </div>

    <div class="discoverBox">
      <img src="../../../assets/ressources/img/stairs.svg" class="stair" alt>
      <a v-on:click="linkArticle()" class="button button--discover">Découvre la station</a>
    </div>

    <div class="comicBox comicBox--prive">
      <button class="button buttonNext">Suivant</button>
      <div class="comic__text animation--text">
        <img src="../../../assets/ressources/img/playbutton.png" alt class="videoPrewieButton">
        <p class="comic__text__p">
          Après avoir consacré une majeure partie de sa vie à la construction du métropolitain et au développement de
          <span
            class="link--video"
            videoLinkId="0"
          >ses technologies....</span>
        </p>
      </div>

      <img
        src="../../../assets/ressources/img/comic/pere/signMetro.png"
        class="comicBox__image metroSign slideIn"
        alt
      >
      <img
        src="../../../assets/ressources/img/comic/pere/person.png"
        class="comicBox__image person slideIn"
        alt
      >
      <img
        src="../../../assets/ressources/img/comic/prive/femme.png"
        class="comicBox__image femme slideIn--later"
        alt
      >
      <img
        src="../../../assets/ressources/img/comic/prive/appart.png"
        class="comicBox__image appart slideIn--later"
        alt
      >
    </div>

    <!-- Slide 0 Start -->
    <div class="videoBox__wrapper videoBox__wrapper--0 slideIn--later">
      <button class="button button--closeVideo button--closeVideo--0">Retour en arrière</button>
      <div class="videoBox">
        <div class="videoBox__videoWrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/RhzDUyZKCLs"
            class="videoBox__video"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p class="videoHeadline">Le développement des technologies : les lignes aériennes</p>
        </div>
        <div class="videoBox__audiodescriptionBox">
          <img
            src="../../../assets/ressources/img/untertitel.png"
            alt
            class="icon--untertitel icon--untertitel--0"
          >
          <p class="videoBox__audiodescription videoBox__audiodescription--0 slideIn--later">
            Les lignes circulaires nord et sud ont une particularité : elles sont en partie aériennes, contrairement à la ligne 1 presque entièrement souterraine.
            <br>
            <br>Quand la circulaire nord doit franchir les voies de chemins de fer en tranchées et le canal Saint Martin, au lieu de creuser plus profondément, les concepteurs ont préféré construire le tronçon en viaduc, donc aérien.
            <br>
            <br>Pour la circulaire sud, c’est le relief du sud de Paris qui a motivé la construction en viaduc. A cause des dénivelés, il aurait fallu soit creuser à grande profondeur soit suivre les dénivelés aux prix de montés impossibles à emprunter pour les rames de l’époque. Il a donc été préférable de construire à l’air libre.
            <br>
            <br>Cette technique de construction s’avère plus coûteuse et surtout plus longue que la construction en tunnel. L’avancée des techniques de constructions permettra de construire les lignes suivantes plus profondément et d’éviter ces passages aériens.
          </p>
        </div>
      </div>
    </div>
    <!-- End -->

    <footer class="footer--comic">
      <img src="../../../assets/ressources/img/mec.png" class="mec" alt>
      <nuxt-link to="/content/navigation">
        <button>
          <img src="../../../assets/ressources/img/icon.png" alt>
        </button>
      </nuxt-link>
    </footer>
  </section>
</template>

<script>
export default {
  transition: `article`,
  
  data() {
    return { boolean: true };
  },

  /*
   * By Christina, queen of the animation and Javascript
   */
  mounted: function mounted() {
    /*
     * Message bienvenue
     */
    this.visited = JSON.parse(localStorage.getItem(`VISITED`));
    //

    /*
     * Speaker
     */
    document.querySelector(".speaker--songs").muted = this.boolean;
    this.boolean = JSON.parse(localStorage.getItem(`MUSIC`))
      ? JSON.parse(localStorage.getItem(`MUSIC`))
      : false;
    document.querySelector(".speaker--songs").muted = this.boolean;
    document.querySelector(".speaker--songs").volume = 0.3;
    //

    ///chaque comic
    let buttonNext = document.querySelector(".buttonNext");
    let commicBox = document.querySelector(".comicBox");
    let textBox = document.querySelector(".comic__text");
    let textBoxContent = document.querySelector(".comic__text__p");
    let discoverBox = document.querySelector(".discoverBox");
    let buttonNextCounter = 0;

    let savoirPlusStart = function() {
      //Savoir Plus
      let savoirPlus = document.querySelector(".buttonPlus");
      savoirPlus.addEventListener("click", function() {
        document.querySelector(".comic").classList.add("full");
        textBox.classList.add("fadeOut");
        document.querySelector(".mec").classList.add("fadeOut");
        document.querySelector("header").classList.add("fadeOut");
        document.querySelector(".articlePlus").style.display = "block";
        console.log("test 1");
        setTimeout(function() {
          document.querySelector(".articlePlus").classList.add("slideIn--now");
          console.log("test 2");
        }, 100);
        document
          .querySelector(".buttonNext--end")
          .addEventListener("click", function() {
            window.scrollTo({ top: 0, behavior: "smooth" });
            console.log("test 2");
          });
        if (document.querySelector(".comic").classList.contains("full")) {
          console.log("test 2");
          window.addEventListener("scroll", () => {
            console.log("test 2");
            if (window.matchMedia("(min-width: 640px)").matches) {
              if (
                document.documentElement.scrollTop >
                window.innerHeight * 0.2
              ) {
                document.querySelector(".comicBox").classList.add("fadeOut");
                document.querySelector(".articlePlus").style.zIndex = "200";
              } else {
                document.querySelector(".comicBox").classList.remove("fadeOut");
                document.querySelector(".articlePlus").style.zIndex = "0";
              }
            }
          });
        }
      });
      //
    };
    let savoirPlusEnd = function() {
      document.querySelector(".articlePlus").style.display = "none";
      textBox.classList.remove("fadeOut");
      document.querySelector(".mec").classList.remove("fadeOut");
      document.querySelector("header").classList.remove("fadeOut");
    };

    let untertitelButtonsPlus = document.querySelectorAll(
      ".articlePlus .icon--untertitel"
    );
    console.log(untertitelButtonsPlus);
    for (let i = 0; i < untertitelButtonsPlus.length; i++) {
      console.log("what 1");
      untertitelButtonsPlus[i].addEventListener("click", function() {
        let audioDescriptionPlus = document.querySelectorAll(
          ".articlePlus .videoBox__audiodescription"
        );

        let iframePlus = document.querySelectorAll(".articlePlus iframe");
        for (let i = 0; i < iframePlus.length; i++) {
          iframePlus[i].classList.toggle("iframeResize");
          console.log("what 3");
          console.log(iframePlus[i]);
        }
        for (let i = 0; i < audioDescriptionPlus.length; i++) {
          audioDescriptionPlus[i].classList.toggle("slideIn--now");
          audioDescriptionPlus[i].classList.toggle("description--height");
          console.log("what 2");
        }
      });
    }

    let videoPlus = function() {
      //reset
      document.querySelector(".mec").classList.remove("fadeOutLeft");
      document.querySelector(".mec").classList.remove("fadeInLeft");
      document
        .querySelector(".comicBox")
        .classList.remove("slideIn--oneMoreTime");
      let previewVideo = document.querySelector(".videoPrewieButton");

      let buttonVideo = document.querySelectorAll(".link--video");
      for (let i = 0; i < buttonVideo.length; i++) {
        let selectButtonVideo = buttonVideo[i];

        selectButtonVideo.addEventListener("mouseover", function() {
          previewVideo.style.opacity = "1";
        });

        selectButtonVideo.addEventListener("mouseleave", function() {
          previewVideo.style.opacity = "0";
        });

        let videoNumber = "";
        selectButtonVideo.addEventListener("click", function() {
          document.querySelector(".comicBox").classList.add("fadeOut");
          document.querySelector(".mec").classList.add("fadeOutLeft");

          videoNumber = selectButtonVideo.getAttribute("videoLinkId");
          console.log("video Numbeer :" + videoNumber);
          document.querySelector(
            ".videoBox__wrapper--" + videoNumber
          ).style.display = "block";
          setTimeout(function() {
            document
              .querySelector(".videoBox__wrapper--" + videoNumber)
              .classList.add("slideIn--now");
          }, 100);

          let untertitelButtons = document.querySelectorAll(
            ".icon--untertitel--" + videoNumber
          );

          for (let i = 0; i < untertitelButtons.length; i++) {
            untertitelButtons[i].addEventListener("click", function() {
              let audioDescription = document.querySelectorAll(
                ".videoBox__wrapper--" +
                  videoNumber +
                  " .videoBox__audiodescription--" +
                  videoNumber
              );
              for (let i = 0; i < audioDescription.length; i++) {
                audioDescription[i].classList.toggle("slideIn--now");
                audioDescription[i].classList.toggle("description--height");
              }
              let iframe = document.querySelectorAll(
                ".videoBox__wrapper--" + videoNumber + " iframe"
              );
              for (let i = 0; i < iframe.length; i++) {
                iframe[i].classList.toggle("iframeResize");
                console.log("what 3");
                console.log(iframe[i]);
              }
            });
          }

          let buttonVideoBack = document.querySelector(
            ".button--closeVideo--" + videoNumber
          );

          buttonVideoBack.addEventListener("click", function() {
            console.log("close video");
            document.querySelector(".comicBox").classList.remove("fadeOut");
            document
              .querySelector(".comicBox")
              .classList.add("slideIn--oneMoreTime");

            document
              .querySelector(".videoBox__wrapper--" + videoNumber)
              .classList.add("fadeOut");
            setTimeout(function() {
              document.querySelector(
                ".videoBox__wrapper--" + videoNumber
              ).style.display = "none";
              document.querySelector(
                ".videoBox__wrapper--" + videoNumber
              ).className =
                "videoBox__wrapper videoBox__wrapper--" +
                videoNumber +
                " slideIn--later";
              document
                .querySelector(".comicBox")
                .classList.remove("slideIn--oneMoreTime");
            }, 500);
            document.querySelector(".mec").classList.add("fadeInLeft");
          });
        });
      }
    };
    videoPlus();

    buttonNext.addEventListener("click", function() {
      buttonNextCounter = buttonNextCounter + 1;
      console.log(buttonNextCounter);

      //
      // Sa vie privée
      //
      if (commicBox.classList.contains("comicBox--prive")) {
        let person = document.querySelector(".person");
        let metroSign = document.querySelector(".metroSign");
        let femme = document.querySelector(".femme");
        let appart = document.querySelector(".appart");

        switch (buttonNextCounter) {
          case 1:
            textBoxContent.innerHTML =
              "Le 28 avril 1909, Fulgence Bienvenüe se marie avec Jeanne Loret, veuve et mère de trois enfants. Il avait alors 57 ans.";

            metroSign.classList.add("fadeOut");
            femme.classList.add("slideIn--now");
            setTimeout(function() {
              person.classList.add("bisous");
            }, 500);

            break;
          case 2:
            textBoxContent.innerHTML =
              "Le ménage s’installe au 112 boulevard de Courcelles dans le 17e arrondissement.";

            appart.classList.add("slideIn--now");

            femme.classList.add("fadeOut");
            person.classList.add("fadeOut");

            break;
          case 3:
            textBoxContent.innerHTML =
              "Fulgence a eu l’occasion de voyager à bord de sa propre création, il prenait régulièrement le métropolitain";

            appart.classList.add("fadeOut");
            metroSign.classList.remove("fadeOut");
            metroSign.classList.add("slideIn--oneMoreTime");

            discoverBox.style.display = "block";
            setTimeout(function() {
              discoverBox.style.transform = "translateY(0vw)";
            }, 100);
            buttonNext.style.opacity = "0";
            break;
        }
      }
    });
  },
  //

  methods: {
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
      document.querySelector(".speaker--songs").muted = this.boolean;
      localStorage.setItem(`MUSIC`, this.boolean);
    },
    //

    /*
     * Link
     */
    linkArticle() {
      let IDarticle = 5;
      this.$router.push({ path: `../../content/article/${IDarticle}` });
    }
    //
  }
};
</script>