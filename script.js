// console.log(dadosDeJogo)

// let section = document.getElementById("Dadosbusca");
// console.log(section);



// for(let dadinhos of dadosDeJogo)
// {

//     section.innerHTML += `

//         <section class="Dadostxtimg">
//             <img src=${dadinhos.imagem}>
//             <p>${dadinhos.titulo}</p>
//             <p>${dadinhos.descricao}</p>
//         </section>
// `
// }

/*RESPONSIVO*//*RESPONSIVO*//*RESPONSIVO*//*RESPONSIVO*/

// const mobileMenu = document.querySelector(".");
// const navList = document.querySelector(".lista-menu");

// mobileMenu.addEventListener("click", () => {
//     navList.classList.toggle(".active");
// });

/*RESPONSIVO*//*RESPONSIVO*//*RESPONSIVO*//*RESPONSIVO*/

// const escolhaClass =document.querySelector(".escolha-class");

// escolhaClass.addEventListener("click", () => {
//     navList.classList.toggle(".active2");
// }
// )

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

setaMenuAvancar.addEventListener("click", () => {
    elementosPersonalizacao[atual].style.display = "none";
    atual++;
    if (atual == 4) {
        atual = 0;
        elementosPersonalizacao[atual].style.display = "grid";
        destaque(escolhasSecoes, atual);
        return;
    }
    elementosPersonalizacao[atual].style.display = "grid";
    destaque(escolhasSecoes, atual);
});

setaMenuVoltar.addEventListener("click", () => {
    elementosPersonalizacao[atual].style.display = "none";
    atual--;
    if (atual == -1) {
        atual = 3;
        elementosPersonalizacao[atual].style.display = "grid";
        destaque(escolhasSecoes, atual);
        return;
    }
    elementosPersonalizacao[atual].style.display = "grid";
    destaque(escolhasSecoes, atual);
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
