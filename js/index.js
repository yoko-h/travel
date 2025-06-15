//viewport切り替え
$(function () {
  if ($(window).width() < 767) {
    $('head').prepend('<meta name="viewport" content="width=device-width,initial-scale=1">');
  } else {
    $('head').prepend('<meta name="viewport" content="width=1000">');
  }
});


//pcとspの画像切り替え
$(function () {
  $('.switch').each(function () {
    var $this = $(this);

    function imgSize() {
      if (window.innerWidth < 767) {
        $this.attr('src', $this.attr('src').replace('_pc', '_sp'));
      } else {
        $this.attr('src', $this.attr('src').replace('_sp', '_pc'));
      }
    }
    $(window).resize(function () {
      imgSize();
    });
    imgSize();
  });
});

//フェードイン
$(document).ready(function () {
  if ($(window).width() > 768) {

    $(window).scroll(function () {
      $('.fade').each(function () {
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 50) {
          $(this).addClass('show');
        } else if (scroll < elemPos - windowHeight + 50) {
          $(this).hasClass("show");
          $(this).removeClass('show');
        }
      });
    });
    $(window).scroll(function () {
      $('.fade_last').each(function () {
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 5) {
          $(this).addClass('show');
        } else if (scroll < elemPos - windowHeight + 5) {
          $(this).hasClass("show");
          $(this).removeClass('show');
        }
      });
    });

  };
});


$(document).ready(function () {
  if ($(window).width() < 767) {

    $(window).scroll(function () {
      $('.fade').each(function () {
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 0) {
          $(this).addClass('show');
        } else if (scroll < elemPos - windowHeight + 0) {
          $(this).hasClass("show");
          $(this).removeClass('show');
        }
      });
    });
    $(window).scroll(function () {
      $('.fade_last').each(function () {
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 10) {
          $(this).addClass('show');
        } else if (scroll < elemPos - windowHeight + 10) {
          $(this).hasClass("show");
          $(this).removeClass('show');
        }
      });
    });

  };
});
