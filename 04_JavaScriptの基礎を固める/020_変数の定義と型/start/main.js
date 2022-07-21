// var, let, const

// var name = 'Tom' // 基本的に var は使わない
let name = 'Tom' // 後から上書きが可能
name = 'Tim'
// const name = 'Tom' // 後から上書きが不可能
// name = 'Tim' // Erroになる
console.log('hello ' + name)

// Number, String, Boolean, Undefined, Null, Symbol # JavaScriptは動的型付け言語である

// 動的型付け言語
let variable = 'str'
variable = 12 // Number
variable = false // Boolean
variable = undefined // Premitive

console.log(typeof variable) // 型の種類の確認

// 静的型付け言語
// int num = 12