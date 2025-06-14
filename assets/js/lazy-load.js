document.addEventListener('DOMContentLoaded', function() {
    // Create an Intersection Observer instance
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src');
                
                if (src) {
                    img.src = src;
                    img.removeAttribute('data-src');
                }
                
                // Once the image is loaded, we don't need to observe it anymore
                observer.unobserve(img);
            }
        });
    }, {
        // Start loading images when they're 100px from entering the viewport
        rootMargin: '100px 0px',
        threshold: 0.1
    });

    // Find all images with data-src attribute and observe them
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}); 