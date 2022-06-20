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
