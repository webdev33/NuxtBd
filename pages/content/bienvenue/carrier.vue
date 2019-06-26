<template>
  <section class="comic">
    <header>
      <h1>Ligne 1</h1>
      <div class="headlineIntro"></div>
    </header>
    <div class="sidebar">
      <h2>Carriere</h2>
    </div>

    <div class="discoverBox">
      <img src="../../../assets/ressources/img/stairs.svg" class="stair" alt>
      <a v-on:click="linkArticle()" class="button button--discover">Decouvrir la station</a>
    </div>

    <div class="comicBox comicBox--carrier">
      <button class="button buttonNext">Next</button>
      <div class="comic__text animation--text">
        <img src="../../../assets/ressources/img/playbutton.png" alt class="videoPrewieButton">
        <p
          class="comic__text__p"
        >Le 20 avril 1896, <span class='link--video' videoLinkId='0'>le projet</span> de desserte urbain de Fulgence Bienvenüe est adopté par le Conseil municipal.</p>
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
            Dans cet catastrophe 80 person etaient blesse Fulgence Marie Auguste Bienvenüe est né le 27 janvier 1852 à Uzel dans les Côtes d’Armor, c’est le treizième et dernier enfant de sa famille. Ses ancêtres sont bretons.
            <br>
            <br>Fulgence Bienvenüe, inspecteur général des Ponts et Chaussées est, avec Edmond Huet, le père du métro de Paris. Il travailla pour la création de voies de chemin de fer, pour régler des problèmes d’urbanisme à Paris (égouts, parc des Buttes-Chaumont, transports, alimentation en eau).
          </p>
        </div>
      </div>
      <div class="articlePuls__imageBox">
        <div class="videoBox">
          <img src="../../../assets/ressources/img/img.png" alt class="video">
        </div>
        <div class="imageBox">
          <div class="imageBox__box">
            <img src="../../../assets/ressources/img/img.png" alt class="imgageBox__box__image">
            <p class="imgageBox__box__text">
              <span>Date:</span>Fulgence Bienvenüe, inspecteur général des Ponts et Chaussées est, avec Edmond Huet, le père du métro de Paris
            </p>
          </div>
          <div class="imageBox__box">
            <img src="../../../assets/ressources/img/img.png" alt class="imgageBox__box__image">
            <p class="imgageBox__box__text">
              <span>Date:</span>Fulgence Bienvenüe, inspecteur général des Ponts et Chaussées est, avec Edmond Huet, le père du métro de Paris
            </p>
          </div>
          <div class="imageBox__box">
            <img src="../../../assets/ressources/img/img.png" alt class="imgageBox__box__image">
            <p class="imgageBox__box__text">
              <span>Date:</span>Fulgence Bienvenüe, inspecteur général des Ponts et Chaussées est, avec Edmond Huet, le père du métro de Paris
            </p>
          </div>
        </div>
      </div>
      <button class="button buttonNext buttonNext--end">To top</button>
    </article>

    <!-- Slide 0 Start -->
    <div class="videoBox__wrapper videoBox__wrapper--0 slideIn--later">
      <button class="button button--closeVideo button--closeVideo--0">Go Back</button>

      <div class="videoBox">
        <div class="videoBox__videoWrapper">

          <iframe width="560" height="315" class="videoBox__video" src="https://www.youtube.com/embed/gMpP0exnqzU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p class="videoHeadline">Le projet de Fulgence Bienvenüe</p>
        </div>
        <div class="videoBox__audiodescriptionBox">
          <img src="../../../assets/ressources/img/untertitel.png" alt class="icon--untertitel icon--untertitel--0">
          <p
            class="videoBox__audiodescription videoBox__audiodescription--0 slideIn--later"
          >En seulement 2 ans la première ligne doit être construite. Deux ans pour construire ce qui est encore aujourd’hui la ligne 1 du métro de la porte de Vincennes à la porte Maillot. Le travail est titanesque. Il faut percer les tunnels, équiper les voies, creuser les accès, déplacer les égouts… Et pourtant, croyez le ou non, la ligne est ouverte dans les temps.</p>
        </div>
      </div>

      <div class="videoBox">
        <div class="videoBox__videoWrapper">

          <iframe width="560" height="315" src="https://www.youtube.com/embed/kPUCeXf7Qgg" class="videoBox__video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p class="videoHeadline">Le trajet de la ligne 1</p>
        </div>
        <div class="videoBox__audiodescriptionBox">
          <img src="../../../assets/ressources/img/untertitel.png" alt class="icon--untertitel icon--untertitel--0">
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
          <iframe width="560" height="315" src="https://www.youtube.com/embed/5ykvCxEvq1M" class="videoBox__video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p class="videoHeadline"> L'éventrement de la ville</p>
        </div>
        <div class="videoBox__audiodescriptionBox">
          <img src="../../../assets/ressources/img/untertitel.png" alt class="icon--untertitel icon--untertitel--1">
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
    return {};
  },

  /*
   * By Christina, queen of the animation and Javascript
   */
  mounted: function mounted() {
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
        document.querySelector(".buttonNext--end").addEventListener("click", function() {
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
      document.querySelector(".comicBox").classList.remove("slideIn--oneMoreTime");
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

          let untertitelButtons = document.querySelectorAll(".icon--untertitel--" + videoNumber);
          console.log(untertitelButtons);

          for (let i = 0; i < untertitelButtons.length; i++) {
            
            untertitelButtons[i].addEventListener("click", function() {
              
              let audioDescription = document.querySelectorAll(".videoBox__audiodescription--" + videoNumber);
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
            document.querySelector(".comicBox").classList.add("slideIn--oneMoreTime");

            document.querySelector(".videoBox__wrapper--" + videoNumber).classList.add("fadeOut");
            setTimeout(function() {
              document.querySelector(".videoBox__wrapper--" + videoNumber).style.display = "none";
              document.querySelector(".videoBox__wrapper--" + videoNumber).className = "videoBox__wrapper videoBox__wrapper--"+ videoNumber +" slideIn--later";
              document.querySelector(".comicBox").classList.remove("slideIn--oneMoreTime");

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
              "L’exposition universelle et les jeux olympiques de 1900 sont un <span class='link--video' videoLinkId='1'>enjeu majeur</span> au nom de la ville de Paris";
              videoPlus();

            metroSign.classList.add("slideIn--now");

            break;
          case 2:
            textBoxContent.innerHTML =
              "Ces travaux, qui entraîneront de gigantesques bouleversements dans la ville, attiseront également la colère des parisiens !<br>Il est l'auteur d'une des plus jolies opérations... césariennes que Paris ait subies.<br><br><button class='button buttonPlus'>Ensavoir Plus</button>";

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
              "Découvrez les deux extrémités de la ligne historique !.";
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
    linkArticle() {
      let IDarticle = 2;
      this.$router.push({ path: `../../content/article/${IDarticle}` });
    }
  }
};
</script>