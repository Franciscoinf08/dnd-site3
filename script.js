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

//Hasan o codigo acima sera incluido na pagina ficha dois no tp2 por conta de falta de tempo

const mobileMenu = document.querySelector(".mobile-menu");
const navList = document.querySelector(".lista-menu");

mobileMenu.addEventListener("click", () => {
    navList.classList.toggle("active");
});


let elementos = document.querySelectorAll(".escolhas div");
let vetorElementos = Array.from(elementos);
let sectionGeral = document.querySelector(".geral");

vetorElementos[0].addEventListener("click", () => {
    sectionGeral.innerHTML += `
        <section class="personagem">
            <div>
                <p>BARBARO</p>
            </div>
            <div>
                <p>BARDO</p>
            </div>
            <div>
                <p>LADINO</p>
            </div>
            <div>
                <p>PALADINO</p>
            </div>
            <div>
                <p>DRUIDA</p>
            </div>

        </section>
    `
})
vetorElementos[1].addEventListener("click", () => {
    sectionGeral.innerHTML += `
        <section class="personagem">
            <div>
                <p>ELFO</p>
            </div>
            <div>
                <p>TIELFLING</p>
            </div>
            <div>
                <p>ANÃO</p>
            </div>
            <div>
                <p>MEIO-ORC</p>
            </div>
            <div>
                <p>DRACONATO</p>
            </div>

        </section>
    `
})
vetorElementos[2].addEventListener("click", () => {
    sectionGeral.innerHTML += `
        <section class="personagem">
            <div>
                <p>CABELO</p>
            </div>
            <div>
                <p>ROSTO</p>
            </div>
            <div>   
                <p>ACESSORIOS</p>
            </div>
            <div>
                <p>CAMISA</p>
            </div>
            <div>
                <p>CALÇA</p>
            </div>

        </section>
    `
})
vetorElementos[3].addEventListener("click", () => {
    sectionGeral.innerHTML += `
        <section class="personagem">
            <div>
                <p>ARMADURA</p>
            </div>
            <div>
                <p>ARMAS</p>
            </div>
            <div>
                <p></p>
            </div>
            <div>
                <p>EQUIPAMENTO</p>
            </div>
            <div>
                <p>ARMADURA</p>
            </div>

        </section>
    `
})

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