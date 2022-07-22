// const person = {}
// person.name = 'Takaki Nakamura'

const person = {
  // name: 'Takaki Nakamura'
  name: ['Takaki', 'Nakamura'],
  age: 32,
  gender: 'male',
  interests: {
    sports: 'soccer',
    music: 'piano'
  },
  // メソッドも定義できる
  getFullName: function() {
    console.log(this.name[0] + this.name[1]);
  }
}

console.log(person.name); // ['Takaki', 'Nakamura']
console.log(person.name[1]); // 'Nakamura'
console.log(person.age); // 32
console.log(person.gender); // male
console.log(person.interests); // {sports: 'soccer', music: 'piano'}
console.log(person.interests.sports); // soccer
person.age = 12;
console.log(person.age) // 12
person['age'] = 10; // keyをおく場合は文字列で指定する
console.log(person['age']) // 10
const ageKey = 'age'; // key情報が動的に変わる場合は変数にした方が良い
person[ageKey] = 53;
console.log(person[ageKey]); // 53
person.getFullName();
console.log(person.getFullName()); // TakakiNakamura
