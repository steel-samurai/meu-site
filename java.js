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
"<p>Sou uma pessoa <b>organizada</b> e <b>dedicada</b>, sempre estou comprometida em alcançar os objetivos estabelecidos. Tenho grande interesse pela questão da propriedade intelectual e estou familiarizada com as bases de <b>Python e programação orientada a objetos. </b></p><p> Trabalho de forma eficaz em equipe, fazendo parte e contribuindo para os objetivos coletivos. Em 2023, tirei ótimas notas na disciplina de Web, um reflexo do meu compromisso com a área. Funciono muito bem com a dinâmica de sprints, como pode ser demonstrado no <b>modo como este site foi criado</b>. </p>",   
  "<p>- Sou organizada e dedicada" +
  "<br><br>- Conheço <b>Python e OOP</b>"+
  "<br><br>- Trabalho bem em equipe e sigo todas as instruções dadas pelo professor" +
  "<br><br>- Obtive boas notas em Web" +
  "<br><br>- Funciono bem com a dinâmica de sprints" +
  "<br><br>- Tenho compromisso com o projeto</p>"
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
  'Adições e exclusões (de 15/01 a 03/02)',
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
