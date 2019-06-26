
<template>
  <section class="comic">
    <header>
      <h1>Hotel de Ville</h1>
      <div class="headlineIntro"></div>
    </header>
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
        >Ce n'est qu'après de nombreuses années que Fulgence Bienvenüe obtient une reconnaissance.<br>Il obtient une distinction en guise de reconnaissance de la part de la capitale.</p>
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

    <!-- Slide 2 Start -->
    <div class="videoBox__wrapper videoBox__wrapper--2 slideIn--later">
      <button class="button button--closeVideo button--closeVideo--2">Go Back</button>
      <div class="videoBox">
        <div class="videoBox__videoWrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/w4AN6vnTt3A" class="videoBox__video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p class="videoHeadline">Les techniques d'architecture</p>
        </div>
        <div class="videoBox__audiodescriptionBox">
          <img src="../../../assets/ressources/img/untertitel.png" alt class="icon--untertitel icon--untertitel--2">
          <p
            class="videoBox__audiodescription videoBox__audiodescription--2 slideIn--later"
          >....</p>
        </div>
      </div>
    </div> 
    <!-- End -->

    <!-- Slide 2 Start -->
    <div class="videoBox__wrapper videoBox__wrapper--3 slideIn--later">
      <button class="button button--closeVideo button--closeVideo--3">Go Back</button>
      <div class="videoBox">
        <div class="videoBox__videoWrapper">
          <!-- 
            I frame 
          --->
          <p class="videoHeadline">Fulgence Bienvenüe</p>
        </div>
        <div class="videoBox__audiodescriptionBox">
          <img src="../../../assets/ressources/img/untertitel.png" alt class="icon--untertitel icon--untertitel--3">
          <p
            class="videoBox__audiodescription videoBox__audiodescription--3 slideIn--later"
          >....</p>
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
              "Il reçoit la Grande Médaille d’or de la ville de Paris en 1924. Sont soulignés son implication inflexible et son <span class='link--video' videoLinkId='2'>apport culturel</span>";
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
              "Il devient Grand-Croix de la Légion d’Honneur en 1929.Cette distinction lui est décernée en récompense des services rendus auprès de la ville de Paris, pour le <span class='link--video' videoLinkId='3'>succès</span> de la construction du métropolitain.";
              videoPlus();

            pult.classList.add("slideIn--now");
            medallie.classList.add("fadeOut");

            setTimeout(function() {
              corp.classList.add("rebend");
            }, 500);

            break;
          case 3:
            textBoxContent.innerHTML =
              "Cette récompense à lieu tout près de la station Hôtel de Ville qui se trouve sur la première ligne qu’il a réalisé.";

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
    linkArticle() {
      let IDarticle = 2;
      this.$router.push({ path: `../../content/article/${IDarticle}` });
    }
  }
};
</script>