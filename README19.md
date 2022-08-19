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
