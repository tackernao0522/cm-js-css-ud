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
