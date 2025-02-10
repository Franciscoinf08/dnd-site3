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



document.addEventListener("DOMContentLoaded", function () {

    const categorias = {

        classe: ["Guerreiro", "Mago", "Ladino", "Clérigo"],

        raca: ["Humano", "Elfo", "Anão", "Orc"],

        aparencia: ["Cabelos", "Olhos", "Pele", "Altura"],

        equipamento: ["Espada", "Cajado", "Arco", "Escudo"],

        armadura: ["Leve", "Média", "Pesada", "Mistica"]

    };

    const botoesPersonagem = document.querySelectorAll(".personagem > div");

    const menuHorizontal = document.querySelector(".escolhas");
    
    botoesPersonagem.forEach(botao => {

        botao.addEventListener("click", function () {

            const categoria = this.id.toLowerCase(); // Usa o ID do botão como chave

            if (categorias[categoria]) {

                atualizarMenuHorizontal(categorias[categoria]);

            }

        });

    });

    function atualizarMenuHorizontal(opcoes) {

        menuHorizontal.innerHTML = "";

        opcoes.forEach(opcao => {

            const div = document.createElement("div");

            div.textContent - opcao;
        })
    }    
})