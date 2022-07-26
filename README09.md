## 64. [文法編] コールバック関数とループ処理

+ `04_JavaScriptの基礎を固める/074_コールバック関数とループ/start/main.js`を編集<br>

```js:main.js
const arry = [1, 2, 3, 4, 5];

// 基本的なfor文の書き方
// for (let i = 0; i < arry.length; i++) {
//   console.log(arry[i])
// }

function forEach(ary, callback) {
  for (let i = 0; i < ary.length; i++) {
    callback(ary[i])
  }
}

function log(val) {
  console.log(val)
}

function double(val) {
  val = val * 2
  log(val)
}

forEach(arry, function(val) {
  val = val * 2;
  log(val)
})

// forEach(arry, log);
forEach(arry, double);
```

## 65. [文法編] 配列とforEachメソッド

+ `04_JavaScriptの基礎を固める/076_配列とforEachメソッド/start/main.js`を編集<br>

````js:main.js
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
```
