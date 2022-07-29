## 72. [レベルアップ] Classを使ったコードの整理方法！！クラスでコードの再利用性を高めよう！

+ `04_JavaScriptの基礎を固める/111_classを用いてコード再利用性を高めよう/start/main.js`を編集(classの書き方)<br>

```js:main.js
document.addEventListener('DOMContentLoaded', function () {
    const el = document.querySelector('.animate-title');
    const el2 = document.querySelector('.animate-title-2');
    const str = el.innerHTML.trim().split("");
    const str2 = el2.innerHTML.trim().split("");

    // let concatStr = '';

    // for(let c of str) {
    //     c = c.replace(/\s+/, '&nbsp;');
    //     concatStr += `<span class="char">${c}</span>`;
    // }

    el.innerHTML = str.reduce((acc, curr) => {
        curr = curr.replace(/\s+/, '&nbsp;');
        return `${acc}<span class="char">${curr}</span>`;
    }, "");
    el2.innerHTML = str2.reduce((acc, curr) => {
        curr = curr.replace(/\s+/, '&nbsp;');
        return `${acc}<span class="char">${curr}</span>`;
    }, "");
});

class TextAnimation {
    constructor(el) {
        this.el = el; // this = ta
        // alert(el)
    }

    log() {
        console.log(this.el); // hello world
    }
}
const ta = new TextAnimation('hello world');
ta.log();
// alert(ta.el)
```

+ `04_JavaScriptの基礎を固める/111_classを用いてコード再利用性を高めよう/start/main.js`を編集<br>

```js:main.js
document.addEventListener('DOMContentLoaded', function () {
    const ta = new TextAnimation('.animate-title');
    const ta2 = new TextAnimation('.animate-title-2');
});

class TextAnimation {
    constructor(el) {
        this.el = document.querySelector(el);
        this.chars = this.el.innerHTML.trim().split("");
        this.el.innerHTML = this._splitText();
    }

    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
}
```

+ `04_JavaScriptの基礎を固める/111_classを用いてコード再利用性を高めよう/start/style.scss`を編集<br>

```scss:style.scss
@import 'mixin';

html {
  font-family: 'Teko', sans-serif;
}

body {
  margin: 0;
}

#container {
  position: relative;
  height: 100vh;
  background-color: teal;
}

.animate-title,
.animate-title-2 {
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  color: white;
  opacity: 0;
  font-size: 2em;

  &.inview {
    opacity: 1;

    & .char {
      display: inline-block;

      @include animation(
        $name: kf-animate-chars,
        $duration: 0.5s,
        $timing-function: cubic-bezier(0.39, 1.57, 0.58, 1),
        $fill-mode: both
      );

      @for $i from 1 through 30 {
        &:nth-child(#{$i}) {
          animation-delay: $i * 0.04s;
        }
      }
    }
  }
}

@keyframes kf-animate-chars {
  0% {
    opacity: 0;
    transform: translateY(-50%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
```

+ `04_JavaScriptの基礎を固める/111_classを用いてコード再利用性を高めよう/start/index.html`を編集<br>

```html:index.html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Teko:wght@500&display=swap" rel="stylesheet">
</head>

<body>
    <div id="container">
        <div class="animate-title">
            PLAY ANIMATION
        </div>
        <div class="animate-title-2">
            ANIMATE STRING
        </div>
        <button onclick="document.querySelector('.animate-title').classList.toggle('inview');">Animation</button>
    </div>
    <script src="main.js"></script>
</body>

</html>
```

+ `04_JavaScriptの基礎を固める/111_classを用いてコード再利用性を高めよう/start/main.js`を編集<br>

```js:main.js
document.addEventListener('DOMContentLoaded', function () {
    const ta = new TextAnimation('.animate-title');
    const ta2 = new TextAnimation('.animate-title-2');
    setTimeout(() => {
        ta.animate();
        ta2.animate();
    }, 1000); // 画面を更新して1秒後に動く
});

class TextAnimation {
    constructor(el) {
        this.el = document.querySelector(el);
        this.chars = this.el.innerHTML.trim().split("");
        this.el.innerHTML = this._splitText();
    }

    // _から始まるメソッドをプライベートメソッド呼ぶ(クラスの中でしか呼ばないでくださいということを明示的に表している)
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }

    // パブリックメソッド
    animate() {
        this.el.classList.toggle('inview'); // inviewというクラスが付いている場合は削除 付いていない場合は付けるという挙動
    }
}
```
