function convNumberToHex(n){
    let hex;
    switch (n) {
        case (15):
            hex = 'F'
            break
        case (14):
            hex = 'E'
            break
        case (13):
            hex = 'D'
            break
        case (12):
            hex = 'C'
            break
        case (11):
            hex = 'B'
            break
        case (10):
            hex = 'A'
            break
        default:
            hex = n;
            break
    }

    return hex
}

module.exports = convNumberToHex