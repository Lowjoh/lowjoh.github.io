document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for header height
                behavior: 'smooth'
            });
        });
    });

    // Simple animations for section elements using Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all major sections
    document.querySelectorAll('section').forEach(section => {
        // Add the base class for animations
        section.classList.add('animate-ready');
        observer.observe(section);
    });

    // Add animation classes to elements within sections
    document.querySelectorAll('.feature-card, .benefit-item, .workflow-step, .use-case-card').forEach(el => {
        el.classList.add('animate-ready');
        observer.observe(el);
    });

    // Mobile menu toggle (for responsive design)
    const navElement = document.querySelector('nav ul');
    const hamburgerButton = document.createElement('button');
    hamburgerButton.classList.add('mobile-menu-toggle');
    hamburgerButton.innerHTML = '<span></span><span></span><span></span>';
    
    document.querySelector('header .container').insertBefore(
        hamburgerButton, 
        document.querySelector('nav')
    );
    
    hamburgerButton.addEventListener('click', () => {
        navElement.classList.toggle('show');
        hamburgerButton.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navElement.contains(e.target) && !hamburgerButton.contains(e.target) && navElement.classList.contains('show')) {
            navElement.classList.remove('show');
            hamburgerButton.classList.remove('active');
        }
    });

    // Add animation styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .animate-ready {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .workflow-step.animate-ready {
            transform: translateX(-20px);
        }
        
        .workflow-step.animate-in {
            transform: translateX(0);
        }
        
        /* Staggered animations for cards */
        .feature-card:nth-child(2),
        .benefit-item:nth-child(2),
        .use-case-card:nth-child(2) {
            transition-delay: 0.1s;
        }
        
        .feature-card:nth-child(3),
        .benefit-item:nth-child(3),
        .use-case-card:nth-child(3) {
            transition-delay: 0.2s;
        }
        
        .feature-card:nth-child(4),
        .benefit-item:nth-child(4),
        .use-case-card:nth-child(4) {
            transition-delay: 0.3s;
        }
        
        /* Mobile menu styles */
        @media (max-width: 768px) {
            .mobile-menu-toggle {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 30px;
                height: 21px;
                background: transparent;
                border: none;
                cursor: pointer;
                padding: 0;
                z-index: 10;
            }
            
            .mobile-menu-toggle span {
                display: block;
                width: 100%;
                height: 3px;
                background-color: var(--text-color);
                border-radius: 3px;
                transition: all 0.3s ease;
            }
            
            .mobile-menu-toggle.active span:nth-child(1) {
                transform: translateY(9px) rotate(45deg);
            }
            
            .mobile-menu-toggle.active span:nth-child(2) {
                opacity: 0;
            }
            
            .mobile-menu-toggle.active span:nth-child(3) {
                transform: translateY(-9px) rotate(-45deg);
            }
            
            nav ul {
                position: fixed;
                top: 80px;
                left: 0;
                width: 100%;
                background-color: white;
                display: none;
                flex-direction: column;
                padding: 1rem;
                box-shadow: var(--shadow-md);
            }
            
            nav ul.show {
                display: flex;
            }
        }
    `;
    
    document.head.appendChild(style);
}); 