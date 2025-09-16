// Ad Blocker Enhancer v1 for Sloth Web
console.log("Ad Blocker Enhancer v1 loaded");
document.addEventListener('DOMContentLoaded', function() {
    const adElements = document.querySelectorAll('.ad, .advertisement');
    adElements.forEach(el => el.style.display = 'none');
});
