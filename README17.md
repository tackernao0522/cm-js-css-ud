## 93. [ライブラリ導入篇] ヒーロースライダーでページをオサレにしよう！

+ [Swiper](https://swiperjs.com/)<br>

+ `05_JavaScriptを実践で使う/070_Swiperを使ったスライダーアニメーション/start/index.html`を編集<br>

```html:index.html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="swiper.min.css">
</head>

<body>
  <!-- Slider main container -->
  <div class="swiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
  </div>

  <script src="swiper.min.js"></script>
</body>

</html>
```

+ `05_JavaScriptを実践で使う/070_Swiperを使ったスライダーアニメーション/start/style.scss`を作成<br>

+ `05_JavaScriptを実践で使う/070_Swiperを使ったスライダーアニメーション/start/style.scss`を編集<br>

```scss:style.scss
.swiper {
  width: 600px;
  height: 300px;
}
```

+ `05_JavaScriptを実践で使う/070_Swiperを使ったスライダーアニメーション/start/index.html`を編集<br>

```html:index.html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="swiper.min.js">
  <!-- 追加 -->
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <!-- Slider main container -->
  <div class="swiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
  </div>

  <script src="swiper.min.js"></script>
  <!-- 追加 -->
  <script src="main.js"></script>
</body>

</html>
```

+ `05_JavaScriptを実践で使う/070_Swiperを使ったスライダーアニメーション/start/main.js`を作成<br>

+ `05_JavaScriptを実践で使う/070_Swiperを使ったスライダーアニメーション/start/main.js`を編集<br>

```js:main.js
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
```

+ `05_JavaScriptを実践で使う/070_Swiperを使ったスライダーアニメーション/start/main.js`を編集<br>

```js:main.js
const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical', // 垂直を表し縦にスライドする 削除すると水平方向にスライドする
  // loop: true, // falseにするとloopしなくなる(削除でもfalse)

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
```

+ `05_JavaScriptを実践で使う/070_Swiperを使ったスライダーアニメーション/start/index.html`を編集<br>

```html:index.html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="swiper.min.css">
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <!-- Slider main container -->
  <div class="swiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide"><img src="images/image-1.jpg"></div>
      <div class="swiper-slide"><img src="images/image-2.jpg"></div>
      <div class="swiper-slide"><img src="images/image-3.jpg"></div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
  </div>

  <script src="swiper.min.js"></script>
  <script src="main.js"></script>
</body>

</html>
```

+ `05_JavaScriptを実践で使う/070_Swiperを使ったスライダーアニメーション/start/main.js`を編集<br>

```js:main.js
const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  // loop: true, // falseにするとloopしなくなる(削除でもfalse)
  // effect: 'fade',
  effect: 'coverflow',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
```