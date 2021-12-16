document.querySelector("#ddd").addEventListener("change",acharCidades); 
function acharCidades(evento) { 
    fetch(`https://brasilapi.com.br/api/ddd/v1/${evento.target.value}`) 
    .then(verifica => verifica.json())
    .then(dados => { 
        atribuiDDD(dados.cities)  
    }) 
} 

const lista = document.querySelector('ul') 
function atribuiDDD(topicos) {  
    lista.innerHTML = "<ul> </ul>"
    topicos.forEach (topico => {
        const parte = document.createElement ('li'); 
        parte.textContent = topico;
        lista.append(parte);   
    })
    } 
