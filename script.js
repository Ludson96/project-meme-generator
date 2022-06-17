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

// Requisito 2 https://www.horadecodar.com.br/2020/05/20/javascript-preview-de-imagem-carregada-em-input-file/
function showImage() {
  if (this.files && this.files[0]) {
    const file = new FileReader();
    file.onload = (event) => {
      memeImage.src = event.target.result;
    };
    file.readAsDataURL(this.files[0]);
  }
}

memeInsert.addEventListener('change', showImage);
