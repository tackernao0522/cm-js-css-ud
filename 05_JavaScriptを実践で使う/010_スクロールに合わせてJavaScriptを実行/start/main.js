const child = document.querySelector('.child');
const cb = function (entries, observer) {
  entries.forEach(entry => {
    // ifはで入る時 elseは出る時
    if (entry.isIntersecting) {
      console.log('inview');
      entry.target.classList.add('inview'); // 画面内に入ってきたときは緑色の背景色になる
      // observer.unobserve(entry.target); // 監視をやめたい場合
    } else {
      entry.target.classList.remove('inview'); // 画面内から外れたときinviewクラスを削除
      console.log('out view');
    }
  });
  // alert('intersecting');
}
const options = {
  root: null,
  rootMargin: "-300px 0px", // デフォルト値は 0px 0でもpxはつける
  // thredsold: 1,
  threshold: [0, 0.5, 1] // 配列でも設定できる
}
const io = new IntersectionObserver(cb, options);
io.observe(child);
// io.observe(child1);
// io.observe(child2);
