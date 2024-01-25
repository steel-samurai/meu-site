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
