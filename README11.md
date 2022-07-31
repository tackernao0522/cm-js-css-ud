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
