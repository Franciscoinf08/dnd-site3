/*RESPONSIVO*//*RESPONSIVO*//*RESPONSIVO*//*RESPONSIVO*/

// const mobileMenu = document.querySelector(".mobile-menu");
// const navList = document.querySelector(".lista-menu");

// mobileMenu.addEventListener("click", () => {
//     navList.classList.toggle("active");
// });

//CODIGO DE ALTERAR SEÇAO DE ESCOLHA (PRONTO NAO ALTERAR)

let equipamento = document.querySelector("#equipamentoPersonalizacao");
let aparencia = document.querySelector("#aparenciaPersonalizacao");
let racas = document.querySelector("#racasPersonalizacao");
let classes = document.querySelector("#classesPersonalizacao");

let elementosPersonalizacao = [
    classes,
    racas,
    aparencia,
    equipamento
]
let escolhasSecoes = [
    document.querySelector("#classe"),
    document.querySelector("#raca"),
    document.querySelector("#aparencia"),
    document.querySelector("#equipamento")
]

let setaMenuVoltar = document.querySelector("#flecha-menu-esquerda");
let setaMenuAvancar = document.querySelector("#flecha-menu-direita");
let atual = 0;

elementosPersonalizacao[atual].style.display = "grid";
elementosPersonalizacao[atual].classList.add("visible");

setaMenuAvancar.addEventListener("click", () => {
    elementosPersonalizacao[atual].classList.remove("visible");
    
    setTimeout(() => {
        elementosPersonalizacao[atual].style.display = "none"; // Esconde o elemento atual
        atual = (atual + 1) % elementosPersonalizacao.length; // Avança para o próximo, voltando ao início se necessário
        
        elementosPersonalizacao[atual].style.display = "grid"; // Exibe o próximo
        setTimeout(() => {
            elementosPersonalizacao[atual].classList.add("visible"); // Adiciona a classe visível
        }, 10);
        
        destaque(escolhasSecoes, atual);
    }, 300);
});

setaMenuVoltar.addEventListener("click", () => {
    elementosPersonalizacao[atual].classList.remove("visible");
    
    setTimeout(() => {
        elementosPersonalizacao[atual].style.display = "none"; // Esconde o elemento atual
        atual = (atual - 1 + elementosPersonalizacao.length) % elementosPersonalizacao.length; // Volta para o anterior, mantendo o índice válido
        
        elementosPersonalizacao[atual].style.display = "grid"; // Exibe o próximo
        setTimeout(() => {
            elementosPersonalizacao[atual].classList.add("visible"); // Adiciona a classe visível
        }, 10);
        
        destaque(escolhasSecoes, atual);
    }, 300);
});

function destaque(selecionado, atual){
    for (let i = 0; i < selecionado.length; i++) {
        selecionado[i].classList.remove("selecionado");
        selecionado[i].classList.add("naoSelecionado");
    }
    selecionado[atual].classList.remove("naoSelecionado");
    selecionado[atual].classList.add("selecionado");
}

//CODIGO DE ALTERAR SEÇAO DE ESCOLHA (PRONTO NAO ALTERAR)



let botaoMenuDescricao = document.querySelectorAll(".personagem div");
let abaAberta = document.querySelectorAll(".itemGaleria");
let fundoDaAba = document.querySelector(".galeriaDeSelecao");

botaoMenuDescricao.forEach((botao, index) => {
    botao.addEventListener("click", () => {
        abaAberta.forEach(aba => aba.style.display = "none");
        abaAberta[index].style.display = "grid";
        fundoDaAba.style.display = "block";
    });
});

//Codigo para selecionar classes e raças

let vetorDeStrings = [
    "classe"
    
]