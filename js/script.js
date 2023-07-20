//Ativar links do Menu
const links = document.querySelectorAll(".cabecalho__lista-links a");

function ativoLinks(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
links.forEach(ativoLinks);

//Ativar itens do orçamento
const parametros = new URLSearchParams(location.search);
function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}
parametros.forEach(ativarProduto);

//Perguntas Frequentes
const perguntas = document.querySelectorAll(".perguntas__frequentes button");

function eventoPerguntas(pergunta) {
  pergunta.addEventListener("click", (event) => {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativa");
    const ativa = resposta.classList.contains("ativa");
    pergunta.setAttribute("aria-expanded", ativa);
  });
}
perguntas.forEach(eventoPerguntas);

//Galeria de Bicicletas
const galeria = document.querySelectorAll(".bicicleta__imagens img");
const galeiraImagens = document.querySelector(".bicicleta__imagens");

function eventosGaleria(img) {
  img.addEventListener("click", (event) => {
    const imagem = event.currentTarget;
    const media = matchMedia("(min-width: 1000px)").matches;
    if (media) {
      galeiraImagens.prepend(imagem);
    }
  });
}

galeria.forEach(eventosGaleria);
