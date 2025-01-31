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
for(let personagem of personagens){
    personagem.addEventListener("click", (e) => {
        let botaoClicado = e.currentTarget;
        //console.log("Oioi: "+botaoClicado.dataset.janela); //pega o nome da janela
        let nomeJanela = botaoClicado.dataset.janela;
        let janela = document.querySelector("#"+nomeJanela);
        janela.classList.add('active2')
        //esconder a antiga (se for != null)
        if(janelaSelenada != null || janela == "aparencia")
        {
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


let botaoClasse = document.querySelector("#classe");
let sectionGeral = document.querySelector(".geral");

botaoClasse.addEventListener("click", () => {
    sectionGeral.innerHTML += `
        <section class="personagem">
            <div>
                <p>CLASSE</p>
            </div>
            <div>
                <p>RAÇA</p>
            </div>
            <div>
                <p>APARENCIA</p>
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