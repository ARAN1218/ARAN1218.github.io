// hamburger menu ----------------------------------------------------------------
document.querySelector('.menu-btn').addEventListener('click', function(){
  document.querySelector('.menu').classList.toggle('is-active');
  document.querySelector('.MenuBtn-BarFrame').classList.toggle('isClosed');
});

// swiper ------------------------------------------------------------------------
const works = new Swiper(".works", {
  slidesPerView: 3 /* この行を追加 */,
  loop: true,
  // ページネーションが必要なら追加
  pagination: {
    el: ".swiper-pagination"
  },
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,

  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
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
    el: ".swiper-pagination",
    type: "fraction"
  },
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,

  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },

  // ナビボタンが必要なら追加
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});


// TOPに戻るボタン ------------------------------------------------------------------
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

// ダイアログ(モーダル) -------------------------------------------------------------
// 参考：https://qiita.com/yuki153/items/c909c54204eaab6ca1b2#addeventlistener-を-for-文で複数生成時
const buttonOpenDialogs = document.getElementsByName("button-open-dialog");

//ダイアログを開くイベント
for(let i=0,l=buttonOpenDialogs.length; l>i; i++){
    buttonOpenDialogs[i].addEventListener("click", () => {
        let target = buttonOpenDialogs[i].dataset.target;
        let dialogSample = document.getElementById(target);
        dialogSample.showModal();
})};

//ダイアログのクリックイベント
// dialogSample.addEventListener('click', (event) => {
//   if(event.target.closest('#dialog-container') === null) {
//     dialogSample.close();
//   }
// });