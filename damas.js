const tamanhoCelula = 40;
document.body.append(criarTabuleiro());

function criarTabuleiro() {
    const tamanho = 8;
    let tabela = document.createElement('table');

	tabela.style.borderStyle = 'solid';
	tabela.style.borderSpacing = 0;
	tabela.style.margin = 'auto';
	tabela.style.borderColor = 'black';

for (let i = 0; i < tamanho; i++) {
        let linha = document.createElement('tr');
        tabela.append(linha);
        for (let j = 0; j < tamanho; j++) {
            let celula = document.createElement('td');
            linha.append(celula);
            celula.style.width = `${tamanhoCelula}px`;
            celula.style.height = `${tamanhoCelula}px`;
            if (i % 2 == j % 2) {
                celula.style.backgroundColor = '#FA8072';
                celula.classList.add("container");
                if (i * 8 + j <= 24) {
                    celula.append(criaPeca('black'));
                } else if (i * 8 + j >= 40) {
                    celula.append(criaPeca('red'));
                }
            } else {
                celula.style.backgroundColor = 'white';
            }
        }
    };
    return tabela;
}


function criaPeca(cor) {
    let imagem = document.createElement('img');
    imagem.setAttribute('src', `img/${cor}.png`);
    imagem.setAttribute('width', `${tamanhoCelula-4}px`);
    imagem.setAttribute('height', `${tamanhoCelula-4}px`);
    imagem.setAttribute('draggable','true');
    imagem.classList.add("draggable");
    return imagem;
}

const draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".container");

draggables.forEach(draggable => {
    draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging");
        
    });
    draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging");
    });
});

containers.forEach(container => {
    container.addEventListener("dragover", e => {
        e.preventDefault();
    });
    container.addEventListener("drop", () => {
        const draggable = document.querySelector(".dragging");
        container.appendChild(draggable);
    });
});
