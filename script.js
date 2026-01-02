// ==================== //
// Navigation & Mobile Menu
// ==================== //

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ==================== //
// Smooth Scrolling
// ==================== //

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip if href is just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }

        const target = document.querySelector(href);

        if (target) {
            e.preventDefault();
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== //
// Intersection Observer for Animations
// ==================== //

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.service-card, .project-card, .section-header');
animateElements.forEach(el => observer.observe(el));

// ==================== //
// Contact Form Handling
// ==================== //

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    // Create mailto link with form data
    const subject = encodeURIComponent(`Service Inquiry: ${getServiceName(service)}`);
    const body = encodeURIComponent(
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Service: ${getServiceName(service)}\n\n` +
        `Message:\n${message}`
    );

    const mailtoLink = `mailto:services@redteamleaders.com?subject=${subject}&body=${body}`;

    // Open default email client
    window.location.href = mailtoLink;

    // Show success message
    showFormMessage('Thank you! Your email client will open to send the message.', 'success');

    // Reset form
    contactForm.reset();
});

// Helper function to get service name
function getServiceName(value) {
    const services = {
        'pentest': 'AI-Powered PenTest',
        'agents': 'Custom AI Agents',
        'consultation': 'Consultation',
        'other': 'Other'
    };
    return services[value] || 'General Inquiry';
}

// Show form message
function showFormMessage(message, type) {
    // Remove existing message if any
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        padding: 1rem;
        margin-top: 1rem;
        border-radius: 8px;
        text-align: center;
        background: ${type === 'success' ? 'rgba(0, 217, 255, 0.1)' : 'rgba(255, 0, 110, 0.1)'};
        color: ${type === 'success' ? 'var(--primary)' : 'var(--accent)'};
        border: 1px solid ${type === 'success' ? 'var(--primary)' : 'var(--accent)'};
    `;

    // Insert message after form
    contactForm.insertAdjacentElement('afterend', messageDiv);

    // Remove message after 5 seconds
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        messageDiv.style.transition = 'opacity 0.3s ease';
        setTimeout(() => messageDiv.remove(), 300);
    }, 5000);
}

// ==================== //
// Parallax Effect for Hero
// ==================== //

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    const heroVisual = document.querySelector('.hero-visual');

    if (hero && window.innerWidth > 768) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled / 800);
    }

    if (heroVisual && window.innerWidth > 768) {
        heroVisual.style.transform = `translateY(${scrolled * 0.15}px)`;
    }
});

// ==================== //
// Dynamic Grid Animation
// ==================== //

const cyberGrid = document.querySelector('.cyber-grid');

if (cyberGrid) {
    // Add random flicker effect to grid
    setInterval(() => {
        const randomOpacity = 0.2 + Math.random() * 0.2;
        cyberGrid.style.opacity = randomOpacity;
    }, 3000);
}

// ==================== //
// Service Cards Hover Effect
// ==================== //

const serviceCards = document.querySelectorAll('.service-card, .project-card');

serviceCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// ==================== //
// Active Navigation Link
// ==================== //

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==================== //
// Keyboard Navigation
// ==================== //

document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ==================== //
// Loading Animation
// ==================== //

window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Animate hero elements on load
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-buttons');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.animation = 'fadeInUp 0.8s ease-out forwards';
        }, index * 200);
    });
});

// ==================== //
// Performance Optimization
// ==================== //

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy operations
const debouncedScroll = debounce(() => {
    // Add any scroll-heavy operations here
}, 10);

window.addEventListener('scroll', debouncedScroll);

// ==================== //
// Console Easter Egg
// ==================== //

console.log(
    '%c Red Team Leaders ',
    'background: linear-gradient(135deg, #00d9ff 0%, #7c3aed 100%); color: white; padding: 10px 20px; font-size: 16px; font-weight: bold;'
);

console.log(
    '%c AI-Powered Security Solutions ',
    'color: #00d9ff; font-size: 14px; font-weight: bold;'
);

console.log(
    '%c Interested in joining our team? Send us an email at services@redteamleaders.com ',
    'color: #a0a0b0; font-size: 12px;'
);
