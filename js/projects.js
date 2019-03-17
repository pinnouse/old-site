function load() {
  if  (window.scrollY > 0) {
    setTimeout(function() {
      window.scrollTo(0, 0)
    }, 200);
  }
  let cards = document.getElementsByClassName("card");
  for (let i = 1; i < cards.length; i++) {
    let delay = i * 130 + 390;
    cards[i].setAttribute("style", "animation-delay: " + delay + "ms !important;");
  }
};