

// Hero section typing effect

const phrases = [
  { first: "Kaushik", last: "Pathak" },
  { first: "Data", last: "Enthusiast" },
  { first: "Learning", last: "Driven" },
  { first: "Tech", last: "Explorer" }
];

const firstSpan = document.getElementById("typing-first");
const lastSpan = document.getElementById("typing-last");

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingLast = false; // flag to know if last part is typing

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  const firstText = currentPhrase.first;
  const lastText = currentPhrase.last;

  if (!isDeleting) {
    if (!typingLast) {
      // Type first part
      firstSpan.textContent = firstText.substring(0, charIndex);
      charIndex++;

      if (charIndex > firstText.length) {
        typingLast = true;
        charIndex = 0; // reset for last part
      }
    } else {
      // Type last part
      lastSpan.textContent = lastText.substring(0, charIndex);
      charIndex++;

      if (charIndex > lastText.length) {
        // done typing full phrase
        isDeleting = true;
        typingLast = false;
        charIndex = 0;
        setTimeout(typeEffect, 1500); // pause before deleting
        return;
      }
    }
  } else {
    if (!typingLast) {
      // Delete last part first
      lastSpan.textContent = lastText.substring(0, lastText.length - charIndex);
      charIndex++;

      if (charIndex > lastText.length) {
        typingLast = true;
        charIndex = 0;
      }
    } else {
      // Delete first part
      firstSpan.textContent = firstText.substring(0, firstText.length - charIndex);
      charIndex++;

      if (charIndex > firstText.length) {
        // move to next phrase
        isDeleting = false;
        typingLast = false;
        charIndex = 0;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }
  }

  const speed = isDeleting ? 80 : 120;
  setTimeout(typeEffect, speed);
}

typeEffect();




// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Carousel functionality
let activeSlide = 0;
const totalSlides = 6;

function setActiveSlide(slideIndex) {
    // Remove active class from all dots
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to clicked dot
    if (dots[slideIndex]) {
        dots[slideIndex].classList.add('active');
    }
    
    activeSlide = slideIndex;
    
    // Here you could add logic to change the quote content
    updateQuoteContent(slideIndex);
}

// Update quote content based on slide
function updateQuoteContent(slideIndex) {
    const quotes = [
        "when your mind tells you that you are done, you've only reached about 40% of your true physical and mental capacity",
        "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "The only way to do great work is to love what you do.",
        "Innovation distinguishes between a leader and a follower.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "It is during our darkest moments that we must focus to see the light."
    ];
    
    const authors = [
        "David Goggins",
        "Winston Churchill", 
        "Steve Jobs",
        "Steve Jobs",
        "Eleanor Roosevelt",
        "Aristotle"
    ];
    
    const images = [
        "src/images/david gogings.jpeg",
        "src/images/bill-gates_headshot_5x4.webp",
        "src/images/SRK.jpg",
        "src/images/Mark manson.jpg",
        "src/images/will smith.jpg",
        "src/images/hero-crop-gettyimages-459534214.avif"
    ];
    
    const quoteElement = document.querySelector('.carousel-section p');
    const authorElement = document.querySelector('.carousel-section h4');
    const imageElement = document.querySelector('.carousel-section img');
    
    if (quoteElement && authorElement) {
        quoteElement.textContent = `"${quotes[slideIndex]}"`;
        authorElement.textContent = authors[slideIndex];
    }
    
    if (imageElement) {
        imageElement.src = images[slideIndex];
        imageElement.alt = authors[slideIndex];
    }
}

// Auto-rotate carousel (optional)
function startCarousel() {
    setInterval(() => {
        activeSlide = (activeSlide + 1) % totalSlides;
        setActiveSlide(activeSlide);
    }, 5000); // Change slide every 5 seconds
}

// Navigation highlight on scroll
function highlightNavigationOnScroll() {
    const sections = ['home', 'about', 'skills', 'projects'];
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    current = section;
                }
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('onclick').includes(current)) {
                link.classList.add('active');
            }
        });
    });
}

// Add smooth hover effects to project cards
function addProjectCardEffects() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 10px 25px rgba(62, 95, 68, 0.15)';
            card.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
        });
    });
}

// Add typing effect to hero text (optional)
function addTypingEffect() {
    const heroText = document.querySelector('#home h1');
    if (!heroText) return;
    
    const originalText = heroText.innerHTML;
    heroText.innerHTML = '';
    
    let i = 0;
    const typeSpeed = 100;
    
    function typeWriter() {
        if (i < originalText.length) {
            heroText.innerHTML += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, typeSpeed);
        }
    }
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 1000);
}

// Mobile menu toggle (if needed)
function addMobileMenuToggle() {
    // Only add mobile menu on small screens
    if (window.innerWidth >= 768) return;
    
    // Create mobile menu button
    const nav = document.querySelector('nav');
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.innerHTML = '☰';
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.style.cssText = `
        display: block;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: var(--portfolio-green-dark);
    `;
    
    // Add mobile menu
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu hidden';
    mobileMenu.style.cssText = `
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--portfolio-bg);
        border-top: 1px solid var(--portfolio-green-medium);
        padding: 1rem;
        display: none;
        flex-direction: column;
        gap: 1rem;
    `;
    
    // Add navigation links to mobile menu
    const navLinks = ['Home', 'About', 'Skills', 'Project'];
    navLinks.forEach(linkText => {
        const link = document.createElement('button');
        link.textContent = linkText;
        link.className = 'mobile-nav-link';
        link.style.cssText = `
            background: none;
            border: none;
            font-size: 1.125rem;
            font-family: 'Outfit', sans-serif;
            font-weight: 500;
            color: #222;
            text-align: left;
            cursor: pointer;
            padding: 0.5rem 0;
        `;
        link.onclick = () => {
            const sectionId = linkText.toLowerCase();
            scrollToSection(sectionId);
            mobileMenu.style.display = 'none';
        };
        mobileMenu.appendChild(link);
    });
    
    // Toggle mobile menu
    mobileMenuBtn.onclick = () => {
        mobileMenu.style.display = mobileMenu.style.display === 'none' ? 'flex' : 'none';
    };
    
    nav.appendChild(mobileMenuBtn);
    nav.appendChild(mobileMenu);
}

// Add scroll animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Add click effects to buttons
function addButtonEffects() {
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Add CSS for ripple animation
function addRippleCSS() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .mobile-menu-btn {
            display: none;
        }
        
        @media (max-width: 767px) {
            .mobile-menu-btn {
                display: block !important;
            }
            
            .nav .hidden {
                display: none !important;
            }
        }
        
        @media (min-width: 768px) {
            .mobile-menu-btn {
                display: none !important;
            }
        }
        
        .nav-link.active {
            color: var(--portfolio-green-dark) !important;
            font-weight: 600;
        }
    `;
    document.head.appendChild(style);
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    highlightNavigationOnScroll();
    addProjectCardEffects();
    addMobileMenuToggle();
    addScrollAnimations();
    addButtonEffects();
    addRippleCSS();
    
    // Initialize carousel
    setActiveSlide(0);
    
    // Optional: Start auto-rotating carousel
    // startCarousel();
    
    // Optional: Add typing effect
    // addTypingEffect();
    
    console.log('Portfolio loaded successfully!');
});

// Add some utility functions for external use
window.Portfolio = {
    scrollToSection,
    setActiveSlide,
    activeSlide: () => activeSlide
};
