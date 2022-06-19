# セクション2: 超初心者の方はここからスタート

## 6. HTMLとは? HTMLの概要と文法について

+ `01_基礎知識/01_HTMLについて/start/index.html`<br>

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
  <span>こんにちは！ 日本！</span>
  <img src="image-1.jpg" alt="">
</body>

</html>
```

## 7. HTMLのこれだけは知っておいて！インライン要素とブロック要素の使い分け

+ インライン要素は横に並ぶ(横幅と縦幅の指定ができない) ブロック要素は縦に並ぶ(横幅と縦幅の指定ができる)

+ `index.html`<br>

```html:index.html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <!-- インライン要素 横幅と縦幅は指定できない -->
    <span>こんにちは！ 日本！</span>
    <span>こんにちは！ 日本！</span>
    <span>こんにちは！ 日本！</span>
    <span>こんにちは！ 日本！</span>
    <!-- ブロック要素 横幅と縦幅を指定出来る -->
    <div>こんにちは！ 日本！</div>
    <div>こんにちは！ 日本！</div>
    <div>こんにちは！ 日本！</div>
    <div>こんにちは！ 日本！</div>
    <div>こんにちは！ 日本！</div>

    <style>
        body {
            text-align: center;
            /* inline要素を中央にしたい場合は親要素にtext-align: centerを指定する */
        }

        span {
            /* display: block; block要素のような振る舞いになる */
            display: inline-block;
            /* inlineとblock要素の中間の振る舞いになる block要素には意味をなさない */
            width: 100px;
            height: 100px;
            background-color: burlywood;
        }

        div {
            /* display: inline; inline要素の振る舞いになる */
            margin: 0 auto;
            /* block要素の中央揃えの場合はこの指定をする */
            width: 300px;
            height: 400px;
            background-color: magenta;
        }
    </style>
</body>

</html>
```

## 8. CSSとは? CSSの概要と文法について

+ `01/03/index.html`<br>

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
    <span id="first" class="cls">こんにちは！ 日本！</span>
    <span>こんにちは！ 日本！</span>
    <span>こんにちは！ 日本！</span>
    <span>こんにちは！ 日本！</span>
    <!-- <div>こんにちは！ 日本！</div> -->
    <style>

    </style>
</body>

</html>
```

+ `style.css`を作成<br>

```css:style.css
span {
  display: inline-block;
  /* ブロック要素の中央揃え*/
  margin: 0 auto;
  width: 100px;
  height: 400px;
  background-color: magenta;
}

.cls {
  display: inline-block;
  /* ブロック要素の中央揃え*/
  margin: 0 auto;
  width: 100px;
  height: 400px;
  background-color: gray;
}

/* 詳細度 id > class > タグ */
```

## 9. CSS 詳細度について

+ `01/04/index.html`<br>

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
      <span id="first" class="cls">こんにちは！ 日本！</span>
      <span class="cls">こんにちは！ 日本！</span>
        <span>こんにちは！ 日本！</span>
        <span>こんにちは！ 日本！</span>
    </div>
</body>

</html>
```

```css:style.css
.parent {
  color: blue;
  font-weight: 600;
}

span {
  color: purple;
}

.cls {
  color: orange;
}

#first {
  color: magenta;
}

/* 下から順に優先度が高い */

/* .parentの中に配置されているspan要素 idが優先度高い span指定よりも詳細度が高い わからなくなったら検証ツールで確認してみる */
.parent span {
  color: red;
}

/* 上書きされる */
.parent span {
  color: black;
}
```

## 10 コードの自動補完

https://docs.emmet.io/cheat-sheet/ <br>

# セクション4: CSSの基礎から始める(Transition編)

## 13. まずはボタンを作りながら、CSSプロパティーを設定する

+ `02/019/index.html` <br>

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
  <div id="container">
    <button class="btn">Button</button>
  </div>
</body>

</html>
```

+ `02/019/style.css`<br>

```css:style.css
#container {
  text-align: center;
}
.btn {
  background-color: white;
  color: black;
  border: 1px solid black;
  padding: 10px 40px;
  margin: 50px 0;
  font-weight: 600; /* 100〜900 */
  cursor: pointer;
}
```

## 14 Transitionプロパティーの使い方を学ぶ(ボタンにホバーアクションを追加)

+ `02/010/index.html`<br>

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
  <div id="container">
    <button class="btn">Button</button>
  </div>
