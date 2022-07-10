## 39. [演習] Animationでいろんなローダーを作ってみよう

+ `03_HTMLとCSSを極める（アニメーション編）/060_演習_色んなローダーを作ってみよう/index.html`を編集<br>

```html:index.html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>Document</title>
  <!-- チャレンジしてみよう -->
  <link rel="stylesheet" href="try.css" />
  <!-- 解答例　-->
  <link rel="stylesheet" href="answer.css" />
</head>

<body>
  <div class="copyright">
    <a target="_blank" href="https://github.com/tobiasahlin/SpinKit">MIT Lisence: SpinKit - @tobiasahlin</a>
  </div>
  <div id="container">
    <div class="try">
      <h2>演習</h2>
      <p>try.scssを編集しよう</p>
      <div class="spinner"></div>
      <div class="double-spinner">
        <div></div>
        <div></div>
      </div>
      <div class="rect-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="answer">
      <h2>解答</h2>
      <p>answer.scssが適用されています。</p>
      <div class="spinner"></div>
      <div class="double-spinner">
        <div></div>
        <div></div>
      </div>
      <div class="rect-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
</body>

</html>
```

+ `03_HTMLとCSSを極める（アニメーション編）/060_演習_色んなローダーを作ってみよう/_mixin.scss`を編集<br>

```scss:_mixin.scss
@mixin animation(
  $name,
  $duration: 1s,
  $timing-function: ease,
  $delay: 0s,
  $iteration-count: 1,
  $direction: normal,
  $fill-mode: forwards
) {
  animation: {
    name: $name;
    duration: $duration;
    timing-function: $timing-function;
    delay: $delay;
    iteration-count: $iteration-count;
    direction: $direction;
    fill-mode: $fill-mode;
  }
}
```

+ `03_HTMLとCSSを極める（アニメーション編）/060_演習_色んなローダーを作ってみよう/try.scss`を編集<br>

```scss:try.scss
@import 'mixin';

.try {
  /** ここに記述しよう */
  .spinner {
    width: 40px;
    height: 40px;
    background-color: #333;
    margin: 100px auto;

    @include animation(
      $name: sk-rotateplane2,
      $duration: 1.2s,
      $iteration-count: infinite,
      $timing-function: ease-in-out
      );
  }

  @keyframes sk-rotateplane2 {
    0% {
      transform: perspective(120px) rotateX(0) rotateY(0); // rotateY(0)も入れられるが挙動は同じ perspective = 遠近感をもたらす
    }
    50% {
      transform: perspective(120px) rotateX(-180deg) rotateY(0);
    }
    100% {
      transform: perspective(120px) rotateX(-180deg) rotateY(-180deg);
    }
  }

  .double-spinner {
  }

  .rect-spinner {
  }
}
```

+ `03_HTMLとCSSを極める（アニメーション編）/060_演習_色んなローダーを作ってみよう/try.scss`を編集<br>

```scss:try.scss
@import 'mixin';

.try {
  /** ここに記述しよう */
  .spinner {
    width: 40px;
    height: 40px;
    background-color: #333;
    margin: 100px auto;

    @include animation(
      $name: sk-rotateplane2,
      $duration: 1.2s,
      $iteration-count: infinite,
      $timing-function: ease-in-out
    );
  }

  @keyframes sk-rotateplane2 {
    0% {
      transform: perspective(120px) rotateX(0) rotateY(0); // rotateY(0)も入れられるが挙動は同じ perspective = 遠近感をもたらす
    }
    50% {
      transform: perspective(120px) rotateX(-180deg) rotateY(0);
    }
    100% {
      transform: perspective(120px) rotateX(-180deg) rotateY(-180deg);
    }
  }

  .double-spinner {
    width: 40px;
    height: 40px;
    position: relative;
    margin: 100px auto;

    & > div {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #333;
      opacity: 0.6;
      position: absolute;
      top: 0;
      left: 0;
      @include animation(
        $name: sk-bounce2,
        $iteration-count: infinite,
        $duration: 2s,
        $timing-function: ease-in-out
      );
      &:nth-child(2) {
        animation-delay: -1s;
      }
    }
  }
  @keyframes sk-bounce2 {
    0%,
    100% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
  }

  .rect-spinner {
    margin: 100px auto;
    width: 50px;
    height: 40px;
    text-align: center;
    letter-spacing: -2px;

    & > div {
      background-color: #333;
      height: 100%;
      width: 6px;
      display: inline-block;
      @include animation(
        $name: sk-stretchdelay2,
        $duration: 1.2s,
        $iteration-count: infinite,
        $timing-function: ease-in-out
      );
      @for $i from 1 through 5 {
        &:nth-child(#{$i}) {
          animation-delay: -1.3s + $i * 0.1s;
        }
      }
    }
  }

  @keyframes sk-stretchdelay2 {
    0%,
    40%,
    100% {
      transform: scaleY(0.4);
    }
    20% {
      transform: scaleY(1);
    }
  }
}
```

## 43. [実践] よく巷で見かけるオサレなやつ！メニューアイコンを作ってみよう！！

+ `03_HTMLとCSSを極める（アニメーション編）/070_演習_メニューアイコンを作ってみよう/start/index.html`を編集<br>

```html:index.html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <button class="mobile-menu-icon">
    <span></span>
    <span></span>
    <span></span>
  </button>
</body>

</html>
```

+ `03_HTMLとCSSを極める（アニメーション編）/070_演習_メニューアイコンを作ってみよう/start/style.scss`を編集<br>

```scss:style.scss
$cBlack: black;

.mobile-menu-icon {
  background-color: transparent;
  border: none;

  & > span {
    background-color: $cBlack;
    width: 35px;
    height: 2px;
    display: block;
    margin-bottom: 9px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
```

+ `03_HTMLとCSSを極める（アニメーション編）/070_演習_メニューアイコンを作ってみよう/start/index.html`を編集<br>

```html:index.html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <!-- 編集 -->
  <button class="mobile-menu-icon" onclick="document.querySelector('body').classList.toggle('menu-open');">
    <span></span>
    <span></span>
    <span></span>
  </button>
</body>

</html>
```

+ `03_HTMLとCSSを極める（アニメーション編）/070_演習_メニューアイコンを作ってみよう/start/style.scss`を編集<br>

```scss:style.scss
$cBlack: black;
$cWhite: white;

.mobile-menu-icon {
  background-color: transparent;
  border: none;
  outline: none !important;
  cursor: pointer;

  & > span {
    background-color: $cBlack;
    width: 35px;
    height: 2px;
    display: block;
    margin-bottom: 9px;
    transition: transform 0.7s; // ここをコメントアウトしてからrotateの調整をする

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.menu-open {
  background-color: $cBlack;

  .mobile-menu-icon {
    & > span {
      background-color: $cWhite;

      &:nth-child(1) {
        transition-delay: 70ms; // より複雑な動き
        transform: translateY(11px) rotate(135deg);
      }
      &:nth-child(2) {
        transform: translateX(-18px) scaleX(0);
      }
      &:nth-child(3) {
        transition-delay: 140ms; // より複雑な動き
        transform: translateY(-11px) rotate(-135deg);
      }
    }
  }
}
```
