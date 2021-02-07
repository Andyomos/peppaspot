let myDate = new Date();
// Portfolio
const nextBtn = document.getElementsByClassName('nextBtn');
const prevBtn = document.getElementsByClassName('prevBtn');
const imagesContainer = document.querySelector('.images');
let counter = 0;


const pictures = [
  `url(image/showcaseimg/showcase-${0}.jpg)`,
  `url(image/showcaseimg/showcase-${1}.jpg)`,
  `image/showcaseimg/showcase-${2}.jpg)`,
  `url(image/showcaseimg/showcase-${3}.jpg)`,
  `url(image/showcaseimg/showcase-${4}.jpg)`,
  `url(image/showcaseimg/showcase-${5}.jpg)`,
  `url(image/showcaseimg/showcase-${6}.jpg)`,
];

// Portfolio Picture Slide
const nextSlide = () => {
    if (counter === pictures.length) {
        counter = 0;
    }
        
    imagesContainer.style.backgroundImage = `url(image/showcaseimg/showcase-${counter}.jpg)`;
    counter++;  
}

const prevSlide = () => {
    if (counter === pictures.length) {   
        counter = 0;
    }
    imagesContainer.style.backgroundImage = `url(image/showcaseimg/showcase-${counter}.jpg)`;
    counter++;
} 


document.addEventListener('DOMContentLoaded', function() {

    // control icture zoom
    let elem = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(elem);

    // control parallax
    let paras = document.querySelectorAll('.parallax');
    M.Parallax.init(paras);
});


;

document.getElementById("myDate").innerHTML = myDate.getFullYear();


