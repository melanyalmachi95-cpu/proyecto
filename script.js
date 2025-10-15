// Animación al hacer scroll
const partes = document.querySelectorAll('[data-animar] img');

function mostrarAnimacion() {
  const scrollY = window.scrollY + window.innerHeight * 0.85;
  partes.forEach(parte => {
    if (scrollY > parte.offsetTop) {
      parte.classList.add('animar');
    }
  });
}

window.addEventListener('scroll', mostrarAnimacion);

// Efecto "tilt" al pasar el mouse
const tiltElements = document.querySelectorAll('.galeria12');

tiltElements.forEach(el => {
  el.addEventListener('mousemove', (e) => {
    const { width, height, left, top } = el.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rotateX = ((y / height) - 0.73) * 20;
    const rotateY = ((x / width) - 0.73) * -20;
    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  el.addEventListener('mouseleave', () => {
    el.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  });
});
