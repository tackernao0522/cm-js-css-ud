## 96. [実践編 Part.2] ヒーロースライダーでページをオサレにしよう！

+ `05_JavaScriptを実践で使う/070_Swiperを使ったスライダーアニメーション/start/style.scss`を編集<br>

```scss:style.scss
@import 'mixin';
$cWhite: white;

.swiper {
  overflow: visible !important; // 編集
}

.swiper-slide {
  height: 500px;

  // 追加
  & > img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    object-fit: cover;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 61, 125, 0.1);
  }
  // ここまで
}

.hero {
  &__title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $cWhite;
    font-size: 25px;
    z-index: 2; // 追加
  }

  &__footer {
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    z-index: 2;
    height: 68px;
    width: 22px;
    overflow: hidden;
  }

  &__downarrow {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 6px;
    @include animation(
      $name: kf-arrow-anime,
      $iteration-count: infinite,
      $duration: 2s,
      $timing-function: linear
    );
  }

  &__scrolltext {
    position: absolute;
    transform: rotate(90deg);
    color: rgba(255, 255, 255, 0.7);
    left: -8px;
    top: 11px;
    font-size: 1.2em;
  }
}

@keyframes kf-arrow-anime {
  0%,
  50%,
  100% {
    transform: translateY(-10%);
  }
  30% {
    transform: none;
  }
}
```

+ `05_JavaScriptを実践で使う/070_Swiperを使ったスライダーアニメーション/start/style.scss`を編集<br>

```scss:style.scss
@import 'mixin';
$cWhite: white;

.swiper {
  overflow: visible !important;
}

.swiper-slide {
  height: 500px;
  overflow: hidden; // 追加

  & > img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    object-fit: cover;
    transform: scale(1.3); // 追加
    transition: transform 1.9s ease; // 追加
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 61, 125, 0.1);
  }

  // 追加
  &-active {
    & > img {
      transform: none;
    }
  }
  // ここまで
}

.hero {
  &__title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $cWhite;
    font-size: 25px;
    z-index: 2;
  }

  &__footer {
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    z-index: 2;
    height: 68px;
    width: 22px;
    overflow: hidden;
  }

  &__downarrow {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 6px;
    @include animation(
      $name: kf-arrow-anime,
      $iteration-count: infinite,
      $duration: 2s,
      $timing-function: linear
    );
  }

  &__scrolltext {
    position: absolute;
    transform: rotate(90deg);
    color: rgba(255, 255, 255, 0.7);
    left: -8px;
    top: 11px;
    font-size: 1.2em;
  }
}

@keyframes kf-arrow-anime {
  0%,
  50%,
  100% {
    transform: translateY(-10%);
  }
  30% {
    transform: none;
  }
}
```

+ `05_JavaScriptを実践で使う/070_Swiperを使ったスライダーアニメーション/start/style.scss`を編集<br>

```scss:style.scss
@import 'mixin';
$cWhite: white;

.swiper {
  overflow: visible !important;
}

.swiper-slide {
  height: 500px;
  overflow: hidden; // 追加

  & > img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    object-fit: cover;
    transform: scale(1.3);
    transition: transform 1.9s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 61, 125, 0.1);
  }

  &-active {
    & > img {
      transform: none;
    }

    // 追加
    & .hero__title {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
}

.hero {
  &__title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% + 20px)); // 編集
    color: $cWhite;
    font-size: 25px;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.3s ease 1s, transform 0.3s ease 1s; // 編集
  }

  &__footer {
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    z-index: 2;
    height: 68px;
    width: 22px;
    overflow: hidden;
  }

  &__downarrow {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 6px;
    @include animation(
      $name: kf-arrow-anime,
      $iteration-count: infinite,
      $duration: 2s,
      $timing-function: linear
    );
  }

  &__scrolltext {
    position: absolute;
    transform: rotate(90deg);
    color: rgba(255, 255, 255, 0.7);
    left: -8px;
    top: 11px;
    font-size: 1.2em;
  }
}

@keyframes kf-arrow-anime {
  0%,
  50%,
  100% {
    transform: translateY(-10%);
  }
  30% {
    transform: none;
  }
}
```


