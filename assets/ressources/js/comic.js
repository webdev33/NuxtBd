window.addEventListener('load', function() {
  let buttonNext = document.querySelector(".buttonNext");
  let commicBox = document.querySelector(".comicBox");
  let textBox = document.querySelector(".comic__text");
  let textBoxContent = document.querySelector(".comic__text__p")
  let discoverBox = document.querySelector(".discoverBox");
  let buttonNextCounter = 0;


  let savoirPlusStart = function(){
    //Savoir Plus
    let savoirPlus = document.querySelector(".buttonPlus");
    savoirPlus.addEventListener("click", function(){
      document.querySelector("body").classList.add("full");
      textBox.classList.add("fadeOut");
      document.querySelector(".mec").classList.add("fadeOut");
      document.querySelector("header").classList.add("fadeOut");
      document.querySelector(".articlePlus").style.display="block";
      setTimeout(function() {
        document.querySelector(".articlePlus").classList.add("slideIn--now");
      }, 100);
      document.querySelector(".buttonNext--end").addEventListener("click",function(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
      })
      if(document.querySelector("body").classList.contains("full")){
        window.addEventListener('scroll', () => {  
          if (window.matchMedia('(min-width: 640px)').matches) {
            if (document.documentElement.scrollTop > window.innerHeight*0.4 ){
              document.querySelector(".comicBox").classList.add("fadeOut");
            }else{
              document.querySelector(".comicBox").classList.remove("fadeOut");
            }
          }
        });
      }
    })
    //
  }
  let savoirPlusEnd = function (){
    document.querySelector(".articlePlus").style.display="none";
    textBox.classList.remove("fadeOut");
    document.querySelector(".mec").classList.remove("fadeOut");
    document.querySelector("header").classList.remove("fadeOut");
  }

  let videoPlus = function (){
    // 1.) wrappe le keyword (dans le html ou js)
    // <span class='link--video' videoLinkId='..'> .... </span>

    // 2.) add ca after comicBox
    // <div class="videoBox__wrapper slideIn--later" videBox="..">
    //   <div class="videoBox">
    //     <div class="videoBox__videoWrapper">
    //       <iframe width="560" height="315" src="https://www.youtube.com/embed/NFvb1Y_o9XQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="videoBox__video"></iframe>
    //       <p class="videoHeadline">Les evolution de le mec..</p>
    //       <button class="button button--closeVideo">Go Back</button>
    //     </div>
    //     <div class="videoBox__audiodescriptionBox">
    //       <img src="img/untertitel.png" alt="" class="icon--untertitel">
    //       <p class="videoBox__audiodescription slideIn--later">Ils fallait qu’ils amènent leurs pelles et leurs pioches et c’était donc par trains entiers qu’ils venaient comme ça à Paris. Et d’ailleurs on peut dire que le métro parisien à été construit en bonne partie par les bretons, ils ont été très nombreux dans ce chantier.</p>
    //     </div>
    //   </div>
    // </div>

    let buttonVideo = document.querySelector(".link--video");
    let previewVideo = document.querySelector(".videoPrewieButton");

    //reset
    document.querySelector(".mec").classList.remove("fadeOutLeft");
    document.querySelector(".mec").classList.remove("fadeInLeft");
    document.querySelector(".comicBox").classList.remove("slideIn--oneMoreTime");

    buttonVideo.addEventListener("mouseover", function(){
      previewVideo.style.opacity="1";
    });

    buttonVideo.addEventListener("mouseleave", function(){
      previewVideo.style.opacity="0";
    });

    let videoNumber ="";
 
    buttonVideo.addEventListener("click", function(){
      document.querySelector(".comicBox").classList.add("fadeOut");
      document.querySelector(".mec").classList.add("fadeOutLeft");

      videoNumber = buttonVideo.getAttribute("videoLinkId");
      console.log("video Numbeer :" +videoNumber);
      document.querySelector(".videoBox__wrapper--"+videoNumber).style.display="block";
      setTimeout(function() {
        document.querySelector(".videoBox__wrapper--"+videoNumber).classList.add("slideIn--now");
      }, 100);


      document.querySelector(".icon--untertitel--"+videoNumber).addEventListener("click", function(){
        document.querySelector(".videoBox__audiodescription--"+videoNumber).classList.toggle("slideIn--now");
      });
      console.log("video Numbeer Test :" +videoNumber);

      let buttonVideoBack = document.querySelector(".button--closeVideo--"+videoNumber);

      buttonVideoBack.addEventListener("click", function(){
        console.log("close video")
        document.querySelector(".comicBox").classList.remove("fadeOut");
        document.querySelector(".comicBox").classList.add("slideIn--oneMoreTime");

        document.querySelector(".videoBox__wrapper--"+videoNumber).classList.add("fadeOut");
        setTimeout(function() {
          document.querySelector(".videoBox__wrapper--"+videoNumber).style.display="none";
        }, 500);
        document.querySelector(".mec").classList.add("fadeInLeft");
      });

    });
  }


  buttonNext.addEventListener("click", function(){
    buttonNextCounter = buttonNextCounter + 1;
    console.log(buttonNextCounter);

    // 
    // Morte
    //
    if (commicBox.classList.contains("comicBox--pere")){
      let person = document.querySelector(".person");
      let metroSign = document.querySelector(".metroSign");
      let grab = document.querySelector(".grab");


      switch (buttonNextCounter) {
        case (1):
          textBoxContent.innerHTML = "... Fulgence Bienvenüe est mort. ...";

          person.classList.add("morte");
          break;
        case (2):
          textBoxContent.innerHTML = "Il etait installe sur le cintiere de Pere La Chaise. ";

          grab.classList.add("slideIn--now");
          metroSign.classList.add("cross");
          break;
        case (3):
          textBoxContent.innerHTML = "Heureusement il a installe avant un metro proche, comme ca tous ses fans pouvent visiter lui.";

          metroSign.classList.remove("cross");
          person.style.opacity ="0";  
          person.classList.add("fadeOut");
          grab.classList.add("fadeOut");

          discoverBox.style.display="block";
          setTimeout(function() {
            discoverBox.style.transform ="translateY(0vw)";
          }, 100);
          buttonNext.style.opacity="0";
          break;
      }
    }

    // 
    // Naissance
    //
    if (commicBox.classList.contains("comicBox--nee")){

      let metroSign = document.querySelector(".metroSign");
      let maison = document.querySelector(".maison");
      let bebe = document.querySelector(".bebe");
      let bebeTete = document.querySelector(".bebe--tete");
      let train = document.querySelector(".train");
      let schnuller = document.querySelector(".schnuller");
      let valise = document.querySelector(".valise");
    
      switch (buttonNextCounter) {
        case (1):
          textBoxContent.innerHTML = "Il est le treizième enfant d’une famille bretonne d’origine normande. <span class='link--video' videoLinkId='1' >d’origine normande</span>";
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
        case (2):
          textBoxContent.innerHTML = "La ligne de chemin de fer Paris - Brest est achevée à la fin du XIXème siècle, comme des milliers de bretons, Bienvenüe en profite pour tenter sa chance à la capitale. <span class='link--video' videoLinkId='2' >d’origine normande</span>";
          videoPlus();

          train.style.opacity="0";
          train.classList.add("fadeOut");

          valise.classList.add("slideIn--now");
          setTimeout(function() {
            metroSign.classList.add("slideIn--now");
          }, 500);

          break;
        case (3):
          textBoxContent.innerHTML = "Montparnasse représente la porte entre Paris et la Bretagne.";

          bebe.classList.add("fadeOut");
          bebeTete.classList.add("fadeOut");
          valise.classList.add("fadeOut");

          discoverBox.style.display="block";
          setTimeout(function() {
            discoverBox.style.transform ="translateY(0vw)";
          }, 100);
          buttonNext.style.opacity="0";
          break;
      }
    }

    // 
    // Hotle
    //
    if (commicBox.classList.contains("comicBox--triumph")){

      let metroSign = document.querySelector(".metroSign");
      let maison = document.querySelector(".maison");
      let konfetti = document.querySelector(".kofetti");
      let medallie = document.querySelector(".medallie");
      let leg = document.querySelector(".leg");
      let corp = document.querySelector(".corp");
      let pult = document.querySelector(".pult");
    
      switch (buttonNextCounter) {
        case (1):
          textBoxContent.innerHTML = "Il reçoit la grande médaille d’or de la ville de Paris en 1924.";

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
        case (2):
          textBoxContent.innerHTML = "Il devient Grand-Croix de la Légion d’Honneur en 1929 par le décret du 26 janvier 1929.<br> Cette distinction lui est décernée en récompense des services rendus auprès de la ville de Paris.";

          pult.classList.add("slideIn--now");
          medallie.classList.add("fadeOut");

          setTimeout(function() {
            corp.classList.add("rebend");
          }, 500);

          break;
        case (3):
          textBoxContent.innerHTML = "Cette récompense à lieu tout près de la station Hôtel de Ville qui se trouve sur la première ligne qu’il a réalisé.";

          
          leg.classList.add("fadeOut");
          corp.classList.add("fadeOut");
          pult.classList.add("fadeOut");
          
          setTimeout(function() {
            konfetti.classList.add("fadeOut");
          }, 100);


          metroSign.classList.add("slideIn--now");

          discoverBox.style.display="block";
          setTimeout(function() {
            discoverBox.style.transform ="translateY(0vw)";
          }, 100);
          buttonNext.style.opacity="0";
          break;
      }
    }

    // 
    // Sa vie privée
    //
    if (commicBox.classList.contains("comicBox--prive")){

      let person = document.querySelector(".person");
      let metroSign = document.querySelector(".metroSign");
      let femme = document.querySelector(".femme");
      let appart = document.querySelector(".appart");
    
      switch (buttonNextCounter) {
        case (1):
          textBoxContent.innerHTML = "Le 28 avril 1909, à 57 ans, Fulgence Bienvenüe se marie avec Jeanne Loret, veuve et mère de trois enfants.";

          metroSign.classList.add("fadeOut");
          femme.classList.add("slideIn--now");
          setTimeout(function() {
            person.classList.add("bisous");
          }, 500);

          break;
        case (2):
          textBoxContent.innerHTML = "Le ménage s’installe au 112 boulevard de Courcelles dans le 17e arrondissement.";
        
          appart.classList.add("slideIn--now");

          femme.classList.add("fadeOut");
          person.classList.add("fadeOut");

          break;
        case (3):
          textBoxContent.innerHTML = "Biene sure proche de un staon metro";

          appart.classList.add("fadeOut");          
          metroSign.classList.remove("fadeOut");
          metroSign.classList.add("slideIn--oneMoreTime");

          discoverBox.style.display="block";
          setTimeout(function() {
            discoverBox.style.transform ="translateY(0vw)";
          }, 100);
          buttonNext.style.opacity="0";
          break;
      }
    }

    // 
    // Trauma
    //
    if (commicBox.classList.contains("comicBox--trauma")){

      let bebeTete = document.querySelector(".bebe--tete");
      let metroSign = document.querySelector(".metroSign");
      let fire = document.querySelector(".fire");
      let taschentuch = document.querySelector(".taschentuch");
      let sitzen = document.querySelector(".sitzen");
    
      switch (buttonNextCounter) {
        case (1):
          textBoxContent.innerHTML = "La catastrophe du métropolitain, le 10 août 1903 dans les stations Couronnes et Ménilmontant..";

          fire.classList.add("slideIn--now");

          break;
        case (2):
          textBoxContent.innerHTML = "L’incendie fait 84 victimes. <br><br><button class='button buttonPlus'>Ensavoir Plus</button>";
        
          metroSign .classList.add("slideIn--now");
          bebeTete.classList.add("fadeOut");
          sitzen.classList.add("fadeOut");
          taschentuch.classList.add("fadeOut");

          //Savoir Plus
          savoirPlusStart();

          break;
        case (3):
          textBoxContent.innerHTML = "Ces stations ont subi des changements depuis l’accident.";

          savoirPlusEnd();
          discoverBox.style.display="block";
          setTimeout(function() {
            discoverBox.style.transform ="translateY(0vw)";
          }, 100);
          buttonNext.style.opacity="0";
          break;
      }
    }

    // 
    // Carrier
    //
    if (commicBox.classList.contains("comicBox--carrier")){

      let metroSign = document.querySelector(".metroSign");
      let tour = document.querySelector(".tour");
      let legs = document.querySelector(".legs");
      let berg = document.querySelector(".berg");
      let corp = document.querySelector(".corp");
      let hacke = document.querySelector(".hacke");
    
      switch (buttonNextCounter) {
        case (1):
          textBoxContent.innerHTML = "C’est lors de l’Exposition Universelle de 1900 que fut mis en service la première ligne du Métropolitain : Porte de Vincennes - Porte Maillot.";

          metroSign.classList.add("slideIn--now");

          break;
        case (2):
          textBoxContent.innerHTML = "Ces travaux, qui entraîneront de gigantesques bouleversements dans la ville, attiseront également la colère des parisiens !<br>Il est l'auteur d'une des plus jolies opérations... césariennes que Paris ait subies.<br><br><button class='button buttonPlus'>Ensavoir Plus</button>";

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
        case (3):
          textBoxContent.innerHTML = "Découvrez les deux extrémités de la ligne historique !.";
          savoirPlusEnd();

          legs.classList.add("fadeOut");
          berg.classList.add("fadeOut");
          corp.classList.add("fadeOut");
          hacke.classList.add("fadeOut");

          metroSign.classList.remove("fadeOut");
          metroSign.classList.add("slideIn--oneMoreTime");


          discoverBox.style.display="block";
          setTimeout(function() {
            discoverBox.style.transform ="translateY(0vw)";
          }, 100);
          buttonNext.style.opacity="0";
          break;
      }
    }

    // 
    // Ligne 4
    //
    if (commicBox.classList.contains("comicBox--genie")){

      let metroSign = document.querySelector(".metroSign");
      let point = document.querySelector(".point");
      let bras = document.querySelector(".bras");
      let mapSeine = document.querySelector(".mapSeine");
      let imgConstruction = document.querySelector(".imgConstruction");

    
      switch (buttonNextCounter) {
        case (1):
          textBoxContent.innerHTML = "L’aboutissement de quatre années de travail sous la direction de l’ingénieur Fulgence Bienvenüe. ";

          point.classList.add("fadeOut");

          bras.classList.add("slideIn--now");
          mapSeine.classList.add("slideIn--now");

          break;
        case (2):
          textBoxContent.innerHTML = "Il est nommé à la suite de l’exploit, inspecteur général des Ponts et Chaussées de 2e classe.<br><br><button class='button buttonPlus'>Ensavoir Plus</button>";

          bras.classList.add("fadeOut");
          mapSeine.classList.add("fadeOut");

          imgConstruction.classList.add("slideIn--now");
          savoirPlusStart();

          break;
        case (3):
          textBoxContent.innerHTML = "Découvrez Cité, une station de la ligne 4 !.";

          metroSign.classList.add("slideIn--now");
          imgConstruction.classList.add("fadeOut");

          //Savoir Plus
          savoirPlusEnd();

          discoverBox.style.display="block";
          setTimeout(function() {
            discoverBox.style.transform ="translateY(0vw)";
          }, 100);
          buttonNext.style.opacity="0";
          break;
      }
    }

  })
});

    // let iframe = document.querySelector("iframe");
    // let iframeHeight = iframe.getAttribute("height")
    // let iframeWidth = iframe.getAttribute("width")

    // let iframeNewWidth = 700;
    // console.log(iframeHeight);
    // console.log(iframeWidth);
    // let iframeProportion = iframeNewWidth/iframeWidth;
    // let iframeNewHeight = iframeProportion*iframeHeight;

    // document.querySelector("iframe").setAttribute("width", iframeNewWidth);
    // document.querySelector("iframe").setAttribute("height", iframeNewHeight);

    // console.log("width"+ iframeNewWidth + "height" +iframeNewHeight)