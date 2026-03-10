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
