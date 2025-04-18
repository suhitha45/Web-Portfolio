// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add active class to current navigation item
    const currentLocation = location.pathname;
    const menuItems = document.querySelectorAll('.nav-link');
    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentLocation) {
            item.classList.add('active');
        }
    });

    // Form validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }

            // If validation passes, submit the form
            this.submit();
        });
    }

    // Gallery image hover effect
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('.gallery-overlay').style.opacity = '1';
        });
        item.addEventListener('mouseleave', function() {
            this.querySelector('.gallery-overlay').style.opacity = '0';
        });
    });

    // Add animation to skill bars
    const skillBars = document.querySelectorAll('.progress-bar');
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    };

    // Trigger skill bar animation when skills section is in view
    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(skillsSection);
    }

    // Animate skill progress bars
    const progressBars = document.querySelectorAll('.skill-progress');
    
    const animateProgressBars = () => {
        progressBars.forEach(progress => {
            const level = progress.dataset.level;
            const bar = progress.querySelector('.progress-bar');
            bar.style.setProperty('--progress', `${level}%`);
            bar.style.width = `${level}%`;
        });
    };

    // Animate on page load
    animateProgressBars();

    // Animate when scrolled into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target;
                const level = progress.dataset.level;
                const bar = progress.querySelector('.progress-bar');
                bar.style.width = `${level}%`;
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(progress => observer.observe(progress));
}); 