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

## 82. [実践] 文字アニメーションをスクロールに合わせて発動しよう！

+ `05_JavaScriptを実践で使う/020_スクロールx文字アニメーション/start/index.html`を編集<br>

```html:index.html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Teko:wght@500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>

<body>
    <section>

        <div class="animate-title">Start where you are.</div>

    </section>
    <section>

        <div class="animate-title">Use what you have.</div>

    </section>
    <section>

        <div class="animate-title">Do what you can.</div>

    </section>
    <!-- main.jsよりも上に記述 -->
    <script src="text-animation.js"></script>
    <script src="main.js"></script>
</body>

</html>
```

+ `05_JavaScriptを実践で使う/020_スクロールx文字アニメーション/start/style.scss`を編集<br>

```scss:style.scss
@import "mixin";

html {
  font-family: "Teko", sans-serif;
}

body {
  margin: 0;
}

// 編集
section {
  position: relative;
  height: 100vh;
  background-color: teal;

  // 追加
  &:nth-child(2) {
    background-color: mediumvioletred;
  }
  &:nth-child(3) {
    background-color: orange;
  }
}

.animate-title,
.tween-animate-title {
  // 編集(コメントアウトを外す)
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  opacity: 0;
  font-size: 2em;

  &.inview {
    opacity: 1;

    & .char {
      display: inline-block;
    }
  }

  & .char {
    opacity: 0;
  }
}

.animate-title.inview .char {
  @include animation(
    $name: kf-animate-chars,
    $duration: 0.5s,
    $timing-function: cubic-bezier(0.39, 1.57, 0.58, 1),
    $fill-mode: both
  );

  @for $i from 1 through 30 {
    &:nth-child(#{$i}) {
      animation-delay: $i * 0.04s;
    }
  }
}

@keyframes kf-animate-chars {
  0% {
    opacity: 0;
    transform: translateY(-50%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
```

+ `05_JavaScriptを実践で使う/020_スクロールx文字アニメーション/start/text-animation.js`を編集<br>

```js:text-animation.js
class TextAnimation {
  constructor(el) {
    this.DOM = {};
    this.DOM.el = document.querySelector(el);
    this.chars = this.DOM.el.innerHTML.trim().split("");
    this.DOM.el.innerHTML = this._splitText();
  }
  _splitText() {
    return this.chars.reduce((acc, curr) => {
      curr = curr.replace(/\s+/, '&nbsp;');
      return `${acc}<span class="char">${curr}</span>`;
    }, "");
  }
  animate() {
    this.DOM.el.classList.toggle('inview');
  }
}
class TweenTextAnimation extends TextAnimation {
  constructor(el) {
    super(el);
    this.DOM.chars = this.DOM.el.querySelectorAll('.char');
  }

  animate() {
    this.DOM.el.classList.add('inview');
    this.DOM.chars.forEach((c, i) => {
      TweenMax.to(c, .6, {
        ease: Back.easeOut,
        delay: i * .05,
        startAt: { y: '-50%', opacity: 0 },
        y: '0%',
        opacity: 1
      });
    });
  }
}
```

+ `05_JavaScriptを実践で使う/020_スクロールx文字アニメーション/start/main.js`を編集<br>

```js:main.js
document.addEventListener('DOMContentLoaded', function () {
    const ta = new TextAnimation('.animate-title');
    ta.animate();

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
});
```

+ `05_JavaScriptを実践で使う/020_スクロールx文字アニメーション/start/main.js`を編集<br>

```js:main.js
document.addEventListener('DOMContentLoaded', function () {
    const ta = new TextAnimation('.animate-title');
    ta.animate();

    const els = document.querySelectorAll('.animete-title'); // 編集
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
    els.forEach(el => io.observe(el)); // 編集
    // io.observe(child1);
    // io.observe(child2);
});
```

+ `05_JavaScriptを実践で使う/020_スクロールx文字アニメーション/start/main.js`を編集<br>

