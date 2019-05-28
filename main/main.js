const arrays = [
    ['._.',   '...',   '._.',   '._.',   '...',   '._.',   '._.',   '._.',   '._.',   '._.'],
    ['|.|',   '..|',   '._|',   '._|',   '|_|',   '|_.',   '|_.',   '..|',   '|_|',   '|_|'],
    ['|_|',   '..|',   '|_.',   '._|',   '..|',   '._|',   '|_|',   '..|',   '|_|',   '..|']
]

module.exports = function main(str) {
    const num = [[],[],[]]

    for(let s of str) {
        num[0].push(arrays[0][s])
        num[1].push(arrays[1][s])
        num[2].push(arrays[2][s])
    }
    return num.map(row => row.join(' ') + '\n').join('')
};