## 85. [実践] クラスの記述に慣れよう！スマホメニューの作成 Part.1

+ [リソース](https://modernizr.com/)<br>

+ `05_JavaScriptを実践で使う/050_モバイル用メニューを作成しよう/start/index.html`を編集<br>

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
    <div id="global-container">
        <div id="conteiner">
            <header class="header">
                <button class="mobile-menu__btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </header>
        </div>
        <nav class="mobile-menu">
            <ul class="mobile-menu__main">
                <li class="mobile-menu__item">
                    <a href="#">
                        <span class="main-title">Our Service</span>
                        <span class="sub-title">サービスについて</span>
                    </a>
                </li>
                <li class="mobile-menu__item">
                    <a href="#">
                        <span class="main-title">About Us</span>
                        <span class="sub-title">私たちについて</span>
                    </a>
                </li>
                <li class="mobile-menu__item">
                    <a href="#">
                        <span class="main-title">Contact Us</span>
                        <span class="sub-title">コンタクト方法</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
    <script src="main.js"></script>
</body>

</html>
```

+ `05_JavaScriptを実践で使う/050_モバイル用メニューを作成しよう/start/style.scss`を編集<br>

```scss:style.scss
$cBlack: black;
$cWhite: white;

// 編集
.mobile-menu__btn {
    background-color: unset;
    border: none;
    outline: none !important;
    cursor: pointer;

    & > span {
        background-color: $cBlack;
        width: 35px;
        height: 2px;
        display: block;
        margin-bottom: 9px;
        transition: transform 0.7s;

        &:last-child {
            margin-bottom: 0;
        }
    }
}

.menu-open {
    background-color: $cBlack;

    // 編集
    & .mobile-menu__btn {
        & > span {
            background-color: $cWhite;

            &:nth-child(1) {
                transition-delay: 70ms;
                transform: translateY(11px) rotate(135deg);
            }
            &:nth-child(2) {
                transition-delay: 0s;
                transform:  translateX(-18px) scaleX(0);
            }
            &:nth-child(3) {
                transition-delay: 140ms;
                transform: translateY(-11px) rotate(-135deg);
            }
        }
    }
}
```

+ `05_JavaScriptを実践で使う/050_モバイル用メニューを作成しよう/start/main.js`を作成<br>

+ `05_JavaScriptを実践で使う/050_モバイル用メニューを作成しよう/start/main.js`を編集(とりあえず動く)<br>

```js:main.js
class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector('.mobile-menu__btn');
    this.DOM.container = document.querySelector('#global-container');
    this.DOM.btn.addEventListener('click', this._toggle.bind(this));
  }

  _toggle() {
    this.DOM.container.classList.toggle('menu-open');
  }
}

new MobileMenu();
```

+ `05_JavaScriptを実践で使う/050_モバイル用メニューを作成しよう/start/main.js`を編集<br>

```js:main.js
class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector('.mobile-menu__btn');
    this.DOM.container = document.querySelector('#global-container');
    this._addEvent();
  }

  _toggle() {
    this.DOM.container.classList.toggle('menu-open');
  }

  _addEvent() {
    this.DOM.btn.addEventListener('click', this._toggle.bind(this));
  }
}

new MobileMenu();
```

+ `05_JavaScriptを実践で使う/050_モバイル用メニューを作成しよう/start/main.js`を編集<br>

```js:main.js
class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector('.mobile-menu__btn');
    this.DOM.container = document.querySelector('#global-container');
    this.eventType = this._getEventType();
    this._addEvent();
  }

  _getEventType() {
    const isTouchCapable =
      "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof window.DocumentTouch) ||
      window.navigator.msMaxTouchPoints > 0;

    return isTouchCapable ? "touchstart" : "click";
  }

  _toggle() {
    this.DOM.container.classList.toggle('menu-open');
  }

  _addEvent() {
    this.DOM.btn.addEventListener('click', this._toggle.bind(this));
  }
}

new MobileMenu();
```
