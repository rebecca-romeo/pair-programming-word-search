const wordSearch = (letters, word) => {
    console.log("check letters", letters)
    // No array argument
    if (letters.length === 0) {
        console.log('Please pass a matrix');
        return undefined;
    }

    // No word argument
    if (word === undefined) {
        console.log('Please pass a word');
        return undefined;
    }

    // Vertical word
    let verticalJoin = [];
    for (let i = 0; i < letters[0].length; i++) {
        verticalJoin.push([]);
    }

    for (let x = 0; x < letters.length; x++) {
        for (let y = 0; y < letters[x].length; y++) {
            verticalJoin[y].push(letters[x][y]);
        }
    }

    const verticalJoin2 = verticalJoin.map(ls => ls.join(''));
    for (vl of verticalJoin2) {
        if (vl.includes(word)) return true;
    }


    // horizontal word
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (hl of horizontalJoin) {
        if (hl.includes(word)) return true;
    }

    return false;
};

module.exports = wordSearch;
