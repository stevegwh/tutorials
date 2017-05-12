var rooms = {
    "room0": {
        "description": "<p>You are in a dark, cold place. You see a light to the <b>north</b> and you hear running water to the <b>south</b>.</p>",
        "directions": ["north", "south"]
    },
    "room1": {
        "description": "<p>You see an old, creepy lighthouse to the <b>north</b>. What do you do?</p>",
        "directions": ["north", "east", "south"]
    },
    "room2": {
        "description": "<p>You enter the lighthouse and a wild man attacks you! Run away!</p>",
        "directions": ["south"]
    },
    "room11": {
        "description": "<p>You reach a dead end. Damn!</p>",
        "directions": ["west"]
    }
}

var currentRoom;

function changeRoom(num) {
    currentRoom = num;
    $('#game-text').append(rooms["room" + num].description);
    $('#user-input').empty();
}

$(document).ready(function() {

    changeRoom(0);

    $(document).keypress(function(key) {
        if (key.which === 13 && $("#user-input").is(":focus")) {
            var value = $('#user-input').val().toLowerCase();
            $('#user-input').val(" ");
            if (rooms["room" + currentRoom].directions.indexOf(value) === -1) {
                $('#game-text').append("<p>Invalid direction, please try again.. ");
                return;
            }
            $("#game-text").append("<p>You go " + value + "!</p>");
            switch (value) {
                case "north":
                    changeRoom(currentRoom + 1);
                    break;
                case "south":
                    changeRoom(currentRoom - 1);
                    break;
                case "east":
                    changeRoom(currentRoom + 10);
                    break;
                case "west":
                    changeRoom(currentRoom - 10);
                    break;
                default:
                    alert("Something has gone wrong!");
            }
        }
    })
})
