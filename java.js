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
