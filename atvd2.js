        const subtitulos = document.querySelectorAll('h2');
        const topicos = new Array();
        subtitulos.forEach(subtitulo => {
            topicos.push(subtitulo.textContent);
            subtitulo.innerHTML = `${subtitulo.textContent} <a href='#'>início</a>`;
       
        });
        const lista = document.querySelector('ol');
        topicos.forEach(topico => {
            const item = document.createElement('li');
            item.innerHTML = '<a href="#' + topico + '">' + topico + '</a>';
            lista.append(item);
        });
