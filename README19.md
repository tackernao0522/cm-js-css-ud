# セクション8: スマホでもキレイに見えるレスポンシブ画面の作り方

## 100. メディアクエリの適用方法について学ぼう

+ `06_レスポンシブデザイン/010_レスポンシブデザイン/start/desktop.scss`を作成<br>

+ `06_レスポンシブデザイン/010_レスポンシブデザイン/start/desktop.scss`を編集<br>

```scss:desktop.scss
h1 {
  color: blue;
}
```

+ `06_レスポンシブデザイン/010_レスポンシブデザイン/start/mobile.scss`を作成<br>

+ `06_レスポンシブデザイン/010_レスポンシブデザイン/start/mobile.scss`を編集<br>

```scss:mobile.scss
h1 {
  color: red;
}
```

+ `06_レスポンシブデザイン/010_レスポンシブデザイン/start/index.html`を編集<br>

```html:index.html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 601px以上になるとmobile.cssは解除される -->
    <link rel="stylesheet" href="mobile.css" media="screen and (max-width: 600px)">
    <!-- 601pxからdesktop.cssが効くようになる -->
    <link rel="stylesheet" href="desktop.css" media="screen and (min-width: 601px)">
</head>

<body>
    <h1>Test</h1>
</body>

</html>
```

+ `06_レスポンシブデザイン/010_レスポンシブデザイン/start/index.html`を編集<br>

```html:index.html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css"> <!-- 編集 -->
    <link rel="stylesheet" href="desktop.css" media="screen and (min-width: 601px)">
</head>

<body>
    <h1>Test</h1>
</body>

</html>
```

+ `06_レスポンシブデザイン/010_レスポンシブデザイン/start/style.scss`を作成<br>

+ `06_レスポンシブデザイン/010_レスポンシブデザイン/start/style.scss`を編集<br>

```scss:style.scss
@import url("./mobile.css") screen and (max-width: 600px);
```

+ `06_レスポンシブデザイン/010_レスポンシブデザイン/start/index.html`を編集<br>

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
    <h1>Test</h1>
</body>

</html>
```

+ `06_レスポンシブデザイン/010_レスポンシブデザイン/start/style.scss`を編集<br>

```scss:style.scss
@import url('./mobile.css') screen and (max-width: 600px);
@import url('./desktop.css') screen and (min-width: 601px);
```

+ `06_レスポンシブデザイン/010_レスポンシブデザイン/start/style.scss`を編集(最も一般的な書き方)<br>

```scss:style.scss
@media screen and (max-width: 600px) {
  h1 {
    color: red;
  }
}

@media screen and (min-width: 601px) {
  h1 {
    color: blue;
  }
}
```

## 101. モバイルファーストの実装について学ぼう

+ `06_レスポンシブデザイン/010_レスポンシブデザイン/start/style.scss`を編集(最も一般的な書き方)<br>

```scss:style.scss
@media screen and (max-width: 600px) {
  h1 {
    color: red;
    background: yellow;
  }
}

@media screen and (min-width: 601px) {
  h1 {
    color: blue;
    background: yellow;
  }
}
```

+ `06_レスポンシブデザイン/010_レスポンシブデザイン/start/style.scss`を編集(画面幅の小さい方からスタイルを適用するモバイルファースト)<br>

```scss:style.scss
// モバイル用のスタイル
h1 {
  color: red;
  background: yellow;
}

// デスクトップ用のスタイル
@media screen and (min-width: 601px) {
  h1 {
    color: blue;
  }
}
```

+ `06_レスポンシブデザイン/010_レスポンシブデザイン/start/style.scss`を編集(デスクトップファースト)<br>

```scss:style.scss
// デスクトップ用のスタイル
h1 {
  color: red;
  background: yellow;
}

// モバイル用のスタイル
@media screen and (max-width: 600px) {
  h1 {
    color: blue;
  }
}
```

## 102. [Tips] ビューポートとは？メディアクエリが効かない時の対処法

動画を参考<br>

## 103. メディアクエリの文法に意味について学ぼう

+ `06_レスポンシブデザイン/020_Sassでレスポンシブの部品作成/start/style.scss`を編集<br>

```scss:style.scss
// モバイル用のスタイル
h1 {
  color: red;
  background: yellow;
}

// デスクトップ用のスタイル
// print = 印刷時に適用
@media print (min-width: 601px) {
  h1 {
    color: blue;
  }
}
```

+ `06_レスポンシブデザイン/020_Sassでレスポンシブの部品作成/start/style.scss`を編集<br>

```scss:style.scss
// モバイル用のスタイル
h1 {
  color: red;
  background: yellow;
}

