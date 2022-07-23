const arry = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < arry.length; i++) {
//     console.log(i);
// }

// for (let i in arry) {
//     // console.log(i) // 0 1 2 3 4 5
//     // console.log(arry[i]) // 1 2 3 4 5 6
//     console.log(i, arry[i])
// }

// for (let i in arry) {
//     let v = arry[i]
//     console.log(v) // 1 2 3 4 5 6
// }

for (let v of arry) {
    console.log(v) // 1 2 3 4 5 6

}
