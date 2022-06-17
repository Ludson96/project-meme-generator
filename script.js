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

// Requisito 6
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');
const memeContainer = document.getElementById('meme-image-container');

function alteraBordaFire() {
  memeContainer.style.border = '3px dashed rgb(255, 0, 0)';
}

function alteraBordaWater() {
  memeContainer.style.border = '5px double rgb(0, 0, 255)';
}

function alteraBordaEarth() {
  memeContainer.style.border = '6px groove rgb(0, 128, 0)';
}

fire.addEventListener('click', alteraBordaFire);
water.addEventListener('click', alteraBordaWater);
earth.addEventListener('click', alteraBordaEarth);
