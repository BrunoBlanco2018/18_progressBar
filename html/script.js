var isProgressBarActive = false;

document.addEventListener('DOMContentLoaded', function() {
  var progressText = document.getElementById("text");
  window.addEventListener("message", (event)=> {
    const data = event.data;
    if (data.type === "show") {
      animationTimeLong = (data.time - 500) / 100 ;
      progressText.textContent = data.text;
      newProgressBar();
    }
  });
});

function newProgressBar() {
  if (!isProgressBarActive) {
    isProgressBarActive = true;
    var elem = document.getElementById("myBar");
    var progressContainer = document.getElementById("progresscontainer");
    var width = 0;
    var id;
    elem.style.removeProperty('width');
    progressContainer.classList.remove('hide'); // Aparecer desde abajo
    
    // Función para iniciar la animación de la barra de progreso
    function startProgressBar() {
      id = setInterval(frame, animationTimeLong * 0.6);
    }

    // Función para comprobar si el contenedor ha alcanzado la posición deseada
    function checkContainerPosition() {
      var containerTop = progressContainer.getBoundingClientRect().top;
      if (containerTop <= window.innerHeight * 0.95) {
        startProgressBar(); // Iniciar la animación de la barra de progreso
        clearInterval(checkInterval); // Detener la comprobación continua
      }
    }

    // Comprobar continuamente si el contenedor ha alcanzado la posición deseada
    var checkInterval = setInterval(checkContainerPosition, 100);

    function frame() {
      if (isProgressBarActive) {
        if (width >= 100) {
          clearInterval(id);
          isProgressBarActive = false;
          progressContainer.classList.add('hide'); // Desaparecer hacia abajo
        } else if (width < 100) {
          if (width < 20) {
            width = width + 0.5;
          }
          if (width >= 20 && width <= 80) {
            width = width + 0.7;
          }
          if (width > 80) {
            width = width + 0.5;
          }
          elem.style.width = width + '%';
        }
      }
    }
  }
}