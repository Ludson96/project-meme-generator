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

// Requisito 7
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');

function insertMeme1() {
  memeImage.src = '/imgs/meme1.png';
}

function insertMeme2() {
  memeImage.src = '/imgs/meme2.png';
}

function insertMeme3() {
  memeImage.src = '/imgs/meme3.png';
}

function insertMeme4() {
  memeImage.src = '/imgs/meme4.png';
}

meme1.addEventListener('click', insertMeme1);
meme2.addEventListener('click', insertMeme2);
meme3.addEventListener('click', insertMeme3);
meme4.addEventListener('click', insertMeme4);
