<template>
  <section class="comic">
    <header>
      <h1>
        Couronnes
        <br>Ménilmontant
      </h1>
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
      <h2>Mon traumatisme</h2>
    </div>

    <div class="discoverBox">
      <img src="../../../assets/ressources/img/stairs.svg" class="stair" alt>
      <a v-on:click="linkArticle()" class="button button--discover">Découvre la station</a>
      <a
        v-on:click="linkArticle()"
        class="button button--discover button button--discover--2"
      >Découvre la station</a>
    </div>

    <div class="comicBox comicBox--trauma">
      <button class="button buttonNext">Suivant</button>
      <div class="comic__text animation--text">
        <img src="../../../assets/ressources/img/playbutton.png" alt class="videoPrewieButton">
        <p class="comic__text__p">
          Le réseau
          <span class="link--video" videoLinkId="0">superconnecté</span> de Fulgence connaît un
          <span class="link--video" videoLinkId="0">succès</span> monstre.
          <br>
          <br>Mais ...
        </p>
      </div>
      <img
        src="../../../assets/ressources/img/comic/trauma/feuer.png"
        class="comicBox__image fire slideIn--later"
        alt
      >
      <img
        src="../../../assets/ressources/img/comic/trauma/sitzen.png"
        class="comicBox__image sitzen slideIn"
        alt
      >
      <img
        src="../../../assets/ressources/img/comic/trauma/taschentuch.png"
        class="comicBox__image taschentuch slideIn"
        alt
      >
      <img
        src="../../../assets/ressources/img/comic/trauma/tetebebe.png"
        class="comicBox__image bebe--tete slideIn"
        alt
      >
      <img
        src="../../../assets/ressources/img/comic/pere/signMetro.png"
        class="comicBox__image metroSign slideIn--later"
        alt
      >
    </div>

    <article class="articlePlus slideIn--later">
      <div class="introArticle">
        <div class="introArticle__textBox">
          <h1>La catastrophe du métropolitain le 10.08.1903</h1>
          <p>
            Le 10 août 1903, suite à un court-circuit, un incendie se déclare sur une rame à la station Barbès.
            <br>
            <br>Afin de ne pas bloquer le réseau, la rame est poussée vide vers Nation par la rame qui arrivait derrière (préalablement évacuée).
            <br>Mais à la station Ménilmontant, le feu reprend sans qu'on puisse l'éteindre. Au même instant, la rame suivante, qui avait ramassé les quelque 300 voyageurs des deux rames évacuées arrive à la station précédant Ménilmontant : la station Couronnes. Mais averti de la reprise de l'incendie, le chauffeur ne redémarre pas et prie les gens de descendre afin d'évacuer la station par l'escalier.
            <br>
            <br>Cependant, la fumée de l'incendie (la fumée uniquement, le feu étant resté circonscrit à la rame de métro), qui a envahi la station Ménilmontant évacuée, se propage dans le tunnel pour jaillir soudainement dans la station Couronnes, côté tête du train où se trouvent les protestataires. Aveuglé, par réflexe, le groupe fuit la fumée vers l'autre extrémité du quai, malheureusement sans issue.
            <br>
            <br>Quelques heures plus tard, les pompiers compteront 84 corps, entassés les uns sur les autres
          </p>
        </div>
      </div>

      <div class="articlePuls__imageBox">
        <div class="videoBox">
          <div class="videoBox__videoWrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/4j___gBxWDU"
              frameborder="0"
              class="videoBox__video"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p class="videoHeadline">La tragédie Couronnes</p>
          </div>
          <div class="videoBox__audiodescriptionBox">
            <img
              src="../../../assets/ressources/img/untertitel.png"
              alt
              class="icon--untertitel icon--untertitel--0"
            >
            <p class="videoBox__audiodescription videoBox__audiodescription--0 slideIn--later">
              Des incendies, aux causes parfois inattendues, il y en a eu depuis l’inauguration du métro. Le plus tragique d'entre eux remonte aux premières années de son exploitation, nous sommes le 10 Août 1903.
              “Un incendie se déclare à la station Couronnes et provoque le décès de 84 personnes. En réalité, ce n’est pas la voiture qui contient les voyageurs qui s’enflamme, c’est un incident technique et un court circuit électrique qui arrivent dans un train précédent parti dans le tunnel. Et qui, par le dégagement de fumée, va provoquer la mort de 84 personnes dans la station Couronnes.”
              <br>L’émotion est immense, le jeune métro vient de faire ses premières victimes. Les exploitants vont en tirer de nombreuses leçons.
              <br>“On a fait évoluer le matériel, on est venus isoler dans une cage métallique toute la logique de motorisation et toute la logique d’électrification. On a créé aussi cette logique de bougie moteur, ce qui permet d’isoler toute la partie en bois qui est plutôt l’espace voyageur. Ainsi on limite les risques d'incendie. Cette évolution était provisoire, puisque on est passés ensuite très rapidement à une évolution d’un nouveau type de matériel : une caisse totalement métallique.”
            </p>
          </div>
        </div>
        <div class="imageBox">
          <div class="imageBox__box">
            <img
              src="http://www.cparama.com/forum/cartes2016/1468055757-Z-1-.jpg"
              alt
              class="imgageBox__box__image"
            >
            <p class="imgageBox__box__text">
              <span>
                Date : 11/08/1903
                <br>
              </span>Catastrophe du Métro du 10 août 1903
            </p>
          </div>
          <div class="imageBox__box">
            <img
              src="http://www.cparama.com/forum/cartes2016/1468822457-Couronnes02.jpg"
              alt
              class="imgageBox__box__image"
            >
            <p class="imgageBox__box__text">
              <span>
                Date : 11/08/1903
                <br>
              </span>Découverte des cadavres
            </p>
          </div>
          <div class="imageBox__box">
            <img
              src="https://pbs.twimg.com/media/DkPQzruXcAAOvkh.jpg"
              alt
              class="imgageBox__box__image"
            >
            <p class="imgageBox__box__text">
              <span>
                Date : 10/08/1903
                <br>
              </span>La station Couronnes pendant l'évacuation des victimes
            </p>
          </div>
        </div>
      </div>
      <button class="button buttonNext buttonNext--end">Retour en haut</button>
    </article>

    <!-- Slide 0 Start -->
    <div class="videoBox__wrapper videoBox__wrapper--0 slideIn--later">
      <button class="button button--closeVideo button--closeVideo--0">Retour en arrière</button>

      <div class="videoBox">
        <div class="videoBox__videoWrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/UL1_PdsnhP0"
            class="videoBox__video"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p class="videoHeadline">La densité du métro</p>
        </div>
        <div class="videoBox__audiodescriptionBox">
          <img
            src="../../../assets/ressources/img/untertitel.png"
            alt
            class="icon--untertitel icon--untertitel--0"
          >
          <p
            class="videoBox__audiodescription videoBox__audiodescription--0 slideIn--later"
          >Bienvenüe veut également un métro suffisamment dense et interconnecté pour qu’aucun point de Paris ne soit à plus de 400 mètres d’une station de métropolitain et qu’aucun trajet ne nécessite plus de deux changements.</p>
        </div>
      </div>

      <div class="videoBox">
        <div class="videoBox__videoWrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/luTdWi-vsj4"
            class="videoBox__video"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p class="videoHeadline">Les heures de pointe</p>
        </div>
        <div class="videoBox__audiodescriptionBox">
          <img
            src="../../../assets/ressources/img/untertitel.png"
            alt
            class="icon--untertitel icon--untertitel--0"
          >
          <p
            class="videoBox__audiodescription videoBox__audiodescription--0 slideIn--later"
          >Le métro a ouvert ses grilles en 1900. L’actuelle ligne 1 fut la première construite. En 15 ans, 10 lignes s’offrent aux parisiens, des travaux dantesques pour l’époque. Le succès est immédiat, et déjà, les terribles heures de pointe.</p>
        </div>
      </div>
    </div>
    <!-- End -->

    <!-- Slide 1 Start -->
    <div class="videoBox__wrapper videoBox__wrapper--1 slideIn--later">
      <button class="button button--closeVideo button--closeVideo--1">Retour en arrière</button>

      <div class="videoBox">
        <div class="videoBox__videoWrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/uehZhcO5F88"
            class="videoBox__video"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p class="videoHeadline">La rame Westinghouse première classe</p>
        </div>
        <div class="videoBox__audiodescriptionBox">
          <img
            src="../../../assets/ressources/img/untertitel.png"
            alt
            class="icon--untertitel icon--untertitel--1"
          >
          <p
            class="videoBox__audiodescription videoBox__audiodescription--1 slideIn--later"
          >On est à bord de la rame Westinghouse, la première rame, celle de l’inauguration de 1900. Avec ses sièges cuirs, ses bois exotiques précieux et quelques petites particularités, comme ce porte chapeaux.</p>
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
    return { boolean: false };
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
      // Trauma
      //
      if (commicBox.classList.contains("comicBox--trauma")) {
        let bebeTete = document.querySelector(".bebe--tete");
        let metroSign = document.querySelector(".metroSign");
        let fire = document.querySelector(".fire");
        let taschentuch = document.querySelector(".taschentuch");
        let sitzen = document.querySelector(".sitzen");

        switch (buttonNextCounter) {
          case 1:
            textBoxContent.innerHTML =
              "... il ne faudra pas patienter longtemps avant qu’un aléa ne provoque une catastrophe dans le métropolitain.<br><br>En cause, <span class='link--video' videoLinkId='1'>les matériaux</span> utilisés lors de la construction";
            videoPlus();

            fire.classList.add("slideIn--now");

            break;
          case 2:
            textBoxContent.innerHTML =
              "Le drame est à l'origine d'amélioration des techniques et de sécurité, encore en vigueur de nos jours <br><br><button class='button buttonPlus'>En savoir plus</button>";

            metroSign.classList.add("slideIn--now");
            bebeTete.classList.add("fadeOut");
            sitzen.classList.add("fadeOut");
            taschentuch.classList.add("fadeOut");

            //Savoir Plus
            savoirPlusStart();

            break;
          case 3:
            textBoxContent.innerHTML =
              "Ces stations ont subies des changements depuis l’accident.";

            savoirPlusEnd();
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
      let IDarticle = 3;
      this.$router.push({ path: `../../content/article/${IDarticle}` });
    }
    //
  }
};
</script>
