//Ativar links do menu

const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
    const url = location.href;
    const href = link.href;
    if (url.includes(href)) {
        link.classList.add("ativo");
    }
}

links.forEach(ativarLink);


//Ativar itens do orçamento

const parametros = new URLSearchParams(location.search); //retorna uma array com os parametros de busca que eu selecionei


function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if (elemento) {
        elemento.checked = true;
    }
}


parametros.forEach(ativarProduto);


//Perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativa");
    const ativa = resposta.classList.contains("ativa");
    pergunta.setAttribute('aria-expanded',ativa);    
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener ('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);


// Galeria de imagens

const galeria = document.querySelectorAll ('.bicicleta-imagens img');
const galeriaContainer = document.querySelector ('.bicicleta-imagens');

function trocarImagem(event) {
    const img = event.currentTarget;
    const media = matchMedia('(min-widht: 1000px)').matches;
    if(media){
        galeriaContainer.prepend(img); //prepend não clona o elemento e sim,remove de onde ele estava e coloca no local selecionado
    }
     
}

function eventosGaleria (img) {
    img.addEventListener('click',trocarImagem);
}

galeria.forEach(eventosGaleria);

//Animação
if(window.SimpleAnime){
    new SimpleAnime();
}