## 97. [実践編 Part.3] ヒーロースライダーでページをオサレにしよう！

+ `05_JavaScriptを実践で使う/070_Swiperを使ったスライダーアニメーション/start/main.js`を編集<br>

```js:main.js
document.addEventListener('DOMContentLoaded', function () {
  const hero = new HeroSlider();
});

class HeroSlider {
  constructor() {
    this.swiper = new Swiper('.swiper', {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      effect: 'coverflow',
      centeredSlides: true,
      slidesPerView: 1,
      speed: 1000,
      breakpoints: {
        1024: {
          slidesPerView: 2,
        }
      }
    })
  }
}
```

+ `05_JavaScriptを実践で使う/070_Swiperを使ったスライダーアニメーション/start/main.js`を編集<br>

```js:main.js
document.addEventListener('DOMContentLoaded', function () {
  const hero = new HeroSlider();
});

class HeroSlider {
  constructor() {
    this.swiper = new Swiper('.swiper', {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      effect: 'coverflow',
      centeredSlides: true,
      slidesPerView: 1,
      speed: 1000,
      breakpoints: {
        1024: {
          slidesPerView: 2,
        }
      },
      // 追加 4秒後にオートでスライドする
      autoplay: {
        delay: 4000,
        disableOnInteraction: false, // コメントアウトするとオートが解除される
      }
    })
  }
}
```

+ `05_JavaScriptを実践で使う/070_Swiperを使ったスライダーアニメーション/start/main.js`を編集<br>

```js:main.js
document.addEventListener('DOMContentLoaded', function () {
  const hero = new HeroSlider('.swiper');
});

class HeroSlider {
  constructor(el) {
    this.el = el;
    this.swiper = this._initiSwiper();
  }

  _initiSwiper() {
    return new Swiper(this.el, {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      grabCursor: true,
      effect: 'coverflow',
      centeredSlides: true,
      slidesPerView: 1,
      speed: 1000,
      breakpoints: {
        1024: {
          slidesPerView: 2,
        }
      },
      // autoplay: {
      //   delay: 4000,
      //   disableOnInteraction: false,
      // }
    })
  }
}
```

+ `05_JavaScriptを実践で使う/070_Swiperを使ったスライダーアニメーション/start/main.js`を編集<br>

```js:main.js
document.addEventListener('DOMContentLoaded', function () {
  const hero = new HeroSlider('.swiper');
  hero.start(); // 追加
});

class HeroSlider {
  constructor(el) {
    this.el = el;
    this.swiper = this._initiSwiper();
  }

  _initiSwiper() {
    return new Swiper(this.el, {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      grabCursor: true,
      effect: 'coverflow',
      centeredSlides: true,
      slidesPerView: 1,
      speed: 1000,
      breakpoints: {
        1024: {
          slidesPerView: 2,
        }
      }
      // 削除
    })
  }

  // 追加
  start() {
    this.swiper.params.autoplay = {
      delay: 4000,
      disableOnInteraction: false,
    }
    this.swiper.autoplay.start();
  }
  // ここまで
}
```

+ `05_JavaScriptを実践で使う/070_Swiperを使ったスライダーアニメーション/start/main.js`を編集<br>

```js:main.js
document.addEventListener('DOMContentLoaded', function () {
  const hero = new HeroSlider('.swiper');
  hero.start();

  // 追加
  setTimeout(() => {
    hero.stop();
  }, 5000);
});

class HeroSlider {
  constructor(el) {
    this.el = el;
    this.swiper = this._initiSwiper();
  }

  _initiSwiper() {
    return new Swiper(this.el, {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      grabCursor: true,
      effect: 'coverflow',
      centeredSlides: true,
      slidesPerView: 1,
      speed: 1000,
      breakpoints: {
        1024: {
          slidesPerView: 2,
        }
      }
    })
  }

  start() {
    this.swiper.params.autoplay = {
      delay: 4000,
      disableOnInteraction: false,
    }
    this.swiper.autoplay.start();
  }
  // 追加
  stop() {
    this.swiper.autoplay.stop();
  }
}
```

