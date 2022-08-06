## 83. [レベルアップ] スクロール監視クラスを作成してコードの最適化を行おう！

+ `05_JavaScriptを実践で使う/030_スクロール監視クラスの作成/start/index.html`を編集<br>

```html:index.html

```

+ `05_JavaScriptを実践で使う/030_スクロール監視クラスの作成/start/main.js`を編集(これで動作する)<br>

```js:main.js
document.addEventListener('DOMContentLoaded', function () {
    const cb = function (el, isIntersecting) {
        if (isIntersecting) {
            const ta = new TextAnimation(el);
            ta.animate();
        }
    }

    const so = new ScrollObserver('.animate-title', cb);
    // const cb = function (entries, observer) {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             // const ta = new TextAnimation(entry.target);
    //             // ta.animate();
    //             observer.unobserve(entry.target);
    //         } else {
    //         }
    //     });
    // };
    // const options = {
    //     root: null,
    //     rootMargin: "0px",
    //     threshold: 0
    // };
});

class ScrollObserver {
    constructor(els, cb, options) {
        this.els = document.querySelectorAll(els);
        const defaultOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0
        };
        this.cb = cb;
        this.options = Object.assign(defaultOptions, options)
        this._init();
    }
    _init() {
        const callback = function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.cb(entry.target, true);
                    observer.unobserve(entry.target);
                } else {
                    this.cb(entry.target, false);
                }
            });
        };
        const io = new IntersectionObserver(callback.bind(this), this.options);
        this.els.forEach(el => io.observe(el));
    }
}
```

+ `05_JavaScriptを実践で使う/030_スクロール監視クラスの作成/start/main.js`を編集<br>

```js:main.js
document.addEventListener('DOMContentLoaded', function () {
    const cb = function (el, isIntersecting) {
        if (isIntersecting) {
            const ta = new TextAnimation(el);
            ta.animate();
        }
    }

    const so = new ScrollObserver('.animate-title', cb); // 編集
    so.destroy(); // 追加 表示されなくなる(監視されなくなる)
    // const cb = function (entries, observer) {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             // const ta = new TextAnimation(entry.target);
    //             // ta.animate();
    //             observer.unobserve(entry.target);
    //         } else {
    //         }
    //     });
    // };
    // const options = {
    //     root: null,
    //     rootMargin: "0px",
    //     threshold: 0
    // };
});

class ScrollObserver {
    constructor(els, cb, options) {
        this.els = document.querySelectorAll(els);
        const defaultOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0,
            once: true
        };
        this.cb = cb;
        this.options = Object.assign(defaultOptions, options)
        this.once = this.options.once;
        this._init();
    }
    _init() {
        const callback = function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.cb(entry.target, true);
                    if (this.once) {
                        observer.unobserve(entry.target);
                    }
                } else {
                    this.cb(entry.target, false);
                }
            });
        };
        this.io = new IntersectionObserver(callback.bind(this), this.options); // 編集
        this.els.forEach(el => this.io.observe(el)); // 編集
    }

    destroy() {
        this.io.disconnect(); // IntersectionObserverの監視が止まる
    }
}
```

+ `05_JavaScriptを実践で使う/030_スクロール監視クラスの作成/start/index.html`を編集<br>

```html:index.html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
        integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
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
    <script src="text-animation.js"></script>
    <script src="scroll-polyfill.js"></script> <!-- 追加 -->
    <script src="main.js"></script>
</body>

</html>
```

+ `05_JavaScriptを実践で使う/030_スクロール監視クラスの作成/start/main.js`を編集<br>

```js:main.js
document.addEventListener('DOMContentLoaded', function () {
    const cb = function (el, isIntersecting) {
        if (isIntersecting) {
            const ta = new TextAnimation(el);
            ta.animate();
        }
    }

    const so = new ScrollObserver('.animate-title', cb); // 編集
    // so.destroy(); // 追加 表示されなくなる(監視されなくなる)
    // const cb = function (entries, observer) {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             // const ta = new TextAnimation(entry.target);
    //             // ta.animate();
    //             observer.unobserve(entry.target);
    //         } else {
    //         }
    //     });
    // };
    // const options = {
    //     root: null,
    //     rootMargin: "0px",
    //     threshold: 0
    // };
});

class ScrollObserver {
    constructor(els, cb, options) {
        this.els = document.querySelectorAll(els);
        const defaultOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0,
            once: true
        };
        this.cb = cb;
        this.options = Object.assign(defaultOptions, options)
        this.once = this.options.once;
        this._init();
    }
    _init() {
        const callback = function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.cb(entry.target, true);
                    if (this.once) {
                        observer.unobserve(entry.target);
                    }
                } else {
                    this.cb(entry.target, false);
                }
            });
        };
        this.io = new IntersectionObserver(callback.bind(this), this.options); // 編集

        this.io.POLL_INTERVAL = 100; // 追加 古いブラウザに対応
        this.els.forEach(el => this.io.observe(el)); // 編集
    }

    destroy() {
        this.io.disconnect(); // IntersectionObserverの監視が止まる
    }
}
```

+ `05_JavaScriptを実践で使う/030_スクロール監視クラスの作成/start/index.html`を編集<br>

```html:index.html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
        integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
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
    <script src="text-animation.js"></script>
    <script src="scroll-polyfill.js"></script> <!-- 追加 -->
    <script src="scroll.js"></script> <!-- 追加 -->
    <script src="main.js"></script>
</body>

</html>
```

