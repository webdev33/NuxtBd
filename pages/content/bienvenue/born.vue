<template>
  <section class="comic">
    <header>
      <h1>
        Montparnasse
        <br>Bienvenue
      </h1>
      <div class="headlineIntro"></div>
    </header>
    <div class="sidebar">
      <h2>Naissance</h2>
    </div>

    <div class="discoverBox">
      <img src="../../../assets/ressources/img/stairs.svg" class="stair" alt>x
      <a href="article.html" class="button button--discover">Decouvrir la station</a>
    </div>

    <div class="comicBox comicBox--nee">
      <button class="button buttonNext">Next</button>
      <div class="comic__text animation--text">
        <img src="../../../assets/ressources/img/playbutton.png" alt class="videoPrewieButton">
        <p
          class="comic__text__p"
        >Fulgence Bienvenüe est né le 27 janvier 1852 à Uzel (Côtes-d’Armor) en Bretagne.</p>
      </div>
      <img src="../../../assets/ressources/img/comic/naissance/maison.png" class="comicBox__image maison slideIn" alt>
      <img src="../../../assets/ressources/img/comic/pere/signMetro.png" class="comicBox__image metroSign slideIn--later" alt>
      <img src="../../../assets/ressources/img/comic/naissance/train.png" class="comicBox__image train slideIn--later" alt>
      <img src="../../../assets/ressources/img/comic/naissance/bebe.png" class="comicBox__image bebe slideIn--later" alt>
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
      <img src="../../../assets/ressources/img/comic/naissance/valise.png" class="comicBox__image valise slideIn--later" alt>
    </div>

    <!-- 
    <div class="videoBox__wrapper videoBox__wrapper--1 slideIn--later">
      <div class="videoBox">
        <div class="videoBox__videoWrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/NFvb1Y_o9XQ"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="videoBox__video"
          ></iframe>
          <p class="videoHeadline">Les evolution de le mec..</p>

          <button class="button button--closeVideo button--closeVideo--1">Go Back</button>
        </div>
        <div class="videoBox__audiodescriptionBox">
          <img src="../../../assets/ressources/img/untertitel.png" alt class="icon--untertitel icon--untertitel--1">
          <p
            class="videoBox__audiodescription videoBox__audiodescription--1 slideIn--later"
          >Ils fallait qu’ils amènent leurs pelles et leurs pioches et c’était donc par trains entiers qu’ils venaient comme ça à Paris. Et d’ailleurs on peut dire que le métro parisien à été construit en bonne partie par les bretons, ils ont été très nombreux dans ce chantier.</p>
        </div>
      </div>
    </div>

    <div class="videoBox__wrapper videoBox__wrapper--2 slideIn--later">
      <div class="videoBox">
        <div class="videoBox__videoWrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/NFvb1Y_o9XQ"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="videoBox__video"
          ></iframe>
          <p class="videoHeadline">Test</p>

          <button class="button button--closeVideo button--closeVideo--2">Go Back</button>
        </div>
        <div class="videoBox__audiodescriptionBox">
          <img src="../../../assets/ressources/img/untertitel.png" alt class="icon--untertitel icon--untertitel--2">
          <p
            class="videoBox__audiodescription videoBox__audiodescription--2 slideIn--later"
          >Ils fallait qu’ils amènent leurs pelles et leurs pioches et c’était donc par trains entiers qu’ils venaient comme ça à Paris. Et d’ailleurs on peut dire que le métro parisien à été construit en bonne partie par les bretons, ils ont été très nombreux dans ce chantier.</p>
        </div>
      </div>
    </div> 
    -->

    <footer class="footer--comic">
      <img src="../../../assets/ressources/img/mec.png" class="mec" alt>
      <a href="navigation.html">
        <button>
          <img src="../../../assets/ressources/img/icon.png" alt>
        </button>
      </a>
    </footer>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {}
};
</script>