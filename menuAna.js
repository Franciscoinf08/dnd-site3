document.querySelectorAll('.personagem > div').forEach(item => {
    item.addEventListener('click', function() {
        // Esconde todas as galerias
        document.querySelectorAll('.gallery').forEach(gallery => {
            gallery.style.display = 'none';
        });

        // Mostra a galeria correspondente
        const galleryClass = this.getAttribute('data-gallery');
        const gallery = document.querySelector(`.${galleryClass}`);
        gallery.style.display = 'block';

        // Mostra o primeiro item da galeria ao abrir
        const firstItem = gallery.querySelector('.itens span');
        if (firstItem) {
            firstItem.style.backgroundColor = '#b0b0b0';  // Destaca o primeiro item
        }
    });
});

// Navegação entre os itens da galeria
document.querySelectorAll('.itens span').forEach(item => {
    item.addEventListener('click', function() {
        // Remove destaque de todos os itens
        const items = item.parentElement.querySelectorAll('span');
        items.forEach(i => {
            i.style.backgroundColor = '#e0e0e0'; // Retorna ao estilo padrão
        });

        // Destaca o item selecionado
        item.style.backgroundColor = '#b0b0b0';  // Destaca o item selecionado
    });
});
