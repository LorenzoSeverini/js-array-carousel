// js slide img exercise

// reload the page on click header link
const myLink = document.getElementById('myLink');

myLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default behavior of following the link
    location.reload(); // Reload the page
});

// slide img
const mySlide = document.getElementsByClassName('mySlide');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');

// index of image
let imgIndex = 0;

// array of images
const imgArray = [ 
    './img/imgKB.jpeg',         
    './img/imgLJ.jpeg',
    './img/imgMJ.jpeg',
    './img/imgSC.jpeg',
    './img/imgSD.jpeg',
];

// set the first image
mySlide[0].src = imgArray[imgIndex];

// next image
btnNext.addEventListener('click', () => {
    imgIndex++;
    if (imgIndex >= imgArray.length) {
        imgIndex = 0;
    }
    mySlide[0].src = imgArray[imgIndex];
    console.log("You have digit with the button next this image", mySlide[0].src);
});

// previous image
btnPrev.addEventListener('click', () => {
    imgIndex--;
    if (imgIndex < 0) {
        imgIndex = imgArray.length - 1;
    }
    mySlide[0].src = imgArray[imgIndex];
    console.log("You have digit with the button prev this image", mySlide[0].src);
});


// thumb img 
const myThumb = document.getElementsByClassName('myThumb');

// array of myThumb img  
const myThumbSrc = [
    './img/imgKB.jpeg',
    './img/imgLJ.jpeg',
    './img/imgMJ.jpeg',
    './img/imgSC.jpeg',
    './img/imgSD.jpeg',
];

// loop to change the img with the same img of mythumb img clicked
for (let i = 0; i < myThumb.length; i++) {
    myThumb[i].addEventListener('click', () => {
        mySlide[0].src = myThumbSrc[i];
        console.log("Digiting on the thumb images you, have selected this image", mySlide[0].src);
    });
}




