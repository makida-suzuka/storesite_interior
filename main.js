
window.onload = function() {

    document.getElementById("hamburger").addEventListener("click", function () {
        // ハンバーガーメニューのクラスをトグル
        document.querySelector(".menu-right").classList.toggle("open");
        // ハンバーガーのクロス用クラスをトグル
        document.body.classList.toggle("hamburger-active");
      });

}

