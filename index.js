document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Toggle icon between bars and times (X)
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // 2. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = "1rem 5%";
            navbar.style.background = "rgba(15, 23, 42, 0.98)";
            navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
        } else {
            navbar.style.padding = "1.5rem 5%";
            navbar.style.background = "rgba(15, 23, 42, 0.95)";
            navbar.style.boxShadow = "none";
        }
    });

    // 3. Scroll Animation (Reveal elements on scroll)
    const revealElements = document.querySelectorAll('.card, .project-card, .section-header');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        revealElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - elementVisible) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }
        });
    };

    // Initial style for animation
    revealElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(50px)";
        el.style.transition = "all 0.6s ease-out";
    });

    window.addEventListener('scroll', revealOnScroll);
    // Trigger once on load
    revealOnScroll();

    // 4. Contact Form Handling
    const contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get values (simulated)
        const inputs = contactForm.querySelectorAll('input, textarea');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '#333';
            }
        });

        if (isValid) {
            // Simulate sending
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = "Sending...";
            btn.style.background = "#27c93f";
            
            setTimeout(() => {
                alert(Thanks for reaching out, ${inputs[0].value}! I will contact you soon.);
                contactForm.reset();
                btn.innerText = originalText;
                btn.style.background = "";
            }, 1500);
        }
    });

    // 5. Dynamic Year in Footer
    const footerYear = document.querySelector('footer p');
    const year = new Date().getFullYear();
    footerYear.innerHTML = &copy; ${year} Pritam Brijesh Patel. All Rights Reserved.;
});