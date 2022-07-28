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

```js:main.js
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

## 66. [文法編] 配列とreduceメソッド

+ JavaScriptの基礎を固める/078_配列とreduceメソッド/start/main.js`を編集<br>

```js:main.js
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
```

## 67. [文法編] reduce関数を作ってみよう

+ JavaScriptの基礎を固める/079_reduce関数を作ってみよう/start/main.js`を編集<br>

```js:main.js
const str = 'animation';
const strArry = str.split('');

function tag(accu, curr) {
    console.log(accu, curr); // a n i m a t i o n = currのみ渡ってきている
    return `${accu}<${curr}>`;
}


function reduce(arry, callback, defaultValue) {
    let accu = defaultValue;
    for (let i = 0; i < arry.length; i++) {
        let curr = arry[i];
        // console.log(curr) // a n i m a t i o n
        accu = callback(accu, curr); // callbackのtagが呼ばれている 変数accuに return `${accu}<${curr}>`;が返されている
    }

    return accu; //  reduce(strArry, tag, "");に返す
}

const result = reduce(strArry, tag, ""); // return accuが返ってくる
console.log(result); // <a><n><i><m><a><t><i><o><n>
```

## 68. [DOM編] JavaScriptでHTML参照・更新！セレクターAPIを学ぼう！

```:console
> document.querySelector('#main-title') // こっちを使った方が良い
=> <h1 id="main-title">JavaScript基礎</h1>

