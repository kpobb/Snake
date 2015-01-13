function SnakeGame(containerId, gameSpeed, screenWidth, screenHeight) {
    var food = new Food("snake-food");
    var snake = new Snake("snake-head", "snake-tail", food, screenWidth, screenHeight);
    var encryption = new CustomEncription();

    this.start = function () {
        screenHeight = screenWidth < 5 ? 5 : screenWidth;
        screenWidth = screenWidth < 5 ? 5 : screenWidth;

        initScreen();

        snake.setRandomPosition();
        food.setRandomPosition();

        var interval = setInterval(function () {
            snake.runKeyboardHandler();

            snake.reduceMessageOpacity();

            // food was eaten
            if ($("#snake-food").length == 0) {
                snake.increaseSnakeSize();
                food.setRandomPosition();
            }
            // all foods were eaten
            if ($(".snake-tail").length == $("#screen td").length - 1) {
                alert("You win!");
                clearInterval(interval);
            }
                // head bitten tail
            else if ($("#snake-head").hasClass("snake-tail")) {
                alert("You lost!");
                clearInterval(interval);
            }

        }, gameSpeed);
    }

    this.setTrollingContent = function (url) {
        $.ajax({
            url: url,
            type: "GET",
            dataType: "json",
            async: false,
        }).done(function (response) {
            try {
                var json = encryption.Decode(response);
                var obj = $.parseJSON(json);
                food.setTrollingContent(obj.TrollingContent);
            } catch (ex) {
            }
        });
    }

    function initScreen() {
        $("#" + containerId).html("<table id='screen'></table>");

        for (var y = screenHeight - 1, z = 0; y > -1; y--, z++) {
            $("#screen").append("<tr></tr>");
            for (var x = 0; x < screenWidth; x++) {
                var td = $("<td></td>").setXY(x, y);
                $("#screen tr").eq(z).append(td);
            }
        }
    }
}