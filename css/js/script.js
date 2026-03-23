const roles = [
  "AI Engineer",
  "Machine Learning Specialist",
  "NLP Enthusiast",
  "Data Scientist"
];

let i = 0;
let j = 0;
let currentRole = "";
let isDeleting = false;

function typeEffect() {
  currentRole = roles[i];

  if (isDeleting) {
    document.getElementById("typing").textContent = currentRole.substring(0, j--);
  } else {
    document.getElementById("typing").textContent = currentRole.substring(0, j++);
  }

  if (!isDeleting && j === currentRole.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();
