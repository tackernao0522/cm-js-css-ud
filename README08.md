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
