// ============================================
// MOBILE MENU TOGGLE
// ============================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });
}

// ============================================
// FORM SUBMISSION
// ============================================

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;

    // Construir mensagem do WhatsApp
    const whatsappMessage = `*Novo Projeto*%0A%0A*Nome:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A%0A*Mensagem:*%0A${encodeURIComponent(message)}`;
    const whatsappLink = `https://wa.me/5527981033494?text=${whatsappMessage}`;

    // Abrir WhatsApp
    window.open(whatsappLink, '_blank');

    // Limpar formulário após envio
    setTimeout(() => {
      contactForm.reset();
      showNotification('Obrigado! Redirecionamos para o WhatsApp 📱');
    }, 300);
  });
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================

function showNotification(message) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #a855f7, #38bdf8);
    color: white;
    padding: 15px 25px;
    border-radius: 10px;
    font-weight: 600;
    z-index: 10000;
    animation: slideIn 0.3s ease;
    box-shadow: 0 10px 30px rgba(168, 85, 247, 0.3);
  `;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
    }
  });
}, observerOptions);

// Observar cards e outros elementos
document.querySelectorAll('.card').forEach(card => {
  observer.observe(card);
});

// ============================================
// ANIMATIONS KEYFRAMES
// ============================================

const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 100) {
    navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
  } else {
    navbar.style.boxShadow = 'none';
  }

  lastScrollTop = scrollTop;
});

// ============================================
// SMOOTH SCROLL ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ============================================
// PAGE LOAD ANIMATION
// ============================================

window.addEventListener('load', () => {
  document.body.style.animation = 'fadeIn 0.6s ease';
});

// ============================================
// PARALLAX EFFECT (OPCIONAL)
// ============================================

const hero = document.querySelector('.hero');

if (hero) {
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    if (hero && scrollTop < window.innerHeight) {
      hero.style.backgroundPosition = `center ${scrollTop * 0.5}px`;
    }
  });
}

// ============================================
// RANDOM STAR ANIMATION
// ============================================

const starsContainer = document.querySelector('.stars');

if (starsContainer) {
  for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.style.cssText = `
      position: absolute;
      width: 2px;
      height: 2px;
      background: white;
      border-radius: 50%;
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      opacity: ${Math.random() * 0.7 + 0.3};
      animation: twinkle ${Math.random() * 3 + 2}s infinite;
    `;
    starsContainer.appendChild(star);
  }
}

console.log('🌊 CodeWave Portfolio - Bem-vindo!');
