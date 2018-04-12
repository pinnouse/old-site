$(function() {
    window.WebSocket = window.WebSocket || window.MozWebSocket;

    var connection = setupConnection();

    setInterval(function() {
        if (connection.readyState !== 1) {
            console.log('could not reach websocket server');

            connection = setupConnection();
        }
    }, 3000);
});

function setupConnection() {
    var connection = new WebSocket('ws://35.193.146.111/');

    connection.onopen = function() {
        console.log((new Date) + ' opened session');
    }

    connection.onmessage = function(message) {
        console.log((new Date) + ' message from websocket');
        let presence = JSON.parse(message.data).streamers;
        presence.forEach(function(streamer) {
            $element = $(`div[data-streamer="${streamer.name}"]`);
            if (streamer.online) {
                $element.css("background", "rgb(181, 64, 215)");
                if (!$element.hasClass('live'))
                    $element.addClass('live');
                $element.removeClass('offline');
            } else {
                $element.css("background", "rgb(140, 140, 140)");
                if (!$element.hasClass('offline'))
                    $element.addClass('offline');
                $element.removeClass('live');
            }
        });
    }

    connection.onerror = function(error) {
        console.log(error);
    }

    return connection;
}