document.addEventListener('DOMContentLoaded', function() {
    // --- Vectorshift Chatbot FAB Logic ---
    const vsFab = document.getElementById('vs-chatbot-fab');
    const vsWidget = document.getElementById('vectorshift-chat-widget');
    let chatOpen = false;

    function openChat() {
        if (vsWidget) {
            vsWidget.style.display = 'block';
            vsWidget.contentWindow?.postMessage?.('open', '*');
            chatOpen = true;
        }
    }
    function closeChat() {
        if (vsWidget) {
            vsWidget.style.display = 'none';
            chatOpen = false;
        }
    }
    // Hide widget by default
    if (vsWidget) vsWidget.style.display = 'none';
    // FAB click toggles chat
    if (vsFab) {
        vsFab.addEventListener('click', function() {
            if (!chatOpen) {
                openChat();
            } else {
                closeChat();
            }
        });
        vsFab.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                vsFab.click();
            }
        });
    }
    // Optional: click outside widget to close (if widget is modal)
    // window.addEventListener('click', function(e) {
    //     if (chatOpen && vsWidget && !vsWidget.contains(e.target) && e.target !== vsFab) {
    //         closeChat();
    //     }
    // });
    // --- End Vectorshift Chatbot FAB Logic ---

    //     if (chatOpen && vsWidget && !vsWidget.contains(e.target) && e.target !== vsFab) {
    //         closeChat();
    //     }
    // });
    // --- End Vectorshift Chatbot FAB Logic ---

    // Initialize scroll reveal
    const initScrollReveal = () => {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        // Add scroll reveal to elements with animation delay
        const revealElements = document.querySelectorAll('.scroll-reveal');
        
        // Set animation delays for elements with data-delay attribute
        revealElements.forEach((element, index) => {
            const delay = element.getAttribute('data-delay') || index * 100;
            element.style.animationDelay = `${delay}ms`;
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Don't unobserve to allow for re-animation on scroll
                }
            });
        }, observerOptions);

        // Observe all reveal elements
        revealElements.forEach(element => {
            observer.observe(element);
        });
    };

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking on a nav link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    // Smooth scrolling for anchor links
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

    // Sticky navbar on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        let lastScroll = 0;

        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll <= 0) {
                navbar.classList.remove('scroll-up');
                return;
            }
            
            if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
                // Scroll down
                navbar.classList.remove('scroll-up');
                navbar.classList.add('scroll-down');
            } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
                // Scroll up
                navbar.classList.remove('scroll-down');
                navbar.classList.add('scroll-up');
            }
            
            lastScroll = currentScroll;
        });
    }

    // Active link highlighting on scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    function highlightNav() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNav);

    // Tour slider navigation
    const sliderTrack = document.querySelector('.tours-slider-track');
    const slides = document.querySelectorAll('.tour-slide');
    const prevArrow = document.querySelector('.tours-container .slider-arrow.prev');
    const nextArrow = document.querySelector('.tours-container .slider-arrow.next');
    
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        testimonialsTrack.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const swipeDifference = touchStartX - touchEndX;
            
            if (swipeDifference > swipeThreshold) {
                goToNextSlide();
            } else if (swipeDifference < -swipeThreshold) {
                goToPrevSlide();
            }
        }
    }
    }

    // Navigation functions for testimonials
    function goToTestimonialSlide(index) {
        // Ensure index is within bounds
        const maxSlide = Math.max(0, totalTestimonialSlides - slidesPerView);
        currentTestimonialSlide = Math.max(0, Math.min(index, maxSlide));
        
        // Update the slider position
        updateTestimonialSliderPosition();
        
        // Update URL hash if needed
        const slideId = `testimonial-slide-${currentTestimonialSlide}`;
        if (history.pushState) {
            history.pushState(null, null, `#${slideId}`);
        } else {
            window.location.hash = slideId;
        }
        
        // Focus on the first visible slide for keyboard users
        const firstVisibleSlide = testimonialSlides[currentTestimonialSlide];
        if (firstVisibleSlide) {
            firstVisibleSlide.focus({ preventScroll: true });
        }
    }

    // Initialize the slider
    if (testimonialSlider && testimonialTrack && testimonialSlides.length > 0) {
        // Set up initial slide positions and track width
        updateTestimonialTrackWidth();
        
        // Handle window resize
        let resizeTimer;
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                updateTestimonialTrackWidth();
            }, 250);
        };
        
        window.addEventListener('resize', handleResize);
        
        // Update slides per view based on screen size
        const updateSlidesPerView = () => {
            const width = window.innerWidth;
            if (width < 768) {
                slidesPerView = 1;
            } else if (width < 992) {
                slidesPerView = 2;
            } else {
                slidesPerView = 3;
            }
            updateTestimonialTrackWidth();
        };
        
        updateSlidesPerView();
        window.addEventListener('resize', updateSlidesPerView);
        
        // Handle keyboard navigation
        testimonialSlider.setAttribute('tabindex', '0');
        testimonialSlider.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    goToPrevTestimonial();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    goToNextTestimonial();
                    break;
                case 'Home':
                    e.preventDefault();
                    goToTestimonialSlide(0);
                    break;
                case 'End':
                    e.preventDefault();
                    goToTestimonialSlide(totalTestimonialSlides - slidesPerView);
                    break;
            }
        });
        
        // Add live region for screen readers
        const liveRegion = document.createElement('div');
        liveRegion.id = 'testimonial-slide-live-region';
        liveRegion.className = 'sr-only';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        testimonialSlider.appendChild(liveRegion);
    }

    // Update slide width based on number of slides
    const updateSlideWidth = () => {
        // Update tour slides
        if (sliderTrack && slides.length > 0) {
            slides.forEach(slide => {
                slide.style.width = `${sliderTrack.offsetWidth}px`;
            });
        }
        
        // Update testimonial slides
        if (testimonialTrack && testimonialSlides.length > 0) {
            testimonialSlides.forEach(slide => {
                slide.style.width = `${testimonialTrack.offsetWidth}px`;
            });
        }
    };
    
    // Call on load and resize
    updateSlideWidth();
    window.addEventListener('resize', updateSlideWidth);
    
    // Initialize current slide positions
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Function to update tour slider position
    const updateSliderPosition = () => {
        if (!sliderTrack) return;
        
        sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update arrow visibility
            });
        }
    };
    
    // Add event listeners for tour slider arrows
    if (prevArrow && nextArrow) {
        prevArrow.addEventListener('click', goToPrevSlide);
        nextArrow.addEventListener('click', goToNextSlide);
    }
    
    // Initialize slider positions
    updateSliderPosition();
    
    // Initialize testimonials slider with auto-advance
    if (testimonialSlides.length > 0) {
        updateTestimonialSliderPosition();
        
        // Auto-advance slides
        let slideInterval;
        const startAutoSlide = () => {
            slideInterval = setInterval(() => {
                if (currentTestimonialSlide < totalTestimonialSlides - 1) {
                    goToNextTestimonial();
                } else {
                    goToTestimonialSlide(0); // Loop back to first slide
                }
            }, 8000); // Change slide every 8 seconds
        };
        
        // Pause auto-slide on hover/focus
        const pauseAutoSlide = () => {
            clearInterval(slideInterval);
        };
        
        // Start auto-slide
        startAutoSlide();
        
        // Pause on hover/focus
        const testimonialSlider = document.querySelector('.testimonials-slider');
        if (testimonialSlider) {
            testimonialSlider.addEventListener('mouseenter', pauseAutoSlide);
            testimonialSlider.addEventListener('focusin', pauseAutoSlide);
            testimonialSlider.addEventListener('mouseleave', startAutoSlide);
            testimonialSlider.addEventListener('focusout', startAutoSlide);
        }
    }
    
    // Initialize scroll reveal
    initScrollReveal();
    
    // Handle window resize
    window.addEventListener('resize', () => {
        updateSlideWidth();
        // Recalculate slider positions after resize
        updateSliderPosition();
        if (testimonialSlides.length > 0) {
            updateTestimonialSliderPosition();
        }
    });
});
