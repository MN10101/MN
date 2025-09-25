// Title Protection Guard
(function() {
    // List of allowed titles
    const allowedTitles = [
        "Mahmoud Najmeh | Full-Stack Engineer",
        "MN Portfolio",
        "Mahmoud Najmeh - Portfolio"
    ];
    
    // Immediately enforce a valid title
    if (!allowedTitles.includes(document.title)) {
        document.title = allowedTitles[0];
    }
    
    // Monitor for title changes
    let lastValidTitle = document.title;
    const titleObserver = new MutationObserver(() => {
        if (!allowedTitles.includes(document.title)) {
            console.warn('Invalid title detected:', document.title);
            document.title = lastValidTitle;
        } else {
            lastValidTitle = document.title;
        }
    });
    
    titleObserver.observe(document.querySelector('title'), {
        subtree: true,
        characterData: true,
        childList: true
    });
})();

// Dynamic title animation - WITH ARABIC SUPPORT (FIXED)
const titleSlider = document.querySelector('.title-slider');
const titleUnderline = document.querySelector('.title-underline');
const titleSegments = document.querySelectorAll('.title-segment');

let currentIndex = 0;
let titleInterval;

function rotateTitle() {
    const isArabic = document.documentElement.lang === 'ar';
    
    currentIndex = (currentIndex + 1) % titleSegments.length;
    
    // Different behavior for Arabic vs other languages
    if (isArabic) {
        // For Arabic: Use opacity and position instead of display none/flex
        titleSegments.forEach((seg, index) => {
            if (index === currentIndex) {
                seg.style.opacity = '1';
                seg.style.visibility = 'visible';
                seg.style.position = 'relative';
                seg.classList.add('active');
            } else {
                seg.style.opacity = '0';
                seg.style.visibility = 'hidden';
                seg.style.position = 'absolute';
                seg.classList.remove('active');
            }
        });
        
        // No translation needed for Arabic
        titleSlider.style.transform = 'translateY(0)';
    } else {
        // Original behavior for other languages
        const offset = -currentIndex * 3.5;
        
        titleSegments.forEach((seg, index) => {
            seg.style.opacity = '1';
            seg.style.visibility = 'visible';
            seg.style.position = 'relative';
            seg.classList.toggle('active', index === currentIndex);
        });
        
        titleSlider.style.transform = `translateY(${offset}rem)`;
    }
    
    // Animate the underline
    titleUnderline.style.animation = 'none';
    void titleUnderline.offsetWidth;
    titleUnderline.style.animation = 'underlineGrow 1s ease forwards';
}

// Initialize titles based on language
function initializeTitles() {
    const isArabic = document.documentElement.lang === 'ar';
    
    if (isArabic) {
        // For Arabic: Show only the first title initially using opacity/position
        titleSegments.forEach((seg, index) => {
            if (index === 0) {
                seg.style.opacity = '1';
                seg.style.visibility = 'visible';
                seg.style.position = 'relative';
                seg.classList.add('active');
            } else {
                seg.style.opacity = '0';
                seg.style.visibility = 'hidden';
                seg.style.position = 'absolute';
                seg.classList.remove('active');
            }
        });
        titleSlider.style.transform = 'translateY(0)';
    } else {
        // For other languages: Show all titles in slider
        titleSegments.forEach((seg, index) => {
            seg.style.opacity = '1';
            seg.style.visibility = 'visible';
            seg.style.position = 'relative';
            seg.classList.toggle('active', index === 0);
        });
    }
}

// Restart title animation with new language settings
function restartTitleAnimation() {
    if (titleInterval) {
        clearInterval(titleInterval);
    }
    initializeTitles();
    titleInterval = setInterval(rotateTitle, 3000);
}

// Call initialization on page load
document.addEventListener('DOMContentLoaded', () => {
    restartTitleAnimation();
    
    // Also re-initialize when language changes
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.addEventListener('change', () => {
            // Small delay to allow the language change to take effect
            setTimeout(restartTitleAnimation, 100);
        });
    }
});

// Cursor trail effect
const trails = [];
const trailCount = 10;

// Create trail elements
for (let i = 0; i < trailCount; i++) {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.opacity = 1 - (i / trailCount);
    trail.style.transform = `scale(${1 - (i * 0.08)})`;
    trail.style.position = 'fixed'; 
    trail.style.pointerEvents = 'none'; 
    document.body.appendChild(trail);
    trails.push(trail);
}

// Function to update trail positions
function updateTrailPosition(x, y) {
    trails.forEach((trail, index) => {
        setTimeout(() => {
            trail.style.left = `${x}px`;
            trail.style.top = `${y}px`;
            trail.style.display = 'block'; 
        }, index * 30);
    });
}

// Function to hide all trails
function hideTrails() {
    trails.forEach(trail => {
        trail.style.display = 'none';
    });
}

// Handle touch events
document.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    updateTrailPosition(touch.clientX, touch.clientY);
});

document.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    updateTrailPosition(touch.clientX, touch.clientY);
});

document.addEventListener('touchend', () => {
    hideTrails(); 
});

