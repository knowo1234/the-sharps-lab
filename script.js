// Random quiz count on page load (22-145)
const quizCountElement = document.getElementById('quiz-count');
if (quizCountElement) {
    const randomCount = Math.floor(Math.random() * (145 - 22 + 1)) + 22;
    quizCountElement.textContent = randomCount;
}

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navRight = document.querySelector('.nav-right');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navRight.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navRight.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navRight.contains(e.target)) {
            hamburger.classList.remove('active');
            navRight.classList.remove('active');
        }
    });
}

// Smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active state to nav on scroll
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.boxShadow = 'none';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
    }
    
    lastScroll = currentScroll;
});

// Optional: Analytics tracking for quiz interactions
// Add your tracking code here when you have analytics set up
function trackQuizStart() {
    // Example: gtag('event', 'quiz_start', { event_category: 'engagement' });
    console.log('Quiz started');
}

function trackQuizComplete() {
    // Example: gtag('event', 'quiz_complete', { event_category: 'conversion' });
    console.log('Quiz completed');
}

// You can add listeners to the quiz embed once it's loaded
// Example:
// window.addEventListener('message', (event) => {
//     if (event.data.type === 'form-submit') {
//         trackQuizComplete();
//     }
// });
