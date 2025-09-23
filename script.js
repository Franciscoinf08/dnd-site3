document.addEventListener("DOMContentLoaded", () => {
    let botaoSomTrovao = document.querySelector(".title-ficha");

    botaoSomTrovao.addEventListener("click", () => {
        let som = new Audio("Sons/trovao.mp3"); 
        som.play();
        botaoSomTrovao.style.color = "#aa0404";
    });
});

/*RESPONSIVO*//*RESPONSIVO*//*RESPONSIVO*//*RESPONSIVO*/

const mobileMenu = document.querySelector(".mobile-menu");
const navList = document.querySelector(".lista-menu");

mobileMenu.addEventListener("click", () => {
    navList.classList.toggle("active");
});
