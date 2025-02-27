// lazyLoad.js
document.addEventListener('DOMContentLoaded', function() {
 const images = document.querySelectorAll('.lazy-load');

 const lazyLoad = function(entry) {
 const image = entry.target;
 if (entry.isIntersecting) {
 image.src = image.dataset.src;
 image.classList.add('loaded');
 observer.unobserve(image);
 }
 };

 const observer = new IntersectionObserver(lazyLoad);

 images.forEach(image => {
 observer.observe(image);
 });
});