+ `05_JavaScriptを実践で使う/030_スクロール監視クラスの作成/start/main.js`を編集<br>

```js:main.js
document.addEventListener('DOMContentLoaded', function () {
    const cb = function (el, isIntersecting) {
        if (isIntersecting) {
            const ta = new TextAnimation(el);
            ta.animate();
        }
    }

    const so = new ScrollObserver('.animate-title', cb); // 編集
});
```

+ `05_JavaScriptを実践で使う/030_スクロール監視クラスの作成/start/scroll.js`を作成<br>

+ `05_JavaScriptを実践で使う/030_スクロール監視クラスの作成/start/scroll.js`を編集<br>

```js:scroll.js
class ScrollObserver {
  constructor(els, cb, options) {
    this.els = document.querySelectorAll(els);
    const defaultOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
      once: true
    };
    this.cb = cb;
    this.options = Object.assign(defaultOptions, options)
    this.once = this.options.once;
    this._init();
  }
  _init() {
    const callback = function (entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.cb(entry.target, true);
          if (this.once) {
            observer.unobserve(entry.target);
          }
        } else {
          this.cb(entry.target, false);
        }
      });
    };
    this.io = new IntersectionObserver(callback.bind(this), this.options); // 編集

    this.io.POLL_INTERVAL = 100; // 追加 古いブラウザに対応
    this.els.forEach(el => this.io.observe(el)); // 編集
  }

  destroy() {
    this.io.disconnect(); // IntersectionObserverの監視が止まる
  }
}
```

## 84. [実践] スライドアニメーションをスクロールに合わせて発動しよう！

+ `05_JavaScriptを実践で使う/040_演習_スクロール監視xスライドアニメーション/start/index.html`を編集<br>

```html:index.html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>Document</title>
  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <div id="container">
    <div class="cover-slide hover-darken">
      <img class="img-zoom" src="images/image-1.jpg" alt="">
    </div>
    <div class="cover-slide hover-darken">
      <img class="img-zoom" src="images/image-1.jpg" alt="">
    </div>
    <div class="cover-slide hover-darken">
      <img class="img-zoom" src="images/image-1.jpg" alt="">
    </div>
    <div class="cover-slide hover-darken">
      <img class="img-zoom" src="images/image-1.jpg" alt="">
    </div>
    <!-- <div class="cover-slide hover-darken inview">
        <div class="bg-img-zoom img-bg50"></div>
      </div> -->
  </div>
  <script src="scroll-polyfill.js"></script>
  <script src="scroll.js"></script>
  <script src="main.js"></script>
</body>

</html>
```

+ `05_JavaScriptを実践で使う/040_演習_スクロール監視xスライドアニメーション/start/style.scss`を編集<br>

```scss:style.scss
@import 'mixin';

img {
  max-width: 100%;
  vertical-align: bottom;
}

.cover-slide {
  position: relative;
  overflow: hidden;
  margin-bottom: 80vh; // 追加

  &::after {
    content: '';
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #eaebe6;
    opacity: 0;
  }
  &.inview {
    &::after {
      opacity: 1;

      @include animation(
        $name: kf-cover-slide,
        $duration: 1.6s,
        $timing-function: ease-in-out
      );
    }
  }
}

@keyframes kf-cover-slide {
  0% {
    transform-origin: left;
    transform: scaleX(0);
  }
  50% {
    transform-origin: left;
    transform: scaleX(1);
  }
  50.1% {
    transform-origin: right;
    transform: scaleX(1);
  }
  100% {
    transform-origin: right;
    transform: scaleX(0);
  }
}

// @keyframes kf-cover-slide {
//   0% {
//     left: 0;
//     right: 100%;
//   }
//   50% {
//     left: 0;
//     right: 0;
//   }
//   100% {
//     left: 100%;
//     right: 0;
//   }
// }

.img-zoom {
  opacity: 0;

  .inview & {
    opacity: 1;
    transition: transform 0.3s ease;
    @include animation(
      $name: kf-img-show,
      $duration: 1.6s,
      $timing-function: ease-in-out,
      $fill-mode: none
    );

    &:hover {
      transform: scale(1.05);
    }
  }
}

@keyframes kf-img-show {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  50.1% {
    opacity: 1;
    transform: scale(1.5);
  }
  100% {
    opacity: 1;
  }
}

.hover-darken {
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: background-color 0.3s ease;
    pointer-events: none;
    @include animation(
      $name: kf-img-show,
      $duration: 1.6s,
      $timing-function: ease-in-out,
      $fill-mode: none
    );
  }
  &:hover::before {
    background-color: rgba(0, 0, 0, 0.4);
  }
}

.bg-img-zoom {
  background-image: url(images/image-1.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  @extend .img-zoom;
}

.img-bg50 {
  position: relative;

  &::before {
    display: block;
    content: '';
    padding-top: 50%;
  }
}
```

+ `05_JavaScriptを実践で使う/040_演習_スクロール監視xスライドアニメーション/start/main.js`を編集<br>

```js:main.js
document.addEventListener('DOMContentLoaded', function () {

    const cb = function (el, isIntersecting) {
        if (isIntersecting) {
            el.classList.add('inview');
        }
    }

    const so = new ScrollObserver('.cover-slide', cb);
});
```
