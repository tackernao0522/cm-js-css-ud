// 無名関数 (関数の実行文より前に持ってくる)
// const hello = function(name, age) {
//     // let name = 'Takaki Nakamura'
//     console.log('hello ' + name + age)
//     return name + age
// }


hello('Takaki Nakamura', 10)
const returnVal = hello('Naomi Etsui', 20)
console.log(returnVal)

// 普通の関数 (関数の実行文の後に記述してもエラーにならない)
function hello(name, age) {
  // let name = 'Takaki Nakamura'
  console.log('hello ' + name + age)
  return name + age
}
