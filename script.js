// Parallax effect for TikTok cards
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.tiktok-card');
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardX = rect.left + rect.width / 2;
        const cardY = rect.top + rect.height / 2;

        const angleX = (mouseY - cardY) / 30;
        const angleY = (mouseX - cardX) / -30;

        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.05, 1.05, 1.05)`;
    });
});

// Reset card transform when mouse leaves
document.addEventListener('mouseleave', () => {
    const cards = document.querySelectorAll('.tiktok-card');
    cards.forEach(card => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Navbar animation on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

function copyContract() {
    const contractText = document.querySelector('.belt-text').textContent;
    navigator.clipboard.writeText(contractText).then(() => {
        showModal();
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

function showModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
    
    // Trigger reflow to ensure the transition works
    modal.offsetHeight;
    
    // Add show class after display is set
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    
    // Hide modal after delay
    setTimeout(() => {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }, 2000);
}

// Initialize modal on page load
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const beltText = document.querySelector('.belt-text');
    const beltImage = document.querySelector('.belt-image');
    
    // Hide modal initially
    modal.style.display = 'none';
    
    // Add click handlers
    beltText.addEventListener('click', copyContract);
    beltImage.addEventListener('click', copyContract);
}); 