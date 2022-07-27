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
