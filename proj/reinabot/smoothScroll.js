$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    //Check on same page
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname ) {
      event.preventDefault();

      var hash = this.hash;
      var target = $(hash);
      target = target.length ? target : $('[name=' + hash.slice(1) + ']');
      if (target) {
        let scrollPos = target.offset().top - 79; //Set the top of the scroll target to under the navbar
        if (target.is("#top"))
          scrollPos = 0;
        if (target.is("#footer") || scrollPos > $(document).height() - $(window).height())
          scrollPos = $(document).height() - $(window).height();

        $('html, body').stop(true).animate({
          scrollTop: scrollPos
        }, 800, 'easeInOutCubic', () => {
          scrollPos = $(document).height() - $(window).height();
        });
      }
    }
  });

$(window).scroll(function() {
  var threshold = $(window).height() * 0.4; //Threshold of full blur at 40% of the page
  var top = $(window).scrollTop() < threshold ? $(window).scrollTop() : threshold;

  var percent = top / threshold;

  if (percent >= 0.7) {
    $(".right").find("h1").css({ display: "none" });
  } else {
    $(".right").find("h1").css({ display: "inline", "font-size": (1-percent)*32+"px" });
  }
  $(".right").css({ "padding-top": (1-percent)*16+16 });
  var botContainer = $(".bot-container");
  botContainer.css({ height: (1-percent)*120+80 });
  $(".left").find("img").css({ height: (1-percent)*120+48 });

  var opacity = ((1 - percent) * 0.6) + 0.4; //Fade from 100% to 40%
  var blur = percent * 12; //Blur to 12px
  $('.background').css({
    'opacity': opacity,
    'filter': `blur(${blur}px)`
  });
});

$(function() {
  var threshold = $(window).height() * 0.4; //Threshold of full blur at 40% of the page
  var top = $(window).scrollTop() < threshold ? $(window).scrollTop() : threshold;

  var percent = top / threshold;

  if (percent >= 0.7) {
    $(".right").find("h1").css({ display: "none" });
  } else {
    $(".right").find("h1").css({ display: "inline", "font-size": (1-percent)*32+"px" });
  }
  $(".right").css({ "padding-top": (1-percent)*16+16 });
  var botContainer = $(".bot-container");
  botContainer.css({ height: (1-percent)*120+80 });
  $(".left").find("img").css({ height: (1-percent)*120+48 });
});