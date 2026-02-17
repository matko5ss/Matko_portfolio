(function ($) {
    "use strict";

    $(document).ready(function () {
        function updateHeader() {
            if ($('.main-header').length) {
                var scroll = $(window).scrollTop();
                var header = $('.main-header');
                var scrollBtn = $('.scroll-top');
                if (scroll >= 100) {
                    header.addClass('fixed-header');
                    scrollBtn.fadeIn(300);
                } else {
                    header.removeClass('fixed-header');
                    scrollBtn.fadeOut(300);
                }
            }
        }
        updateHeader();

        $("a.onepage-link").on('click', function (e) {
            e.preventDefault();
            var hash = this.hash;
            if (!hash) return;
            $("html").animate({ scrollTop: $(hash).offset().top }, 1000);
        });

        if ($('.counter-text-wrap').length) {
            $('.counter-text-wrap').appear(function () {
                var $el = $(this);
                var target = $el.find(".count-text").attr("data-stop");
                var duration = parseInt($el.find(".count-text").attr("data-speed"), 10);
                if (!$el.hasClass("counted")) {
                    $el.addClass("counted");
                    $({ val: $el.find(".count-text").text() }).animate({ val: target }, {
                        duration: duration,
                        easing: "linear",
                        step: function () {
                            $el.find(".count-text").text(Math.floor(this.val));
                        },
                        complete: function () {
                            $el.find(".count-text").text(this.val);
                        }
                    });
                }
            }, { accY: 0 });
        }

        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            $('html, body').animate({ scrollTop: $(target).offset().top }, 1000);
        });

        if ($('.wow').length) {
            new WOW({ boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: false, live: true }).init();
        }
    });

    $(window).on('scroll', function () {
        if ($('.main-header').length) {
            var scroll = $(window).scrollTop();
            var header = $('.main-header');
            var scrollBtn = $('.scroll-top');
            if (scroll >= 100) {
                header.addClass('fixed-header');
                scrollBtn.fadeIn(300);
            } else {
                header.removeClass('fixed-header');
                scrollBtn.fadeOut(300);
            }
        }
    });

    $(window).on('load', function () {
        if ($('.preloader').length) {
            $('.preloader').delay(200).fadeOut(500);
        }
    });
})(jQuery);
