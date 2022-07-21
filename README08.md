# セクション6: JavaScriptの基礎を固めよう！

+ `04_JavaScriptの基礎を固める/010_JavaScript導入/start/index.html`を編集<br>

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
    <h1>JavaScript基礎</h1>
    <script>
        alert('Hello')
        console.log('hello')
    </script>
</body>

</html>
```

### JavaScriptを別ファイルで書く

+ `04_JavaScriptの基礎を固める/010_JavaScript導入/start/index.html`を編集<br>

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
    <h1>JavaScript基礎</h1>
    <script src="main.js"></script>
</body>

</html>
```

+ `04_JavaScriptの基礎を固める/010_JavaScript導入/start/main.js`を作成<br>

+ `04_JavaScriptの基礎を固める/010_JavaScript導入/start/main.js`を編集<br>

```js:main.js
alert('hello')
console.log('hello')
```
