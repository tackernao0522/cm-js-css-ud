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
