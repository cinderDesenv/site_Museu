document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.categorias a');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxDescricao = document.getElementById('lightbox-descricao');
    const closeBtn = document.querySelector('.close-btn');

    galleryItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();

            const imageUrl = this.getAttribute('href');
            const imageDescricao = this.getAttribute('data-descricao');

            lightboxImg.src = imageUrl;
            lightboxDescricao.textContent = imageDescricao;
            
            lightbox.classList.add('lightbox-show');
        });
    });

    closeBtn.addEventListener('click', function() {
        lightbox.classList.remove('lightbox-show');
    });

    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            lightbox.classList.remove('lightbox-show');
        }
    });
});