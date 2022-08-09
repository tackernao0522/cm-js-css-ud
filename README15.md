## 91. [実践] スマホメニューを完成させよう！

+ [Tailwind CSS](https://tailwindcss.com/)<br>

+ `05_JavaScriptを実践で使う/050_モバイル用メニューを作成しよう/start/style.scss`を編集(これでdefaultの設定は完了)<br>

```scss:style.scss
$cWhite: white;
$cBlack: black;
$cMenuClose: $cBlack;
$cMenuOpen: $cBlack;
$cSubTitle: #535353; // 追加

#container {
  position: relative;
  background-color: teal;
  height: 100vh;
  z-index: 2;
  transition: all 0.5s;
}

.header {
  background-color: $cWhite;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

body {
  margin: 0;
}

.menu-open {
  & #container {
    transform: translate(-300px, 60px);
    box-shadow: 0 8px 40px -10px rgba(0, 0, 0, 0.8);
  }
}

.mobile-menu {
  position: fixed;
  right: 0;
  top: 60px;

  &__main {
    // BEM(Block Element Modifier)
    padding: 0;
    perspective: 2000px;
    transform-style: preserve-3d;
  }
  &__item {
    list-style: none;
    display: block;
    transform: translate3d(0, 0, -1000px);
    padding: 0 40px;
    transition: transform 0.3s, opacity 0.2s;
    // opacity: 0;
  }
  &__link {
    display: block;
    margin-top: 30px;
    color: $cBlack;
    text-decoration: none;
  }
}
// 追加
.main-title {
    font-weight: 600;
    font-size: 25px;
}
.sub-title {
    display: block;
    font-size: 14px;
    color: $cSubTitle;
}
// ここまで

.mobile-menu__btn {
  background-color: unset;
  border: none;
  outline: none !important;
  cursor: pointer;

  & > span {
    background-color: $cMenuClose;
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
  & .mobile-menu__btn {
    & > span {
      background-color: $cMenuOpen;

      &:nth-child(1) {
        transition-delay: 70ms;
        transform: translateY(11px) rotate(135deg);
      }
      &:nth-child(2) {
        transition-delay: 0s;
        transform: translateX(-18px) scaleX(0);
      }
      &:nth-child(3) {
        transition-delay: 140ms;
        transform: translateY(-11px) rotate(-135deg);
      }
    }
  }
}
```

+ `05_JavaScriptを実践で使う/050_モバイル用メニューを作成しよう/start/style.scss`を編集<br>

```scss:style.scss
$cWhite: white;
$cBlack: black;
$cMenuClose: $cBlack;
$cMenuOpen: $cBlack;
$cSubTitle: #535353;

#container {
  position: relative;
  background-color: teal;
  height: 100vh;
  z-index: 2;
  transition: all 0.5s;
}

.header {
  background-color: $cWhite;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

body {
  margin: 0;
}

// 削除
// .menu-open {
//   & #container {
//     transform: translate(-300px, 60px);
//     box-shadow: 0 8px 40px -10px rgba(0, 0, 0, 0.8);
//   }
// }

.mobile-menu {
  position: fixed;
  right: 0;
  top: 60px;

  &__main {
    // BEM(Block Element Modifier)
    padding: 0;
    perspective: 2000px;
    transform-style: preserve-3d;
  }
  &__item {
    list-style: none;
    display: block;
    transform: translate3d(0, 0, -1000px);
    padding: 0 40px;
    transition: transform 0.3s, opacity 0.2s;
    opacity: 0;
  }
  &__link {
    display: block;
    margin-top: 30px;
    color: $cBlack;
    text-decoration: none;
  }
}
.main-title {
  font-weight: 600;
  font-size: 25px;
}
.sub-title {
  display: block;
  font-size: 14px;
  color: $cSubTitle;
}

.mobile-menu__btn {
  background-color: unset;
  border: none;
  outline: none !important;
  cursor: pointer;

  & > span {
    background-color: $cMenuClose;
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

// 編集
.menu-open {
  & #container {
    transform: translate(-300px, 60px);
    box-shadow: 0 8px 40px -10px rgba(0, 0, 0, 0.8);
  }
  & .mobile-menu {
    &__item {
        transform: none;
        opacity: 1;
    }
  }
  // ここまで
  & .mobile-menu__btn {
    & > span {
      background-color: $cMenuOpen;

      &:nth-child(1) {
        transition-delay: 70ms;
        transform: translateY(11px) rotate(135deg);
      }
      &:nth-child(2) {
        transition-delay: 0s;
        transform: translateX(-18px) scaleX(0);
      }
      &:nth-child(3) {
        transition-delay: 140ms;
        transform: translateY(-11px) rotate(-135deg);
      }
    }
  }
}
```

+ `05_JavaScriptを実践で使う/050_モバイル用メニューを作成しよう/start/style.scss`を編集<br>

```scss:style.scss
$cWhite: white;
$cBlack: black;
$cMenuClose: $cBlack;
$cMenuOpen: $cBlack;
$cSubTitle: #535353;

#container {
  position: relative;
  background-color: teal;
  height: 100vh;
  z-index: 2;
  transition: all 0.5s;
}

.header {
  background-color: $cWhite;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

body {
  margin: 0;
}

.mobile-menu {
  position: fixed;
  right: 0;
  top: 60px;

  &__main {
    // BEM(Block Element Modifier)
    padding: 0;
    perspective: 2000px;
    transform-style: preserve-3d;
  }
  &__item {
    list-style: none;
    display: block;
    transform: translate3d(0, 0, -1000px);
    padding: 0 40px;
    transition: transform 0.3s, opacity 0.2s;
    opacity: 0;
  }
  &__link {
    display: block;
    margin-top: 30px;
    color: $cBlack;
    text-decoration: none;
  }
}
.main-title {
  font-weight: 600;
  font-size: 25px;
}
.sub-title {
  display: block;
  font-size: 14px;
  color: $cSubTitle;
}

.mobile-menu__btn {
  background-color: unset;
  border: none;
  outline: none !important;
  cursor: pointer;

  & > span {
    background-color: $cMenuClose;
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
  & #container {
    transform: translate(-300px, 60px);
    box-shadow: 0 8px 40px -10px rgba(0, 0, 0, 0.8);
  }
  & .mobile-menu {
    &__item {
      transform: none;
      opacity: 1;

      // 追加
      @for $i from 1 through 5 {
        &:nth-child(#{$i}) {
          transition-delay: $i * 0.07s;
        }
      }
      // ここまで
    }
  }
  & .mobile-menu__btn {
    & > span {
      background-color: $cMenuOpen;

      &:nth-child(1) {
        transition-delay: 70ms;
        transform: translateY(11px) rotate(135deg);
      }
      &:nth-child(2) {
        transition-delay: 0s;
        transform: translateX(-18px) scaleX(0);
      }
      &:nth-child(3) {
        transition-delay: 140ms;
        transform: translateY(-11px) rotate(-135deg);
      }
    }
  }
}
```

+ `05_JavaScriptを実践で使う/050_モバイル用メニューを作成しよう/start/style.scss`を編集<br>

```scss:style.scss
$cWhite: white;
$cBlack: black;
$cMenuClose: $cBlack;
$cMenuOpen: $cBlack;
$cSubTitle: #535353;

#container {
  position: relative;
  background-color: teal;
  height: 100vh;
  z-index: 2;
  transition: all 0.5s;
}

.header {
  background-color: $cWhite;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

body {
  margin: 0;
}

.mobile-menu {
  position: fixed;
  right: 0;
  top: 60px;
  width: 300px; // 追加

  &__main {
    // BEM(Block Element Modifier)
    padding: 0;
    perspective: 2000px;
    transform-style: preserve-3d;
  }
  &__item {
    list-style: none;
    display: block;
    transform: translate3d(0, 0, -1000px);
    padding: 0 40px;
    transition: transform 0.3s, opacity 0.2s;
    opacity: 0;
  }
  &__link {
    display: block;
    margin-top: 30px;
    color: $cBlack;
    text-decoration: none;
  }
}
.main-title {
  font-weight: 600;
  font-size: 25px;
}
.sub-title {
  display: block;
  font-size: 14px;
  color: $cSubTitle;
}

.mobile-menu__btn {
  background-color: unset;
  border: none;
  outline: none !important;
  cursor: pointer;

  & > span {
    background-color: $cMenuClose;
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
  & #container {
    transform: translate(-300px, 60px);
    box-shadow: 0 8px 40px -10px rgba(0, 0, 0, 0.8);
  }
  & .mobile-menu {
    &__item {
      transform: none;
      opacity: 1;

      @for $i from 1 through 5 {
        &:nth-child(#{$i}) {
          transition-delay: $i * 0.07s;
        }
      }
    }
  }
  & .mobile-menu__btn {
    & > span {
      background-color: $cMenuOpen;

      &:nth-child(1) {
        transition-delay: 70ms;
        transform: translateY(11px) rotate(135deg);
      }
      &:nth-child(2) {
        transition-delay: 0s;
        transform: translateX(-18px) scaleX(0);
      }
      &:nth-child(3) {
        transition-delay: 140ms;
        transform: translateY(-11px) rotate(-135deg);
      }
    }
  }
}
```

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
        <div id="container">
            <div class="mobile-menu__cover"></div> <!-- 追加 -->
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
                    <a class="mobile-menu__link" href="#">
                        <span class="main-title">Our Service</span>
                        <span class="sub-title">サービスについて</span>
                    </a>
                </li>
                <li class="mobile-menu__item">
                    <a class="mobile-menu__link" href="#">
                        <span class="main-title">About Us</span>
                        <span class="sub-title">私たちについて</span>
                    </a>
                </li>
                <li class="mobile-menu__item">
                    <a class="mobile-menu__link" href="#">
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
$cWhite: white;
$cBlack: black;
$cMenuClose: $cBlack;
$cMenuOpen: $cBlack;
$cSubTitle: #535353;

#container {
  position: relative;
  background-color: teal;
  height: 100vh;
  z-index: 2;
  transition: all 0.5s;
}

