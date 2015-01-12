function Message(containerId) {
    $("body").append("<div id='message' style='display:none;'></div>");
    var message = $("#message");
    var colorMap = new Array();

    this.show = function () {
        if (message.html()) {

            message.fadeIn();

            var containerPosition = $("#" + containerId).position();

            message.offset({
                left: containerPosition.left + message.width() - 17,
                top: containerPosition.top - message.height()
            });

            if ($(message).position().top < 0) {
                message.css("top", 0);
            }
        }
    }

    this.setContent = function (content, hexColor) {
        message.html(content);

        if (content != null && content.length < 33) {
            message.css("text-align", "center");
        }

        if (hexColor == null) {
            return;
        }

        var foundMapping;

        for (var i = 0; i < colorMap.length; i++) {
            if (colorMap[i].from.toUpperCase() == hexColor.toUpperCase()) {
                foundMapping = colorMap[i];
                break;
            }
        }

        if (foundMapping != null) {
            hexColor = foundMapping.to;
            $("#" + containerId).css("color", hexColor);
        }

        message.css("color", hexColor);
    }

    this.clear = function () {
        message.empty();
    }

    this.hide = function () {
        message.hide();
    }

    this.addTextColorMapping = function (from, to) {
        var map = {
            from: from,
            to: to
        };

        colorMap.push(map);
    }
}
