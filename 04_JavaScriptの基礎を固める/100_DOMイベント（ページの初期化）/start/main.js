// const h1 = document.querySelector('h1');
// h1.style.color = 'red';

// const dcl = document.querySelector('.dcl');
// const load = document.querySelector('.load');

// // windowも使える
document.addEventListener("DOMContentLoaded", function () {
    const h1 = document.querySelector('h1');
    h1.style.color = 'red';
    // dcl.classList.add('done');
});

// // documentは使えない (表示も遅いのでDOMContentLoadedの方を使った方が良い)
// window.addEventListener("load", function () {
// const h1 = document.querySelector('h1');
// h1.style.color = 'red';
//     load.classList.add('done');
// });
