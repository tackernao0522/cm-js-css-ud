## 45. [Sass] @Each文で配列をループ！ フェードインアニメーションをサクッと作ってみよう！

+ `03_HTMLとCSSを極める（アニメーション編）/090_フェードインアニメーション/start/index.html`を編集<br>

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
    <button onclick="document.querySelector('.appear').classList.toggle('inview');">
        appear
    </button>
    <div class="appear up">
        <div class="item"><img src="./images/image-1.jpg"></div>
        <div class="item"><img src="./images/image-1.jpg"></div>
        <div class="item"><img src="./images/image-1.jpg"></div>
        <div class="item"><img src="./images/image-1.jpg"></div>
        <div class="item"><img src="./images/image-1.jpg"></div>
        <div class="item"><img src="./images/image-1.jpg"></div>
        <div class="item"><img src="./images/image-1.jpg"></div>
        <div class="item"><img src="./images/image-1.jpg"></div>
    </div>
</body>

</html>
```

+ `03_HTMLとCSSを極める（アニメーション編）/090_フェードインアニメーション/start/style.scss`を編集<br>

```scss:style.scss
@import 'appear';

img {
  max-width: 80%;
}
```

+ `03_HTMLとCSSを極める（アニメーション編）/090_フェードインアニメーション/start/_appear.scss`を編集<br>

これで画像がボタンを押すと表示されたり消えたりする<br>

```scss:_appear.scss
.appear.up {
  & .item {
    transition: all 0.8s;
    opacity: 0;
  }
  &.inview {
    & .item {
      opacity: 1;
    }
  }
}
```

+ `03_HTMLとCSSを極める（アニメーション編）/090_フェードインアニメーション/start/_appear.scss`を編集<br>

Up用の設定<br>

```scss:_appear.scss
.appear.up {
  & .item {
    transition: all 0.8s;
    opacity: 0;
    transform: translateY(6px);
  }
  &.inview {
    & .item {
      opacity: 1;
      transform: none;
    }
  }
}
```

+ `03_HTMLとCSSを極める（アニメーション編）/090_フェードインアニメーション/start/_appear.scss`を編集<br>

animation-delayの設定(0.1秒毎に描写されていく)<br>

```scss:_appear.scss
.appear.up {
  & .item {
    transition: all 0.8s;
    opacity: 0;
    transform: translateY(6px);
  }
  &.inview {
    & .item {
      opacity: 1;
      transform: none;

      @for $i from 1 through 10 {
        &:nth-child(#{$i}) {
          transition-delay: $i * 0.1s;
        }
      }
    }
  }
}
```

+ `03_HTMLとCSSを極める（アニメーション編）/090_フェードインアニメーション/start/_appear.scss`を編集<br>

@eachを使って書き直す<br>

```scss:_appear.scss
$pattern: (
  'up': translateY(6px),
  'down': translateY(-6px),
  'left': translateX(40px),
  'right': translateX(-40px),
);

@each $key, $value in $pattern {
  .appear.#{$key} {
    & .item {
      transform: $value;
    }
  }
}

.appear {
  & .item {
    transition: all 0.8s;
    opacity: 0;
  }
  &.inview {
    & .item {
      opacity: 1;
      transform: none;

      @for $i from 1 through 10 {
        &:nth-child(#{$i}) {
          transition-delay: $i * 0.1s;
        }
      }
    }
  }
}
```

これで `index.html`の`div`クラスを`appear up` や `appear down` や `appear left` や ``appear right` に変更すると挙動もそれに合わせて変わる<br>


## 46. [Tips] 今時の画像表示方法まとめ〜 `<img secret>`, `<picture>`, `background-image`の使い分け

+ `03_HTMLとCSSを極める（アニメーション編）/100_画像の表示方法まとめ/start/index.html`を編集(imgタグ/background-image)<br>

```html:index.html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <img src="images/400x250.png">
  <div class="bg-img"></div>
  <style>
    img {
      height: 500px;
      width: 300px;
      object-fit: cover;
    }
    /* heightを指定しないと表示されない */
    .bg-img {
      background-color: black;
      height: 500px;
      width: 300px;
      background-image: url(images/400x250.png);
      background-repeat: no-repeat; /* defaultではrepeatになっている */
      background-size: cover;
      background-position: center;
    }
  </style>
</body>

</html>
```

+ `03_HTMLとCSSを極める（アニメーション編）/100_画像の表示方法まとめ/start/index.html`を編集(pictureタグ)<br>

```html:index.html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <!-- <img src="images/400x250.png" srcset="
        images/1100x550.png 1100w,
        images/800x250.png   800w,
        images/400x250.png
      " /> -->
  <div class="bg-img"></div>
  <!-- <picture> -->
    <!-- 画面が960px以上の時に表示する -->
    <!-- <source media="(min-width:960px)" srcset="images/1100x550.png" /> -->
    <!-- 画面が480px以上の時に表示する -->
    <!-- <source media="(min-width:480px)" srcset="images/800x250.png" /> -->
    <!-- それ以外が表示される -->
    <!-- <img src="images/400x250.png" alt="text" /> -->
  <!-- </picture> -->
  <style>
    /* img {
      height: 500px;
      width: 300px;
      object-fit: cover;
    } */
    /* heightを指定しないと表示されない */
    .bg-img {
      background-color: black;
      height: 250px;
      /* width: 300px; */
      background-image: url(images/400x250.png);
      background-repeat: no-repeat; /* defaultではrepeatになっている */
      background-size: cover;
      background-position: center;
    }
    /* 600px以上の時に表示される メディアクエリ */
    @media screen and (min-width: 600px) {
      .bg-img {
        background-image: url(images/800x250.png);

      }
    }
  </style>
</body>

</html>
```

