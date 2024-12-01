// Função para abrir o lightbox com a imagem selecionada
/*java.js*/
function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");

  lightboxImage.src = src;
  lightbox.style.display = "flex";
}

// Função para fechar o lightbox ao clicar fora da imagem
function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none";
}

  