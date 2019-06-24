/*
1. Trie par date (plus vieux premiere...)
2.

*/



let imageBox = document.querySelector(".imageStaition__image");
let images = document.querySelectorAll(".imageStaition__image__image");
let imageActive = document.querySelector(".imageVisible");



for (let i = 0; i < images.length; i++) {
  images[i].style.display="none";
}
imageActive.style.display="block";

let imageActiveHeight = imageActive.offsetHeight;
console.log(imageActiveHeight);
imageBox.style.height = imageActiveHeight +"px";

let years = document.querySelectorAll(".imageStaition__timelineYear");
let selectYear = "";

for (let i = 0; i < years.length; i++) {
  years[i].addEventListener("mouseover", function(){
    for (let i = 0; i < years.length; i++) {
      years[i].classList.remove("active");
    }
    selectYear = years[i].innerHTML;
    years[i].classList.add("active");
    console.log(selectYear);
    for (let i = 0; i < images.length; i++) {
      images[i].style.display="none";
      images[i].classList.remove("imageVisible");
      if (selectYear === images[i].getAttribute("year")){
        images[i].style.display="block";
        images[i].classList.add("imageVisible");

        //height
        let imageActiveHeight = images[i].offsetHeight;
        imageBox.style.height = imageActiveHeight +"px";
      }
    }

  })
}


let introScroll = document.querySelector(".intro__petit");

window.addEventListener('scroll', () => {  
  if (window.matchMedia('(min-width: 640px)').matches) {
    // console.log(window.scrollY);
    // introScroll.style.transform = `translate(0px, ${window.scrollY * 0.80}px)`; 
    
    if (document.documentElement.scrollTop > window.innerHeight ){
      introScroll.classList.add("fadeOut");
      // if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      //   console.log("bottom");
      //   document.querySelector(".button--article").classList.add("moveInFromBottom");
      // }
    }
    else{
      introScroll.classList.remove("fadeOut");
    }
    
  }
  
});

