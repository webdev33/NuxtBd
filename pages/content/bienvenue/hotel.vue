
<template>
  <section class="comic">
    <header>
      <h1>Hotel de Ville</h1>
      <div class="headlineIntro"></div>
    </header>

    <!-- Speaker -->
    <section class="speaker">
      <!-- autoplay -->
      <audio
        :src="require('@/assets/ressources/audios/poinconneurDesLilas.mp3')"
        autoplay
        class="speaker--songs"
      ></audio>

      <!-- Mute -->
      <section v-if="selectSpeaker() === false" v-on:click="clickSpeaker()" class="speaker--on">
        <img src="../../../assets/ressources/audios/icon/mute.svg" class="mec" alt>
      </section>

      <!-- Unmute -->
      <section v-if="selectSpeaker() === true" v-on:click="clickSpeaker()" class="speaker--off">
        <img src="../../../assets/ressources/audios/icon/unmute.svg" class="mec" alt>
      </section>
    </section>

    <div class="sidebar">
      <h2>Triumph</h2>
    </div>

    <div class="discoverBox">
      <img src="../../../assets/ressources/img/stairs.svg" class="stair" alt>
      <a v-on:click="linkArticle()" class="button button--discover">Decouvrir la station</a>
    </div>

    <div class="comicBox comicBox--triumph">
      <button class="button buttonNext">Next</button>
      <div class="comic__text animation--text">
        <img src="../../../assets/ressources/img/playbutton.png" alt class="videoPrewieButton">
        <p
          class="comic__text__p"
        >Fulgence Bienvenüe obtient une distinction en guise de reconnaissance de la part de la capitale.</p>
      </div>

      <img
        src="../../../assets/ressources/img/comic/triumph/maison.png"
        class="comicBox__image maison slideIn"
        alt
      >
      <img
        src="../../../assets/ressources/img/comic/pere/signMetro.png"
        class="comicBox__image metroSign slideIn--later"
        alt
      >
      <img
        src="../../../assets/ressources/img/comic/triumph/kofetti.png"
        class="comicBox__image kofetti slideIn--later"
        alt
      >
      <img
        src="../../../assets/ressources/img/comic/triumph/maison.png"
        class="comicBox__image maison slideIn--later"
        alt
      >
      <img
        src="../../../assets/ressources/img/comic/triumph/person--leg.png"
        class="comicBox__image leg slideIn--later"
        alt
      >
      <img
        src="../../../assets/ressources/img/comic/triumph/person--corp.png"
        class="comicBox__image corp slideIn--later"
        alt
      >
      <img
        src="../../../assets/ressources/img/comic/triumph/pult.png"
        class="comicBox__image pult slideIn--later"
        alt
      >
      <img
        src="../../../assets/ressources/img/comic/triumph/medallie.png"
        class="comicBox__image medallie slideIn--later"
        alt
      >
    </div>

    <!-- Slide 1 Start -->
    <div class="videoBox__wrapper videoBox__wrapper--1 slideIn--later">
      <button class="button button--closeVideo button--closeVideo--1">Go Back</button>
      <div class="videoBox">
        <div class="videoBox__videoWrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/w4AN6vnTt3A"
            class="videoBox__video"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p class="videoHeadline">Les techniques d'architecture</p>
        </div>
        <div class="videoBox__audiodescriptionBox">
          <img
            src="../../../assets/ressources/img/untertitel.png"
            alt
            class="icon--untertitel icon--untertitel--1"
          >
          <p class="videoBox__audiodescription videoBox__audiodescription--1 slideIn--later">
            “Plusieurs fois le métro passe la Seine, on a des viaducs remarquables, comme le viaduc de Passy. Mais une des prouesses technologique c’est le viaduc d’Austerlitz avec une portée exceptionnelle de 140 mètres en une seule fois.”
            La construction du viaduc d’Austerlitz a été décidé en 1903, pour relier les deux rives de la ligne 5, entre les stations Gare d’Austerlitz et l’actuel Quai de la Rapée. Afin de ne pas gêner le trafic fluvial, le service de la navigation demanda qu’il ne comporte aucun appui au milieu du fleuve. Situé à 11m30 au dessus du niveau de la Seine, le viaduc d’Austerlitz est réalisé en acier. Il est constitué de deux grands arcs paraboliques, avec 3 articulations : une au sommet et deux proches des rives. Le tablier large de 8m50 est suspendu aux arcs par 16 montants en son centre et porté par 4 montants aux extrémités. Pour contrarier la force du vent, les montants de suspension ont été reliés par des structures en croix. Pour rigidifier l’ensemble, les arcs ont été eux mêmes reliés entre eux. Le projet retenu prévoyait donc un viaduc d’une seule portée de 140 m, battant au passage les 107m50 du pont Alexandre III, jusque là, la plus longue de Paris. Sur les rives, les arcs du viaduc s'appuient sur des massifs de maçonnerie de 22m de long et 18m de large. Chacun de ces blocs est surmonté de deux pylônes, de 15m de haut, qui encadrent le tablier du pont. Un ouvrage hors normes pour l’époque. En juillet 1906, les travaux sont enfin terminés. La ligne 5 qui relie la gare de l’Est à la gare d’Austerlitz est mise en service.
          </p>
        </div>
      </div>
    </div>
    <!-- End -->

    <!-- Slide 2 Start -->
    <div class="videoBox__wrapper videoBox__wrapper--2 slideIn--later">
      <button class="button button--closeVideo button--closeVideo--2">Go Back</button>
      <div class="videoBox">
        <div class="videoBox__videoWrapper">
          <iframe
            width="560"
            height="315"
            class="videoBox__video"
            src="https://www.youtube.com/embed/LU2LoFM0u-o"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p class="videoHeadline">Fulgence Bienvenüe part à la retraite</p>
        </div>
        <div class="videoBox__audiodescriptionBox">
          <img
            src="../../../assets/ressources/img/untertitel.png"
            alt
            class="icon--untertitel icon--untertitel--2"
          >
          <p
            class="videoBox__audiodescription videoBox__audiodescription--2 slideIn--later"
          >Bienvenüe part à la retraite au début des années 30, à plus de 80 ans. "Monsieur l’inspecteur général Bienvenüe !" Le métro s’est encore étendu, et déjà à l’époque, 800 millions de voyageurs l’empruntent chaque années.</p>
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
      <!-- <script src="js/comic.js"></script> -->
    </footer>
  </section>
