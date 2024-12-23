const menu = document.querySelector("#menu")
const lista = document.querySelectorAll('#menu div')

const unidade1bola = document.querySelector("#unidade1bola")

const body1 = document.querySelector("#body1")
const academia = document.querySelector("#academia")





lista.forEach((lista, index) => {
    lista.addEventListener('click', () => {
        menu.querySelector(".azul-menu").classList.remove("azul-menu")
        lista.classList.add("azul-menu")
        
    }
)})

unidade1bola.addEventListener("mouseover", () => {
    document.querySelector("#começar").style.opacity = 1;
})

unidade1bola.addEventListener("mouseout", () => {    
    document.querySelector("#começar").style.opacity = 0;
})

unidade1bola.addEventListener("click", () => {
    document.querySelector("#unidade1").style.backgroundColor = '#ffc800';
    document.querySelector("#unidade1bola").style.backgroundColor = '#ffc800';
    document.querySelector("#unidade1 h2").style.color = '#b06700';
    document.querySelector("#unidade1 h4").style.color = '#b06700';
    document.querySelector("#unidade1 img").style.opacity = 1;
    document.querySelector("#estrela").style.display = 'none';
    document.querySelector("#check").style.display = 'block';

})

academia.addEventListener("click", () => {
    body1.style.display = 'none';
})


const verificar = document.querySelectorAll(".verificar");
const textarea = document.querySelector("#textarea");
const footer = document.querySelector("footer");
const footer1 = document.querySelector("#fnormal");
const footer2 = document.querySelector("#facerto");
const footer3 = document.querySelector("#ferro");




textarea.addEventListener("keydown", () => {
    verificar[0].style.backgroundColor = "#58cc02";
    verificar[0].style.color = "#ffffff";
    verificar[0].style.border = 0;
    

})

verificar[0].addEventListener('click', () => {

    if (textarea.value !== "") {
        footer1.style.display = 'none'
        footer2.style.display = 'flex'
        footer3.style.display = 'none'

        footer.style.borderTop = 0;
        verificar[1].style.backgroundColor = "#58cc02";
        verificar[1].style.color = "#ffffff";
        verificar[1].style.border = 0;
    } else {
        footer1.style.display = 'none'
        footer2.style.display = 'none'
        footer3.style.display = 'flex'
        
        footer.style.borderTop = 0;
        
    }
})






















