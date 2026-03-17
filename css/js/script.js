function toggleDarkMode(){

document.body.classList.toggle("dark-mode");

}

// Scroll animation

const sections = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

sections.forEach(section=>{

const position = section.getBoundingClientRect().top;

const screen = window.innerHeight;

if(position < screen-100){

section.style.opacity=1;
section.style.transform="translateY(0)";

}

});

});
