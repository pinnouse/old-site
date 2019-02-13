$(function() {
    $('a[href*="#"]').click(function(e) {
        e.preventDefault();
        target = $(this.hash);
        offsetX = '0';
        $('#pages > div').each(function(i, el) {
            if ($(el).attr('id') == target.attr('id'))
                offsetX = "-" + (i * 100) + "%";
        });
        $('#pages > div:first-child').css("margin-left", offsetX);
    });
});