function stringLength(string) {
    if (typeof string === "string") {
        if (string.length >= 1 && string.length <= 10) {
            return string.length;
        } else {
            if (string.length < 1) {
                return 'text is blank';
            } if (string.length > 10) {
                return 'the text is too big';
            }
        }
    } else {
        return 'this is not text'
    }
}

module.exports = stringLength;