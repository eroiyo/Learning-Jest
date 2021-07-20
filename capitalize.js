function capitalize(string) {
    const buffer =string
    string = (buffer.charAt(0).toUpperCase()) + (buffer.slice(1));
    return string
}

module.exports = capitalize;