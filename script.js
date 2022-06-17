const memeImage = document.getElementById('meme-image');
const memeInsert = document.getElementById('meme-insert');

// Requisito 1
const input2 = document.getElementById('text-input');

function inserirTexto() {
  const input = document.getElementById('text-input');
  const text = document.getElementById('meme-text');
  text.innerText = input.value;
}

input2.addEventListener('keyup', inserirTexto);

// Requisito 2
function showImage(event) {
  memeImage.style.backgroundImage = `url(${URL.createObjectURL(event.target.files[0])})`;
}

memeInsert.addEventListener('change', showImage);
