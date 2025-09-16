// Ad Blocker Enhancer v2 for Sloth Web
console.log("Ad Blocker Enhancer v2 loaded");
document.addEventListener('DOMContentLoaded', function() {
    const adElements = document.querySelectorAll('.ad, .advertisement, .banner-ad');
    adElements.forEach(el => el.style.display = 'none');
    console.log("Enhanced ad blocking applied to", adElements.length, "elements");
});
