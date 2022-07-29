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