## 47. [実践] 画像にオサレなカバースライドアニメーションを適用してみよう！！


+ `03_HTMLとCSSを極める（アニメーション編）/110_スライドアニメーション/start/index.html`を編集<br>

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
  <div id="container">
    <div class="cover-slide">
      <img src="images/image-1.jpg" alt="">
    </div>
  </div>
</body>

</html>
```

+ `03_HTMLとCSSを極める（アニメーション編）/110_スライドアニメーション/start/_mixin.scss`を編集<br>

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

+ `03_HTMLとCSSを極める（アニメーション編）/110_スライドアニメーション/start/style.scss`を編集<br>

これでスライドする<br>

```scss:style.scss
@import 'mixin';

img {
  max-width: 100%; // 画像の横幅を親要素の横幅に合わせることができる
}

.cover-slide {
  position: relative;

  &::after {
    content: ''; // 擬似要素の時は必ずcontentの設定が必要になるため、空を入れておく
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: orange;
    @include animation($name: kf-cover-slide);
  }
}

@keyframes kf-cover-slide {
  0% {
    left: 0;
    right: 100%;
  }
  50% {
    left: 0;
    right: 0;
  }
  100% {
    left: 100%;
    right: 0;
  }
}
```

+ `03_HTMLとCSSを極める（アニメーション編）/110_スライドアニメーション/start/index.html`を編集<br>

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
  <div id="container">
    <!-- classに inviewを追加 -->
    <div class="cover-slide inview">
      <!-- classを追加 -->
      <img class="img-zoom" src="images/image-1.jpg" alt="">
    </div>
  </div>
</body>

</html>
```

+ `03_HTMLとCSSを極める（アニメーション編）/110_スライドアニメーション/start/style.scss`を編集<br>


```scss:style.scss
@import 'mixin';

img {
  max-width: 100%; // 画像の横幅を親要素の横幅に合わせることができる
  vertical-align: bottom; // 画像と余白の高さが揃う
}

.cover-slide {
  position: relative;

  &::after {
    content: ''; // 擬似要素の時は必ずcontentの設定が必要になるため、空を入れておく
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: orange;
  }
  &.inview {
    &::after {
      @include animation($name: kf-cover-slide);
    }
  }
}

@keyframes kf-cover-slide {
  0% {
    left: 0;
    right: 100%;
  }
  50% {
    left: 0;
    right: 0;
  }
  100% {
    left: 100%;
    right: 0;
  }
}

.img-zoom {
  opacity: 0;

  .inview & {
    opacity: 1;
    @include animation($name: kf-img-show);
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
  }
  100% {
    opacity: 1;
  }
}
```

+ `03_HTMLとCSSを極める（アニメーション編）/110_スライドアニメーション/start/style.scss`を編集<br>

パンの設定<br>

```scss:style.scss
@import 'mixin';

img {
  max-width: 100%; // 画像の横幅を親要素の横幅に合わせることができる
  vertical-align: bottom; // 画像と余白の高さが揃う
}

.cover-slide {
  position: relative;
  overflow: hidden; // 画像が枠からはみ出さないようにする

  &::after {
    content: ''; // 擬似要素の時は必ずcontentの設定が必要になるため、空を入れておく
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #eaebe6;
  }
  &.inview {
    &::after {
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
    left: 0;
    right: 100%;
  }
  50% {
    left: 0;
    right: 0;
  }
  100% {
    left: 100%;
    right: 0;
  }
}

.img-zoom {
  opacity: 0;

  .inview & {
    opacity: 1;
    @include animation(
      $name: kf-img-show,
      $duration: 1.6s,
      $timing-function: ease-in-out,
      $fill-mode: none
    );
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
```

## 48. [実践] 画像にオサレなホバーアニメーションを適用してみよう！！


+ `03_HTMLとCSSを極める（アニメーション編）/110_スライドアニメーション/start/index.html`を編集<br>

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
  <div id="container">
    <!-- hover-darkenクラスを追加 -->
    <div class="cover-slide hover-darken inview">
      <img class="img-zoom" src="images/image-1.jpg" alt="">
    </div>
  </div>
</body>

</html>
```

+ `03_HTMLとCSSを極める（アニメーション編）/110_スライドアニメーション/start/style.scss`を編集<br>

エフェクトの設定<br>

```scss:style.scss
@import 'mixin';

img {
  max-width: 100%; // 画像の横幅を親要素の横幅に合わせることができる
  vertical-align: bottom; // 画像と余白の高さが揃う
}

.cover-slide {
  position: relative;
  overflow: hidden; // 画像が枠からはみ出さないようにする

  &::after {
    content: ''; // 擬似要素の時は必ずcontentの設定が必要になるため、空を入れておく
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #eaebe6;
  }
  &.inview {
    &::after {
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
    left: 0;
    right: 100%;
  }
  50% {
    left: 0;
    right: 0;
  }
  100% {
    left: 100%;
    right: 0;
  }
}

.img-zoom {
  opacity: 1;

  .inview & {
    opacity: 1;
    transition: transform 0.3s ease; // 拡大がスムーズになる
    @include animation(
      $name: kf-img-show,
      $duration: 1.6s,
      $timing-function: ease-in-out,
      $fill-mode: none
    );

    &:hover {
      transform: scale(1.3); // 拡大される
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
```
