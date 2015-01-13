function Food(containerId) {
    var foodColors = [
        "#0072F2", // light blue
        "#F70802", // red
        "#10A826", // light green
        "#FAE807", // yellow
        "#FF4E0C", // orange
        "#5E1D14"  // brown
    ];
    var prevColor;
    var random = new Randomizer();
    var trollingContent = new Array();
    var message = new Message(containerId);
    message.addTextColorMapping("#FAE807", "#000000"); // yellow to black

    $(window).resize(function () {
        message.show();
    });

    this.setRandomPosition = function () {
        random.setRandomCell(containerId, "td:not([id^='snake'], [class^='snake'])");

        // prevent to show the same color 
        var foodColorsCopy = [].concat(foodColors);
        foodColorsCopy.remove(prevColor);
        var randomColor = random.getRandomObject(foodColorsCopy);
        prevColor = randomColor;
        
        setFoodColor(randomColor);

        message.hide();

        var content = random.getRandomObject(trollingContent);

        if (content != null) {
            setFoodContent(content.Victim);

            var phrase = random.getRandomObject(content.Phrases);
            message.setContent(phrase, randomColor);

            content.Phrases.remove(phrase);
            if (content.Phrases.length == 0) {
                trollingContent.remove(content);
            }
        } else {
            message.clear();
        }

        message.show();
    }

    this.setTrollingContent = function (content) {
        trollingContent = content;
    }

    this.getX = function() {
        return $("#" + containerId).getData("x");
    }

    this.getY = function () {
        return $("#" + containerId).getData("y");
    }

    this.setMessageOpacity = function (factor) {
        message.setOpacity(factor);
    }

    function setFoodColor(hexColor) {
        $("#" + containerId).css("background-color", hexColor);
    }

    function setFoodContent(content) {
        $("#" + containerId).html(content);
    }
}