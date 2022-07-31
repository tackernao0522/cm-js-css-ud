## 74. [おさらい] classをオブジェクト

+ `04_JavaScriptの基礎を固める/113_classとオブジェクト/start/main.js`を編集<br>

```js:main.js
const obj = {
  first_name: 'Takaki',
  last_name: 'Nakamura',
  printFullName: function() {
    console.log('hello');
  }
}

console.log(obj.first_name); // Takaki
obj.printFullName(); // hello
```

+ `04_JavaScriptの基礎を固める/113_classとオブジェクト/start/main.js`を編集<br>

```js:main.js
const obj = {
  first_name: 'Takaki',
  last_name: 'Nakamura',
  printFullName: function () {
    console.log('hello');
  }
}

class MyObj {
  constructor() {
    this.first_name = 'Takaki';
    this.last_name = 'Nakamura';
  }

  printFullName() {
    console.log('hello');
  }
}

const obj2 = new MyObj();

obj.printFullName(); // hello
obj2.printFullName(); // hello
```

+ `04_JavaScriptの基礎を固める/113_classとオブジェクト/start/main.js`を編集<br>

```js:main.js
const obj = {
  first_name: 'Takaki',
  last_name: 'Nakamura',
  printFullName: function () {
    console.log('hello');
  }
}

class MyObj {
  constructor() {
    this.first_name = 'Takaki';
    this.last_name = 'Nakamura';
  }

  printFullName() {
    console.log('hello');
  }
}

const obj2 = new MyObj();

obj.printFullName(); // hello
obj2.__proto__.printFullName(); // hello '__proto__'は省略できる
```

## 75. [おさらい] thisとオブジェクト

+ `04_JavaScriptの基礎を固める/114_thisとオブジェクト/start/main.js`を編集<br>

```js:main.js
const obj = {
    first_name: 'Mafia',
    last_name: 'Code',
    printFullName: function () {
        console.log(this.first_name); // thisはobjを指す
    }
}

// class MyObj {
//     constructor() {
//         this.first_name = 'Mafia';
//         this.last_name = 'Code';
//     }

//     printFullName() {
//         console.log(this.first_name);
//         const fn = function () {
//             console.log(this);
//         };
//         window.setTimeout(fn)
//     }
// }

// const obj2 = new MyObj();


obj.printFullName(); // Mafia
// obj2.printFullName();
```

+ `04_JavaScriptの基礎を固める/114_thisとオブジェクト/start/main.js`を編集<br>

```js:main.js
const obj = {
    first_name: 'Mafia',
    last_name: 'Code',
    printFullName: function () {
        console.log(this.first_name); // thisはobjを指す
    }
}

class MyObj {
    constructor() {
        this.first_name = 'Mafia';
        this.last_name = 'Code';
    }

    printFullName() {
        console.log(this.first_name);
    }
}

const obj2 = new MyObj();


obj.printFullName(); // Mafia
obj2.printFullName(); // Mafia
```

+ `04_JavaScriptの基礎を固める/114_thisとオブジェクト/start/main.js`を編集<br>

```js:main.js
const obj = {
    first_name: 'Mafia',
    last_name: 'Code',
    printFullName: function () {
        console.log(this.first_name); // thisはobjを指す
        window.setTimeout(function() {
            console.log(this); // thisはwindowオブジェクトになる
        })
    }
}

class MyObj {
    constructor() {
        this.first_name = 'Mafia';
        this.last_name = 'Code';
    }

    printFullName() {
        console.log(this.first_name);
    }
}

const obj2 = new MyObj();


obj.printFullName(); // Mafia
obj2.printFullName(); // Mafia
```

+ `04_JavaScriptの基礎を固める/114_thisとオブジェクト/start/main.js`を編集<br>

```js:main.js
const obj = {
    first_name: 'Mafia',
    last_name: 'Code',
    printFullName: function () {
        console.log(this.first_name); // thisはobjを指す
        const fn = function() {
            console.log(this);
        };
        window.setTimeout(fn);
    }
}

const window = {
    setTimeout: function(fn) {
        fn();
    }
}

class MyObj {
    constructor() {
        this.first_name = 'Mafia';
        this.last_name = 'Code';
    }

    printFullName() {
        console.log(this.first_name);
    }
}

const obj2 = new MyObj();


obj.printFullName(); // Mafia
obj2.printFullName(); // Mafia
```

