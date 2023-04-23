function getMiddle(str) {
    // check type of the data
    if (typeof str !== 'string') {
        return 'Please provide a string'
    }
    // check length
    if (str.length < 1 || str.length > 1000) {
        return 'Please provide a correct string'
    }
    // check if odd or even
    if (str.length%2 === 0) {
        return (str[str.length/2-1] + str[str.length/2])
    } else {
        return (str[Math.round(str.length/2)-1])
    }
}