</template>

<script>
export default {
  data() {
    return { boolean: false };
  },

  /*
   * By Christina, queen of the animation and Javascript
   */
  mounted: function mounted() {
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
        document.querySelector("body").classList.add("full");
        textBox.classList.add("fadeOut");
        document.querySelector(".mec").classList.add("fadeOut");
        document.querySelector("header").classList.add("fadeOut");
        document.querySelector(".articlePlus").style.display = "block";
        setTimeout(function() {
          document.querySelector(".articlePlus").classList.add("slideIn--now");
        }, 100);
        document
          .querySelector(".buttonNext--end")
          .addEventListener("click", function() {
            window.scrollTo({ top: 0, behavior: "smooth" });
          });
        if (document.querySelector("body").classList.contains("full")) {
          window.addEventListener("scroll", () => {
            if (window.matchMedia("(min-width: 640px)").matches) {
              if (
                document.documentElement.scrollTop >
                window.innerHeight * 0.4
              ) {
                document.querySelector(".comicBox").classList.add("fadeOut");
              } else {
                document.querySelector(".comicBox").classList.remove("fadeOut");
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
          console.log(untertitelButtons);

          for (let i = 0; i < untertitelButtons.length; i++) {
            untertitelButtons[i].addEventListener("click", function() {
              let audioDescription = document.querySelectorAll(
                ".videoBox__audiodescription--" + videoNumber
              );
              for (let i = 0; i < audioDescription.length; i++) {
                audioDescription[i].classList.toggle("slideIn--now");
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

    buttonNext.addEventListener("click", function() {
      buttonNextCounter = buttonNextCounter + 1;
      console.log(buttonNextCounter);

      //
      // Hotle
      //
      if (commicBox.classList.contains("comicBox--triumph")) {
        let metroSign = document.querySelector(".metroSign");
        let maison = document.querySelector(".maison");
        let konfetti = document.querySelector(".kofetti");
        let medallie = document.querySelector(".medallie");
        let leg = document.querySelector(".leg");
        let corp = document.querySelector(".corp");
        let pult = document.querySelector(".pult");

        switch (buttonNextCounter) {
          case 1:
            textBoxContent.innerHTML =
              "Il reçoit la Grande Médaille d’or de la ville de Paris en 1924, sont soulignés son implication inflexible et son <span class='link--video' videoLinkId='1'>apport culturel</span>";
            videoPlus();

            maison.classList.add("fadeOut");

            leg.classList.add("slideIn--now");
            corp.classList.add("slideIn--now");

            setTimeout(function() {
              konfetti.classList.add("slideIn--now");
            }, 100);

            setTimeout(function() {
              medallie.classList.add("slideIn--now");
            }, 500);

            setTimeout(function() {
              corp.classList.add("bend");
            }, 1500);

            break;
          case 2:
            textBoxContent.innerHTML =
              "Il devient Grand-Croix de la Légion d’Honneur en 1929.Cette distinction lui est décernée en récompense des services rendus auprès de la ville de Paris, pour le <span class='link--video' videoLinkId='2'>succès</span> de la construction du métropolitain.";
            videoPlus();

            pult.classList.add("slideIn--now");
            medallie.classList.add("fadeOut");

            setTimeout(function() {
              corp.classList.add("rebend");
            }, 500);

            break;
          case 3:
            textBoxContent.innerHTML =
              "Cette récompense lui ait remis près de la station Hôtel de Ville, qui se trouve sur la ligne 1.";

            leg.classList.add("fadeOut");
            corp.classList.add("fadeOut");
            pult.classList.add("fadeOut");

            setTimeout(function() {
              konfetti.classList.add("fadeOut");
            }, 100);

            metroSign.classList.add("slideIn--now");

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
      let IDarticle = 2;
      this.$router.push({ path: `../../content/article/${IDarticle}` });
    }
    //
  }
};
</script>