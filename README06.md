## 49 . [Tips] Background-imageを画像タグのようにアスペクト比を保ちながら表示する小技

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
    <!-- <div class="cover-slide hover-darken inview">
      <img class="img-zoom" src="images/image-1.jpg" alt="">
    </div> -->
    <div class="cover-slide hover-darken inview">
      <div class="bg-img-zoom"></div>
    </div>
  </div>
</body>

</html>
```

+ `03_HTMLとCSSを極める（アニメーション編）/110_スライドアニメーション/start/style.scss`を編集<br>

これで取り敢えず画像が表示される<br>

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

.bg-img-zoom {
  background-image: url(images/image-1.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 200px;
}
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

.bg-img-zoom {
  background-image: url(images/image-1.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 200px;

  @extend .img-zoom; // .img-zoomのところの値を取り込むことができる
}
```

+ `03_HTMLとCSSを極める（アニメーション編）/110_スライドアニメーション/start/style.scss`を編集<br>

`background-image`を使うとアスペクト比を保つのが難しいが下記のやり方で可能<br>

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

.bg-img-zoom {
  background-image: url(images/image-1.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  // height: 200px; // 編集

  @extend .img-zoom; // .img-zoomのところの値を取り込むことができる

  // 追加
  &::before {
    display: block;
    content: '';
    padding-top: 50%;
  }
}
```

beforeの要素は別のクラスにして定義するやり方<br>

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
    <!-- <div class="cover-slide hover-darken inview">
      <img class="img-zoom" src="images/image-1.jpg" alt="">
    </div> -->
    <div class="cover-slide hover-darken inview">
      <div class="bg-img-zoom img-bg50"></div> <!-- 編集 -->
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

.bg-img-zoom {
  background-image: url(images/image-1.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  @extend .img-zoom; // .img-zoomのところの値を取り込むことができる
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
