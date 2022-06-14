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