</body>

</html>
```

+ `02/010/style.css`<br>

```css:style.css
#container {
  text-align: center;
}
.btn {
  background-color: white;
  color: black;
  border: 1px solid black;
  padding: 10px 40px;
  margin: 50px 0;
  font-weight: 600; /* 100〜900 */
  cursor: pointer;
  transition: color 0.3s ease 1s, background-color 0.3s ease 2s; /* 1秒後に文字色が変わり2秒後に背景色が変わる */
}
.btn:hover {
  background-color: black;
  color: white;
}
```

## 15. [Sass] CSSをSassで記述する

参考: https://sass-lang.com/ <br>

+ `mv 02_HTMLとCSSを極める（トランジション編）/010_ホバーで色が変わるボタン/start/style.css 02_HTMLとCSSを極める（トランジション編）/010_ホバーで色が変わるボタン/start/style.scss`を実行<br>

+ `02_HTMLとCSSを極める（トランジション編）/010_ホバーで色が変わるボタン/start/style.scss`を編集<br>

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
  font-weight: 600; /* 100〜900 */
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: $cBlack;
    color: $cWhite;
  }
}
```

+ `Watch Sass`をクリック<br>

## 17 [おさらい] CSSセレクターとSassネスティング

+ `02_HTMLとCSSを極める（トランジション編）/015_CSSセレクターとSassでの記法/start/style.scss`を実行<br>

+ `style.scss`を編集<br>

```scss:style.scss
.parent {
  color: blue;
  // 子要素だけに適用
  & > .element {
    color: purple;

    &.second-child {
      color: black;
    }
  }
}
.element {
  color: red;
}
```

+ `02_HTMLとCSSを極める（トランジション編）/015_CSSセレクターとSassでの記法/start/index.html`を編集<br>

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
  <div class="parent">
    親要素
    <div class="element">子要素</div>
    <div class="element second-child">子要素</div>
    <div class="element">
      子要素
      <div class="element">
        孫要素
      </div>
    </div>
  </div>
</body>

</html>
```

## 20. ホバーで影ができるボタンを作ってみよう

+ `02_HTMLとCSSを極める（トランジション編）/020_ホバーで影ができるボタン/start/style.scss`を編集<br>

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

  &.float {
    &:hover {
      box-shadow: 5px 5px 10px rgb(0 0 0 / 50%);
    }
  }

  // &:hover {
  //   background-color: $cBlack;
  //   color: $cWhite;
  // }
}
```

+ `02_HTMLとCSSを極める（トランジション編）/020_ホバーで影ができるボタン/start/index.html`を編集<br>

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
        <button class="btn float">Button</button>
    </div>
</body>
</html>
```

## 21. [演習] 色々なエフェクトのボタンを作ってみよう

+ `02_HTMLとCSSを極める（トランジション編）/030_演習_色んなボタンを作ってみよう/try.scss`を編集<br>

```scss:try.scss
$cWhite: white;
$cBlack: black;

.try {
  & .btn {
    position: relative;
    display: inline-block;
    background-color: $cWhite;
    border: 1px solid $cBlack;
    font-weight: 600;
    padding: 10px 40px;
    margin: 10px auto;
    cursor: pointer;
    transition: all 0.3s;
    color: $cBlack;
    text-decoration: none !important; // 詳細度を無視する

    /* ここにボタンのスタイルを追加していこう */
    &.float:hover {
      background-color: $cBlack;
      color: white;
      box-shadow: 5px 5px 10px 0 rgb(0 0 0 / 50%);
    }

    &.filled {
      background-color: $cBlack;
      color: $cWhite;
      box-shadow: 5px 5px 10px 0 rgb(0 0 0 / 50%);

      &:hover {
        background-color: $cWhite;
        color: $cBlack;
        box-shadow: none;
      }
    }

    &.letter-spacing:hover {
      background-color: $cBlack;
      letter-spacing: 3px;
      color: $cWhite;
    }

    &.shadow {
      box-shadow: none;

      &:hover {
        transform: translate(-2.5px, -2.5px);
        box-shadow: 5px 5px 0 0 $cBlack;
      }
    }

    &.solid {
      box-shadow: 2px 2px 0 0 $cBlack;
      border-radius: 7px;

      &:hover {
        transform: translate(2px, 2px);
        box-shadow: none;
      }
    }
  }
}
```