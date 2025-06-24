document.addEventListener('DOMContentLoaded', function() {
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
    
    // Testimonials Slider
    const testimonialsSlider = document.querySelector('.testimonials-slider');
    const testimonialsTrack = document.querySelector('.testimonials-slider-track');
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const prevButton = document.querySelector('.testimonial-arrow.prev');
    const nextButton = document.querySelector('.testimonial-arrow.next');

    if (testimonialsTrack && testimonialSlides.length > 0) {
        let currentSlide = 0;
        let slidesToShow = 3; // Default for desktop
        let isAnimating = false;

        // Set up the slider
        function setupTestimonialsSlider() {
            // Update slides to show based on screen width
            if (window.innerWidth < 768) {
                slidesToShow = 1;
            } else if (window.innerWidth < 992) {
                slidesToShow = 1.5; // Show 1.5 cards at a time on tablet
            } else {
                slidesToShow = 1.8; // Show 1.8 cards at a time on desktop for partial visibility
            }
            
            const slideCount = testimonialSlides.length;
            const slideWidth = 100 / slidesToShow;
            
            // Set track width to fit all slides with proper spacing
            const slideMargin = 20; // 10px on each side
            const slideWidthWithMargin = `calc(${100 / slidesToShow}% - ${slideMargin}px)`;
            
            // Update slide styles
            testimonialSlides.forEach((slide, index) => {
                slide.style.flex = `0 0 ${slideWidthWithMargin}`;
                slide.style.maxWidth = slideWidthWithMargin;
                slide.style.margin = `0 ${slideMargin/2}px`;
                slide.style.boxSizing = 'border-box';
                slide.style.display = 'inline-flex';
                slide.style.height = 'auto';
            });
            
            // Set track width to accommodate all slides with margins
            const totalWidth = (100 * slideCount / slidesToShow) + 
                             (slideMargin * (slideCount - 1) / slidesToShow);
            testimonialsTrack.style.width = `${totalWidth}%`;
            
            // Initial position
            goToSlide(0);
        }

        // Go to specific slide
        function goToSlide(slideIndex) {
            if (isAnimating) return;
            
            const slideCount = testimonialSlides.length;
            const maxSlide = Math.max(0, slideCount - slidesToShow);
            
            // Constrain slide index
            currentSlide = Math.max(0, Math.min(slideIndex, maxSlide));
            
            // Calculate translateX value based on slide width and margins
            const slideWidth = 100 / slidesToShow;
            const slideMargin = 20; // 10px on each side
            const slideWidthWithMargin = `calc(${100 / slidesToShow}% - ${slideMargin}px)`;
            const translateX = -((currentSlide * 100) / slidesToShow) + 
                             ((currentSlide * slideMargin) / slidesToShow);
            
            // Apply transform with smooth transition
            isAnimating = true;
            testimonialsTrack.style.transition = 'transform 0.5s ease';
            testimonialsTrack.style.transform = `translateX(${translateX}%)`;
            
            // Update button states
            updateButtonStates();
            
            // Update ARIA live region
            updateAriaLiveRegion();
            
            // Reset animation flag after transition
            setTimeout(() => {
                isAnimating = false;
            }, 500);
        }

        // Update navigation button states
        function updateButtonStates() {
            const slideCount = testimonialSlides.length;
            const maxSlide = Math.max(0, slideCount - slidesToShow);
            
            if (prevButton) {
                prevButton.disabled = currentSlide === 0;
                prevButton.setAttribute('aria-disabled', currentSlide === 0);
            }
            
            if (nextButton) {
                nextButton.disabled = currentSlide >= maxSlide;
                nextButton.setAttribute('aria-disabled', currentSlide >= maxSlide);
            }
        }

        // Event listeners for navigation
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                if (currentSlide > 0) {
                    goToSlide(currentSlide - 1);
                }
            });
        }

        if (nextButton) {
            nextButton.addEventListener('click', () => {
                goToSlide(currentSlide + 1);
            });
        }

        // Handle window resize
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                setupTestimonialsSlider();
            }, 250);
        });

        // Initialize the slider
        setupTestimonialsSlider();
        
        // Recalculate on images load
        window.addEventListener('load', setupTestimonialsSlider);
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
        if (prevArrow && nextArrow) {
            prevArrow.style.display = currentSlide > 0 ? 'block' : 'none';
            nextArrow.style.display = currentSlide < totalSlides - 1 ? 'block' : 'none';
        }
    };
    
    // Navigation functions for tours
    const goToPrevSlide = () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateSliderPosition();
        }
    };
    
    const goToNextSlide = () => {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateSliderPosition();
            
            // Trigger scroll reveal for newly visible cards
            const newCards = slides[currentSlide].querySelectorAll('.tour-card');
            newCards.forEach((card, index) => {
                if (!card.classList.contains('active')) {
                    setTimeout(() => card.classList.add('active'), index * 100);
                }
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
