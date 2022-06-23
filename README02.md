## 23. Transform プロパティーの使い方をマスターしよう

+ `02_HTMLとCSSを極める（トランジション編）/040_transformについて学ぼう/start/style.scss`を編集<br>

```scss:style.scss
.rect {
  width: 100px;
  height: 100px;
  margin: 0 auto; // これを設定する場合にはwidthの設定が必須
  background-color: orangered;
  transform: translateX(50px) scaleY(2); // tranlate(), translateX(), translateY() 第1引数: x軸 第2引数: y軸 (下側へ) 両者-指定もできて移動方向は逆になる pxと%で指定可能 100%で一個分
  // (30deg): 30度右回転 -も使える x軸のマイナスは左 y軸のマイナスは下へとなる
  // skew(-30deg, -30deg): 平行四辺形 SkewX(-30deg) SkewY
  // scale(1.1, 1.1): 少し物体が大きくなる この場合1.1倍 scaleX(2) scaleY(2)
  // アニメーションを扱う場合にはtransformを使った方が良い
  transform-origin: center center; // 元々あった物体の左上を支点にする bottom left: 左下を支点にする bottom right: 右下を支点にする center center: センターを支点にする -20px -20pxと任意の値も設定できる
}
```

+ `02_HTMLとCSSを極める（トランジション編）/040_transformについて学ぼう/start/index.html`を編集<br>

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
    <div id="container">
        <div class="rect"></div>
    </div>
</body>
</html>
```

## 24 PositionとZ-indexをマスターして思い通りのレイアウトを組む

+ position: 画面の決まった位置に要素を移動したり、画面の特定の位置に要素を固定して表示したりするCSSのプロパティになる<br>

+ デフォルト値としては`position: static;`が全てにふられている<br>

+ `position: relative;` :現在表示されている位置から相対的なポジションを取る場合に設定する(これだけだと何も変わらない)<br>

+ `position: absolute;` : 親要素の`relativeがついているものの左上からの絶対値で要素を表示する時に使う。(この場合親要素のcontainerの高さが0になる)

+ `02_HTMLとCSSを極める（トランジション編）/050_positionとz-indexについて学ぼう/start/style.scss`を編集<br>

```scss:style.scss
#container {
  padding: 1rem;
  position: relative; // これを消すとブラウザの画面の左上が基準になる
  background-color: gray;
}

div {
  font-weight: 600;
  padding: 0.5rem;
  font-size: 1.1em;
  width: 150px;
  height: 150px;
  box-shadow: 7px 7px 0 0 #000;
}

.div-1 {
  background: orange;
  position: absolute;
  top: 0; // 親要素の左上に固定される
  left: 0; // 親要素の左上に固定される
}
.div-2 {
  background: tomato;
  display: none;
}
.div-3 {
  background: teal;
  display: none;
}
.div-4 {
  width: 80px;
  height: 80px;
  background-color: violet;
}
```
+ `z-index:`は`position:`が`static`以外で設定されていることが絶対条件である。<br>

+ `02_HTMLとCSSを極める（トランジション編）/050_positionとz-indexについて学ぼう/start/style.scss`を編集<br>

```scss:style.scss
#container {
  padding: 1rem;
  position: relative;
  background-color: gray;
}

div {
  font-weight: 600;
  padding: 0.5rem;
  font-size: 1.1em;
  width: 150px;
  height: 150px;
  box-shadow: 7px 7px 0 0 #000;
}

.div-1 {
  background: orange;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20; // .div-2よりも大きい数値を設定すると前面に出て表示される
}
.div-2 {
  background: tomato;
  position: relative; // 親要素のcontainerのheightは復活する
  z-index: 30;
}
.div-3 {
  background: teal;
  display: none;
}
.div-4 {
  width: 80px;
  height: 80px;
  background-color: violet;
}
```

+ `02_HTMLとCSSを極める（トランジション編）/050_positionとz-indexについて学ぼう/start/style.scss`を編集<br>

+ `z-index: auto;`の場合はローカルコンテキストを生成しない(z-indexを書かない場合も初期値はz-index: auto;になっている)<br>

```scss:style.scss
#container {
  padding: 1rem;
  position: relative;
  background-color: gray;
  z-index: 1;
}

div {
  font-weight: 600;
  padding: 0.5rem;
  font-size: 1.1em;
  width: 150px;
  height: 150px;
  box-shadow: 7px 7px 0 0 #000;
}

.div-1 {
  background: orange;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20; // .div-2よりも大きい数値を設定すると前面に出て表示される
}
.div-2 {
  background: tomato;
  position: relative; // 親要素のcontainerのheightは復活する
  z-index: 30;
}
.div-3 {
  background: teal;
  position: absolute;
  top: 40px;
  left: 40px;
  z-index: 100;
}
.div-4 {
  width: 80px;
  height: 80px;
  background-color: violet;
  z-index: 50;
  position: relative;
}
```

