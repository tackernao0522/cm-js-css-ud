const arry = [1, 2, 3, 4, 5];

// どちらかというと forEachメソッドになれた方が良い

// arry.forEach(function (val) {
//   console.log(val);
// })

// arry.forEach(function (v, i, ary) {
//   console.log(v, i, ary);
// })

// アロー関数でforEach
arry.forEach(val => console.log(val))

// for (let i = 0; i < arry.length; i++) {
//   const v = arry[i]
//   console.log(v)
// }
