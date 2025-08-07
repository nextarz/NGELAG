console.log('$NGELAG is buffering');
const video = document.getElementById("trailerVideo");

// Trailer 
const source = document.createElement("source");
source.src = "video/trailer.mp4";
source.type = "video/mp4";
video.appendChild(source);

// Hide control trailer
video.controls = false;
video.addEventListener("click", () => {
  video.play();
  video.setAttribute("controls", "controls");
});

// Menu toggle 
const menuToggle = document.getElementById('menuToggle');
const navbar = document.getElementById('navbar');
menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Animate Website
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.animate-left, .animate-right, .animate-zoom').forEach(el => {
  observer.observe(el);
});

// Popup coming soon 
const modal = document.getElementById('comingSoonModal');
const closeBtn = document.querySelector('.close-btn');
document.querySelector('img[alt="Dex"]').addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
document.querySelector('img[alt="pumpFun"]').addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

//© $NGELAG
//Website Development: Abu Kentucky & Nextarz