document.addEventListener('DOMContentLoaded', function () {
  const el = document.querySelector('.animate-title');
  const str = el.innerHTML.trim().split(""); // 空文字で配列に直す(reduceメソッドを使う際に配列にする必要がある)

  el.innerHTML = str.reduce((acc, curr) => {
    curr = curr.replace(/\s+/, '&nbsp;');
    return `${acc}<span class="char">${curr}</span>`;
  }, "");
});
