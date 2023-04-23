function markdownParser(str) {
    // check if we have hashes
    if (str.search('#') === -1) {
        return str
    }
    // check if we have spaces
    if (str.search(' ') === -1) {
        return str
    }
    let elements = str.split(' ');
    // check if we have more than one space after hashes
    if (elements[1] === '') {
        return str
    }
    hashes = str.split(' ')[0];
    text = str.split(' ')[1];
    // check if we have more than 6 hashes
    if (hashes.length > 6) {
        return str
    } else {
    html = '<h' + hashes.length + '>' + text + '</h' + hashes.length + '>'
    return html;
    }
}