```js:main.js
document.addEventListener('DOMContentLoaded', function () {
    const els = document.querySelectorAll('.animate-title'); // 編集
    const cb = function (entries, observer) {
        entries.forEach(entry => {
            // ifはで入る時 elseは出る時
            if (entry.isIntersecting) {
                console.log('inview');
                // 下2行を上から移動
                const ta = new TextAnimation('.animate-title'); // 上から移動
                ta.animate(); // 上から移動
                // entry.target.classList.add('inview'); // 必要ないので削除する
                observer.unobserve(entry.target); // 一度監視を切る
            } else {
                // entry.target.classList.remove('inview'); // 必要ないので削除
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
    els.forEach(el => io.observe(el)); // 編集
    // io.observe(child1);
    // io.observe(child2);
});
```

+ `05_JavaScriptを実践で使う/020_スクロールx文字アニメーション/start/text-animation.js`を編集<br>

```js:text-animation.js
class TextAnimation {
  constructor(el) {
    this.DOM = {};
    // 編集
    if (el instanceof HTMLElement) {
      this.DOM.el = el;
    } else {
      this.DOM.el = document.querySelector(el);
    }
    // ここまで
    this.chars = this.DOM.el.innerHTML.trim().split("");
    this.DOM.el.innerHTML = this._splitText();
  }
  _splitText() {
    return this.chars.reduce((acc, curr) => {
      curr = curr.replace(/\s+/, '&nbsp;');
      return `${acc}<span class="char">${curr}</span>`;
    }, "");
  }
  animate() {
    this.DOM.el.classList.toggle('inview');
  }
}
class TweenTextAnimation extends TextAnimation {
  constructor(el) {
    super(el);
    this.DOM.chars = this.DOM.el.querySelectorAll('.char');
  }

  animate() {
    this.DOM.el.classList.add('inview');
    this.DOM.chars.forEach((c, i) => {
      TweenMax.to(c, .6, {
        ease: Back.easeOut,
        delay: i * .05,
        startAt: { y: '-50%', opacity: 0 },
        y: '0%',
        opacity: 1
      });
    });
  }
}
```

+ `05_JavaScriptを実践で使う/020_スクロールx文字アニメーション/start/main.js`を編集<br>

```js:main.js
document.addEventListener('DOMContentLoaded', function () {
    const els = document.querySelectorAll('.animate-title');
    const cb = function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('inview');
                // 下2行を上から移動
                const ta = new TextAnimation(entry.target); // 編集
                ta.animate(); 
                observer.unobserve(entry.target); // 一度監視を切る
            } else {
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
    els.forEach(el => io.observe(el));
    // io.observe(child1);
    // io.observe(child2);
});
```

+ `05_JavaScriptを実践で使う/020_スクロールx文字アニメーション/start/text-animation.js`を編集<br>

```js:text-animation.js
class TextAnimation {
  constructor(el) {
    this.DOM = {};
    this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el); // 編集(三項演算子にする)
    this.chars = this.DOM.el.innerHTML.trim().split("");
    this.DOM.el.innerHTML = this._splitText();
  }
  _splitText() {
    return this.chars.reduce((acc, curr) => {
      curr = curr.replace(/\s+/, '&nbsp;');
      return `${acc}<span class="char">${curr}</span>`;
    }, "");
  }
  animate() {
    this.DOM.el.classList.toggle('inview');
  }
}
class TweenTextAnimation extends TextAnimation {
  constructor(el) {
    super(el);
    this.DOM.chars = this.DOM.el.querySelectorAll('.char');
  }

  animate() {
    this.DOM.el.classList.add('inview');
    this.DOM.chars.forEach((c, i) => {
      TweenMax.to(c, .6, {
        ease: Back.easeOut,
        delay: i * .05,
        startAt: { y: '-50%', opacity: 0 },
        y: '0%',
        opacity: 1
      });
    });
  }
}
```

+ `05_JavaScriptを実践で使う/020_スクロールx文字アニメーション/start/main.js`を編集<br>

```js:main.js
document.addEventListener('DOMContentLoaded', function () {
    const els = document.querySelectorAll('.animate-title');
    const cb = function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('inview');
                // 下2行を上から移動
                const ta = new TextAnimation(entry.target); // 編集
                ta.animate();
                observer.unobserve(entry.target); // 一度監視を切る
            } else {
            }
        });
        // alert('intersecting');
    }
    const options = {
        root: null,
        rootMargin: "0px", // 編集
        // thredsold: 1,
        threshold: 0 // 編集
    }
    const io = new IntersectionObserver(cb, options);
    els.forEach(el => io.observe(el));
    // io.observe(child1);
    // io.observe(child2);
});
```
