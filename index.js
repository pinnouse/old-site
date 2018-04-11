$(function() {
    $('a[href*="#"]').click(function(event) {
        if (location.hostname == this.hostname) {
            var target = $(this.hash);
            var scrollTo = 0;
            if (target.length) {
                event.preventDefault();
                var windowTop = $(window).scrollTop();
                if (this.hash) {
                    if (this.hash != "#") 
                        scrollTo = target.offset().top;
                }

                console.log(scrollTo);

                if (scrollTo > $(document).height() - $(window).height())
                    scrollTo = $(document).height() - $(window).height();
                    
                    console.log(scrollTo);

                $('html, body').stop().animate({
                    "scrollTop": scrollTo
                }, 640, function() {
                    $('html, body').scrollTop = scrollTo;
                });
            }
        }
    });
});