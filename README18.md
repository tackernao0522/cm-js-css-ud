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
