
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
        elementosPersonalizacao[atual].style.display = "none";
        atual = (atual + 1) % elementosPersonalizacao.length;

        elementosPersonalizacao[atual].style.display = "grid";
        setTimeout(() => {
            elementosPersonalizacao[atual].classList.add("visible");
        }, 10);

        destaque(escolhasSecoes, atual);
    }, 300);
});

setaMenuVoltar.addEventListener("click", () => {
    elementosPersonalizacao[atual].classList.remove("visible");

    setTimeout(() => {
        elementosPersonalizacao[atual].style.display = "none";
        atual = (atual - 1 + elementosPersonalizacao.length) % elementosPersonalizacao.length;

        elementosPersonalizacao[atual].style.display = "grid";
        setTimeout(() => {
            elementosPersonalizacao[atual].classList.add("visible");
        }, 10);

        destaque(escolhasSecoes, atual);
    }, 300);
});

function destaque(selecionado, atual) {
    for (let i = 0; i < selecionado.length; i++) {
        selecionado[i].classList.remove("selecionado");
        selecionado[i].classList.add("naoSelecionado");
    }
    selecionado[atual].classList.remove("naoSelecionado");
    selecionado[atual].classList.add("selecionado");
}


//Codigo para selecionar classes e raças

let galeriaImagensClasses = [
    "imgs-ficha3/barbaro.png",
    "imgs-ficha3/bardo.png",
    "imgs-ficha3/ladino.png",
    "imgs-ficha3/paladino.png",
    "imgs-ficha3/druida.png"
];

let galeriaImagensElfos = [
    "imgsFicha/elfo1",
    "imgsFicha/elfo2",
    "imgsFicha/elfo3",
    "imgsFicha/elfo4"
];
let galeriaImagensTieflings = [
    "imgsFicha/tiefling1",
    "imgsFicha/tiefling2",
    "imgsFicha/tiefling3",
    "imgsFicha/tiefling4"
];

let galeriaImagensAnoes = [
    "imgsFicha/anao1",
    "imgsFicha/anao2",
    "imgsFicha/anao3",
    "imgsFicha/anao4"
];

let galeriaImagensMeioOrcs = [
    "imgsFicha/meioOrc1",
    "imgsFicha/meioOrc2",
    "imgsFicha/meioOrc3",
    "imgsFicha/meioOrc4"
];


let botoesClasse = document.querySelectorAll(".botaoSelecaoClasse");
let divDeImagens = document.querySelector("#imagem-personagem");

botoesClasse.forEach((botao, index) => {
    botao.addEventListener("click", () => {
        let img = document.createElement("img");
        img.src = galeriaImagensClasses[index];
        divDeImagens.appendChild(img);
    });
});
//CODIGO DE ALTERAÇAO DA COR DOS OLHOS



//CODIGO DE ALTERAÇAO DA COR DOS OLHOS

//CODIGO DE ALTERAÇAO DE PECAS DE ROUPAS
let galerias = {
    cabelos: [
        "imgs-ficha3/cabelos/vazio.png",
        "imgs-ficha3/cabelos/Cabelo1A.png",
        "imgs-ficha3/cabelos/Cabelo1B.png",
        "imgs-ficha3/cabelos/Cabelo1C.png",
        "imgs-ficha3/cabelos/Cabelo1D.png",
        "imgs-ficha3/cabelos/Cabelo1E.png",
        "imgs-ficha3/cabelos/Cabelo1F.png",
        "imgs-ficha3/cabelos/Cabelo1G.png",
        "imgs-ficha3/cabelos/Cabelo2A.png",
        "imgs-ficha3/cabelos/Cabelo2B.png",
        "imgs-ficha3/cabelos/Cabelo2C.png",
        "imgs-ficha3/cabelos/Cabelo2D.png",
        "imgs-ficha3/cabelos/Cabelo2E.png",
        "imgs-ficha3/cabelos/Cabelo2F.png",
        "imgs-ficha3/cabelos/Cabelo2G.png",
        "imgs-ficha3/cabelos/Cabelo3A.png",
        "imgs-ficha3/cabelos/Cabelo3B.png",
        "imgs-ficha3/cabelos/Cabelo3C.png",
        "imgs-ficha3/cabelos/Cabelo3D.png",
        "imgs-ficha3/cabelos/Cabelo3E.png",
        "imgs-ficha3/cabelos/Cabelo3F.png",
        "imgs-ficha3/cabelos/Cabelo3G.png",
        "imgs-ficha3/cabelos/Cabelo4A.png",
        "imgs-ficha3/cabelos/Cabelo4B.png",
        "imgs-ficha3/cabelos/Cabelo4C.png",
        "imgs-ficha3/cabelos/Cabelo4D.png",
        "imgs-ficha3/cabelos/Cabelo4E.png",
        "imgs-ficha3/cabelos/Cabelo4F.png",
        "imgs-ficha3/cabelos/Cabelo4G.png",
        "imgs-ficha3/cabelos/Cabelo5.png",
        "imgs-ficha3/cabelos/Cabelo6.png",
        "imgs-ficha3/cabelos/Cabelo7.png"
    ],
    calcas: [
        "imgs-ficha3/calcas/vazio.png",
        "imgs-ficha3/calcas/Calca1.png",
        "imgs-ficha3/calcas/Calca2.png",
        "imgs-ficha3/calcas/Calca3.png",
        "imgs-ficha3/calcas/Calca4.png",
        "imgs-ficha3/calcas/Calca5.png"
    ],
    blusas: [
        "imgs-ficha3/blusas/vazio.png",
        "imgs-ficha3/blusas/Blusa1.png",
        "imgs-ficha3/blusas/Blusa2.png",
        "imgs-ficha3/blusas/Blusa3.png",
        "imgs-ficha3/blusas/Blusa4.png",
        "imgs-ficha3/blusas/Blusa5.png"
    ]
};

