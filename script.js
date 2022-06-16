// Requisito 1
const input2 = document.getElementById('text-input');

function inserirTexto() {
  const input = document.getElementById('text-input').value;
  const paragrafo = document.getElementById('texto-exibido');
  paragrafo.innerText = input;
}

input2.addEventListener('keyup', inserirTexto);

// Requisito 2
function readImage() {
  if (this.files && this.files[0]) {
    const file = new FileReader();
    file.onload = (event) => {
      document.getElementById('meme-image').style.backgroundImage = `url(${event.target.result})`;
    };
    file.readAsDataURL(this.files[0]);
  }
}

document.getElementById('meme-insert').addEventListener('change', readImage, false);
