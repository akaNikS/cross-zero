let cells = document.querySelectorAll('#field td');
let winner =  document.querySelector('#win');
start(cells);

function start(cells) {
    let count = 0;
    for (let cell of cells) {
        cell.addEventListener('click', function step() {
            if (count % 2 === 0 && !isVictory(cells)) {
                this.innerHTML = 'X';
                this.removeEventListener('click', step);
                count++;
                console.log(count);
            } else if (count % 2 !== 0 && !isVictory(cells)) {
                this.innerHTML = '0';
                this.removeEventListener('click', step);
                count++;
                console.log(count);
            }
            if (isVictory(cells) && count % 2 === 0) {
                winner.innerHTML = `Выйграли: 0`;
            } else if (isVictory(cells) && count % 2 !== 0) {
                winner.innerHTML = `Выйграли: X`;
            } else if (count === 9) {
                winner.innerHTML = 'Ничья';
            }

        });
    }
}

function isVictory(cells) {
    let combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let comb of combinations) {
        if (
            cells[comb[0]].innerHTML === cells[comb[1]].innerHTML &&
            cells[comb[1]].innerHTML === cells[comb[2]].innerHTML &&
            cells[comb[0]].innerHTML !== ''
        ) {
            return true;
        }
    }
    return false;
}

let buttonOfClear = document.querySelector('#btn');
buttonOfClear.addEventListener('click', function () {
    for (let cell of cells) {
        cell.innerHTML = '';
        winner.innerHTML = '';
    }
    start(cells);
})