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
