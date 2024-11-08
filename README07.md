# 50. [Tips] アニメーションに最適なプロパティー

[参考](https://blog.leap-in.com/lets-learn-how-to-browser-works/) <br>

+ `03_HTMLとCSSを極める（アニメーション編）/110_スライドアニメーション/start/style.scss`を編集<br>

+ パフォーマンスを良くするための書き方<br>

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
    opacity: 0; // 追加
  }
  &.inview {
    &::after {
      opacity: 1; // 追加
      @include animation(
        $name: kf-cover-slide,
        $duration: 1.6s,
        $timing-function: ease-in-out
      );
    }
  }
}

// @keyframes kf-cover-slide {
//   0% {
//     left: 0;
//     right: 100%;
//   }
//   50% {
//     left: 0;
//     right: 0;
//   }
//   100% {
//     left: 100%;
//     right: 0;
//   }
// }

@keyframes kf-cover-slide {
  // 0〜1に拡大して100%の時に再度0に戻る
  0% {
    transform-origin: left; // アニメーションの起点の位置を指定する　この場合、左端を中心にしてスライドが始まる
    transform: scaleX(0);
  }
  50% {
    transform-origin: left;
    transform: scaleX(1);
  }
  50.1% {
    transform-origin: right;
    transform: scaleX(1);
  }
  100% {
    transform-origin: right;
    transform: scaleX(0);
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