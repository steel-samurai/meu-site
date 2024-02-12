// header -> fixed onscroll 
// pqp isso aqui foi foda de entender
document.addEventListener('scroll', function () {
  let header = document.querySelector("header");
  let pagina = document.querySelector("#pagina");
  let tamanhoHeader = header.offsetTop;

  if (scrollY > tamanhoHeader) {
    header.classList.add("fixed");
    pagina.classList.add("fixed");
  } 
  else {
    header.classList.remove("fixed");
    pagina.classList.remove("fixed");
  }
});


// 'menu hamburguer' da navbar
//os href tavam dando errado :(
document.querySelectorAll('.scrollarSection').forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    let numScroll = parseInt(link.dataset.scroll);
    scrollTo({
      top: numScroll,
      behavior: 'smooth'
    });
  });

});


//botoes
let botao1 = document.querySelector('#btn1');
let botao2 = document.querySelector('#btn2');
let textosBotoes = [
    "Sou excepcional em sprints. Sou uma pessoa organizada e dedicada, sempre estou comprometida em alcançar os objetivos estabelecidos. Tenho uma grande apreciação pela propriedade intelectual e estou familiarizada com as bases de Python e programação orientada a objetos em Python. Trabalho de forma eficaz em equipe, colaborando e contribuindo para o sucesso coletivo. Minhas boas notas na disciplina de Web são um reflexo do meu compromisso com a área.",
   
  "- Funciono muito bem com a metodologia Scrum (pequenas entregas em um curto período de tempo)." +
  "<br><br>- Já tenho conhecimentos básicos de Python e programação orientada a objetos"+
  "<br><br>- Trabalho bem em equipe" +
  "<br><br>- Sou uma pessoa organizada e dedicada"
];

botao1.addEventListener('click', function () {
  mudarTexto(0);
});

botao2.addEventListener('click', function () {
  mudarTexto(1);
});

function mudarTexto(numBtn) {
  let textoDiv = document.querySelector('#textoSobreMim');

  textoDiv.innerHTML = textosBotoes[numBtn];
  if(numBtn == 0){
    botao1.classList.add('ativo');
    botao2.classList.remove('ativo');
  }
  else {
  botao1.classList.remove('ativo');
  botao2.classList.add('ativo');
  }
}


//galeria de imagens
let indexAtual = 0;
let images = [
  "imgs/imagem1.png",
  "imgs/imagem2.png",
  "imgs/imagem3.png",
];

let imagemEl = document.querySelector('#image');
let anteBtn = document.querySelector('#anteBtn');
let proxBtn = document.querySelector('#proxBtn');
let imagemLegenda = document.createElement('div');
imagemLegenda.id = 'imagemLegenda';
document.querySelector('#carousel').appendChild(imagemLegenda);
let legendas = [
  'Total de adições por data',
  'Adições e exclusões (15/01 a 03/02)',
  'Repositório no github'
]
anteBtn.addEventListener('click', function() {
  proxImagem(-1);
});

proxBtn.addEventListener('click', function() {
  proxImagem(1);
});

imagemEl.addEventListener('mouseover', function() {
  mostrarLegenda();
});

imagemEl.addEventListener('mouseout', function() {
  esconderLegenda();
});

function mostrarLegenda() {
  imagemLegenda.style.opacity = 0.9;
  imagemLegenda.innerHTML = legendas[indexAtual];
}

function esconderLegenda() {
  imagemLegenda.style.opacity = 0;
}

function proxImagem(proxIndex) {
  indexAtual += proxIndex;

  indexAtual = (indexAtual+images.length)%images.length;
  imagemEl.src = images[indexAtual];

  mostrarLegenda();
}

//icon da estrela
document.addEventListener('scroll', function () {
  let valorY = scrollY - 800;
  let container = document.querySelector('#caixa');
  let icon = document.querySelector('#icon-estrela');

  let minTop = 40;
  let maxTop = container.offsetHeight - icon.offsetHeight;
  
  let newTop = Math.min(valorY, maxTop);
  icon.style.top = Math.max(minTop, newTop) + 'px';
});