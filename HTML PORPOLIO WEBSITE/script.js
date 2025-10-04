
// Initialize Feather Icons
feather.replace();

document.addEventListener('DOMContentLoaded', () => {
    // Role Rotator
    const roles = ["IT Student", "Aspiring Developer", "Problem Solver", "Tech Enthusiast"];
    let currentRoleIndex = 0;
    const roleRotator = document.getElementById('role-rotator');
    function updateRole() {
        if (roleRotator) {
            roleRotator.style.opacity = '0';
            setTimeout(() => {
                currentRoleIndex = (currentRoleIndex + 1) % roles.length;
                roleRotator.textContent = roles[currentRoleIndex];
                roleRotator.style.opacity = '1';
            }, 500);
        }
    }
    if (roleRotator) {
        roleRotator.textContent = roles[0];
        roleRotator.style.opacity = '1';
        setInterval(updateRole, 3000);
    }

    // Card Fade-In Animation
    const cards = document.querySelectorAll('.anim-fade-in');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        cards.forEach(card => observer.observe(card));
    } else {
        cards.forEach(card => {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        });
    }
});