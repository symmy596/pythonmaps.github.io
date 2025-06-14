// Get all modals
var modals = document.getElementsByClassName('modal');

// Add click event to all images
document.querySelectorAll('.myImg').forEach(function(img) {
    img.addEventListener('click', function() {
        // Find the modal that's a sibling of this image
        var modal = this.nextElementSibling;
        if (modal && modal.classList.contains('modal')) {
            // Get the modal content image
            var modalImg = modal.querySelector('.modal-content');
            // Get the caption element
            var caption = modal.querySelector('#caption');
            
            // Set the source using data-src if available
            var newSrc = this.getAttribute('data-src') || this.src;
            modalImg.src = newSrc;
            
            // Set the caption
            if (caption) {
                caption.innerHTML = this.alt;
            }
            
            // Show the modal
            modal.style.display = "block";
        }
    });
});

// Add click event to all close buttons
document.querySelectorAll('.close').forEach(function(closeBtn) {
    closeBtn.addEventListener('click', function() {
        // Find the parent modal and hide it
        var modal = this.closest('.modal');
        if (modal) {
            modal.style.display = "none";
        }
    });
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
});