+ `05_JavaScriptを実践で使う/070_Swiperを使ったスライダーアニメーション/start/main.js`を編集<br>

```js:main.js
document.addEventListener('DOMContentLoaded', function () {
  const hero = new HeroSlider('.swiper');
  hero.start();

  setTimeout(() => {
    hero.stop();
  }, 5000);
});

class HeroSlider {
  constructor(el) {
    this.el = el;
    this.swiper = this._initiSwiper();
  }

  _initiSwiper() {
    return new Swiper(this.el, {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      grabCursor: true,
      effect: 'coverflow',
      centeredSlides: true,
      slidesPerView: 1,
      speed: 1000,
      breakpoints: {
        1024: {
          slidesPerView: 2,
        }
      }
    })
  }

  // 編集
  start(options = {}) {
    options = Object.assign({
      delay: 4000,
      disableOnInteraction: false,
    }, options);
    this.swiper.params.autoplay = options;
    this.swiper.autoplay.start();
    // ここまで
  }
  stop() {
    this.swiper.autoplay.stop();
  }
}
```

+ `05_JavaScriptを実践で使う/070_Swiperを使ったスライダーアニメーション/start/main.js`を編集<br>

```js:main.js
document.addEventListener('DOMContentLoaded', function () {
  const hero = new HeroSlider('.swiper');
  hero.start({ delay: 2000 }); // 編集

  setTimeout(() => {
    hero.stop();
  }, 5000);
});

class HeroSlider {
  constructor(el) {
    this.el = el;
    this.swiper = this._initiSwiper();
  }

  _initiSwiper() {
    return new Swiper(this.el, {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      grabCursor: true,
      effect: 'coverflow',
      centeredSlides: true,
      slidesPerView: 1,
      speed: 1000,
      breakpoints: {
        1024: {
          slidesPerView: 2,
        }
      }
    })
  }

  start(options = {}) {
    options = Object.assign({
      delay: 4000,
      disableOnInteraction: false,
    }, options);
    this.swiper.params.autoplay = options;
    this.swiper.autoplay.start();
  }
  stop() {
    this.swiper.autoplay.stop();
  }
}
```

05_JavaScriptを実践で使う/070_Swiperを使ったスライダーアニメーション/start/hero-slider.js`を作成<br>

```js:hero-slider.js
class HeroSlider {
  constructor(el) {
    this.el = el;
    this.swiper = this._initiSwiper();
  }

  _initiSwiper() {
    return new Swiper(this.el, {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      grabCursor: true,
      effect: 'coverflow',
      centeredSlides: true,
      slidesPerView: 1,
      speed: 1000,
      breakpoints: {
        1024: {
          slidesPerView: 2,
        }
      }
    })
  }

  start(options = {}) {
    options = Object.assign({
      delay: 4000,
      disableOnInteraction: false,
    }, options);
    this.swiper.params.autoplay = options;
    this.swiper.autoplay.start();
  }
  stop() {
    this.swiper.autoplay.stop();
  }
}
```

+ `05_JavaScriptを実践で使う/070_Swiperを使ったスライダーアニメーション/start/main.js`を編集<br>

```js:main.js
document.addEventListener('DOMContentLoaded', function () {
  const hero = new HeroSlider('.swiper');
  hero.start({ delay: 2000 });

  setTimeout(() => {
    hero.stop();
  }, 5000);
});

// ここからカット
class HeroSlider {
  constructor(el) {
    this.el = el;
    this.swiper = this._initiSwiper();
  }

  _initiSwiper() {
    return new Swiper(this.el, {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      grabCursor: true,
      effect: 'coverflow',
      centeredSlides: true,
      slidesPerView: 1,
      speed: 1000,
      breakpoints: {
        1024: {
          slidesPerView: 2,
        }
      }
    })
  }

