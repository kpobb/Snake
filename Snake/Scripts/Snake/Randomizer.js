function Randomizer() {
    this.getRandomObject = function (array) {
        var index = this.getRandomValue(0, array.length);
        return array[index];
    }

    this.getRandomValue = function (min, max) {
        return Math.floor((Math.random() * max) + min);
    }

    this.setRandomCell = function (containerId, filter) {
        $("td[id='" + containerId + "']").removeAttr("id");
        var emptyCells = $(filter);
        var randomCell = this.getRandomObject(emptyCells);
        $(randomCell).attr("id", containerId);
    }
}