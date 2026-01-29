// Modo noturno
  const toggle = document.getElementById('toggleTheme');
  const themeIcon = toggle.querySelector('i');
  
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    
    if (document.body.classList.contains('dark')) {
      themeIcon.className = 'fas fa-sun';
      toggle.querySelector('span').textContent = 'Modo Claro';
    } else {
      themeIcon.className = 'fas fa-moon';
      toggle.querySelector('span').textContent = 'Modo Noturno';
    }
  });

  // Ripple effect
  document.addEventListener('click', function (e) {
    const circle = document.createElement('span');
    circle.classList.add('ripple');
    const size = Math.max(window.innerWidth, window.innerHeight);
    circle.style.width = circle.style.height = size + 'px';
    circle.style.left = e.clientX - size / 2 + 'px';
    circle.style.top = e.clientY - size / 2 + 'px';

    document.body.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  });

  // Scroll suave para âncoras
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if(targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if(targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Animação de entrada dos elementos
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);

  // Observar elementos para animação
  document.querySelectorAll('.card, .skill-item').forEach(el => {
    el.classList.remove('fade-in');
    observer.observe(el);
  });