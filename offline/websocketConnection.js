var main = [
    {
        "name": "Based Yoona",
        "twitch": "based_yoona",
        "youtube": "user/xTheLastSpartanxx",
        "twitter": "BasedYoona",
        "instagram": "based_yoona",
        "facebook": "BasedYoona"
    },
    {
        "name": "Disguised Toast",
        "twitch": "disguisedtoasths",
        "youtube": "channel/UCUT8RoNBTJvwW1iErP6-b-A",
        "twitter": "DisguisedToast",
        "instagram": "thedisguisedtoast",
        "facebook": "disguisedtoast"
    },
    {
        "name": "Fed Myster",
        "twitch": "fedmyster",
        "youtube": "channel/UCOmXyEquWIIo1uAj_2LN4UA",
        "twitter": "Fedmyster",
        "instagram": "fedmyster",
        "facebook": "Fedmyster"
    },
    {
        "name": "LilyPichu",
        "twitch": "lilypichu",
        "youtube": "user/LilyPichu",
        "twitter": "LilyPichu",
        "instagram": "lilypichu",
        "facebook": "lilypichu"
    },
    {
        "name": "Pokimane",
        "twitch": "pokimane",
        "youtube": "user/pokimane",
        "twitter": "pokimanelol",
        "instagram": "pokimanelol",
        "facebook": "pokimane"
    },
    {
        "name": "Scarra",
        "twitch": "scarra",
        "youtube": "user/scarraofficial",
        "twitter": "scarra",
        "instagram": "scarraa",
        "facebook": "scarraofficial"
    }
];

var side = [
    {
        "name": "Chris Chan",
        "twitch": "chrischantor",
        "twitter": "ChrisChanTO",
        "instagram": "chrischantor",
        "facebook": "OfflineChris"
    },
    {
        "name": "Pecca",
        "twitch": "peccapecca",
        "twitter": "peccapecca",
        "instagram": "peccapeccapecca",
        "facebook": "peccapeccapecca"
    },
    {
        "name": "Sleightly Musical",
        "twitch": "sleightlymusical",
        "youtube": "user/sleightlymusical",
        "twitter": "THEalbertchang",
        "instagram": "sleightlymusical",
        "facebook": "sleightlymusical"
    },
    {
        "name": "TheeMarkZ",
        "twitch": "theemarkz",
        "youtube": "channel/UCU74OVWGSmJqR1g6y-tgUHQ",
        "twitter": "TheeMarkZ",
        "instagram": "theemarkz",
        "facebook": "theemarkz"
    },
    {
        "name": "Xell",
        "twitch": "xell",
        "youtube": "user/OfficialXell",
        "twitter": "XellTweets",
        "instagram": "xellgrams",
        "facebook": "LoLXell"
    }
];

$(function() {
    window.WebSocket = window.WebSocket || window.MozWebSocket;
    
    main.forEach((value, index) => {
        var links = "";
        if (value.twitch)
        links += `<li><h3><a class='twitch' href='https://twitch.tv/${value.twitch}' target='_blank'>Twitch</a></h3></li>`
        if (value.youtube)
        links += `<li><h3><a class='youtube' href='https://youtube.com/${value.twitch}' target='_blank'>YouTube</a></h3></li>`
        if (value.twitter)
        links += `<li><h3><a class='twitter' href='https://twitter.com/${value.twitch}' target='_blank'>Twitter</a></h3></li>`
        if (value.instagram)
        links += `<li><h3><a class='instagram' href='https://instagram.com/${value.twitch}' target='_blank'>Instagram</a></h3></li>`
        if (value.facebook)
        links += `<li><h3><a class='facebook' href='https://facebook.com/${value.twitch}' target='_blank'>Facebook</a></h3></li>`
        $("#main").append(
            `<div class='creator bounce-up' data-streamer=${value.twitch}>`
            + `<div class='image-adjust'><img src='https://twitter.com/${value.twitter}/profile_image?size=original' /></div>`
            + `<h2>${value.name}</h2>`
            + "<div class='streaming-border'><div class='streaming-indicator'></div></div>"
            + `<ul>${links}</ul>`
            + "</div>"
        );
    });

    side.forEach((value, index) => {
        var links = "";
        if (value.twitch)
        links += `<li><h3><a class='twitch' href='https://twitch.tv/${value.twitch}' target='_blank'>Twitch</a></h3></li>`
        if (value.youtube)
        links += `<li><h3><a class='youtube' href='https://youtube.com/${value.twitch}' target='_blank'>YouTube</a></h3></li>`
        if (value.twitter)
        links += `<li><h3><a class='twitter' href='https://twitter.com/${value.twitch}' target='_blank'>Twitter</a></h3></li>`
        if (value.instagram)
        links += `<li><h3><a class='instagram' href='https://instagram.com/${value.twitch}' target='_blank'>Instagram</a></h3></li>`
        if (value.facebook)
        links += `<li><h3><a class='facebook' href='https://facebook.com/${value.twitch}' target='_blank'>Facebook</a></h3></li>`
        $("#side").append(
            `<div class='creator bounce-up' data-streamer=${value.twitch}>`
            + `<div class='image-adjust'><img src='https://twitter.com/${value.twitter}/profile_image?size=original' /></div>`
            + `<h2>${value.name}</h2>`
            + "<div class='streaming-border'><div class='streaming-indicator'></div></div>"
            + `<ul>${links}</ul>`
            + "</div>"
        );
    });
    
    var connection = setupConnection();

    setInterval(function() {
        if (connection.readyState !== 1) {
            console.log('could not reach websocket server');

            connection = setupConnection();
        }
    }, 3000);
});

function setupConnection() {
    var connection = new WebSocket('ws://34.73.180.39/');

    connection.onopen = function() {
        console.log((new Date) + ' opened session');
    }

    connection.onmessage = function(message) {
        console.log((new Date) + ' message from websocket');
        let presence = JSON.parse(message.data).entertainers;
        console.log(JSON.parse(message.data));
        presence.forEach(function(entertainer) {
            element = $(`div[data-streamer="${entertainer.name}"]`);
            streamingIndicator = element.find(".streaming-indicator");
            element.find("img").attr("src", entertainer.twitLink.replace("_normal", ''));
            if (entertainer.online) {
                streamingIndicator.css("background", "rgb(181, 64, 215)");
                if (!streamingIndicator.hasClass('live'))
                    streamingIndicator.addClass('live');
                streamingIndicator.removeClass('offline');
            } else {
                streamingIndicator.css("background", "rgb(140, 140, 140)");
                if (!streamingIndicator.hasClass('offline'))
                    streamingIndicator.addClass('offline');
                streamingIndicator.removeClass('live');
            }
        });
    }

    connection.onerror = function(error) {
        console.log(error);
    }

    return connection;
}
