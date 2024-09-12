function pesquisar(){
    let section = document.getElementById("result")
    let categories = document.getElementById('categories-section');
    let filmsSections = document.querySelectorAll('.films-section'); // NodeList

    section.classList.remove('hide');
    categories.classList.add('hide');

    filmsSections.forEach(filmSection => {
        filmSection.classList.add('hide');
    });

    let searchField = document.getElementById("search-field").value
    
    if (!searchField) {
        section.innerHTML = '<p style="font-weight: 500;">Nada foi encontrado.</p>';
        return;
    }

    searchField = searchField.toLowerCase();

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        if (titulo.includes(searchField) || descricao.includes(searchField) || tags.includes(searchField)){
            resultados += `
            <div class="movie">
                <div class="movie-image" style="background-image: url(${dado.img});"></div>
                <div class="movie-info">
                    <h3>${dado.titulo}</h3>
                    <p>${dado.descricao}</p>
                    <a href=${dado.link} class="more-info" target="_blank">Mais informações</a>
                </div>
            </div>
        `;
        }
    }

    if (!resultados) {
        section.innerHTML = "<p>Nada foi encontrado.</p>"
        return
    }

    section.innerHTML = resultados;
}

// Função para exibir a seção de filmes correspondente à categoria clicada
document.getElementById('overcoming-category').addEventListener('click', function() {
    mostrarFilmes('overcoming-films');
});

document.getElementById('impact-category').addEventListener('click', function() {
    mostrarFilmes('impact-films');
});

document.getElementById('innovation-category').addEventListener('click', function() {
    mostrarFilmes('innovation-films');
});

// Função para mostrar a seção de filmes e esconder a seção de categorias
function mostrarFilmes(filmesClasse) {
    // Esconder a seção de categorias
    document.getElementById('categories-section').classList.add('hide');
    
    // Mostrar a seção de filmes correspondente
    var filmes = document.getElementsByClassName(filmesClasse)[0];
    filmes.classList.remove('hide');
    filmes.classList.add('show');
}

// Função para voltar à lista de categorias
document.querySelectorAll('.back-button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Esconder todas as seções de filmes
        document.querySelectorAll('.films-section').forEach(section => {
            section.classList.add('hide');
            section.classList.remove('show');
        });

        // Mostrar a seção de categorias novamente
        document.getElementById('categories-section').classList.remove('hide');
    });
});

const logo = document.querySelector('.logo img');

// Função que exibe as categorias e esconde os resultados e a seção de filmes
logo.addEventListener('click', function() {
    const categoriesSection = document.getElementById('categories-section');
    const resultSection = document.getElementById('result');
    const filmsSection = document.querySelectorAll('.films-section');

    categoriesSection.classList.remove('hide');
    resultSection.classList.add('hide');

    filmsSection.forEach(film => film.classList.add('hide'));
});
