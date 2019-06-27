<template>
  <section class="comic">
    <header>
      <h1>Ligne 1</h1>
      <div class="headlineIntro"></div>
    </header>
    <div class="sidebar">
      <h2>Ma carrière</h2>
    </div>

    <!-- Speaker -->
    <section class="speaker">
      <!-- autoplay -->
      <audio
        :src="require('@/assets/ressources/audios/EdithPiafLeMetroDeParis.mp3')"
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

    <div class="discoverBox">
      <img src="../../../assets/ressources/img/stairs.svg" class="stair" alt>
      <a v-on:click="linkArticle()" class="button button--discover">Découvre la station</a>
    </div>

    <div class="comicBox comicBox--carrier">
      <button class="button buttonNext">Suivant</button>
      <div class="comic__text animation--text">
        <img src="../../../assets/ressources/img/playbutton.png" alt class="videoPrewieButton">
        <p class="comic__text__p">
          Le 20 avril 1896,
          <span class="link--video" videoLinkId="0">le projet</span> de desserte urbain de Fulgence Bienvenüe est adopté par le Conseil Municipal de Paris.
        </p>
      </div>
      <img
        src="../../../assets/ressources/img/comic/pere/signMetro.png"
        class="comicBox__image metroSign slideIn--later"
        alt
      >
      <img
        src="../../../assets/ressources/img/comic/carrier/tour.png"
        class="comicBox__image tour slideIn"
        alt
      >
      <img
        src="../../../assets/ressources/img/comic/carrier/berg.png"
        class="comicBox__image berg slideIn--later"
        alt
      >
      <img
        src="../../../assets/ressources/img/comic/carrier/beine.png"
        class="comicBox__image legs slideIn--later"
        alt
      >
      <img
        src="../../../assets/ressources/img/comic/carrier/corp.png"
        class="comicBox__image corp slideIn--later"
        alt
      >
      <img
        src="../../../assets/ressources/img/comic/carrier/hacke.png"
        class="comicBox__image hacke slideIn--later"
        alt
      >
    </div>

    <article class="articlePlus slideIn--later">
      <div class="introArticle">
        <div class="introArticle__textBox">
          <h1>La construction 1898 - 1900</h1>
          <p>
            Le 4 octobre 1898, les premiers coups de pioche sont donnés. Ce sont les débuts des travaux qui vont éventrer les rues de Paris pendant plusieurs mois.
            <br>
            <br>Le Figaro se réjouit: «après avoir lanterné pendant quinze ans, on se décide à construire le chemin de fer métropolitain avant l'Exposition». En revanche, dans les rues de Paris, le mécontentement des Parisiens monte.
          </p>
        </div>
      </div>
      <div class="articlePuls__imageBox">
        <div class="videoBox">
          <div class="videoBox__videoWrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/FbngrcJD8HU"
              frameborder="0"
              class="videoBox__video"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p class="videoHeadline">Le début des travaux</p>
          </div>
          <div class="videoBox__audiodescriptionBox">
            <img
              src="../../../assets/ressources/img/untertitel.png"
              alt
              class="icon--untertitel icon--untertitel--0"
            >
            <p class="videoBox__audiodescription videoBox__audiodescription--0 slideIn--later">
              Les parisiens ne sont pas des taupes, ils ne descendront jamais dans ce trou.
              Nous sommes en 1900, les parisiens n’y croient pas pourtant le métropolitain va en fait révolutionner leur vie. Dès 1897, les ouvriers travaillent jour et nuit pour créer la première ligne qui reliera Vincennes à la porte Maillot. Et le 19 Juillet 1900, les premiers voyageurs s’engouffrent sous la capitale et découvrent tout un univers.
            </p>
          </div>
        </div>

        <div class="videoBox">
          <div class="videoBox__videoWrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/K189wnyoqtE"
              frameborder="0"
              class="videoBox__video"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p class="videoHeadline">La Ligne 1</p>
          </div>
          <div class="videoBox__audiodescriptionBox">
            <img
              src="../../../assets/ressources/img/untertitel.png"
              alt
              class="icon--untertitel icon--untertitel--0"
            >
            <p
              class="videoBox__audiodescription videoBox__audiodescription--0 slideIn--later"
            >Sans surprise, la ligne 1 du métro est la première à avoir été ouverte le 19 juillet 1900. L’inauguration s’est faite après un débat d’environ 1 demi siècle dans lequel l’état et la ville de Paris se sont opposés sur la conception du chemin de fer métropolitain. L’Etat voulait relier les grandes gares de chemins de fer entre elles, créant ce que l’on appellerait aujourd’hui le RER, tandis que la ville de Paris préférait un chemin de fer d’intérêt local avec des stations rapprochées. C’est l’exposition universelle de 1900 qui a accéléré les débats, et a permis à la ville de Paris d’obtenir l’autorisation de l’Etat de faire son métropolitain. La ligne fut construite en seulement 20 mois. Afin d’éviter le problème des expropriations, le tracé des lignes suit exactement la voirie parisienne. Il suffisait ainsi, d’ouvrir la chaussée puis de la refermer. Le trafic atteignait rapidement les 130 mille voyageurs par jours, et aujourd’hui on atteint même les 800 mille.</p>
          </div>
        </div>

        <div class="videoBox">
          <div class="videoBox__videoWrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/NFvb1Y_o9XQ"
              frameborder="0"
              class="videoBox__video"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p class="videoHeadline">Bretons</p>
          </div>
          <div class="videoBox__audiodescriptionBox">
            <img
              src="../../../assets/ressources/img/untertitel.png"
              alt
              class="icon--untertitel icon--untertitel--0"
            >
            <p
              class="videoBox__audiodescription videoBox__audiodescription--0 slideIn--later"
            >Il fallait qu’ils amènent leurs pelles et leurs pioches et c’était donc par trains entiers qu’ils venaient comme ça à Paris. Et d’ailleurs on peut dire que le métro parisien à été construit en bonne partie par les bretons, ils ont été très nombreux dans ce chantier.</p>
          </div>
        </div>

        <div class="videoBox">
          <div class="videoBox__videoWrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/vMLWnMBU-Zk"
              frameborder="0"
              class="videoBox__video"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p class="videoHeadline">Les techniques de construction</p>
          </div>
          <div class="videoBox__audiodescriptionBox">
            <img
              src="../../../assets/ressources/img/untertitel.png"
              alt
              class="icon--untertitel icon--untertitel--0"
            >
            <p class="videoBox__audiodescription videoBox__audiodescription--0 slideIn--later">
              “On va mettre en oeuvre plusieurs techniques de construction du métro. Globalement aujourd’hui on estime 3 types de constructions. On a une construction qui est plutôt du domaine de la mine, qui est la galerie boisée. On va créer des galeries, les étayer avec du bois.”
              <br>Cette technique est utilisée par tous les entrepreneurs pour la construction de tunnels ferroviaires notamment. Comme dans les mines, le creusement se fait à la main, à la pioche et à la pelle. Un travail harassant, réalisé dans des conditions extrêmes. Tous les déblais sont sortis des galeries à l’aide de wagonnets, puis remontent en surface. Certains sont utilisés pour reboucher des carrières parisiennes. Quant aux galeries, elles sont étayées à l’aide d’énormes poutres qui servent également à créer la forme du futur tunnel. Enfin, toujours à la main, on réalise la voûte à l’aide de blocs de pierre maçonnés. Un travail digne de la construction des pyramides.
              <br>“On a une deuxième technique qui sera employée plus tard, qui sera la technique du bouclier, qui est peut être aujourd’hui l’ancêtre du tunnelier. Qui consiste à creuser en poussant ce bouclier métallique et en construisant la voûte au fur et à mesure de l’avancement.”
              <br>Le bouclier sera peu utilisé sur la ligne 1, car il est très lent, difficile à mettre en place et s’arrête dès qu’il rencontre une roche trop dure. À l’époque, il faut même creuser à la main pour le faire avancer dans des terrains parfois gorgés d’eau. Ce sont les voussoirs, posés un à un qui créent l'anneau du tunnel. Ils sont alors en fonte et sont positionnés grâce à un système manuel. Ensuite, bétonnés, ils donnent sa forme définitive au tunnel. Le bouclier est vraiment l’ancêtre du tunnelier moderne. Mais cette technique mettra des décennies pour être réellement au point. Il faudra attendre un siècle pour qu’un tunnelier soit de nouveau utilisé à Paris. Aujourd’hui on imagine mal la rue de Rivoli très fréquentée dans cet état. Et pourtant, c'est l’enfer que les parisiens vont vivre durant 18 mois.
              “On a une dernière technique qui consiste à ouvrir la chaussée et fermer la boîte de la station avec un tablier métallique. Ce sont des techniques qui sont très gênantes, il n’y a plus de circulation. Ce sont des travaux qui concernent pratiquement un tier de la ligne 1.”
              <br>Cette technique sera utilisée près de la Seine. On creuse le moins profond possible pour éviter les infiltrations. Du coup, le sommet de certaines stations n’est parfois qu’à 60 centimètres des roues des voitures.
              <br>“Une fois les projets d’infrastructures effectivement livrés, il fallait décorer, habiller les stations. C’est l’arrivée du carreau biseauté blanc. On fait appelle à Hector Guimard pour les fameuses entrées de stations de métro. Le tout est livré à la Compagnie de Chemin de fer Métropolitain de Paris, qui va en assurer l’exploitation.”
            </p>
          </div>
        </div>

        <div class="imageBox">
          <div class="imageBox__box">
            <img src="../../../assets/ressources/img/img.png" alt class="imgageBox__box__image">
            <p class="imgageBox__box__text">
              <span>Date:</span>Fulgence Bienvenüe, inspecteur général des Ponts et Chaussées est, avec Edmond Huet, le père du métro de Paris
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
            class="videoBox__video"
            src="https://www.youtube.com/embed/gMpP0exnqzU"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p class="videoHeadline">Le projet de Fulgence Bienvenüe</p>
        </div>
        <div class="videoBox__audiodescriptionBox">
          <img
            src="../../../assets/ressources/img/untertitel.png"
            alt
            class="icon--untertitel icon--untertitel--0"
          >
          <p
            class="videoBox__audiodescription videoBox__audiodescription--0 slideIn--later"
          >En seulement 2 ans la première ligne doit être construite. Deux ans pour construire ce qui est encore aujourd’hui la ligne 1 du métro de la porte de Vincennes à la porte Maillot. Le travail est titanesque. Il faut percer les tunnels, équiper les voies, creuser les accès, déplacer les égouts… Et pourtant, croyez le ou non, la ligne est ouverte dans les temps.</p>
        </div>
      </div>

      <div class="videoBox">
        <div class="videoBox__videoWrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/kPUCeXf7Qgg"
            class="videoBox__video"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p class="videoHeadline">Le trajet de la ligne 1</p>
        </div>
        <div class="videoBox__audiodescriptionBox">
          <img
            src="../../../assets/ressources/img/untertitel.png"
            alt
            class="icon--untertitel icon--untertitel--0"
          >
          <p
            class="videoBox__audiodescription videoBox__audiodescription--0 slideIn--later"
          >La première ligne construite comportera 18 stations, pour seulement 11 kilomètres de long. C’est une ligne transversale, Est-Ouest qui part de la porte de Vincennes pour rejoindre la porte Maillot. Elle longe la Seine sur près de la moitié de sa longueur. Les travaux de la ligne 1 commencent en Février 1999.</p>
        </div>
      </div>
    </div>
    <!-- End -->

    <!-- Slide 1 Start -->
    <div class="videoBox__wrapper videoBox__wrapper--1 slideIn--later">
      <button class="button button--closeVideo button--closeVideo--1">Go Back</button>

      <div class="videoBox">
        <div class="videoBox__videoWrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5ykvCxEvq1M"
            class="videoBox__video"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p class="videoHeadline">L'éventrement de la ville</p>
        </div>
        <div class="videoBox__audiodescriptionBox">
          <img
            src="../../../assets/ressources/img/untertitel.png"
            alt
            class="icon--untertitel icon--untertitel--1"
          >
          <p
            class="videoBox__audiodescription videoBox__audiodescription--1 slideIn--later"
          >Un chantier spectaculaire commence alors, pour creuser les nombreuses galeries et tunnels, les rues sont éventrées. Ces tranchées perturbent la circulation des premières automobiles et des piétons.</p>
        </div>
      </div>
    </div>

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
      // Carrier
      //
      if (commicBox.classList.contains("comicBox--carrier")) {
        let metroSign = document.querySelector(".metroSign");
        let tour = document.querySelector(".tour");
        let legs = document.querySelector(".legs");
        let berg = document.querySelector(".berg");
        let corp = document.querySelector(".corp");
        let hacke = document.querySelector(".hacke");

        switch (buttonNextCounter) {
          case 1:
            textBoxContent.innerHTML =
              "L’exposition universelle et les Jeux Olympiques de 1900 sont un <span class='link--video' videoLinkId='1'>enjeu majeur</span> au nom de la ville de Paris";
            videoPlus();

            metroSign.classList.add("slideIn--now");

            break;
          case 2:
            textBoxContent.innerHTML =
              "Ces travaux, qui entraîneront de gigantesques bouleversements dans la ville, attiseront également la colère des parisiens !<br><br>Fulgence Bienvenüe est l'auteur d'une des plus jolies opérations... césariennes que Paris ait subies.<br><br><button class='button buttonPlus'>En savoir plus</button>";

            metroSign.classList.add("fadeOut");
            setTimeout(function() {
              tour.classList.add("fadeOut");
            }, 100);
            legs.classList.add("slideIn--now");
            berg.classList.add("slideIn--now");
            corp.classList.add("slideIn--now");
            hacke.classList.add("slideIn--now");

            setTimeout(function() {
              hacke.classList.add("hacken");
              corp.classList.add("hacken");
            }, 1000);

            //Savoir Plus
            savoirPlusStart();

            break;
          case 3:
            textBoxContent.innerHTML =
              "Replonge avec moi dans les images d'archives d'antant. <br><br> Je suis si fier de mon oeuvre. ";
            savoirPlusEnd();

            legs.classList.add("fadeOut");
            berg.classList.add("fadeOut");
            corp.classList.add("fadeOut");
            hacke.classList.add("fadeOut");

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
      let IDarticle = 2;
      this.$router.push({ path: `../../content/article/${IDarticle}` });
    }
    //
  }
};
</script>