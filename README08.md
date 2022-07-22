# セクション6: JavaScriptの基礎を固めよう！

+ `04_JavaScriptの基礎を固める/010_JavaScript導入/start/index.html`を編集<br>

```html:index.html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <h1>JavaScript基礎</h1>
    <script>
        alert('Hello')
        console.log('hello')
    </script>
</body>

</html>
```

### JavaScriptを別ファイルで書く

+ `04_JavaScriptの基礎を固める/010_JavaScript導入/start/index.html`を編集<br>

```html:index.html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <h1>JavaScript基礎</h1>
    <script src="main.js"></script>
</body>

</html>
```

+ `04_JavaScriptの基礎を固める/010_JavaScript導入/start/main.js`を作成<br>

+ `04_JavaScriptの基礎を固める/010_JavaScript導入/start/main.js`を編集<br>

```js:main.js
alert('hello')
console.log('hello')
```

## 53. [文法編] 変数の宣言方法とデータ型について学ぼう！

+ 04_JavaScriptの基礎を固める/020_変数の定義と型/start/main.js`を編集<br>

```js:main.js
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
```

## 54. [文法編] 関数の定義と使い方！

+ 04_JavaScriptの基礎を固める/025_関数定義について/start/main.js`を編集<br>

```js:main.js
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
```

## 55. [文法編] メソッドとプロパティーについて学ぼう！

+ 04_JavaScriptの基礎を固める/030_メソッドとプロパティー/main.js`を編集<br>

```js:main.js
let hello = 'hello world'
// console.log(hello.length) // lengthの部分がプロパティになる
// console.log(hello.toUpperCase()) // toUpperCase() の部分がメソッドになる
// console.log(hello.substring(0, 5)) // 与えられた文字列の分だけ切り取る
// console.log(hello.slice(0, 5)) // 与えられた文字列の分だけ切り取る
console.log(hello.split(' ')) // 文字を分割するメソッド 配列として生成される
```

## 56. [文法編] 配列の使い方をマスターしよう！

+ `04_JavaScriptの基礎を固める/040_配列の使い方/start/main.js`を編集<br>

```js:main.js
// const arry = new Array(1, 2, 3, 4, 5, 6)
// const arry = [1, 2, 3, 4, 5, 6] // 一般的にはこの書き方になる
const arry = [1, 2, 3, 4, 5, 6, 'moji', false] // 様々な型を入れることができる
console.log(arry)
console.log(arry[5])
arry[5] = 8 // constでも可能
console.log(arry)
// arry = new Array(9, 10, 11, 12, 13, 14) // constだとnew はできない
console.log(arry.length)
// arry.push('new item') // arryの末尾に'new item'が追加される
arry.unshift('new item') // arryの先頭に代入される
console.log(arry)
arry.pop()
console.log(arry)
const val2 = arry.pop() // arryの末尾の要素を削除
console.log(val2) // 削除された要素が出力される
const val3 = arry.shift()
console.log(val3) // 先頭の要素を削除する
```

## 57. [文法編] オブジェクトを使ってデータを管理しよう！

+ `04_JavaScriptの基礎を固める/050_オブジェクトの使い方/start/main.js`を編集<br>

```js:main.js
// const person = {}
// person.name = 'Takaki Nakamura'

const person = {
  // name: 'Takaki Nakamura'
  name: ['Takaki', 'Nakamura'],
  age: 32,
  gender: 'male',
  interests: {
      sports: 'soccer',
    music: 'piano'
  },
  // メソッドも定義できる
  getFullName: function() {
    console.log(this.name[0] + this.name[1]);
  }
}

console.log(person.name); // ['Takaki', 'Nakamura']
console.log(person.name[1]); // 'Nakamura'
console.log(person.age); // 32
console.log(person.gender); // male
console.log(person.interests); // {sports: 'soccer', music: 'piano'}
console.log(person.interests.sports); // soccer
person.age = 12;
console.log(person.age) // 12
person['age'] = 10; // keyをおく場合は文字列で指定する
console.log(person['age']) // 10
const ageKey = 'age'; // key情報が動的に変わる場合は変数にした方が良い
person[ageKey] = 53;
console.log(person[ageKey]); // 53
person.getFullName();
console.log(person.getFullName()); // TakakiNakamura
```

## 58. [文法編] ループの記述方法基礎

+ `04_JavaScriptの基礎を固める/060_ループの記述方法/start/main.js`を編集<br>

```js:main.js
const arry = [1, 2, 3, 4, 5];

// for (let i = 0; i < 5; i = i + 1) {
//   // console.log(i); // 0 ~ 4が出力される
//   console.log(arry[i]) // arryの1〜5が出力される
// }

for (let i = 0; i < arry.length; i++) {
  console.log(i)
  // console.log(arry[i])
}
```