.header {
  background-color: $cWhite;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

body {
  margin: 0;
}

.mobile-menu {
  position: fixed;
  right: 0;
  top: 60px;
  width: 300px;

  // 追加
  &__cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transition: opacity 1s;
  }
  // ここまで

  &__main {
    // BEM(Block Element Modifier)
    padding: 0;
    perspective: 2000px;
    transform-style: preserve-3d;
  }
  &__item {
    list-style: none;
    display: block;
    transform: translate3d(0, 0, -1000px);
    padding: 0 40px;
    transition: transform 0.3s, opacity 0.2s;
    opacity: 0;
  }
  &__link {
    display: block;
    margin-top: 30px;
    color: $cBlack;
    text-decoration: none;
  }
}
.main-title {
  font-weight: 600;
  font-size: 25px;
}
.sub-title {
  display: block;
  font-size: 14px;
  color: $cSubTitle;
}

.mobile-menu__btn {
  background-color: unset;
  border: none;
  outline: none !important;
  cursor: pointer;

  & > span {
    background-color: $cMenuClose;
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
  & #container {
    transform: translate(-300px, 60px);
    box-shadow: 0 8px 40px -10px rgba(0, 0, 0, 0.8);
  }
  & .mobile-menu {
    // 追加
    &__cover {
        opacity: 1;
        visibility: visible;
    }
    // ここまで
    &__item {
      transform: none;
      opacity: 1;

      @for $i from 1 through 5 {
        &:nth-child(#{$i}) {
          transition-delay: $i * 0.07s;
        }
      }
    }
  }
  & .mobile-menu__btn {
    & > span {
      background-color: $cMenuOpen;

      &:nth-child(1) {
        transition-delay: 70ms;
        transform: translateY(11px) rotate(135deg);
      }
      &:nth-child(2) {
        transition-delay: 0s;
        transform: translateX(-18px) scaleX(0);
      }
      &:nth-child(3) {
        transition-delay: 140ms;
        transform: translateY(-11px) rotate(-135deg);
      }
    }
  }
}
```

+ `05_JavaScriptを実践で使う/050_モバイル用メニューを作成しよう/start/main.js`を編集<br>

```js:main.js
class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector('.mobile-menu__btn');
    this.DOM.cover = document.querySelector('.mobile-menu__cover'); // 追加
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
    this.DOM.cover.addEventListener('click', this._toggle.bind(this)); // 追加
  }
}

