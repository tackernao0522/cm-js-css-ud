# セクション7: JavaScriptのより実践的な記述について学ぼう！

## 81. [Tips] スクロール検知の達人！IntersectionObserverを学ぼう！

+ `05_JavaScriptを実践で使う/010_スクロールに合わせてJavaScriptを実行/start/main.js`を編集<br>

```js:main.js
const child = document.querySelector('.child');
// 登録された（この場合 .child)が出てくる時と出ていくときに呼ばれるようになる
const cb = function() {
  alert('intersecting');
}
const io = new IntersectionObserver(cb);
io.observe(child);
```

+ `05_JavaScriptを実践で使う/010_スクロールに合わせてJavaScriptを実行/start/main.js`を編集<br>

```js:main.js
const child = document.querySelector('.child');
const cb = function (entries, observer) {
  entries.forEach(entry => {
    // ifはで入る時 elseは出る時
    if (entry.isIntersecting) {
      console.log('inview');
    } else {
      console.log('out view');
    }
  })
  // alert('intersecting');
}
const io = new IntersectionObserver(cb);
io.observe(child);
// io.observe(child1);
// io.observe(child2);
```

+ `05_JavaScriptを実践で使う/010_スクロールに合わせてJavaScriptを実行/start/main.js`を編集<br>

```js:main.js
const child = document.querySelector('.child');
const cb = function (entries, observer) {
  entries.forEach(entry => {
    // ifはで入る時 elseは出る時
    if (entry.isIntersecting) {
      console.log('inview');
      observer.unobserve(entry.target); // 監視をやめたい場合
    } else {
      console.log('out view');
    }
  })
  // alert('intersecting');
}
const io = new IntersectionObserver(cb);
io.observe(child);
// io.observe(child1);
// io.observe(child2);
```

+ `05_JavaScriptを実践で使う/010_スクロールに合わせてJavaScriptを実行/start/main.js`を編集<br>

```js:main.js
const child = document.querySelector('.child');
const cb = function (entries, observer) {
  entries.forEach(entry => {
    // ifはで入る時 elseは出る時
    if (entry.isIntersecting) {
      console.log('inview');
      entry.target.classList.add('inview'); // 画面内に入ってきたときは緑色の背景色になる
      // observer.unobserve(entry.target); // 監視をやめたい場合
    } else {
      entry.target.classList.remove('inview'); // 画面内から外れたときinviewクラスを削除
      console.log('out view');
    }
  })
  // alert('intersecting');
}
const io = new IntersectionObserver(cb);
io.observe(child);
// io.observe(child1);
// io.observe(child2);
```

+ `05_JavaScriptを実践で使う/010_スクロールに合わせてJavaScriptを実行/start/main.js`を編集(rootMargin)<br>

```js:main.js
const child = document.querySelector('.child');
const cb = function (entries, observer) {
  entries.forEach(entry => {
    // ifはで入る時 elseは出る時
    if (entry.isIntersecting) {
      console.log('inview');
      entry.target.classList.add('inview'); // 画面内に入ってきたときは緑色の背景色になる
      // observer.unobserve(entry.target); // 監視をやめたい場合
    } else {
      entry.target.classList.remove('inview'); // 画面内から外れたときinviewクラスを削除
      console.log('out view');
    }
  });
  // alert('intersecting');
}
const options = {
  root: null,
  rootMargin: "-300px 0px", // デフォルト値は 0px 0でもpxはつける
}
const io = new IntersectionObserver(cb, options);
io.observe(child);
// io.observe(child1);
// io.observe(child2);
```

+ `05_JavaScriptを実践で使う/010_スクロールに合わせてJavaScriptを実行/start/main.js`を編集(threshold)<br>

```js:main.js
const child = document.querySelector('.child');
const cb = function (entries, observer) {
  entries.forEach(entry => {
    // ifはで入る時 elseは出る時
    if (entry.isIntersecting) {
      console.log('inview');
      entry.target.classList.add('inview'); // 画面内に入ってきたときは緑色の背景色になる
      // observer.unobserve(entry.target); // 監視をやめたい場合
    } else {
      entry.target.classList.remove('inview'); // 画面内から外れたときinviewクラスを削除
      console.log('out view');
    }
  });
  // alert('intersecting');
}
const options = {
  root: null,
  rootMargin: "-300px 0px", // デフォルト値は 0px 0でもpxはつける
  // thredsold: 1,
  threshold: [0, 0.5, 1] // 配列でも設定できる
}
const io = new IntersectionObserver(cb, options);
io.observe(child);
// io.observe(child1);
// io.observe(child2);
```

+ 82. [実践] 文字アニメーションをスクロールに合わせて発動しよう！

