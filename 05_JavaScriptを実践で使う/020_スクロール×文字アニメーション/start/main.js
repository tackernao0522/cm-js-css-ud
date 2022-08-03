document.addEventListener('DOMContentLoaded', function () {
    const els = document.querySelectorAll('.animate-title');
    const cb = function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('inview');
                // 下2行を上から移動
                const ta = new TextAnimation(entry.target); // 編集
                ta.animate();
                observer.unobserve(entry.target); // 一度監視を切る
            } else {
            }
        });
        // alert('intersecting');
    }
    const options = {
        root: null,
        rootMargin: "0px", // 編集
        // thredsold: 1,
        threshold: 0 // 編集
    }
    const io = new IntersectionObserver(cb, options);
    els.forEach(el => io.observe(el));
    // io.observe(child1);
    // io.observe(child2);
});
