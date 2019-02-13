var $pages;
$(() => {
    $pages = $('.page');
});

function switchTo(channel) {
    $title = $('#title');
    switch(channel) {
        case 0:
        $title.text("Creators");
        $.each($pages, function(index, value) {
            $element = $(value);
            if ($element.hasClass('creators'))
                $element.removeClass('left');
            else
                $element.addClass('right');
        });
        break;
        case 1:
        window.location = "http://offlinetv.gg/merch";
        break;
        case 2:
        $title.text("About");
        $.each($pages, function(index, value) {
            $element = $(value);
            if ($element.hasClass('about'))
                $element.removeClass('right');
            else
                $element.addClass('left');
        });
        break;
    }
}