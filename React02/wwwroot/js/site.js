window.site = (function () {
    "use strict";
    var $ = jQuery.noConflict();

    var c, currentScrollTop = 0, $header = $('header');

    var addListeners = function () {

        $(window).scroll(function () {
            var a = $(window).scrollTop();
            var b = $header.height();

            currentScrollTop = a;

            if (c < currentScrollTop && a > b + b) {
                $header.addClass("scrollUp");
            } else if (c > currentScrollTop && !(a <= b)) {
                $header.removeClass("scrollUp");
            }
            c = currentScrollTop;
        });

    };

    var _init = function () {
        addListeners();
    };
    return {
        init: _init
    };
}());

//auto init
jQuery(function () { window.site.init(); });
