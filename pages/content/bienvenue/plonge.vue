<template>
  <section class="comic">
    <header>
      <h1>Cite</h1>
      <div class="headlineIntro"></div>
    </header>

    <!-- Speaker -->
    <section class="speaker">
      <!-- autoplay -->
      <audio
        :src="require('@/assets/ressources/audios/laSeine.mp3')"
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
      <h2>Idee du Genie</h2>
    </div>

    <div class="discoverBox">
      <img src="../../../assets/ressources/img/stairs.svg" class="stair" alt>
      <a v-on:click="linkArticle()" class="button button--discover">Decouvrir la station</a>
    </div>

    <div class="comicBox comicBox--genie">
      <button class="button buttonNext">Next</button>
      <div class="comic__text animation--text">
        <img src="../../../assets/ressources/img/playbutton.png" alt class="videoPrewieButton">
        <p class="comic__text__p">
          Après avoir assisté à l’éventrement des rues de la capitale, la Seine tremble.
          <br>
          <br>Divisant Paris en son centre, son
          <span class="link--video" videoLinkId="0">franchissement</span> est un obstacle.
        </p>
      </div>

      <img
        src="../../../assets/ressources/img/comic/pere/signMetro.png"
        class="comicBox__image metroSign slideIn--later"
        alt
      >
      <img
        src="../../../assets/ressources/img/comic/genie/point.png"
        class="comicBox__image point slideIn"
        alt
      >
      <img
        src="../../../assets/ressources/img/comic/genie/map.png"
        class="comicBox__image mapSeine slideIn--later"
        alt
      >
      <img
        src="../../../assets/ressources/img/comic/genie/bras.png"
        class="comicBox__image bras slideIn--later"
        alt
      >
      <img
        src="../../../assets/ressources/img/comic/genie/img.png"
        class="comicBox__image imgConstruction slideIn--later"
        alt
      >
    </div>

    <!-- Slide 0 Start -->
    <div class="videoBox__wrapper videoBox__wrapper--0 slideIn--later">
      <button class="button button--closeVideo button--closeVideo--0">Go Back</button>
      <div class="videoBox">
        <div class="videoBox__videoWrapper">
          <!-- 1 frame -->
          <p class="videoHeadline">Paris d'antant</p>
        </div>
        <div class="videoBox__audiodescriptionBox">
          <img
            src="../../../assets/ressources/img/untertitel.png"
            alt
            class="icon--untertitel icon--untertitel--0"
          >
          <p class="videoBox__audiodescription videoBox__audiodescription--0 slideIn--later">....</p>
        </div>
      </div>
    </div>
    <!-- End -->

    <!-- Slide 0 Start -->
    <div class="videoBox__wrapper videoBox__wrapper--1 slideIn--later">
      <button class="button button--closeVideo button--closeVideo--1">Go Back</button>

      <div class="videoBox">
        <div class="videoBox__videoWrapper">
          <iframe
            width="560"
            height="315"
            class="videoBox__video"
            src="https://www.youtube.com/embed/n16hJxbdKf4"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p class="videoHeadline">Les problématiques liées à la Seine</p>
        </div>
        <div class="videoBox__audiodescriptionBox">
          <img
            src="../../../assets/ressources/img/untertitel.png"
            alt
            class="icon--untertitel icon--untertitel--1"
          >
          <p class="videoBox__audiodescription videoBox__audiodescription--1 slideIn--later">
            La ligne 4, longue d’environ 11 kilomètres, elle part de la porte de Clignancourt et va jusqu’à la Porte d’Orléans. Première ligne à traverser Paris dans un axe Nord-Sud, elle est aussi la première à devoir traverser la Seine.
            “On ne devait pas passer sur l'île de la Cité. On devrait finalement rejoindre Châtelet/Saint Michel en passant par la pointe amont de l’île de la Cité. Mais pour des raisons très simples, finalement ce métro devait passer juste sous l’Académie Française et les académiciens n’étaient pas d’accord. Pour leur calme, ils décident de faire une pétition qui a été suivie par un certain nombre à l’époque, de savants. C’est là qu’on a décidé de passer par l’île de la Cité.”
          </p>
        </div>
      </div>

      <div class="videoBox">
        <div class="videoBox__videoWrapper">
          <iframe
            width="560"
            height="315"
            class="videoBox__video"
            src="https://www.youtube.com/embed/Pb6n8ZbyBx4"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p class="videoHeadline">Coûts des investissements et mécènes</p>
        </div>
        <div class="videoBox__audiodescriptionBox">
          <img
            src="../../../assets/ressources/img/untertitel.png"
            alt
            class="icon--untertitel icon--untertitel--1"
          >
          <p class="videoBox__audiodescription videoBox__audiodescription--1 slideIn--later">
            Pour l’électrification du réseau, on fait appel aux technologies les plus en pointe. Deux usines à charbon sont construites afin de fournir l’énergie nécessaire à ce nouveau moyen de transport. Des investissements colossaux qui associent déjà publique et privé. C’est la CMP qui appartient au Baron Empain, un des géants de la finance du XIXe siècle qui se lance dans ce formidable pari.
            “Le coût des investissements est le suivant : l’infrastructure faite par la ville de Paris vaut 600 million d’euros d’aujourd’hui. La superstructure faite par le Baron Empain représente un peu plus d’1 milliard, car il y a le coût des usines, des rames et la décoration de toutes les stations de métro et l’équipement du chemin de fer.”
          </p>
        </div>
      </div>
    </div>
    <!-- End -->

    <article class="articlePlus slideIn--later">
      <div class="introArticle">
        <div class="introArticle__textBox">
          <h1>la creation du tunnel sur la Seine</h1>
          <p>Est ce que vous pouves ecrit ici just un petit text sur le catasrophe. c est pas grave si c est double avec le video. je besoin contenu just au momnet on voir pas encore le image dans le view port, si c est plus cest pas du tout grave.</p>
        </div>
      </div>
      <div class="articlePuls__imageBox">
        <div class="videoBox">
          <div class="videoBox__videoWrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/OniGNVU_bsw"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="videoBox__video"
            ></iframe>
            <p class="videoHeadline">Les travaux de la Ligne 4</p>
          </div>
          <div class="videoBox__audiodescriptionBox">
            <img
              src="../../../assets/ressources/img/untertitel.png"
              alt
              class="icon--untertitel icon--untertitel--1"
            >
            <p class="videoBox__audiodescription videoBox__audiodescription--1 slideIn--later">
              La solution de caissons enterrés dans le fleuve est retenue. Les travaux commencent en 1905 et promettent d’être spectaculaires. Il y aura 3 grands caissons pour le grand bras de la Seine, couvrant une distance de 122 mètres et deux pour le petit bras de la Seine, pour une distance de 41 mètres. Les 5 caissons qui vont être immergés dans le fleuve sont assemblés sur le quai des tuileries. Les ingénieurs vont y multiplier les innovations.
              Chaque caisson est ainsi composé d’une base en fonte, abritant les deux futures voies. L’ensemble est ceinturé d’une double ceinture métallique. De plus, le caisson repose sur une base en forme de lame de couteau de 1m80 de hauteur. Entre ces deux paroies, se trouve un espace libre. C’est la zone de travail dans laquelle les ouvriers vont s’installer. Le caisson qui flotte alors sur la Seine est alors tractée jusqu’à son futur lieu d’échouage. Après avoir atteint son positionnement idéal, du béton est injecté dans la double paroie métallique, créant ainsi un sarcophage étanche. Comme promis par le constructeur, le chantier malgré sa taille réussi l’exploit de laisser passer les hirondelles et leurs voyageurs sur la Seine. Sous le poids du béton, le caisson coule doucement. Une fois la mise en place effectuée, l’eau dans la chambre de travail est pompée. Quant au caisson principal, il est lesté pour le maintenir en place au fond du fleuve. Grâce aux cheminées, de l’air comprimé est alors envoyé dans la chambre de travail, augmentant son étanchéité à l’eau et permettant aux ouvriers de descendre afin de travailler sous la structure métallique, pour l’enfoncer dans le sol jusqu’au niveau souhaité. Travaillant dans des conditions extrêmes, ces ouvriers spécialisés on les appelle les “tubistes”. Ils doivent comme des plongeurs sous-marin suivre des paliers de décompression, pour remonter des chambres de travail, situées 15 mètres sous la surface. Grâce au travail de ces hommes, prêts à prendre tous les risques, tous les caissons d’une même sections sont descendus au bon niveau dans le lit de la Seine. Ils sont ensuite reliés ensemble pour ne former qu’un seul tube. Les chambres de travail sont alors remplies de béton et la tranchée est comblée pour assurer le blocage de l’ensemble. Le tunnel est terminé, l’eau est alors pompée et les ouvriers peuvent enfin y accéder. Si cette partie, pourtant la plus périlleuse se déroulera sans problème majeur, il n’en ira pas de même avec le tronçon sous l’île de la cité.
            </p>
          </div>
        </div>

        <div class="videoBox">
          <div class="videoBox__videoWrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/d9C84UXkCq0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="videoBox__video"
            ></iframe>
            <p class="videoHeadline">Le succès du métropolitain</p>
          </div>
          <div class="videoBox__audiodescriptionBox">
            <img
              src="../../../assets/ressources/img/untertitel.png"
              alt
              class="icon--untertitel icon--untertitel--1"
            >
            <p
              class="videoBox__audiodescription videoBox__audiodescription--1 slideIn--later"
            >C’est tout de suite un véritable succès et dès la fin de l’année 1900, on avait presque atteint 17 million de voyageurs. Une performance inimaginable, car chaque rame n’est constituée que de 3 voitures en bois qui circulent à 21 km/h maximum.</p>
          </div>
        </div>

        <div class="imageBox">
          <div class="imageBox__box">
            <img src="https://fracademic.com/pictures/frwiki/77/Metro_de_Paris_-_Plan_traversee_sous-fluviale_ligne_A_Nord-Sud.jpg" alt class="imgageBox__box__image">
            <p class="imgageBox__box__text">
              <span>Date : XXᵉ siècle </span>Plan de la traversée sous-fluviale
            </p>
          </div>
          <div class="imageBox__box">
            <img src="https://monumentum.fr/photo/galerie/maxi/00166/166980-station-cite-metro-paris.jpg" alt class="imgageBox__box__image">
            <p class="imgageBox__box__text">
              <span>Date : XXᵉ siècle </span>Fulgence Bienvenüe, inspecteur général des Ponts et Chaussées est, avec Edmond Huet, le père du métro de Paris
            </p>
          </div>
          <div class="imageBox__box">
            <img src="../../../assets/ressources/img/img.png" alt class="imgageBox__box__image">
            <p class="imgageBox__box__text">
              <span>Date:</span>Chantier de la traversée sous-fluviale
            </p>
          </div>
        </div>
      </div>
      <button class="button buttonNext buttonNext--end">To top</button>
    </article>

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
     * Speaker
     */
    document.querySelector(".speaker--songs").muted = this.boolean;
    this.boolean = JSON.parse(localStorage.getItem(`MUSIC`))
      ? JSON.parse(localStorage.getItem(`MUSIC`))
      : false;
    document.querySelector(".speaker--songs").muted = this.boolean;
    document.querySelector(".speaker--songs").volume = 0.5;
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
                document.querySelector(".articlePlus").style.zIndex="200";

              } else {
                document.querySelector(".comicBox").classList.remove("fadeOut");
                document.querySelector(".articlePlus").style.zIndex="0";
              }
            }
          });
        }
      });
      //
    };

    let untertitelButtonsPlus = document.querySelectorAll(".articlePlus .icon--untertitel");
    console.log(untertitelButtonsPlus);
    for (let i = 0; i < untertitelButtonsPlus.length; i++) {
      untertitelButtonsPlus[i].addEventListener("click", function() {
        let audioDescriptionPlus = document.querySelectorAll( ".articlePlus .videoBox__audiodescription");
        for (let i = 0; i < audioDescriptionPlus.length; i++) {
          audioDescriptionPlus[i].classList.toggle("slideIn--now");
          audioDescriptionPlus[i].classList.toggle("description--height");
          console.log("Slide in description");
        }
      });
    }
    
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
    videoPlus();

    buttonNext.addEventListener("click", function() {
      buttonNextCounter = buttonNextCounter + 1;
      console.log(buttonNextCounter);

      //
      // Ligne 4
      //
      if (commicBox.classList.contains("comicBox--genie")) {
        let metroSign = document.querySelector(".metroSign");
        let point = document.querySelector(".point");
        let bras = document.querySelector(".bras");
        let mapSeine = document.querySelector(".mapSeine");
        let imgConstruction = document.querySelector(".imgConstruction");

        switch (buttonNextCounter) {
          case 1:
            textBoxContent.innerHTML =
              "Le passage du métro sous la Seine marque l’aboutissement de <span class='link--video' videoLinkId='1'>quatre années de travail</span> sous la direction de l’ingénieur Fulgence Bienvenüe.<br><br>La ville de Paris cicatrise grâce à l’aide financière apportée par le Baron Empain";
            videoPlus();

            point.classList.add("fadeOut");

            bras.classList.add("slideIn--now");
            mapSeine.classList.add("slideIn--now");

            break;
          case 2:
            textBoxContent.innerHTML =
              "Fulgence Bienvenüe devient alors l’auteur d’une des plus jolies opérations césariennes que Paris ait subies<br><br><button class='button buttonPlus'>Ensavoir Plus</button>";

            bras.classList.add("fadeOut");
            mapSeine.classList.add("fadeOut");

            imgConstruction.classList.add("slideIn--now");
            savoirPlusStart();

            break;
          case 3:
            textBoxContent.innerHTML =
              "Le nom de la station est dû à son emplacement, sur l'île de la Cité, qu'elle est d'ailleurs la seule à desservir.";

            metroSign.classList.add("slideIn--now");
            imgConstruction.classList.add("fadeOut");

            //Savoir Plus
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
      let IDarticle = 4;
      this.$router.push({ path: `../../content/article/${IDarticle}` });
    }
    //
  }
};
</script>