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