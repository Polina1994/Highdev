$(document).mouseup(function (e) {
  var focus = $(".focus");
  var quick_menu = $(".quick_menu");
  var call_modal = $(".call_modal");
  if (focus.has(e.target).length === 0) {
    $(".contact_item").removeClass("focus");
  }
  if (quick_menu.has(e.target).length === 0) {
    $(".quick_menu").removeClass("open");
  }
  if (call_modal.has(e.target).length === 0) {
    $(".call_modal, .call_modal_bg").fadeOut();
  }
});

$(document).ready(function () {
  /* 반응형 메뉴 */
  $(".btn_open").on("click", function () {
    $(".responsive_header .menu").addClass("open");
  });
  $(".btn_close").on("click", function () {
    $(".responsive_header .menu").removeClass("open");
  });
  /* 서브비주얼 애니메이션 */
  $(window).scroll(function () {
    var scrollTop = $(document).scrollTop();
    $(".sub_container .visual").addClass("animate");
    if (scrollTop == 0) {
      $(".sub_container .visual").removeClass("animate");
    }
  });

  /* 퀵메뉴 */
  $(".quick_button button:first").on("click", function () {
    $(".call_modal, .call_modal_bg").fadeIn();
  });
  $(".call_modal button").on("click", function () {
    $(".call_modal, .call_modal_bg").fadeOut();
  });
  $(".quick_open_button").on("click", function () {
    $(".quick_menu").toggleClass("open");
  });
  /* 탑버튼 */
  $(".btn_top").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      400
    );
  });
});
