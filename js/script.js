const links = document.querySelectorAll(".cabecalho__lista-links a");

function ativoLinks(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativoLinks);