// Handle mouse events (for desktop)
document.addEventListener('mousemove', (e) => {
    updateTrailPosition(e.clientX, e.clientY);
});

// Clear trails on scroll
window.addEventListener('scroll', () => {
    hideTrails();
});

// Back to top button
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form submission and redirect
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) {
        console.error('Contact form not found!');
        return;
    }

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const formAction = contactForm.getAttribute('action');

        try {
            const response = await fetch(formAction, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                window.location.href = 'thank-you.html';
            } else {
                const errorData = await response.json();
                console.error('Form submission error:', errorData, 'Status:', response.status);
                alert(`Form submission failed: ${errorData.error || 'Unknown error'}. Please try again later.`);
            }
        } catch (error) {
            console.error('Network or other error:', error.message);
            alert('A network error occurred. Please check your connection and try again.');
        }
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Make orbits interactive
    document.querySelectorAll('.orbit').forEach(orbit => {
        orbit.addEventListener('mouseenter', () => {
            orbit.style.boxShadow = `0 0 15px ${getComputedStyle(orbit).color}`;
            orbit.style.borderStyle = 'solid';
        });
        
        orbit.addEventListener('mouseleave', () => {
            orbit.style.boxShadow = 'none';
            orbit.style.borderStyle = 'dashed';
        });
    });

    // Pause animation on hover for better readability
    document.querySelector('.tech-orbits').addEventListener('mouseenter', () => {
        document.querySelectorAll('.orbit').forEach(orbit => {
            orbit.style.animationPlayState = 'paused';
        });
    });

    document.querySelector('.tech-orbits').addEventListener('mouseleave', () => {
        document.querySelectorAll('.orbit').forEach(orbit => {
            orbit.style.animationPlayState = 'running';
        });
    });

    // Keep orbit labels upright
    const orbitWrappers = document.querySelectorAll('.orbit');

    function updateLabelRotations() {
        orbitWrappers.forEach(orbit => {
            const wrapper = orbit.querySelector('.label-wrapper');
            const computedStyle = getComputedStyle(orbit);
            const transform = computedStyle.transform;

            if (transform && transform !== 'none') {
                const values = transform.split('(')[1].split(')')[0].split(',');
                const a = values[0], b = values[1];
                const angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
                wrapper.style.transform = `translateX(-50%) rotate(${-angle}deg)`;
            }
        });

        requestAnimationFrame(updateLabelRotations);
    }

    updateLabelRotations();

    // Toggle education details
    document.querySelectorAll('.toggle-details').forEach(button => {
        button.addEventListener('click', () => {
            const details = button.nextElementSibling;
            const isHidden = details.style.display === 'none' || !details.style.display;
            const currentLang = document.documentElement.lang || 'en'; 
            details.style.display = isHidden ? 'block' : 'none';
            button.textContent = isHidden ? translations[currentLang].education.toggleHide : translations[currentLang].education.toggle;
        });
    });

    // Section Indicator Logic
    const sections = document.querySelectorAll('.section');
    const indicatorsContainer = document.querySelector('.section-indicators');
    let lastScrollY = window.scrollY;

    // Map section IDs to custom indicator labels
    const sectionLabels = {
        'about': 'About Me',
        'projects': 'Projects',
        'contact': 'Contact'
    };

    // Create indicators dynamically
    sections.forEach((section, index) => {
        const sectionId = section.getAttribute('id');
        const sectionTitle = sectionLabels[sectionId] || section.querySelector('.section-title')?.textContent || sectionId;
        const indicator = document.createElement('div');
        indicator.classList.add('section-indicator');
        indicator.setAttribute('data-section', sectionId);
        indicator.innerHTML = `<span>${sectionTitle}</span>`;
        indicatorsContainer.appendChild(indicator);
    });

    // Handle scroll events
    function handleScroll() {
        const currentScrollY = window.scrollY;
        const indicators = document.querySelectorAll('.section-indicator');

        // Hide indicators when near the top of the page
        if (currentScrollY <= 100) {
            indicatorsContainer.classList.add('hidden');
            indicators.forEach(indicator => indicator.classList.remove('active'));
            lastScrollY = currentScrollY;
            return;
        } else {
            indicatorsContainer.classList.remove('hidden');
        }

        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const indicator = indicators[index];

            // Check if section is in viewport
            const isInView = rect.top >= -window.innerHeight * 0.2 && rect.top <= window.innerHeight * 0.5;

            if (isInView) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });

        lastScrollY = currentScrollY;
    }

    // Throttle scroll event for performance
    function throttle(fn, wait) {
        let lastCall = 0;
        return function (...args) {
            const now = new Date().getTime();
            if (now - lastCall < wait) return;
            lastCall = now;
            return fn(...args);
        };
    }

    // Add scroll event listener
    window.addEventListener('scroll', throttle(handleScroll, 100));

    // Make indicators clickable
    indicatorsContainer.addEventListener('click', (e) => {
        const indicator = e.target.closest('.section-indicator');
        if (indicator) {
            const sectionId = indicator.getAttribute('data-section');
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });

    // Initial check on page load
    handleScroll();
});