+ `04_JavaScriptの基礎を固める/114_thisとオブジェクト/start/main.js`を編集<br>

```js:main.js
const obj = {
    first_name: 'Mafia',
    last_name: 'Code',
    printFullName: function () {
        console.log(this.first_name); // thisはobjを指す
        const fn = function () {
            console.log(this);
        };
        window.setTimeout(function () {
            console.log(this);
        })
    }
}

const window = {
    setTimeout: function (fn) {
        fn();
    }
}

class MyObj {
    constructor() {
        this.first_name = 'Mafia';
        this.last_name = 'Code';
    }

    printFullName() {
        console.log(this.first_name);
        const fn = function () {
            console.log(this);
        };
        window.setTimeout(fn);
    }
}

const obj2 = new MyObj();


obj.printFullName(); // Mafia
obj2.printFullName(); // Mafia
```

## 76. [おさらい] thisとbindの関係

+ `04_JavaScriptの基礎を固める/115_thisとbind/start/main.js`を編集<br>

```js:main.js
const obj = {
    first_name: 'Mafia',
    last_name: 'Code',
    printFullName: function () {
        console.log(this); // obj

        window.setTimeout(function () {
            console.log(this); // window object
        });
    }
}

obj.printFullName();
```

+ `04_JavaScriptの基礎を固める/115_thisとbind/start/main.js`を編集<br>

```js:main.js
const obj = {
    first_name: 'Mafia',
    last_name: 'Code',
    printFullName: function () {
        console.log(this); // obj
        const _that = this;

        window.setTimeout(function () {
            console.log(_that); // window objectからobjに変わる
        });
    }
}

obj.printFullName();
```

+ `04_JavaScriptの基礎を固める/115_thisとbind/start/main.js`を編集<br>

```js:main.js
const obj = {
    first_name: 'Mafia',
    last_name: 'Code',
    printFullName: function () {
        console.log(this); // obj

        window.setTimeout(function () {
            console.log(this); // window objectからobjに変わる
        }.bind(this));
    }
}

obj.printFullName();
```

+ `04_JavaScriptの基礎を固める/115_thisとbind/start/main.js`を編集<br>

```js:main.js
const obj = {
    first_name: 'Mafia',
    last_name: 'Code',
    printFullName: function () {
        console.log(this); // obj

        window.setTimeout(function () {
            console.log(this); // window objectから{first_name: 'Takaki'}に変わる
        }.bind({first_name: 'Takaki'}));
    }
}

obj.printFullName();
```

## 77. [おさらい] TextAnimationクラスをもう一度見てみよう

+ `04_JavaScriptの基礎を固める/112_thisを使いこなそう/start/main.js`を編集<br>

```js:main.js
document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('#btn');
    const ta = new TextAnimation('.animate-title');
    console.log(ta);
    const ta2 = new TextAnimation('.animate-title-2');
    ta.animate();
    ta2.animate();
    btn.addEventListener('click', ta.animate.bind(ta));
});

// console.log(this); // windowオブジェクトを指す

class TextAnimation {
    constructor(el) {
        // console.log(this); // ta, ta2を指す
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
    animate() {
        // console.log(this) // taを指す
        this.el.classList.toggle('inview');
    }
}
```

+ `04_JavaScriptの基礎を固める/112_thisを使いこなそう/start/main.js`を編集(bindを使わない)<br>

```js:main.js
document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('#btn');
    const ta = new TextAnimation('.animate-title');
    console.log(ta);
    const ta2 = new TextAnimation('.animate-title-2');
    ta.animate();
    ta2.animate();
    btn.addEventListener('click', function() {ta.animate()});
});

// console.log(this); // windowオブジェクトを指す

class TextAnimation {
    constructor(el) {
        // console.log(this); // ta, ta2を指す
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
    animate() {
        // console.log(this) // taを指す
        this.el.classList.toggle('inview');
    }
}
```

## 78. [レベルアップ] クラス継承でコードを有効利用しよう！！不要なコードは書かないようにしましょう！

