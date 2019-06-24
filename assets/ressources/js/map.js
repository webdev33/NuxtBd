/***
 * Map
 */

let station = document.querySelectorAll("circle");
let wrapper = document.querySelector(".wrapper");
let ligne = document.querySelectorAll(".ligne");
let svg = document.querySelector("svg");
let rect = document.querySelectorAll("rect");
let countdownBar = document.querySelector(".countdown");
let timeBar = document.querySelector(".timeBar");
let speechBubble = document.querySelector(".speechbubble");

var downloadTimer
document.addEventListener("DOMContentLoaded", function(){
  console.log("Load");
  // counter
  var timeleft = 36;
  downloadTimer = setInterval(function(){
    document.querySelector(".legende--year").innerHTML = 1900 + 36 - timeleft;
    timeleft -= 1;
    if(timeleft <= 0){
      clearInterval(downloadTimer);
      document.querySelector(".legende--year").classList.add("timer--full");
    }
  }, 500);
});

//Hover ligne
ligne.forEach(select => {
  select.addEventListener("mouseover", function(){
    let lineNumber = select.getAttribute("ligne");
    let color = document.querySelectorAll(".ligne--"+lineNumber);
    for (let i = 0; i < color.length; i++) {
      let colorSelect = color[i]; 
      switch (lineNumber) {
        case ("1"):
          colorSelect.style.stroke='#FFCD00';
          break;
        case ("2"):
          colorSelect.style.stroke='#003CA6';
          break;
        case ("3"):
          colorSelect.style.stroke='#837902';
          break;
        case ("4"):
          colorSelect.style.stroke='#CF009E';
          break;
        case ("5"):
          colorSelect.style.stroke='#FF7E2E';
          break;
        case ("6"):
          colorSelect.style.stroke='#6ECA97';
          break;
        case ("7"):
          colorSelect.style.stroke='#FA9ABA';
          break;
        case ("8"):
          colorSelect.style.stroke='#E19BDF';
          break;
        case ("9"):
          colorSelect.style.stroke='#B6BD00';
          break;
        case ("10"):
          colorSelect.style.stroke='#C9910D';
          break;
        case ("11"):
          colorSelect.style.stroke='#704B1C';
          break;
        case ("12"):
        colorSelect.style.stroke='#007852';
          break;
        case ("13"):
          colorSelect.style.stroke='#6EC4E8';
        break;
        case ("14"):
          colorSelect.style.stroke='#62259D';
        break;

        default:
        colorSelect.style.stroke='green';
          break;
      }
    }
  });
  
  select.addEventListener("mouseleave", function(){
    for (let i = 0; i < ligne.length; i++) {
      ligne[i].style.stroke='white';
    }
  });
});

//skip animation
let skipMapButton = document.querySelector(".button--map");
skipMapButton.addEventListener("click", function(){

  timeBar.classList.add("moveIn");
  countdownBar.style.opacity="0";
  skipMapButton.style.opacity="0";
  speechBubble.innerHTML="Decouvrir maintenant des Station et apprendre pourqui ils sont important pour moi.</br></br>je te  propose de commence avec <a href='nee.html' class='stationLink'>Bienvenu Montparnasse</a>";

  
  clearInterval(downloadTimer)
  document.querySelector(".legende--year").innerHTML = 1936;
  document.querySelector(".legende--year").classList.add("timer--full");

  ligne.forEach(select => {
    select.classList.add("skip--stroke");
  });
  station.forEach(select => {
    select.classList.add("skip--opacity");
  });
  rect.forEach(select => {
    select.classList.add("skip--opacity");
  });

});

//Date
let yearTimeline = document.querySelectorAll(".timeBar__year");
yearTimeline.forEach(select => {
  select.addEventListener("mouseover", function(){
    selectyearTimeline = select.innerHTML;
    console.log(selectyearTimeline);
    ligne = document.querySelectorAll(".ligne");

    station.forEach(select => {
      
      select.style.fill="none";
      select.style.stroke="none";
      select.classList.remove("skip--opacity");
    });
    rect.forEach(select => {
      
      select.style.fill="none";
      select.style.stroke="none";
      select.classList.remove("skip--opacity");
    });

    ligne.forEach(selectedLigne =>{
      let lineYear = selectedLigne.getAttribute("year");

      clearInterval(downloadTimer);
      document.querySelector(".legende--year").innerHTML = selectyearTimeline;

      selectedLigne.style.opacity = "0";
      if (lineYear <= selectyearTimeline) {
        selectedLigne.style.opacity = "1";
      }
    })
    
  });

  svg.addEventListener("mouseover", function(){
    if(document.querySelector(".legende--year").classList.contains("timer--full")){
      ligne = document.querySelectorAll(".ligne");
      ligne.forEach(selectedLigne =>{
        selectedLigne.style.opacity = "1";
      });

      clearInterval(downloadTimer);
      document.querySelector(".legende--year").innerHTML = 1936;
 
      station.forEach(select => {
        select.style.fill="black";
        select.style.stroke="#fff";
      });
      rect.forEach(select => {
        select.style.fill="black";
        select.style.stroke="#fff";
      });
    }
  });


});


// Pop up

//
let montparnasse = document.querySelector(".station--montparnasse");

montparnasse.addEventListener("mouseover",function(){
  var newDiv = document.createElement("div"); 
  var newContentText = montparnasse.getAttribute("bubble");
  var newContent = document.createTextNode(newContentText); 
  newDiv.className = "stationBox"; 
  newDiv.appendChild(newContent);

  var currentDiv = document.getElementById("div1"); 
  wrapper.appendChild(newDiv);
  let widthNewDiv = newDiv.offsetWidth;
  newDiv.style.left = event.clientX - widthNewDiv/2 +"px";
  newDiv.style.top = event.clientY + "px";
});
montparnasse.addEventListener("mouseleave",function(){
  document.querySelector(".stationBox").remove();
});

for (i = 0; i < station.length; i++) { 
  let stationSelect = station[i];
  station[i].addEventListener("mouseover",function(){
    var newDiv = document.createElement("div"); 
    var newContentText = stationSelect.getAttribute("bubble");
    var newContent = document.createTextNode(newContentText); 
    newDiv.className = "stationBox"; 
    newDiv.appendChild(newContent);

    var currentDiv = document.getElementById("div1"); 
    wrapper.appendChild(newDiv);
    let widthNewDiv = newDiv.offsetWidth;
    newDiv.style.left = event.clientX - widthNewDiv/2 +"px";
    newDiv.style.top = event.clientY + "px";
  });
  station[i].addEventListener("mouseleave",function(){
    document.querySelector(".stationBox").remove();
  });
}



// 2s after Pageload
setTimeout(function() {
  speechBubble.innerHTML="Decouvrir maintenant des Station et apprendre pourqui ils sont important pour moi.";
  timeBar.classList.add("moveIn");
}, 20000);

