// Vitality.AI - Main JavaScript

// State Management
const state = {
  currentLang: 'en',
  isRTL: false
};

// Translations
const translations = {
  en: {
    home: 'Home',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    pricing: 'Pricing',
    bookAppointment: 'Book Appointment',
    login: 'Login',
    dashboard: 'Dashboard',
    heroTitle: 'Rejuvenate Your Life',
    heroSubtitle: 'Experience the future of health and wellness',
    bookNow: 'Book Now',
    learnMore: 'Learn More'
  },
  ar: {
    home: 'الرئيسية',
    services: 'الخدمات',
    about: 'عن',
    contact: 'اتصل',
    pricing: 'التسعير',
    bookAppointment: 'احجز موعد',
    login: 'تسجيل الدخول',
    dashboard: 'لوحة التحكم',
    heroTitle: 'جدد حياتك',
    heroSubtitle: 'اختبر مستقبل الصحة والعافية',
    bookNow: 'احجز الآن',
    learnMore: 'اعرف المزيد'
  }
};

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initLanguageToggle();
  initMobileMenu();
  initScrollAnimations();
  initFormValidation();
  loadStoredLanguage();
  initDropdowns();
});

// Toggle Dropdown Menu
function toggleDropdown(button) {
  const dropdown = button.parentElement;
  dropdown.classList.toggle('active');
  
  // Close other dropdowns
  document.querySelectorAll('.nav-dropdown').forEach(item => {
    if (item !== dropdown && item.classList.contains('active')) {
      item.classList.remove('active');
    }
  });
}

// Initialize Dropdowns
function initDropdowns() {
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-dropdown')) {
      document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
        dropdown.classList.remove('active');
      });
    }
  });
}

// Initialize Navbar Scroll Effect
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Initialize Language Toggle
function initLanguageToggle() {
  const langToggle = document.querySelector('.lang-toggle-switch');
  const langLabel = document.querySelector('.lang-label');
  
  if (!langToggle) return;
  
  langToggle.addEventListener('click', () => {
    toggleLanguage();
  });
}

// Toggle Language Function
function toggleLanguage() {
  const html = document.documentElement;
  const langToggle = document.querySelector('.lang-toggle-switch');
  const langLabel = document.querySelector('.lang-label');
  
  state.isRTL = !state.isRTL;
  state.currentLang = state.isRTL ? 'ar' : 'en';
  
  // Update HTML direction
  html.setAttribute('dir', state.isRTL ? 'rtl' : 'ltr');
  html.setAttribute('lang', state.currentLang);
  
  // Update toggle UI
  if (langToggle) {
    langToggle.classList.toggle('active');
  }
  
  if (langLabel) {
    langLabel.textContent = state.isRTL ? 'العربية' : 'English';
  }
  
  // Update all translatable elements
  updateTranslations();
  
  // Store preference
  localStorage.setItem('preferred-language', state.currentLang);
  localStorage.setItem('is-rtl', state.isRTL);
}

// Update Translations
function updateTranslations() {
  const elements = document.querySelectorAll('[data-translate]');
  const currentTranslations = translations[state.currentLang];
  
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (currentTranslations[key]) {
      element.textContent = currentTranslations[key];
    }
  });
}

// Load Stored Language Preference
function loadStoredLanguage() {
  const storedLang = localStorage.getItem('preferred-language');
  const storedRTL = localStorage.getItem('is-rtl') === 'true';
  
  if (storedLang && storedLang !== state.currentLang) {
    state.currentLang = storedLang;
    state.isRTL = storedRTL;
    
    const html = document.documentElement;
    html.setAttribute('dir', state.isRTL ? 'rtl' : 'ltr');
    html.setAttribute('lang', state.currentLang);
    
    const langToggle = document.querySelector('.lang-toggle-switch');
    const langLabel = document.querySelector('.lang-label');
    
    if (langToggle && state.isRTL) {
      langToggle.classList.add('active');
    }
    
    if (langLabel) {
      langLabel.textContent = state.isRTL ? 'العربية' : 'English';
    }
    
    updateTranslations();
  }
}

// Initialize Mobile Menu
function initMobileMenu() {
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (!mobileToggle || !navMenu) return;
  
  mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
  
  // Close menu when clicking nav links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileToggle.contains(e.target) && !navMenu.contains(e.target)) {
      mobileToggle.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });
}

// Initialize Scroll Animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach(el => observer.observe(el));
}

// Form Validation
function initFormValidation() {
  const forms = document.querySelectorAll('form[data-validate]');
  
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
      let isValid = true;
      
      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add('error');
          showError(input, 'This field is required');
        } else {
          input.classList.remove('error');
          removeError(input);
        }
        
        // Email validation
        if (input.type === 'email' && input.value) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(input.value)) {
            isValid = false;
            input.classList.add('error');
            showError(input, 'Please enter a valid email');
          }
        }
        
        // Phone validation
        if (input.type === 'tel' && input.value) {
          const phoneRegex = /^[\d\s\-\+\(\)]+$/;
          if (!phoneRegex.test(input.value)) {
            isValid = false;
            input.classList.add('error');
            showError(input, 'Please enter a valid phone number');
          }
        }
      });
      
      if (isValid) {
        handleFormSubmit(form);
      }
    });
    
    // Remove error on input
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        input.classList.remove('error');
        removeError(input);
      });
    });
  });
}

function showError(input, message) {
  removeError(input);
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.style.color = 'var(--color-coral)';
  errorDiv.style.fontSize = '0.875rem';
  errorDiv.style.marginTop = '0.25rem';
  errorDiv.textContent = message;
  input.parentElement.appendChild(errorDiv);
}

function removeError(input) {
  const errorDiv = input.parentElement.querySelector('.error-message');
  if (errorDiv) {
    errorDiv.remove();
  }
}

function handleFormSubmit(form) {
  // Show loading state
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span class="loader" style="width: 20px; height: 20px; border-width: 3px;"></span>';
  
  // Simulate API call
  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
    
    // Show success message
    showNotification('Success! Your form has been submitted.', 'success');
    form.reset();
  }, 2000);
}

// Notification System
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = 'notification glass-card';
  notification.style.position = 'fixed';
  notification.style.top = '100px';
  notification.style.right = state.isRTL ? 'auto' : '20px';
  notification.style.left = state.isRTL ? '20px' : 'auto';
  notification.style.zIndex = '10000';
  notification.style.padding = '1rem 1.5rem';
  notification.style.minWidth = '300px';
  notification.style.animation = 'fadeInUp 0.3s ease';
  
  const colors = {
    success: 'var(--color-sage)',
    error: 'var(--color-coral)',
    info: 'var(--color-lavender)'
  };
  
  notification.style.borderLeft = `4px solid ${colors[type] || colors.info}`;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'fadeOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Utility Functions
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

function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Export for use in other modules
window.VitalityAI = {
  state,
  toggleLanguage,
  showNotification,
  debounce,
  throttle
};
