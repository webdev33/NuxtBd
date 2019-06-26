<template>
  <section class="comic">
    <header>
      <h1>
        Montparnasse
        <br>Bienvenue
      </h1>
      <div class="headlineIntro"></div>
    </header>

    <!-- Speaker -->
    <section class="speaker">
      <!-- autoplay -->
      <audio
        :src="require('@/assets/ressources/audios/TelephoneMetro.mp3')"
        autoplay
        class="speaker--songs"
      ></audio>

      <!-- Mute -->
      <section v-if="selectSpeaker() === false" v-on:click="clickSpeaker()" class="speaker speaker--on">
        <img src="../../../assets/ressources/audios/icon/speakker--off.png" alt>
      </section>

      <!-- Unmute -->
      <section v-if="selectSpeaker() === true" v-on:click="clickSpeaker()" class="speaker speaker--off">
        <img src="../../../assets/ressources/audios/icon/speakker--on.png" alt>
      </section>
    </section>

    <div class="sidebar">
      <h2>Naissance</h2>
    </div>

    <div class="discoverBox">
      <img src="../../../assets/ressources/img/stairs.svg" class="stair" alt>x
      <a v-on:click="linkArticle()" class="button button--discover">Decouvrir la station</a>
    </div>

    <div class="comicBox comicBox--nee">
      <button class="button buttonNext">Next</button>
      <div class="comic__text animation--text">
        <img src="../../../assets/ressources/img/playbutton.png" alt class="videoPrewieButton">
        <p class="comic__text__p">
          Fulgence Bienvenüe naît en Bretagne.
          <br>Le 27 janvier 1852
        </p>
      </div>
      <img
        src="../../../assets/ressources/img/comic/naissance/maison.png"
        class="comicBox__image maison slideIn"
        alt
      >
      <img
        src="../../../assets/ressources/img/comic/pere/signMetro.png"
        class="comicBox__image metroSign slideIn--later"
        alt
      >
      <img
        src="../../../assets/ressources/img/comic/naissance/train.png"
        class="comicBox__image train slideIn--later"
        alt
      >
      <img
        src="../../../assets/ressources/img/comic/naissance/bebe.png"
        class="comicBox__image bebe slideIn--later"
        alt
      >
      <img
        src="../../../assets/ressources/img/comic/naissance/bebetete.png"
        class="comicBox__image bebe--tete slideIn--later"
        alt
      >
      <img
        src="../../../assets/ressources/img/comic/naissance/schnuller.png"
        class="comicBox__image schnuller slideIn--later"
        alt
      >
      <img
        src="../../../assets/ressources/img/comic/naissance/valise.png"
        class="comicBox__image valise slideIn--later"
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
            src="https://www.youtube.com/embed/wFcp6B9bCiY"
            class="videoBox__video"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p class="videoHeadline">Un enfant curieux de tout</p>
        </div>
        <div class="videoBox__audiodescriptionBox">
          <img
            src="../../../assets/ressources/img/untertitel.png"
            alt
            class="icon--untertitel icon--untertitel--1"
          >
          <p
            class="videoBox__audiodescription videoBox__audiodescription--1 slideIn--later"
          >Revenons aux débuts. Fulgence Bienvenüe, né en 1852 dans les côtes d’Armor. Son père est notaire. Il est le treizième enfant de la famille. C’est d’abord un enfant qui se passionne pour la littérature, avec un goût particulier pour les auteurs grecs et latins. Il aime les lettres, mais embrasse finalement une carrière scientifique. Il rejoint la promotion 1870 de l’école polytechnique et il devient ingénieur des ponts et chaussées.</p>
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
            src="https://www.youtube.com/embed/qbGDCwi7b2c"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p class="videoHeadline">Les problématiques de transports en 1900</p>
        </div>
        <div class="videoBox__audiodescriptionBox">
          <img
            src="../../../assets/ressources/img/untertitel.png"
            alt
            class="icon--untertitel icon--untertitel--2"
          >
          <p
            class="videoBox__audiodescription videoBox__audiodescription--2 slideIn--later"
          >“A la fin du XIXe siècle, le transport à Paris est dans une situation catastrophique. Il y a deux compagnies : la Compagnie Générale des Omnibus et la Compagnie des Hirondelles. Les Hirondelles ce sont des petits bateaux à vapeur sur la Seine qui transportent environ 40 millions de personnes par an et la Compagnie Générale des Omnibus tirée par des chevaux, il y avait 200 mille chevaux dans Paris, et qui fait environ 260 million de transports par an.”</p>
        </div>
      </div>

      <div class="videoBox">
        <div class="videoBox__videoWrapper">
          <iframe
            width="560"
            height="315"
            class="videoBox__video"
            src="https://www.youtube.com/embed/_Xhy4uzx03c"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <p class="videoHeadline">Le cahier des charges du métropolitain</p>
        </div>
        <div class="videoBox__audiodescriptionBox">
          <img
            src="../../../assets/ressources/img/untertitel.png"
            alt
            class="icon--untertitel icon--untertitel--2"
          >
          <p class="videoBox__audiodescription videoBox__audiodescription--2 slideIn--later">
            Dès l’origine, le cahier des charges de la construction du métro de Paris précise que celui-ci sera souterrain dans sa plus grande partie, même s’il devra également franchir la Seine par des ponts métalliques. Quant aux rames, elles seront à traction électrique et ne devront pas dépasser un gabarit de 2 mètres 40, ce qui interdit toute circulation des trains normaux.
            “La ville de Paris ne voulait pas créer un réseau de chemin de fer dans Paris, qui permettrait de relier les grandes stations de train entre elles, ayant peur que la population prenne ces trains et quitte la ville de Paris. Cette idée extravagante aujourd’hui était dominante à l’époque. Elle empêchait donc qu’on réalise un métropolitain dans Paris, mais en même temps elle réalisait que c’était nécessaire.”
          </p>
        </div>
      </div>

      <div class="videoBox">
        <div class="videoBox__videoWrapper">
          <iframe
            width="560"
            height="315"
            class="videoBox__video"
            src="https://www.youtube.com/embed/S_KC6QU7XWs"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p class="videoHeadline">Les projets fantaisistes imaginés</p>
        </div>
        <div class="videoBox__audiodescriptionBox">
          <img
            src="../../../assets/ressources/img/untertitel.png"
            alt
            class="icon--untertitel icon--untertitel--2"
          >
          <p class="videoBox__audiodescription videoBox__audiodescription--2 slideIn--later">
            Londres a déjà le sien. Un chemin de fer à vapeur souterrain. La compétition est lancée.
            “Il y a eu les projets les plus fantaisistes dès 1824 et puis il y a eu tous ces projets de chemins de fer à vapeurs, sur le sol, sous le sol, dans les immeubles, sous les immeubles. et tout ça était proposé à la ville de Paris,à l’Etat, au parlement et aucune décision ne se prenait car on ne maîtrisait pas vraiment l’idée qu’on avait de ce que serait un métro à Paris.”
            Les projets de chemins de fer à vapeur sont écartés à cause des rejets de fumée. L’inventivité des propositions des visionnaires et autres doodingues qui se sont penchés sur les transports parisiens est sans limite. Voies aériennes accrochées à des ballons géants, ponts suspendus entre deux tours Eiffel, métro aérien enjambant la ville, tout semble possible ...
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
  data() {
    return {
      boolean: false
    };
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
      // Naissance
      //
      if (commicBox.classList.contains("comicBox--nee")) {
        let metroSign = document.querySelector(".metroSign");
        let maison = document.querySelector(".maison");
        let bebe = document.querySelector(".bebe");
        let bebeTete = document.querySelector(".bebe--tete");
        let train = document.querySelector(".train");
        let schnuller = document.querySelector(".schnuller");
        let valise = document.querySelector(".valise");

        switch (buttonNextCounter) {
          case 1:
            textBoxContent.innerHTML =
              "Fulgence est un enfant discret au sein de la fraterie.<br><br> Qui devient un adolescent <span class='link--video' videoLinkId='1' >passionné</span> par tous les sujets d’origine normande";
            videoPlus();
            maison.classList.add("fadeOut");
            bebe.classList.add("slideIn--now");
            bebeTete.classList.add("slideIn--now");
            train.classList.add("slideIn--now");
            setTimeout(function() {
              bebeTete.classList.add("movehead");
            }, 1000);
            setTimeout(function() {
              train.classList.add("movetrain");
            }, 1500);

            break;
          case 2:
            textBoxContent.innerHTML =
              "Ingénieur des ponts et chaussées, Fulgence s’intéresse aux <span class='link--video' videoLinkId='2' >problématiques de transports</span> de la capitale. <br><br>Tandis que la ville de Paris reconnaît le <span class='link--video' videoLinkId='2' >besoin</span> urgent d’un système de transports intra muros";
            videoPlus();

            train.classList.add("fadeOut");

            valise.classList.add("slideIn--now");
            setTimeout(function() {
              metroSign.classList.add("slideIn--now");
            }, 500);

            break;
          case 3:
            textBoxContent.innerHTML =
              "Montparnasse représente la porte entre Paris et la Bretagne.";
            videoPlus();

            bebe.classList.add("fadeOut");
            bebeTete.classList.add("fadeOut");
            valise.classList.add("fadeOut");

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
      let IDarticle = 1;
      this.$router.push({ path: `../../content/article/${IDarticle}` });
    }
    //
  }
};
</script>