$(document).ready(function () {

// const N = '6';
const S = '1A 2B, 2D 2F, 4A 4D, 5F 6F';
const T = '1D 2A 2D 2E 2F 4B 5E 5F 6D 6E';
// const N = '4';
// const S = '1B 2C, 2D 4D';
// const T = '2B 2D 3D 4D 4A';

    function A() {
        let SArray = S.split(',');
        let TArray = T.split(' ');
        let sunk = 0;
        let partialHit = 0;

        let result = [];
        SArray.forEach(ship => {
            console.log(ship);
            let myShipStartRow = ship.trim().substring(0,1);
            let myShipEndsRow = ship.trim().substring(3,4);

            let myShipStartCol = ship.trim().substring(1,2);
            let myShipEndsCol = ship.trim().substring(4,5);

            let temp = [];
            for (let row = myShipStartRow; row <= myShipEndsRow; row++) {
                for (let col = myShipStartCol.charCodeAt(0); col <= myShipEndsCol.charCodeAt(0); col++) {
                    temp.push(row + String.fromCharCode(col));
                }
            }
            result.push(temp);
        })

        result.forEach(ship => {
            let hits = 0;
            ship.forEach(cell => {
                if(TArray.some(val => val == cell)) {
                    hits++;
                }
            })
            if (ship.length == hits) {
                sunk++;
            } else if (hits > 0) {
                partialHit++;
            }
        });

        console.log('sunk =', sunk + ' , ' + 'partialHit =', partialHit);
    }

    A();
});


// //////////////////////////////////////////////////////////////////////////////
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, S, T) {
    let SArray = S.split(',');
    let TArray = T.split(' ');
    let sunk = 0;
    let partialHit = 0;
    let result = [];

    SArray.forEach(ship => {
        let myShipStartRow = ship.trim().substring(0, 1);
        let myShipEndsRow = ship.trim().substring(3, 4);

        let myShipStartCol = ship.trim().substring(1, 2);
        let myShipEndsCol = ship.trim().substring(4, 5);

        let temp = [];
        for (let row = myShipStartRow; row <= myShipEndsRow; row++) {
            for (let col = myShipStartCol.charCodeAt(0); col <= myShipEndsCol.charCodeAt(0); col++) {
                temp.push(row + String.fromCharCode(col));
            }
        }
        result.push(temp);
    })

    result.forEach(ship => {
        let hits = 0;
        ship.forEach(cell => {
            if (TArray.some(val => val == cell)) {
                hits++;
            }
        })
        if (ship.length == hits) {
            sunk++;
        } else if (hits > 0) {
            partialHit++;
        }
    })

    return sunk.toString() + "," + partialHit.toString();

}
