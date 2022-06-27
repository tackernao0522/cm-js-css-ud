## 29. [発展][演習] 3D アニメーション ~ キュービックのボタンを作成する

+ `02_HTMLとCSSを極める（トランジション編）/090_発展_演習_3Dアニメーション2/try.scss`を編集<br>

```scss:try.scss
$cWhite: white;
$cBlack: black;

#container {
  text-align: center;
}
.try {
  .btn {
    position: relative;
    display: inline-block;
    transform-style: preserve-3d;
    perspective: 300px;
    width: 150px;
    height: 50px;
    margin: 0 auto;
    cursor: pointer;

    &.cubic {
      /** スタイルをここに追加。*/
      & span {
        position: absolute; // 重ねて表示するようにする('Button'と'Now, Hovering') .try .btnが親要素
        top: 0;
        left: 0;
        width: 100%;
        height: 100%; // 50pxでも同じ
        border: 1px solid $cBlack;
        line-height: 48px; // 上下の位置の調整 親の要素 heightが50pxでborderが上下1pxずつの2pxを引いた分を指定(50px -2px)
        text-align: center; // inline要素に対して左右中央揃え
        transition: all 0.3s;
      }

      & .hovering {
        background-color: $cBlack;
        color: $cWhite;
        transform: rotateX(90deg);
        transform-origin: center center -25px; // y軸 center x軸 center z軸 -25px
      }

      & .default {
        background-color: $cWhite;
        color: $cBlack;
        transform: rotateX(0); // 回転させなくて良い hover時に90度回転させる
        transform-origin: center center -25px;
      }

      &:hover {
        & .hovering {
          transform: rotateX(
            0
          ); // 回転した際には表面を向くことになるので0にする
        }
        & .default {
          transform: rotateX(-90deg);
        }
      }
    }
  }
}
```

## 30. HTML要素を思った通りに配置するレイアウト方法まとめ
