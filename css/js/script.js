window.addEventListener("scroll",function(){

let sections=document.querySelectorAll("section");

sections.forEach(section=>{

let position=section.getBoundingClientRect().top;

let screen=window.innerHeight;

if(position < screen-100){

section.style.opacity=1;
section.style.transform="translateY(0)";
}

});

});
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

sections.forEach(section => {

const position = section.getBoundingClientRect().top;

const screenHeight = window.innerHeight;

if(position < screenHeight - 100){
section.classList.add("show");
}

});

});
