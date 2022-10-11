// swiper
const works = new Swiper(".works", {
  slidesPerView: 3 /* この行を追加 */,
  loop: true,
  // ページネーションが必要なら追加
  pagination: {
    el: ".swiper-pagination"
  },

  // ナビボタンが必要なら追加
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

const studied_books = new Swiper(".studied-books", {
  slidesPerView: 3 /* この行を追加 */,
  loop: true,
  // ページネーションが必要なら追加
  pagination: {
    el: ".swiper-pagination"
  },

  // ナビボタンが必要なら追加
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});


// セレクタ名（.pagetop）に一致する要素を取得
const pagetop_btn = document.querySelector(".page_top");

// .pagetopをクリックしたら
pagetop_btn.addEventListener("click", scroll_top);

// ページ上部へスムーズに移動
function scroll_top() {
  window.scroll({ top: 0, behavior: "smooth" });
}

// スクロールされたら表示
window.addEventListener("scroll", scroll_event);
function scroll_event() {
  if (window.pageYOffset > 100) {
    pagetop_btn.style.opacity = "1";
  } else if (window.pageYOffset < 100) {
    pagetop_btn.style.opacity = "0";
  }
}