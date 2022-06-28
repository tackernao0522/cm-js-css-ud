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

## 30. HTML要素を思った配置するレイアウト方法まとめ

+ `02_HTMLとCSSを極める（トランジション編）/100_要素を思った配置する方法/start/index.html`を編集<br>

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
    <div class="parent">
        <div class="child v1">child</div>
        <div class="child v2">child 2</div>
        <div class="child v3">child 3</div>
    </div>
</body>

</html>
```

+ `02_HTMLとCSSを極める（トランジション編）/100_要素を思った配置する方法/start/style.scss`を編集<br>

```scss:style.scss
.parent {
  background-color: rgb(81, 218, 218);
  height: 600px;
  width: 100%;
}

.child {
  background-color: orange;
  // width: 100px; // flexで指定している時、コメントアウトしてみる
  // height: 100px; // flexで指定している時、コメントアウトしてみる
  font-weight: 600;
  flex-grow: 1; // 各要素が親要素を満たすように横幅を調整されて配置される
}
.child.v1 {
  flex-basis: 300px; // 基本的な大きさを指定するプロパティ この場合はこの要素が300px分先に確保されることになる
}
.child.v2 {
  // width: 200px; // flexで指定している時、コメントアウトしてみる
  // height: 200px; // flexで指定している時、コメントアウトしてみる
  background-color: palevioletred;
  flex-grow: 2; // 1:2:1の幅になる
}
.child.v3 {
  background-color: rebeccapurple;
  flex-grow: 3; // 1:2:3 の幅になる
}

/**
 * 横方向のレイアウト
 */
/* インライン要素に対して */
// .parent {
//   text-align: right;
//   letter-spacing: -6px; // -6px以下の指定にすればスペースがなくなる(inlineの文字間隔)
// }
// .child {
//     display: inline-block; // inline-blockとするとinline要素に適用する text-alignが有効になる(親要素に設定)
// }

/* ブロック要素を中央揃え */
// .parent {
// }
// .child {
//     // width: 100px; // 左右に均等に振り分けることができる 100pxはデフォルトで書かなくても良い
//     margin: 0 auto; // block要素の中央揃え(block or inline-blockに適用可能 親要素のこの場合 .parentにwidthが指定されてなければならない)
// }

/**
 * 上下方向のレイアウト
 */

// このやり方は全ての子要素が重なって配置されることになる
// .parent {
//   position: relative;
// }
// .child {
//   position: absolute; // 親要素(.parent)を基準
//   top: 50%; // (親要素基準から)
//   left: 50%; // (親要素基準から)
//   transform: translate(-50%, -50%); // 自要素から x(左に50%) y(上に50%)プラスにすると逆に動く
// }

// 全ての子要素が重ならない方法
.parent {
  display: flex; // これだけ指定すると横並びになる
  // flex-direction: row; // column (縦並びにする) これを指定すると justify-content とalign-itemsを指定した場合は通常の逆の配置になる row(デフォルトの設定になるので他の指定は普通になる)
  justify-content: center; // flex-end とすると 横並びで 右へ表示される centerは中央 space-around(均等に間が開く) space-between(両端のスペースが取り除かれて 残りの間隔が均等に配置される)
  // align-items: flex-end; // 縦方向を操作する時に使う center(中央に配置) flex-start(一番上中央に配置) flex-end(一番下中央に配置)
}
```