> document.body.children
=> HTMLCollection(4) [h1#main-title, h2.sub-title, ul, script, main-title: h1#main-title]

> document.getElementById('main-title') // 古い
=> <h1 id="main-title">JavaScript基礎</h1>

docment.querySelector('.sub-title') // classで取得する場合
=> <h2 class="sub-title">DOM(Document Object Model)とは？</h2>

document.querySelector('h1') // tagで取得する場合
=> <h1 id="main-title">JavaScript基礎</h1>

document.querySelector('.item')
=> <li class="item item-1">HTMLを<strong class="v1">JavaScript</strong>から操作できるようにしたインターフェイス。</li> // 一番初めに一致するものしか取得できない

document.querySelectorAll('.item') // 全てを取得する場合
=> NodeList(3) [li.item.item-1, li.item.item-2, li.item.item-3]

document.querySelectAll('ul > li')
=> NodeList(3) [li.item.item-1, li.item.item-2, li.item.item-3]

const h1 = document.querySelector('#main-title')
h1.innerHTML
=> "JavaScript基礎"

h1.innerHTML = 'AAAAAAA' // ブラウザ上の文字列が変わる
"AAAAAAAA"

h1.innerHTML = 'AAAAAAA <span style="color: blue">BBBBB</span>'
=> 'AAAAAAA <span style="color: blue">BBBBB</span>'

h1.textContent
=> 'AAAAAAA BBBBB'

h1.textContent = 'AAAAAAAA <span style="color: blue">BBBBB</span>'
=> 'AAAAAAAA <span style="color: blue">BBBBB</span>' // エスケープされて表示される

h1.style.color = 'red'
=> "red"

h1.style.backgroundColor = 'gray'
=> 'gray'

// 一旦クリアして
const h1 = document.querySelector('#main-title')
h1.classList.add('underline') // h1タグにclass="underline"が追加される

h1.classList.remove('underline') // class="underline"を削除する

h1.classList.toggle('underline') // 呼ぶ度にtrue falseが切り替わる

const ul = document.querySelector('ul')
ul.style.color = 'red'
=> 'red'

const firstLi = ul.qureySelector('li')
firstLi.style.color = 'black'

const li = document.querySelectorAll('li')
li[0].style.color = 'purple' // このように一つずつ変えても良いが
=> 'purple'

li
=> NodeList(3) [li,item.item-1, li.item.item-2, li.item.item-3]

li.forEach(node => node.style.color = 'purple'); // これだといっぺんに変えれられる
```

## 69. [DOM編] 画面に機能を追加！イベントリスナーでイベントを登録！

+ `04_JavaScriptの基礎を固める/090_DOMにイベントを登録してみよう/start/index.html`を編集<br>

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
    <h1 id="main-title">JavaScript基礎</h1>
    <h2 class="sub-title">DOM(Document Object Model)にイベントリスナーを登録してみよう。</h2>

    <!-- <button id="btn">Change Title Color</button> -->
    <button id="btn" onclick="changeColor()">Change Title Color</button> <!-- この中でメソッドを呼ぶ方法(非推奨) -->
    <script src="main.js"></script>
</body>

</html>
```

+ `04_JavaScriptの基礎を固める/090_DOMにイベントを登録してみよう/start/main.js`を編集<br>

```js:main.js
const btn = document.querySelector('#btn')
const h1 = document.querySelector('h1')

// btn.addEventListener('click', function () {
//   alert('hello');
// });

// よりベターな方法
// const hello = function() {
//   alert('hello')
// }

// or

// function hello() {
//   // const h1 = document.querySelector('h1') // 関数の中に入れることもできる
//   // alert('hello');
//   // btn.style.color = 'red';
//   h1.style.color = 'red';
//   // this.style.color = 'red';
//   // console.log(this) // <button id="btn" style="color: red;">Change Title Color</button>
// };

function changeColor() {
  h1.style.color = 'red';
};

function changeBgColor() {
  h1.style.backgroundColor = 'green';
};
// btn.addEventListener('click', hello);
// btn.addEventListener('click', changeColor);
// btn.addEventListener('click', changeBgColor);

btn.onclick = changeColor; // 参考程度 addEventListennerを使うこと
// btn.onclick = changeBgColor; // 参考程度 addEventListennerを使うこと 後から書いた方が上書きされるので一つしか登録できない
// btn.removeEventListener('click', changeBgColor);
// btn.addEventListener('mouseenter', hello);
// btn.removeEventListener('click', hello);
```

## 70. [DOM編] 超基礎！画面初期化時にコードを実行！DOMContentLoadedとLoadの違いについて学ぼう！

+ `04_JavaScriptの基礎を固める/100_DOMイベント（ページの初期化）/start/index.html`を編集<br>

```html:index.html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <script src="main.js"></script> <!-- エラーになるがDOMContentLoadedの中に定義するとエラーにならない -->
    <h1 id="main-title">DOMContentLoaded vs load</h1>
    <strong class="dcl">DOMContentLoaded</strong>
    <strong class="load">load</strong>
    <img src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format"
        alt="" width="300" />
    <img src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format"
        alt="" width="300" />
    <a style="position: fixed; bottom:0; left: 0;" href="https://codepen.io/LukeAskew/pen/LnJsE"
        target="_blank">@LukeAskew</a>
    <!-- <script src="main.js"></script> -->
</body>

</html>
```

+ `04_JavaScriptの基礎を固める/100_DOMイベント（ページの初期化）/start/main.js`を編集<br>

```js:main.js
// const h1 = document.querySelector('h1');
// h1.style.color = 'red';

// const dcl = document.querySelector('.dcl');
// const load = document.querySelector('.load');

// // windowも使える
document.addEventListener("DOMContentLoaded", function () {
    const h1 = document.querySelector('h1');
    h1.style.color = 'red';
    // dcl.classList.add('done');
});

// // documentは使えない (表示も遅いのでDOMContentLoadedの方を使った方が良い)
// window.addEventListener("load", function () {
// const h1 = document.querySelector('h1');
// h1.style.color = 'red';
//     load.classList.add('done');
// });
```

## 71. [DOM編] [演習] 文字列をHTMLタグに分割してみよう！！

+ `04_JavaScriptの基礎を固める/110_DOM操作練習（文字分割）/start/index.html`を編集<br>

```html:index.html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Teko:wght@500&display=swap" rel="stylesheet">
</head>

<body>
    <div id="container">
        <div class="animate-title inview">
            ANIMATION
        </div>
        <button onclick="document.querySelector('.animate-title').classList.toggle('inview');">Animation</button>
    </div>
    <script src="main.js"></script>
</body>

</html>
```

+ `04_JavaScriptの基礎を固める/110_DOM操作練習（文字分割）/start/main.js`を編集<br>

```js:main.js
document.addEventListener('DOMContentLoaded', function () {
  const el = document.querySelector('.animate-title');
  const str = el.innerHTML.trim();
  let concatStr = '';

  for (let c of str) {
    concatStr += `<span class="char">${c}</span>`;
  }
  el.innerHTML = concatStr;
})
```

+ `04_JavaScriptの基礎を固める/110_DOM操作練習（文字分割）/start/index.html`を編集<br>

```html:index.html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Teko:wght@500&display=swap" rel="stylesheet">
</head>

<body>
    <div id="container">
        <div class="animate-title inview">
            PLAY ANIMATION
        </div>
        <button onclick="document.querySelector('.animate-title').classList.toggle('inview');">Animation</button>
    </div>
    <script src="main.js"></script>
</body>

</html>
```

+ `04_JavaScriptの基礎を固める/110_DOM操作練習（文字分割）/start/main.js`を編集<br>

```js:main.js
document.addEventListener('DOMContentLoaded', function () {
  const el = document.querySelector('.animate-title');
  const str = el.innerHTML.trim();
  let concatStr = '';

  for (let c of str) {
    // c = c.replace(' ', '&nbsp;')
    c = c.replace(/\s+/, '&nbsp;'); // 正規表現での書き方
    concatStr += `<span class="char">${c}</span>`;
  }
  el.innerHTML = concatStr;
})
```

+ `04_JavaScriptの基礎を固める/110_DOM操作練習（文字分割）/start/main.js`を編集(reduceメソッドでの書き方)<br>

```js:main.js
document.addEventListener('DOMContentLoaded', function () {
  const el = document.querySelector('.animate-title');
  const str = el.innerHTML.trim().split(""); // 空文字で配列に直す(reduceメソッドを使う際に配列にする必要がある)

  el.innerHTML = str.reduce((acc, curr) => {
    curr = curr.replace(/\s+/, '&nbsp;');
    return `${acc}<span class="char">${curr}</span>`;
  }, "");
});
```
