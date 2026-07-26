const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const dotsContainer = document.querySelector(".dots");

let currentIndex = 0;
const totalSlides = slide.length;

// Create Dots
slide.forEach((_, index)=>{

    const dot=document.createElement("span");
    dot.classList.add("dot");

    if(index===0){
        dot.classList.add("active");
    }

    dot.addEventListener("click",()=>{

        currentIndex=index;
        updateSlider();

    });

    dotsContainer.appendChild(dot);

});

const dots=document.querySelectorAll(".dot");

function updateDots(){

    dots.forEach(dot=>dot.classList.remove("active"));

    dots[currentIndex].classList.add("active");

}

function updateSlider(){

    slides.style.transform=`translateX(-${currentIndex*100}%)`;

    updateDots();

}

// Next
next.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex>=totalSlides){

        currentIndex=0;

    }

    updateSlider();

});

// Previous
prev.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex<0){

        currentIndex=totalSlides-1;

    }

    updateSlider();

});

// Keyboard Support

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight"){

        next.click();

    }

    if(e.key==="ArrowLeft"){

        prev.click();

    }

});