<template>
  <section class="comic">
    <header>
      <h1>
        Couronnes
        <br>Ménilmontant
      </h1>
      <div class="headlineIntro"></div>
    </header>
    <div class="sidebar">
      <h2>Trauma</h2>
    </div>

    <div class="discoverBox">
      <img src="../../../assets/ressources/img/stairs.svg" class="stair" alt>
      <a v-on:click="linkArticle()" class="button button--discover">Decouvrir la station</a>
      <a v-on:click="linkArticle()" class="button button--discover button button--discover--2">Decouvrir la station</a>
    </div>


    <div class="comicBox comicBox--trauma">
      <button class="button buttonNext">Next</button>
      <div class="comic__text animation--text">
        <img src="../../../assets/ressources/img/playbutton.png" alt class="videoPrewieButton">
        <p class="comic__text__p">Apres des annes du grand <span class='link--video' videoLinkId='0'>sucess</span> .... En 1903, Fulgence Bienvenüe doit gérer le premier drame du métro.</p>
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
          <h1>Catastrophe dans le métropolitain 10.08.1903</h1>
          <p>
            Est ce que vous pouves ecrit ici just un petit text sur le catasrophe. c est pas grave si c est double avec le video. je besoin contenu just au momnet on voir pas encore le image dans le view port
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
          <iframe width="560" height="315" src="https://www.youtube.com/embed/UL1_PdsnhP0" class="videoBox__video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p class="videoHeadline">La densité du métro</p>
        </div>
        <div class="videoBox__audiodescriptionBox">
          <img src="../../../assets/ressources/img/untertitel.png" alt class="icon--untertitel icon--untertitel--0">
          <p
            class="videoBox__audiodescription videoBox__audiodescription--0 slideIn--later"
          >Bienvenüe veut également un métro suffisamment dense et interconnecté pour qu’aucun point de Paris ne soit à plus de 400 mètres d’une station de métropolitain et qu’aucun trajet ne nécessite plus de deux changements.</p>
        </div>
      </div>

       <div class="videoBox">
        <div class="videoBox__videoWrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/luTdWi-vsj4" class="videoBox__video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p class="videoHeadline">Les heures de pointe</p>
        </div>
        <div class="videoBox__audiodescriptionBox">
          <img src="../../../assets/ressources/img/untertitel.png" alt class="icon--untertitel icon--untertitel--0">
          <p
            class="videoBox__audiodescription videoBox__audiodescription--0 slideIn--later"
          >Le métro a ouvert ses grilles en 1900. L’actuelle ligne 1 fut la première construite. En 15 ans, 10 lignes s’offrent aux parisiens, des travaux dantesques pour l’époque. Le succès est immédiat, et déjà, les terribles heures de pointe.</p>
        </div>
      </div>
    </div> 
    <!-- End -->

    <!-- Slide 1 Start -->
    <div class="videoBox__wrapper videoBox__wrapper--1 slideIn--later">
      <button class="button button--closeVideo button--closeVideo--1">Go Back</button>

       <div class="videoBox">
        <div class="videoBox__videoWrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/uehZhcO5F88" class="videoBox__video"  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p class="videoHeadline">La rame Westinghouse première classe</p>
        </div>
        <div class="videoBox__audiodescriptionBox">
          <img src="../../../assets/ressources/img/untertitel.png" alt class="icon--untertitel icon--untertitel--1">
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
              "La catastrophe du métropolitain, le 10 août 1903 dans les stations Couronnes et Ménilmontant. En cause, <span class='link--video' videoLinkId='1'>les matériaux</span> utilisés lors de la construction";
              videoPlus();

            fire.classList.add("slideIn--now");

            break;
          case 2:
            textBoxContent.innerHTML =
              "L’incendie fait 84 victimes. <br><br><button class='button buttonPlus'>Ensavoir Plus</button>";

            metroSign.classList.add("slideIn--now");
            bebeTete.classList.add("fadeOut");
            sitzen.classList.add("fadeOut");
            taschentuch.classList.add("fadeOut");

            //Savoir Plus
            savoirPlusStart();

            break;
          case 3:
            textBoxContent.innerHTML =
              "Ces stations ont subi des changements depuis l’accident.";

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
    linkArticle() {
      let IDarticle = 2;
      this.$router.push({ path: `../../content/article/${IDarticle}` });
    }
  }
};
</script>
