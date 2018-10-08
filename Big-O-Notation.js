
// function addUpTo(n) {
//     let toatl = 0;
//     for (let i = 1; i <=n; i++) {
//         total =+ i;
//     }
//     return total;
// }

// console.log(addUpTo(3));

// function addUpTo(n) {
//     let total = 0;
//     for (let i = 1; i <= n; i++) {
//         total += i;
//     }
//     return total;
// }
// function addUpTo(n) {
//     return n* (n + 1)
// }

// var t1 = performance.now();
// addUpTo(1000000000);
// var t2 = performance.now();
// console.log('Time Elapsed: ${(t2 - t1) / 1000} seconds.')

// function countUpAndDown(n) {
//     console.log("GOing up!");
//     for (let i = 0; i < n; i++) {
//         console.log(i);
//     }
//     console.log("At the top!\nGoing down...");
//     for(let j = n - 1; j >= 0; j--) {
//         console.log(j);
//     }
//     console.log("Back down. Bye!");
// }
// console.log(countUpAndDown(6));

function printAllPairs(n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}
console.log(printAllPairs(10));