+ [リソース](https://greensock.com/) <br>

+ `04_JavaScriptの基礎を固める/116_クラス継承でコードの再利用/start/main.js`を編集<br>

```js:main.js
document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('#btn');
    const ta = new TextAnimation('.animate-title');
    const ta2 = new TextAnimation('.animate-title-2');
    ta.animate();
    ta2.animate();
    btn.addEventListener('click', ta.animate.bind(ta));
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
    animate() {
        this.el.classList.toggle('inview');
    }
}

class TextAnimation2 extends TextAnimation {
    constructor(el) {
        super(el); // 親のconstructerが呼ばれる
        // this.el = document.querySelector(el);
        // this.chars = this.el.innerHTML.trim().split("");
        // this.el.innerHTML = this._splitText();
    }
    // _splitText() {
    //     return this.chars.reduce((acc, curr) => {
    //         curr = curr.replace(/\s+/, '&nbsp;');
    //         return `${acc}<span class="char">${curr}</span>`;
    //     }, "");
    // }
    animate() {
        console.log('fdsasdfdds'); // overrideされる
    }
}
```

+ `04_JavaScriptの基礎を固める/116_クラス継承でコードの再利用/start/index.html`を編集<br>

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
        <div class="tween-animate-title">
            PLAY ANIMATION
        </div>
    </div>
    <script src="TweenMax.min.js"></script> <!-- 追加 -->
    <script src="main.js"></script>
</body>

</html>
```

+ `04_JavaScriptの基礎を固める/116_クラス継承でコードの再利用/start/style.scss`を編集<br>

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
.tween-animate-title {
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
    }
  }

  & .char {
    opacity: 0;
  }
}

.animate-title.inview .char {
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

+ `04_JavaScriptの基礎を固める/116_クラス継承でコードの再利用/start/main.js`を編集<br>

```js:main.js
document.addEventListener('DOMContentLoaded', function () {
    const ta = new TweenTextAnimation('.tween-animate-title');
    ta.animate();
});


class TextAnimation {
    constructor(el) {
        this.DOM = {};
        this.DOM.el = document.querySelector(el);
        // this.DOM.el = document.querySelector(el);
        this.chars = this.DOM.el.innerHTML.trim().split("");
        this.DOM.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        this.DOM.el.classList.toggle('inview');
    }
}

class TweenTextAnimation extends TextAnimation {
    constructor(el) {
        super(el); // 親のconstructerが呼ばれる
        this.DOM.chars = this.DOM.el.querySelectorAll('.char')
    }

    animate() {
        this.DOM.el.classList.add('inview');
        this.DOM.chars.forEach((c, i) => {
            TweenMax.to(c, .6, {
                ease: Back.easeOut,
                delay: i * .05,
                startAt: { y: '-50%', opacity: 0 },
                y: '0%',
                opacity: 1
            });
        })
    }
}
```

+ `04_JavaScriptの基礎を固める/116_クラス継承でコードの再利用/start/index.html`を編集<br>

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
        <div class="tween-animate-title">
            PLAY ANIMATIONPLAY ANIMATIONPLAY ANIMATIONPLAY ANIMATIONPLAY ANIMATIONPLAY ANIMATIONPLAY ANIMATIONPLAY ANIMATION
        </div>
    </div>
    <script src="TweenMax.min.js"></script>
    <script src="main.js"></script>
</body>

</html>
```

+ `04_JavaScriptの基礎を固める/116_クラス継承でコードの再利用/start/index.html`を編集<br>

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
    </div>
    <script src="TweenMax.min.js"></script>
    <script src="main.js"></script>
</body>

</html>
```

+ `04_JavaScriptの基礎を固める/116_クラス継承でコードの再利用/start/mian.js`を編集<br>

```js:main.js
document.addEventListener('DOMContentLoaded', function () {
    const ta = new TextAnimation('.animate-title');
    ta.animate();
});


class TextAnimation {
    constructor(el) {
        this.DOM = {};
        this.DOM.el = document.querySelector(el);
        // this.DOM.el = document.querySelector(el);
        this.chars = this.DOM.el.innerHTML.trim().split("");
        this.DOM.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        this.DOM.el.classList.toggle('inview');
    }
}

class TweenTextAnimation extends TextAnimation {
    constructor(el) {
        super(el); // 親のconstructerが呼ばれる
        this.DOM.chars = this.DOM.el.querySelectorAll('.char')
    }

    animate() {
        this.DOM.el.classList.add('inview');
        this.DOM.chars.forEach((c, i) => {
            TweenMax.to(c, .6, {
                ease: Back.easeOut,
                delay: i * .05,
                startAt: { y: '-50%', opacity: 0 },
                y: '0%',
                opacity: 1
            });
        })
    }
}
```