new MobileMenu();
```

+ `05_JavaScriptを実践で使う/050_モバイル用メニューを作成しよう/start/style.scss`を編集<br>

```scss:style.scss
$cWhite: white;
$cBlack: black;
$cMenuClose: $cBlack;
$cMenuOpen: $cBlack;
$cSubTitle: #535353;

#container {
  position: relative;
  background-color: teal;
  height: 100vh;
  z-index: 2;
  transition: all 0.5s;
}

.header {
  background-color: $cWhite;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

body {
  margin: 0;
}

.mobile-menu {
  position: fixed;
  right: 0;
  top: 60px;
  width: 300px;

  &__cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transition: opacity 1s;
    cursor: pointer; // 追加
  }

  &__main {
    // BEM(Block Element Modifier)
    padding: 0;
    perspective: 2000px;
    transform-style: preserve-3d;
  }
  &__item {
    list-style: none;
    display: block;
    transform: translate3d(0, 0, -1000px);
    padding: 0 40px;
    transition: transform 0.3s, opacity 0.2s;
    opacity: 0;
  }
  &__link {
    display: block;
    margin-top: 30px;
    color: $cBlack;
    text-decoration: none;
  }
}
.main-title {
  font-weight: 600;
  font-size: 25px;
}
.sub-title {
  display: block;
  font-size: 14px;
  color: $cSubTitle;
}

