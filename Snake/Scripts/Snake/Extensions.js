$.fn.modifyData = function (name, offset, maxLimit) {
    var value = parseInt($(this).data(name)) + offset;
    if (value > maxLimit) {
        return 0;
    }
    if (value < 0) {
        return maxLimit;
    }
    return value;
};

$.fn.setXY = function (x, y) {
    return this.each(function () {
        $(this).attr("data-x", x).attr("data-y", y);
    });
};

Array.prototype.remove = function (item) {
    this.splice(this.indexOf(item), 1);
};