  start(options = {}) {
    options = Object.assign({
      delay: 4000,
      disableOnInteraction: false,
    }, options);
    this.swiper.params.autoplay = options;
    this.swiper.autoplay.start();
  }
  stop() {
    this.swiper.autoplay.stop();
  }
}
// ここまでカット
```

+ `05_JavaScriptを実践で使う/070_Swiperを使ったスライダーアニメーション/start/hero-slider.js`を作成<br>

+ `05_JavaScriptを実践で使う/070_Swiperを使ったスライダーアニメーション/start/hero-slider.js`を編集(カットしたのをぺースト)<br>

```js:hero-slider.js
class HeroSlider {
  constructor(el) {
    this.el = el;
    this.swiper = this._initiSwiper();
  }

  _initiSwiper() {
    return new Swiper(this.el, {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      grabCursor: true,
      effect: 'coverflow',
      centeredSlides: true,
      slidesPerView: 1,
      speed: 1000,
      breakpoints: {
        1024: {
          slidesPerView: 2,
        }
      }
    })
  }

  start(options = {}) {
    options = Object.assign({
      delay: 4000,
      disableOnInteraction: false,
    }, options);
    this.swiper.params.autoplay = options;
    this.swiper.autoplay.start();
  }
  stop() {
    this.swiper.autoplay.stop();
  }
}
```

05_JavaScriptを実践で使う/070_Swiperを使ったスライダーアニメーション/start/_hero-slider.scss`を作成<br>

```scss:_hero-slider.scss
.swiper {
  overflow: visible !important;
}

.swiper-slide {
  height: 500px;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    object-fit: cover;
    transform: scale(1.3);
    transition: transform 1.9s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 61, 125, 0.1);
  }

  &-active {
    & > img {
      transform: none;
    }

    & .hero__title {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
}

.hero {
  &__title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% + 20px));
    color: $cWhite;
    font-size: 25px;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.3s ease 1s, transform 0.3s ease 1s;
  }

  &__footer {
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    z-index: 2;
    height: 68px;
    width: 22px;
    overflow: hidden;
  }

  &__downarrow {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 6px;
    @include animation(
      $name: kf-arrow-anime,
      $iteration-count: infinite,
      $duration: 2s,
      $timing-function: linear
    );
  }

  &__scrolltext {
    position: absolute;
    transform: rotate(90deg);
    color: rgba(255, 255, 255, 0.7);
    left: -8px;
    top: 11px;
    font-size: 1.2em;
  }
}

@keyframes kf-arrow-anime {
  0%,
  50%,
  100% {
    transform: translateY(-10%);
  }
  30% {
    transform: none;
  }
}
```

05_JavaScriptを実践で使う/070_Swiperを使ったスライダーアニメーション/start/style.scss`を編集<br>

```scss:style.scss
@import 'mixin';

$cWhite: white;

@import 'hero-slider';
```

05_JavaScriptを実践で使う/070_Swiperを使ったスライダーアニメーション/start/index.html`を編集<br>

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
  <div id="global-container">
    <div id="container">
      <div id="content">
        <div class="hero">
          <!-- Slider main container -->
          <div class="swiper">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
              <!-- Slides -->
              <div class="swiper-slide">
                <div class="hero__title">Enjoy Rich</div>
                <img src="images/image-1.jpg">
              </div>
              <div class="swiper-slide">
                <div class="hero__title">Fantastic</div>
                <img src="images/image-2.jpg">
              </div>
              <div class="swiper-slide">
                <div class="hero__title">Experience</div>
                <img src="images/image-3.jpg">
              </div>
            </div>
            <div class="hero__footer">
              <img class="hero__downarrow" src="./images/arrow.svg">
              <span class="hero__scrolltext">scroll</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script src="swiper.min.js"></script>
  <script src="hero-slider.js"></script> <!-- 追加 -->
  <script src="main.js"></script>
</body>

</html>
```
