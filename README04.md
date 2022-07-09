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
