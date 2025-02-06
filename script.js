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

const personagens = document.querySelectorAll('.personagem > div');//seleciona todos os divs
let janelaSelenada = null;//define como no inicio nao selecionado
for (let personagem of personagens) {
    personagem.addEventListener("click", (e) => {
        let botaoClicado = e.currentTarget;
        //console.log("Oioi: "+botaoClicado.dataset.janela); //pega o nome da janela
        let nomeJanela = botaoClicado.dataset.janela;
        let janela = document.querySelector("#" + nomeJanela);
        janela.classList.add('active2')
        //esconder a antiga (se for != null)
        if (janelaSelenada != null || janela == "aparencia") {
            janelaSelenada.classList.remove('active2')
        }

        janelaSelenada = janela;

    });
}


// const mobileMenu = document.querySelector(".mobile-menu");
// const navList = document.querySelector(".lista-menu");

// mobileMenu.addEventListener("click", () => {
//     navList.classList.toggle("active");
// });

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

let setaMenuVoltar = document.querySelector("#flecha-menu-esquerda");
let setaMenuAvancar = document.querySelector("#flecha-menu-direita");
let atual = 0;

setaMenuAvancar.addEventListener("click", () =>{
    elementosPersonalizacao[atual].style.display = "none";
    atual++;
    if (atual == 4) {
        atual = 0;
        elementosPersonalizacao[atual].style.display = "grid";
        return;
    }
    elementosPersonalizacao[atual].style.display = "grid";
});

setaMenuVoltar.addEventListener("click", () => {
    elementosPersonalizacao[atual].style.display = "none";
    atual--;
    if (atual == -1) {
        atual = 3;
        elementosPersonalizacao[atual].style.display = "grid";
        return;
    }
    elementosPersonalizacao[atual].style.display = "grid";
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