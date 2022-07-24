// 普通の関数 (呼び出し元より下でも読み込まれる)
// function hello(name = 'Kaira') {
//   console.log('hello ' + name)
// }

// 呼び出し元より上じゃないとエラーになる
// const hello = function (name = 'Kaira') {
//   console.log('hello ' + name)
// }

// アロー関数
// const hello = name => console.log('hello ' + name)
// const hello = (name, age) => console.log('hello' + name + age)

// hello('Takaki Nakamura') // hello Takaki Nakamura
// hello('Naomi Etsui') // hello Naomi Etsui
// hello() // hello Kaira

// hello('Takaki Nakamura', 53)
// hello('Naomi Etsui', 60)

const hello = (name, age) => 40; // 40

const arry = [1, 2, 3, 4, 5, 6];

// arry.forEach(function (value) {
//   console.log(value) // 1 2 3 4 5 6
// })

arry.forEach(value => console.log(value)) // 1 2 3 4 5 6