// デスクトップ用のスタイル
// all = 印刷時とブラウザ表示時の両方に適用 allを削除しても同じ意味になる
@media all (min-width: 601px) {
  h1 {
    color: blue;
  }
}
```

+ `06_レスポンシブデザイン/020_Sassでレスポンシブの部品作成/start/style.scss`を編集<br>

```scss:style.scss
// モバイル用のスタイル
h1 {
  color: red;
  background: yellow;
}

// デスクトップ用のスタイル
@media screen and (min-width: 601px) {
  h1 {
    color: blue;
  }
}

// ratinaディスプレイ
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
  h1 {
    color: purple;
  }
}
```

+ 開発ツールのresponsiveで `add device pixel ratio`をクリックしてみる<br>

+ DPR2以上にしないとpurpleにならない<br>

+ `06_レスポンシブデザイン/020_Sassでレスポンシブの部品作成/start/style.scss`を編集(sassに限り)<br>

```scss:style.scss
// モバイル用のスタイル
h1 {
  color: red;
  background: yellow;

  // デスクトップ用のスタイル
  @media screen and (min-width: 601px) {
    color: blue;
  }
}

// ratinaディスプレイ
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
  h1 {
    color: purple;
  }
}
```

## 104. Sassでメディアクエリを汎用的な部品として作成してみよう

+ `06_レスポンシブデザイン/020_Sassでレスポンシブの部品作成/start/style.scss`を編集<br>

```scss:style.scss
// モバイル用のスタイル
h1 {
  color: red;
  background: yellow;

  // 480px以上 スマホ横向き
  @media screen and (min-width: 480px) {
    color: blue;
  }

  // 600px以上 タブレット縦向き
  @media screen and (min-width: 600px) {
    color: purple;
  }

  // 960px以上 ノートPC等の小さなPC
  @media screen and (min-width: 960px) {
    color: purple;
  }

  // 1280px以上 デスクトップPC
  @media screen and (min-width: 1280px) {
    color: green;
  }
}

// ratinaディスプレイ
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
  h1 {
    color: orange;
  }
}
```

+ `06_レスポンシブデザイン/020_Sassでレスポンシブの部品作成/start/style.scss`を編集<br>

```scss:style.scss
$breakpoints: (
  // 480px以上 スマホ横向き
    'sm': '(min-width: 480px)',
  // 600px以上 タブレット縦向き
    'md': '(min-width: 600px)',
  // 960px以上 ノートPC等の小さなPC
    'lg': '(min-width: 960px)',
  // 1280px以上 デスクトップPC
    'xl': '(min-width: 1280px)'
);

// デフォルト値はmdになる
@mixin mq($breakpoint: md) {
  @media #{map-get($breakpoints, $breakpoint)} {
    @content;
  }
}

// モバイル用のスタイル
h1 {
  color: red;
  background: yellow;

  @include mq(sm) {
    color: blue;
    background: yellow;
  }

  // mdはデフォルト値なので空白でも良い
  @include mq(md) {
    color: purple;
  }

  @include mq(lg) {
    color: green;
  }

  @include mq(xl) {
    color: orange;
  }
}

// ratinaディスプレイ
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
  h1 {
    color: orange;
  }
}
```

+ `06_レスポンシブデザイン/020_Sassでレスポンシブの部品作成/start/_mq.scss`を作成<br>

+ `06_レスポンシブデザイン/020_Sassでレスポンシブの部品作成/start/_mq.scss`を編集<br>

```scss:_mq.scss
$breakpoints: (
  // 480px以上 スマホ横向き
    'sm': '(min-width: 480px)',
  // 600px以上 タブレット縦向き
    'md': '(min-width: 600px)',
  // 960px以上 ノートPC等の小さなPC
    'lg': '(min-width: 960px)',
  // 1280px以上 デスクトップPC
    'xl': '(min-width: 1280px)'
);

// デフォルト値はmdになる
@mixin mq($breakpoint: md) {
  @media #{map-get($breakpoints, $breakpoint)} {
    @content;
  }
}
```

+ `06_レスポンシブデザイン/020_Sassでレスポンシブの部品作成/start/style.scss`を編集<br>

```scss:style.scss
@use "mq" as *;

// モバイル用のスタイル
h1 {
  color: red;
  background: yellow;

  @include mq(sm) {
    color: blue;
    // background: yellow;
  }

  // mdはデフォルト値なので空白でも良い
  @include mq(md) {
    color: purple;
  }

  @include mq(lg) {
    color: green;
  }

  @include mq(xl) {
    color: orange;
  }
}

// ratinaディスプレイ
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
  h1 {
    color: orange;
  }
}
```