.mobile-menu__btn {
  background-color: unset;
  border: none;
  outline: none !important;
  cursor: pointer;

  & > span {
    background-color: $cMenuClose;
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
  & #container {
    transform: translate(-300px, 60px);
    box-shadow: 0 8px 40px -10px rgba(0, 0, 0, 0.8);
  }
  & .mobile-menu {
    &__cover {
        opacity: 1;
        visibility: visible;
    }
    &__item {
      transform: none;
      opacity: 1;

      @for $i from 1 through 5 {
        &:nth-child(#{$i}) {
          transition-delay: $i * 0.07s;
        }
      }
    }
  }
  & .mobile-menu__btn {
    & > span {
      background-color: $cMenuOpen;

      &:nth-child(1) {
        transition-delay: 70ms;
        transform: translateY(11px) rotate(135deg);
      }
      &:nth-child(2) {
        transition-delay: 0s;
        transform: translateX(-18px) scaleX(0);
      }
      &:nth-child(3) {
        transition-delay: 140ms;
        transform: translateY(-11px) rotate(-135deg);
      }
    }
  }
}
```

+ `05_JavaScriptを実践で使う/050_モバイル用メニューを作成しよう/start/style.scss`を編集<br>

```scss:style.scss
$cWhite: white;
$cBlack: black;
$cMenuClose: $cBlack;
$cMenuOpen: $cBlack;
$cSubTitle: #535353;

#container {
  position: relative;
  background-color: teal;
  height: 100vh;
  z-index: 2;
  transition: all 0.5s;
}

