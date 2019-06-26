<template>
  <section class="comic">
    <header>
      <h1>Pere Lachaise</h1>
      <div class="headlineIntro"></div>
    </header>
    <div class="sidebar">
      <h2>Morte</h2>
    </div>

    <div class="discoverBox">
      <img src="../../../assets/ressources/img/stairs.svg" class="stair" alt>
      <a v-on:click="linkArticle()" class="button button--discover">Decouvrir la station</a>
    </div>

    <div class="comicBox comicBox--pere">
      <button class="button buttonNext">Next</button>
      <div class="comic__text animation--text">
        <img src="../../../assets/ressources/img/playbutton.png" alt class="videoPrewieButton">
        <p class="comic__text__p">Le 3 août 1936, un super beau journe a Paris.....<span class='link--video' videoLinkId='0'>En attentre</span></p>
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
        src="../../../assets/ressources/img/comic/pere/grab.png"
        class="comicBox__image grab slideIn--later"
        alt
      >
    </div>

    <!-- Slide 0 Start -->
    <div class="videoBox__wrapper videoBox__wrapper--0 slideIn--later">
      <button class="button button--closeVideo button--closeVideo--0">Go Back</button>
      <div class="videoBox">
        <div class="videoBox__videoWrapper">

          <iframe width="560" height="315" src="https://www.youtube.com/embed/METtgfYQjZU" class="videoBox__video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p class="videoHeadline">Le métro en 1950</p>
        </div>
        <div class="videoBox__audiodescriptionBox">
          <img src="../../../assets/ressources/img/untertitel.png" alt class="icon--untertitel icon--untertitel--0">
          <p
            class="videoBox__audiodescription videoBox__audiodescription--0 slideIn--later"
          >On criait alors au miracle et Mr Fulgence Bienvenüe, père du métropolitain apparaissait comme la plus grande figure de l’année. Mr Fulgence Bienvenüe a disparu, mais dans le fond, ça n’a pas tellement changé.</p>
        </div>
      </div>
    </div> 
    <!-- End -->

    <!-- Slide 1 Start -->
    <div class="videoBox__wrapper videoBox__wrapper--1 slideIn--later">
      <button class="button button--closeVideo button--closeVideo--1">Go Back</button>
      <div class="videoBox">
        <div class="videoBox__videoWrapper">

          <!-- 1frame --->
          <p class="videoHeadline">Fulgence Bienvenüe</p>
        </div>
        <div class="videoBox__audiodescriptionBox">
          <img src="../../../assets/ressources/img/untertitel.png" alt class="icon--untertitel icon--untertitel--1">
          <p
            class="videoBox__audiodescription videoBox__audiodescription--1 slideIn--later"
          >.....</p>
        </div>
      </div>
    </div> 
    <!-- End -->

    <!-- Slide 2 Start -->
    <div class="videoBox__wrapper videoBox__wrapper--2 slideIn--later">
      <button class="button button--closeVideo button--closeVideo--2">Go Back</button>
      <div class="videoBox">
        <div class="videoBox__videoWrapper">

          <iframe width="560" height="315" src="https://www.youtube.com/embed/Uv7y77cCtxM" class="videoBox__video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p class="videoHeadline">Saluons Mr Bienvenüe, le père du métro.</p>
        </div>
        <div class="videoBox__audiodescriptionBox">
          <img src="../../../assets/ressources/img/untertitel.png" alt class="icon--untertitel icon--untertitel--2">
          <p
            class="videoBox__audiodescription videoBox__audiodescription--2 slideIn--later"
          >Saluons Mr Bienvenüe, le père du métro.</p>
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
    videoPlus();

    buttonNext.addEventListener("click", function() {
      buttonNextCounter = buttonNextCounter + 1;
      console.log(buttonNextCounter);

      //
      // Morte
      //
      if (commicBox.classList.contains("comicBox--pere")) {
        let person = document.querySelector(".person");
        let metroSign = document.querySelector(".metroSign");
        let grab = document.querySelector(".grab");

        switch (buttonNextCounter) {
          case 1:
            textBoxContent.innerHTML = "Fulgence Bienvenüe décède au sein de sa capitale bien aimée.<span class='link--video' videoLinkId='1'>En attentre</span>";
            videoPlus();

            person.classList.add("morte");
            break;
          case 2:
            textBoxContent.innerHTML =
              "Il est inhumé le 7 août dans l’indifférence générale. Sa sépulture se trouve au cimetière (division 82) du Père Lachaise.<span class='link--video' videoLinkId='2'>En attentre</span>";
              videoPlus();

            grab.classList.add("slideIn--now");
            metroSign.classList.add("cross");
            break;
          case 3:
            textBoxContent.innerHTML =
              "Heureusement il a installe avant un metro proche, comme ca tous ses fans pouvent visiter lui.";

            metroSign.classList.remove("cross");
            person.style.opacity = "0";
            person.classList.add("fadeOut");
            grab.classList.add("fadeOut");

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
