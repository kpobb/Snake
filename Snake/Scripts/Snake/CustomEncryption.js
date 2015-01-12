function CustomEncription() {
    this.Decode = function (encryptedText) {
        var result = encryptedText.toString();
        for (var i = 0; (i + 2) < result.length; i += 3) {
            var temp = result[i];
            result = replaceAt(result, i, result[i + 2]);
            result = replaceAt(result, (i + 2), temp);
        }

        return result;
    }

    function replaceAt(string, index, replace) {
        return string.substring(0, index) + replace + string.substring(index + 1);
    }
}