const btn = document.querySelector('#btn')
const h1 = document.querySelector('h1')

// btn.addEventListener('click', function () {
//   alert('hello');
// });

// よりベターな方法
// const hello = function() {
//   alert('hello')
// }

// or

// function hello() {
//   // const h1 = document.querySelector('h1') // 関数の中に入れることもできる
//   // alert('hello');
//   // btn.style.color = 'red';
//   h1.style.color = 'red';
//   // this.style.color = 'red';
//   // console.log(this) // <button id="btn" style="color: red;">Change Title Color</button>
// };

function changeColor() {
  h1.style.color = 'red';
};

function changeBgColor() {
  h1.style.backgroundColor = 'green';
};
// btn.addEventListener('click', hello);
// btn.addEventListener('click', changeColor);
// btn.addEventListener('click', changeBgColor);

btn.onclick = changeColor; // 参考程度 addEventListennerを使うこと
// btn.onclick = changeBgColor; // 参考程度 addEventListennerを使うこと 後から書いた方が上書きされるので一つしか登録できない
// btn.removeEventListener('click', changeBgColor);
// btn.addEventListener('mouseenter', hello);
// btn.removeEventListener('click', hello);
