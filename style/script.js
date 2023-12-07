document.addEventListener('DOMContentLoaded', () => {
    const intro1 = document.querySelector('.intro1');
    const intro2 = document.querySelector('.intro2');
    const arrowLeft = document.querySelector('.fa-arrow-left');
    const arrowRight = document.querySelector('.fa-arrow-right');

    // Commencer avec intro1 visible
    intro1.classList.add('active');
    intro2.classList.remove('active');

    arrowRight.addEventListener('click', () => {
        intro1.classList.remove('active');
        intro2.classList.add('active');
    });

    arrowLeft.addEventListener('click', () => {
        intro2.classList.remove('active');
        intro1.classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.toggle');
    const navList = document.querySelector('.nav-list');

    toggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        toggle.classList.toggle('open');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');
    let currentProject = 0;
  
    projects[currentProject].classList.add('active'); // Affiche le premier projet
  
    setInterval(() => {
      projects[currentProject].classList.remove('active'); // Cache le projet actuel
  
      currentProject = (currentProject + 1) % projects.length; // Incrémente l'index du projet
  
      projects[currentProject].classList.add('active'); // Affiche le nouveau projet
    }, 10000); // Change de projet toutes les 10 secondes
  });
  
  