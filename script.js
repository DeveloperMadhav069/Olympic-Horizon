// Add hover interaction to developer cards
document.querySelectorAll('.developer').forEach(developer => {
    developer.addEventListener('mouseenter', () => {
        developer.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
    });

    developer.addEventListener('mouseleave', () => {
        developer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
});
