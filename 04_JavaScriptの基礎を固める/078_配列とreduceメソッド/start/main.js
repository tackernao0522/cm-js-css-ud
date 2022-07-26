const arry = [1, 2, 3, 4, 5];

// arry.reduce(function (accu, curr) {
//   console.log(accu, curr)
//   return accu + curr
//   // 1 2
//   // 3 3
//   // 6 4
//   // 10 5
// });

arry.reduce(function (accu, curr) {
  console.log(accu, curr)
  // return accu + curr
}, 10);

// const str = 'animation';
// const strArry = str.split('')

// console.log(strArry) // (9) ['a', 'n', 'i', 'm', 'a', 't', 'i', 'o', 'n']

const str = 'animation';
const strArry = str.split('');

const result = strArry.reduce((accu, curr) => {
  console.log(accu)
  return `${accu}<${curr}>`
  // return accu + '<' + curr + '>';
}, "")

console.log(result);
