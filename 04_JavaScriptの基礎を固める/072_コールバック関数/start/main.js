// function hello(callback, lastname) {
//   console.log('hello ' + callback(lastname)) // lastnameはコールバックの第二引数であり、呼び出し元の引数name に返る
// }

// function getName() {
//   return 'Takaki Nakamura'
// }

// function getFirstName() {
//   return 'Takaki'
// }

// const getFirstName = function(name) {
//   return 'Takaki ' + name
// }

// hello(getName) // hello Takaki Nakamura
// hello(getFirstName) // hello Takaki

// hello(function(name) {
//   return 'Takaki ' + name
// }, 'Nakamura') // 'Nakamura は第二引数

// hello(() => 'Takaki') // アロー関数で書くと

// hello(getFirstName, 'Nakamura')

function doSomething(a, b, callback) {
  const result = callback(a, b)
  console.log(result)
}

function multiply(a, b) {
  return a * b;
}

function plus(a, b) {
  return a + b
}

doSomething(2, 2, multiply)
doSomething(2, 3, plus)