let selecionados = {
    cabelos: 0,
    calcas: 0,
    blusas: 0
};

let galeriaAtual = "cabelos";

let setaDireitaPersonagem = document.querySelector("#flecha-personagem-direita");
let setaEsquerdaPersonagem = document.querySelector("#flecha-personagem-esquerda");
let botaoMenuDescricao = document.querySelectorAll(".personagem div");

botaoMenuDescricao.forEach((botao, index) => {
    botao.addEventListener("click", () => {
        if (![14, 13, 12].includes(index)) {
            setaDireitaPersonagem.style.display = "none";
            setaEsquerdaPersonagem.style.display = "none";
        }
    });
});

let abaAberta = document.querySelectorAll(".itemGaleria");
let fundoDaAba = document.querySelector(".galeriaDeSelecao");

botaoMenuDescricao.forEach((botao, index) => {
    botao.addEventListener("click", () => {

        abaAberta.forEach(aba => aba.style.display = "none");
        abaAberta[index].style.display = "grid";
        fundoDaAba.style.display = "block";
        if (abaAberta[index] == abaAberta[12] || abaAberta[index] == abaAberta[13] || abaAberta[index] == abaAberta[14]) {
            abaAberta.style.display = "none";
        }
    });
});


botaoMenuDescricao[13].addEventListener("click", () => {
    galeriaAtual = "calcas";
    setaDireitaPersonagem.style.display = "flex";
    setaEsquerdaPersonagem.style.display = "flex";
    atualizarImagem();
});

botaoMenuDescricao[12].addEventListener("click", () => {
    galeriaAtual = "blusas";
    setaDireitaPersonagem.style.display = "flex";
    setaEsquerdaPersonagem.style.display = "flex";
    atualizarImagem();
});

botaoMenuDescricao[14].addEventListener("click", () => {
    galeriaAtual = "cabelos";
    setaDireitaPersonagem.style.display = "flex";
    setaEsquerdaPersonagem.style.display = "flex";
    atualizarImagem();
});

setaDireitaPersonagem.addEventListener("click", () => {
    selecionados[galeriaAtual] = (selecionados[galeriaAtual] + 1) % galerias[galeriaAtual].length;
    atualizarImagem();
});

setaEsquerdaPersonagem.addEventListener("click", () => {
    selecionados[galeriaAtual] = (selecionados[galeriaAtual] - 1 + galerias[galeriaAtual].length) % galerias[galeriaAtual].length;
    atualizarImagem();
});

//COR DO PERSONAGEM//COR DO PERSONAGEM

const coresPele = document.querySelectorAll(".cor-pele");
let srcHumano = "imgs-ficha3/branco.png";

let selecionado2 = null;

coresPele.forEach(cor => {
  cor.addEventListener("click", () => {
    coresPele.forEach(c => c.classList.remove("selecionado2"));
    cor.classList.add("selecionado2");
    selecionado2 = cor.id;
    srcHumano = `imgs-ficha3/${selecionado2}.png`;
    const imagem = document.querySelector("#humano");
    imagem.src = srcHumano;
    atualizarImagem();
  });
});

//COR DO PERSONAGEM//COR DO PERSONAGEM//COR DO PERSONAGEM

const coresOlho = document.querySelectorAll(".cor-olho");
let srcOlhos = "imgs-ficha3/olhos/oPreto.png"

let selecionado3 = null;

coresOlho.forEach(cor => {
  cor.addEventListener("click", () => {
    coresOlho.forEach(c => c.classList.remove("selecionado3"));
    cor.classList.add("selecionado3");
    selecionado3 = cor.id;
    srcOlhos = `imgs-ficha3/olhos/${selecionado3}.png`;
    const imagemOlhos = document.querySelector("#olhos");
    imagemOlhos.src = srcOlhos;
    atualizarImagem();
  });
});





function atualizarImagem() {
    divDeImagens.innerHTML = `
        <img id="olhos" src="${srcOlhos}">
        <img id="humano" src="${srcHumano}">
        <img class="calca" src="${galerias.calcas[selecionados.calcas]}">
        <img class="blusa" src="${galerias.blusas[selecionados.blusas]}">
        <img class="cabelo" src="${galerias.cabelos[selecionados.cabelos]}">
    `;
}

//CODIGO DE ALTERAÇAO DE PECAS DE ROUPAS

//CODIGO DA SEÇAO  DE AVISOS

let botaoAvisos = document.querySelector("#botao-avisos");
let sectionAvisos = document.querySelector("#avisos")

botaoAvisos.addEventListener("click", () =>{
    sectionAvisos.style.display = "none";
})

//CODIGO DA SEÇAO  DE AVISOS