.header {
  background-color: $cWhite;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

body {
  margin: 0;
}

.mobile-menu {
  position: fixed;
  right: 0;
  top: 60px;
  width: 300px;
  // 編集
  &__btn {
    background-color: unset;
    border: none;
    outline: none !important;
    cursor: pointer;

    & > span {
      background-color: $cMenuClose;
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
  // ここまで
  &__cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transition: opacity 1s;
    cursor: pointer;
  }

  &__main {
    // BEM(Block Element Modifier)
    padding: 0;
    perspective: 2000px;
    transform-style: preserve-3d;
  }
  &__item {
    list-style: none;
    display: block;
    transform: translate3d(0, 0, -1000px);
    padding: 0 40px;
    transition: transform 0.3s, opacity 0.2s;
    opacity: 0;
  }
  &__link {
    display: block;
    margin-top: 30px;
    color: $cBlack;
    text-decoration: none;
  }
}
.main-title {
  font-weight: 600;
  font-size: 25px;
}
.sub-title {
  display: block;
  font-size: 14px;
  color: $cSubTitle;
}

.menu-open {
  & #container {
    transform: translate(-300px, 60px);
    box-shadow: 0 8px 40px -10px rgba(0, 0, 0, 0.8);
  }
  & .mobile-menu {
    &__cover {
      opacity: 1;
      visibility: visible;
    }
    &__item {
      transform: none;
      opacity: 1;

      @for $i from 1 through 5 {
        &:nth-child(#{$i}) {
          transition-delay: $i * 0.07s;
        }
      }
    }
    // 編集
    &__btn {
      & > span {
        background-color: $cMenuOpen;

        &:nth-child(1) {
          transition-delay: 70ms;
          transform: translateY(11px) rotate(135deg);
        }
        &:nth-child(2) {
          transition-delay: 0s;
          transform: translateX(-18px) scaleX(0);
        }
        &:nth-child(3) {
          transition-delay: 140ms;
          transform: translateY(-11px) rotate(-135deg);
        }
      }
    }
    // ここまで
  }
}
```

+ `05_JavaScriptを実践で使う/050_モバイル用メニューを作成しよう/start/style.scss`を編集<br>

```scss:style.scss
$cWhite: white;
$cBlack: black;
$cMenuClose: $cBlack;
$cMenuOpen: $cBlack;
$cSubTitle: #535353;

#container {
  position: relative;
  background-color: teal;
  height: 100vh;
  z-index: 2;
  transition: all 0.5s;
}

.header {
  background-color: $cWhite;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

body {
  margin: 0;
}

.mobile-menu {
  position: fixed;
  right: 0;
  top: 60px;
  width: 300px;
  &__btn {
    background-color: unset;
    border: none;
    outline: none !important;
    cursor: pointer;

    & > span {
      background-color: $cMenuClose;
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
  &__cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transition: opacity 1s;
    cursor: pointer;
  }

  &__main {
    // BEM(Block Element Modifier)
    padding: 0;
    perspective: 2000px;
    transform-style: preserve-3d;
  }
  &__item {
    list-style: none;
    display: block;
    transform: translate3d(0, 0, -1000px);
    padding: 0 40px;
    transition: transform 0.3s, opacity 0.2s;
    opacity: 0;
  }
  &__link {
    display: block;
    margin-top: 30px;
    color: $cBlack;
    text-decoration: none;
  }
}

.menu-open {
  & #container {
    transform: translate(-300px, 60px);
    box-shadow: 0 8px 40px -10px rgba(0, 0, 0, 0.8);
  }
  & .mobile-menu {
    &__cover {
      opacity: 1;
      visibility: visible;
    }
    &__item {
      transform: none;
      opacity: 1;

      @for $i from 1 through 5 {
        &:nth-child(#{$i}) {
          transition-delay: $i * 0.07s;
        }
      }
    }
    &__btn {
      & > span {
        background-color: $cMenuOpen;

        &:nth-child(1) {
          transition-delay: 70ms;
          transform: translateY(11px) rotate(135deg);
        }
        &:nth-child(2) {
          transition-delay: 0s;
          transform: translateX(-18px) scaleX(0);
        }
        &:nth-child(3) {
          transition-delay: 140ms;
          transform: translateY(-11px) rotate(-135deg);
        }
      }
    }
  }
}

// 編集 上から移動してきた
.main-title {
  font-weight: 600;
  font-size: 25px;
}
.sub-title {
  display: block;
  font-size: 14px;
  color: $cSubTitle;
}
// ここまで
```
