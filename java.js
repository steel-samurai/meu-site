window.onscroll = function () { myFunction() };

var header = document.getElementById("aheader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.scrollY > sticky) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
}
 

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('button');
  const textContents = [
    "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae justo eget magna fermentum. Imperdiet nulla malesuada pellentesque elit eget gravida cum.",
    "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae justo eget magna fermentum. Imperdiet nulla malesuada pellentesque elit eget gravida cum.",
    "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae justo eget magna fermentum. Imperdiet nulla malesuada pellentesque elit eget gravida cum.",
  ];

  buttons.forEach((button, index) => {
    button.addEventListener('click', function () {
      const textContainer = document.getElementById(button.id + '-text');
      const newTextContent = textContents[index];

      if (textContainer.style.display === 'block') {
        textContainer.style.display = 'none';
      } else {
        // Hide all other text containers
        document.querySelectorAll('.text-container').forEach(container => {
          if (container !== textContainer) {
            container.style.display = 'none';
          }
        });

        textContainer.style.display = 'block';
        textContainer.innerText = newTextContent;
      }
    });
  });
});


document.addEventListener('scroll', function () {
  // Get the distance scrolled from the top of the page
  var scrollDistance = window.scrollY;
  scrollDistance-= 800;

  
  // Set the minimum value for top to ensure the element doesn't go above the container
  var minTop = 40;
  
  // Limit the movement within the container height
  var containerHeight = document.getElementById('caixa').offsetHeight;
  var maxTop = containerHeight - document.getElementById('movingElement').offsetHeight;

  // Move the element down based on the scroll distance, but limit within the container
  var movingElement = document.getElementById('movingElement');
  var num = Math.min(Math.max(scrollDistance, minTop), maxTop);
  movingElement.style.top = num + 'px';
});


document.getElementById('btn1').addEventListener('click', function() {
  changeText(1);
});

document.getElementById('btn2').addEventListener('click', function() {
  changeText(2);
});

function changeText(btnNumber) {
  var textoDiv = document.getElementById('texto');
  var btn1 = document.getElementById('btn1');
  var btn2 = document.getElementById('btn2');

  if (btnNumber === 1) {
    textoDiv.innerHTML = 'Novo texto do Botão 1';
    btn1.classList.add('selected');
    btn2.classList.remove('selected');
  } else if (btnNumber === 2) {
    textoDiv.innerHTML = 'Novo texto do Botão 2';
    btn1.classList.remove('selected');
    btn2.classList.add('selected');
  }
}




let currentIndex = 0;
const images = [
    "imagem1.png",
    "imagem2.png",
    "imagem3.png",
];

const imageElement = document.getElementById('image');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
const imageCaption = document.createElement('div');

imageCaption.id = 'imageCaption';
document.getElementById('carousel').appendChild(imageCaption);

// Adiciona eventos de clique aos botões
prevButton.onclick = function() {
    changeImage(-1);
};

nextButton.onclick = function() {
    changeImage(1);
};

imageElement.onmouseover = function() {
    showCaption();
};

imageElement.onmouseout = function() {
    hideCaption();
};

function showCaption() {
    imageCaption.style.opacity = 0.9;
    imageCaption.innerHTML = `Legenda da Imagem ${currentIndex + 1}`;
}

function hideCaption() {
    imageCaption.style.opacity = 0;
}

function changeImage(indexIncrement) {
    currentIndex += indexIncrement;

    // Verifica se atingiu o final ou o início do array
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    // Atualiza a imagem exibida
    imageElement.src = images[currentIndex];

    // Atualiza a legenda
    showCaption();
}
