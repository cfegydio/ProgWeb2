conferirH()

function conferirH() {
    for (let i =1; i < 7; i++) {
        if (document.querySelector(`h${i}`) != null){
            const titulo = document.querySelector(`h${i}`);
            titulo.setAttribute('id','titulo');
            criarBotoes(titulo);
        }
    }
}

function criarBotoes(tituloSelecionado) {
    tituloSelecionado.setAttribute("id","titulo") 
    const botaoAumentar = document.createElement("button")
    botaoAumentar.textContent = "+"  
    tituloSelecionado.append(botaoAumentar) 
    botaoAumentar.addEventListener("click", aumenta)

    tituloSelecionado.setAttribute("id","titulo") 
    const botaoDiminuir = document.createElement("button")
    botaoDiminuir.textContent = "-" 
    tituloSelecionado.append(botaoDiminuir)
    botaoDiminuir.addEventListener("click", diminui)
} 

function iniciar(){
    mudar = document.querySelector("#titulo").style;
    mudar.fontSize = "40px";		
}

function aumenta() { 
    if (parseInt(document.querySelector("#titulo").style.fontSize) < 110) {
        const titulo = document.querySelector("#titulo");
        posicio = parseInt(titulo.style.fontSize) + 10; 
        titulo.style.fontSize = posicio + "px";
    }
} 

function diminui() {
    if (parseInt(document.querySelector("#titulo").style.fontSize) > 40) {
        const titulo = document.querySelector("#titulo");
        posicio = parseInt(titulo.style.fontSize) - 10;   
        titulo.style.fontSize = posicio + "px"; 
    }   
} 		