+ `02_HTMLとCSSを極める（トランジション編）/050_positionとz-indexについて学ぼう/start/style.scss`を編集<br>

+ `position: fixed;` ウィンドウの特定の位置に固定して表示することができる

```scss:style.scss
#container {
  padding: 1rem;
  position: relative;
  background-color: gray;
  height: 1000px; // スクロールしてもdiv-1はposition: fixed;で固定されているのでdiv-1は固定されて動かない
}

div {
  font-weight: 600;
  padding: 0.5rem;
  font-size: 1.1em;
  width: 150px;
  height: 150px;
  box-shadow: 7px 7px 0 0 #000;
}

.div-1 {
  background: orange;
  position: fixed;
  top: 0; // 上に固定
  // bottom: 0; // 下に固定
  left: 0;
  z-index: 20; // .div-2よりも大きい数値を設定すると前面に出て表示される
}
.div-2 {
  background: tomato;
  position: relative; // 親要素のcontainerのheightは復活する
  z-index: 30;
}
.div-3 {
  background: teal;
  position: absolute;
  top: 40px;
  left: 40px;
  z-index: 100;
}
.div-4 {
  width: 80px;
  height: 80px;
  background-color: violet;
  z-index: 50;
  position: relative;
}
```

+ `02_HTMLとCSSを極める（トランジション編）/050_positionとz-indexについて学ぼう/start/style.scss`を編集<br>

+ `postion: sticky;` (この場合はdiv-4が上から30pxの位置に達した時点で追従してくるようになる 親要素の中で稼働できるようになる div-3がdiv-4と同じ高さであれば追従してこないので、heightをdiv-3に指定するとheight 800px分は下に追従してdiv-4が動いてくることになる z-indexも通常通り使える)<br>

+ `stickyを使うときの注意点`: stickyの親要素に`overflow: hidden`という設定値がついている場合はstickyが動作しなくなってしまう。

```scss:style.scss
#container {
  padding: 1rem;
  position: relative;
  background-color: gray;
  height: 1000px; // スクロールしてもdiv-1はposition: fixed;で固定されているのでdiv-1は固定されて動かない
}

div {
  font-weight: 600;
  padding: 0.5rem;
  font-size: 1.1em;
  width: 150px;
  height: 150px;
  box-shadow: 7px 7px 0 0 #000;
}

.div-1 {
  background: orange;
  position: absolute;
  // top: 0; // 上に固定
  bottom: 0; // 下に固定
  left: 0;
  z-index: 20; // .div-2よりも大きい数値を設定すると前面に出て表示される
}
.div-2 {
  background: tomato;
  position: relative; // 親要素のcontainerのheightは復活する
  z-index: 30;
}
.div-3 {
  background: teal;
  position: absolute;
  top: 40px;
  left: 40px;
  height: 800px;
}
.div-4 {
  width: 80px;
  height: 80px;
  background-color: violet;
  z-index: 1;
  position: sticky;
  top: 30px;
}
```

## 25. Transform, Position, Z-indexの復讐！背景色がスライドするボタンを作ってみよう

+ `02_HTMLとCSSを極める（トランジション編）/060_背景色がスライドするボタン/start/index.html`を編集<br>

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
    <div id="container">
        <button class="btn slide-bg"><span></span>Button</button>
    </div>
</body>

</html>
```

+ `02_HTMLとCSSを極める（トランジション編）/060_背景色がスライドするボタン/start/style.scss`を編集<br>

```scss:style.scss
$cWhite: white;
$cBlack: black;

#container {
  text-align: center;
}

.btn {
  background-color: $cWhite;
  color: $cBlack;
  border: 1px solid $cBlack;
  padding: 10px 40px;
  margin: 50px 0;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  &.slide-bg {
    position: relative;
    overflow: hidden; // ボタンの枠の外が非表示になる為、hoverしてない時は見えなくなっている　visibleをすると表示される
    z-index: 1; // ローカルコンテキストの設定

    & span { // spanはinline要素なのでinline-blockとして、widthとheihtを指定できるようにする
      display: inline-block;
      width: 100%;
      height: 100%;
      background-color: $cBlack;
      position: absolute; // 親要素のbtm.slide-bg classを基準とする これにrelativeがないとウィンドウが基準となる為。画面全体が真っ黒になる
      top: 0;
      left: 0;
      transform: translateX(-100%); // ボタンの左に100%分ずれることになる(黒背景)
      transition: transform 0.3s;
      z-index: -1; // ローカルコンテキストの設定
    }

    &:hover {
      color: $cWhite;

      & span {
        transform: none; // noneとすると黒背景が元の位置に戻ることになる(hover時にボタンの枠に黒の背景色が被さる)
      }
    }
  }
}
```
