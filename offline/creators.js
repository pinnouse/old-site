var $animation_elements = $('.creator');
            var $window = $('#creators');
            var $pages = $('.page');

            function checkView(resize = false) {
                var window_height = $window.height();
                var window_top_position = $window.scrollTop();
                var bottom_threshold = (window_top_position + (window_height * 0.7));

                $.each($animation_elements, function(index, value) {
                    var $element = $(value);
                    var element_top = $element.offset().top;

                    if (resize)
                        element_top -= 100;

                    if (element_top <= window_height * 0.97) {
                        $element.addClass('in-view');
                    } else {
                        $element.removeClass('in-view');
                    }
                });
            }

            window.addEventListener('scroll', function (event) {
                if (event.target.id === 'creators') {
                    checkView();
                }
            }, true);

            window.addEventListener('resize', function (event) {
                checkView(true);
            }, true);

            checkView(true);