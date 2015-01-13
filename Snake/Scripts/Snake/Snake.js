function Snake(snakeId, tailClass, food, screenWidth, screenHeight) {
    // variables
    var arrowKeyCodes = [
        37, // left
        38, // top
        39, // right
        40  // bottom
    ];
    var clickedKeyCode;
    var snakeSize = 1;
    var snakeSteps = new Array();
    var random = new Randomizer();

    $(document).keydown(function (event) {
        if (isArrowClicked(event.keyCode) && isNotMoveBack(event.keyCode)) {
            clickedKeyCode = event.keyCode;
        }
    });

    this.setRandomPosition = function () {
        random.setRandomCell(snakeId, "td:not([id^='snake'], [class^='snake'])");
    }

    this.increaseSnakeSize = function () {
        $("#" + snakeId).empty();
        snakeSize++;
    }

    this.setHeadPosition = function () {
        if (clickedKeyCode == null) {
            return;
        }

        if (clickedKeyCode == 37) {
            setHeadOffset(-1, 0);
        } else if (clickedKeyCode == 39) {
            setHeadOffset(1, 0);
        } else if (clickedKeyCode == 38) {
            setHeadOffset(0, 1);
        } else if (clickedKeyCode == 40) {
            setHeadOffset(0, -1);
        }
    }

    this.getX = function () {
        return $("#" + snakeId).getData("x");
    }

    this.getY = function () {
        return $("#" + snakeId).getData("y");
    }

    this.reduceMessageOpacity = function () {
        if (this.getX() == (food.getX() + 1) && this.getY() == (food.getY() + 1) ||
            this.getX() == (food.getX() + 1) && this.getY() == food.getY() ||
            this.getX() == food.getX() && this.getY() == (food.getY() + 1)) {
            food.setMessageOpacity(0.4);
        } else {
            food.setMessageOpacity(1);
        }
    }

    function isArrowClicked(keyCode) {
        return $.inArray(keyCode, arrowKeyCodes) !== -1;
    }

    function isNotMoveBack(keyCode) {
        return clickedKeyCode == null ||
            clickedKeyCode == 37 && keyCode != 39 ||
            clickedKeyCode == 39 && keyCode != 37 ||
            clickedKeyCode == 38 && keyCode != 40 ||
            clickedKeyCode == 40 && keyCode != 38;
    }

    function setHeadOffset(offsetX, offsetY) {
        var head = $("#" + snakeId);
        var step = {
            x: head.modifyData("x", offsetX, screenWidth - 1),
            y: head.modifyData("y", offsetY, screenHeight - 1)
        };
        snakeSteps.push(step);

        // remove text, unsubscribe from events, remove id and style
        $("td[id='" + snakeId + "']").empty().off().removeAttr("id").removeAttr("style");
        // reder snake head
        $("td[data-x='" + step.x + "'][data-y='" + step.y + "']").attr("id", snakeId);

        $("." + tailClass).removeAttr("class");
        // render snake tail
        for (var i = 2; i < snakeSize + 1; i++) {
            var prevStep = snakeSteps[snakeSteps.length - i];
            if (prevStep != undefined) {
                $("td[data-x='" + prevStep.x + "'][data-y='" + prevStep.y + "']").addClass("snake-tail");
            }
        }
    }
}