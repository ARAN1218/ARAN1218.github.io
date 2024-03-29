// hamburger menu ----------------------------------------------------------------
document.querySelector('.menu-btn').addEventListener('click', function(){
  document.querySelector('.menu').classList.toggle('is-active');
  document.querySelector('.MenuBtn-BarFrame').classList.toggle('isClosed');
});

// home menu
var smoothScroll = function (range) {
  var position = 0; // スクロールする位置
  var progress = 0; // 現在の進捗 0 ～ 100
  var easeOut = function (p) { // ease-out に当てはめた値を返す
      return p * (2 - p);
  };
  var move = function () { // 実際にスクロールを行う
      progress++; // 進捗を進める
      position = range * easeOut(progress / 100); // スクロールする位置を計算する

      window.scrollTo(0, position); // スクロールさせる

      if (position < range) { // 現在位置が目的位置より進んでいなければアニメーションを続行させる
          requestAnimationFrame(move);
      }
  };

  requestAnimationFrame(move); // 初回呼び出し
};

const scorrllLinks = document.querySelectorAll('a[href^="#"]');
scorrllLinks.forEach((scorrllLink) => {
    scorrllLink.addEventListener("click", (e) => {
        e.preventDefault();
        const hrefLink = scorrllLink.getAttribute("href");
        const targetContent = document.getElementById(hrefLink.replace("#", ""));
        const rectTop = targetContent.getBoundingClientRect().top;
        const positionY = window.pageYOffset;
        const target = rectTop + positionY - 50;
        smoothScroll(target); // 800px の位置までスムーススクロールする
    });
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


// Skills ------------------------------------------------------------------------
// imgのhoverで言語名が出現するようにする
const skill_imgs = document.getElementsByClassName("skill-img")
const skill_captions = document.getElementsByClassName("skill-caption")
for(let i=0,l=skill_imgs.length; l>i; i++){
  // 画像の上に来た時→hoverをつける
  skill_imgs[i].addEventListener("mouseover", () => {
    skill_captions[i].classList.add("hover");
  });
  // 画像の上から離れた時→hoverを外す
  skill_imgs[i].addEventListener('mouseleave', function() {
    skill_captions[i].classList.remove("hover");
  });
};


// TOPに戻るボタン ------------------------------------------------------------------
// セレクタ名（.pagetop）に一致する要素を取得
const pagetop_btn = document.querySelector(".page_top");

// .pagetopをクリックしたら、ページ上部へスムーズに移動
pagetop_btn.addEventListener("click", function () {
  window.scroll({ top: 0, behavior: "smooth" });
});

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
// const square_btns = document.getElementsByClassName("square_btn")
const mainImgs = document.getElementsByClassName('mainImg');

//ダイアログを開くイベント
for(let i=0,l=buttonOpenDialogs.length; l>i; i++){
  const thumbs = document.querySelectorAll('.thumb-' + i);
  
  buttonOpenDialogs[i].addEventListener("click", () => {
    let target = buttonOpenDialogs[i].dataset.target;
    let dialogSample = document.getElementById(target);
    if(thumbs.length > 0) {
      mainImgs[i].src = thumbs[0].dataset.image;
    };
    // document.body.classList.add("no_scroll");
    dialogSample.showModal();
  });

  
  // worksの作品紹介画像のギャラリー化
  thumbs.forEach(function(img,index){
    img.onclick = function() {
      mainImgs[i].src = this.dataset.image;
    }
  });

  // square_btns[i].addEventListener("click", () => {
  //   let target = buttonOpenDialogs[i].dataset.target;
  //   let dialogSample = document.getElementById(target);
  //   document.body.classList.remove("no_scroll");
  //   dialogSample.close();
  // });
};

// メールを送る処理が成功した時のダイアログ
if(document.location.href == "https://aran1218.github.io/#thank") {
    document.getElementById("thank").showModal();
}

//ダイアログのクリックイベント
// dialogSample.addEventListener('click', (event) => {
//   if(event.target.closest('#dialog-container') === null) {
//     dialogSample.close();
//   }
// });