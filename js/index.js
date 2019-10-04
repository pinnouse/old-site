window.onload = function() {
  if (typeof load === 'function') {
    load();
  }

  checkNight();

  document.getElementById("night-button").onclick = function() {
    if (localStorage) {
      if (localStorage.getItem("night") === 'on')
        localStorage.setItem("night", 'off');
      else
        localStorage.setItem("night", 'on');

      checkNight();
    }
  }
}

function checkNight() {
  if (localStorage) {
    if (localStorage.getItem("night") === 'on')
      document.body.classList.add("night");
    else
      document.body.classList.remove("night");
  }
}