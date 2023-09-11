// Open the modal with the clicked image
function openModal(imageSrc) {
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');

    modal.style.display = 'block';
    modalImage.src = imageSrc;
}

// Close the modal
function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Add click event listeners to all gallery items
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(function(item) {
    item.addEventListener('click', function() {
        const imageSrc = item.getAttribute('data-src');
        openModal(imageSrc);
    });
});
