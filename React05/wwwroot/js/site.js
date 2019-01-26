window.site = (function () {
    "use strict";
    var c, currentScrollTop = 0;
    var header = document.getElementById('header');

    var addListeners = function () {

        window.onscroll = function () {
            var a = window.scrollY;
            var b = header.offsetHeight;

            currentScrollTop = a;

            if (c < currentScrollTop && a > b + b) {
                header.classList.add("scrollUp");
            } else if (c > currentScrollTop && !(a <= b)) {
                header.classList.remove("scrollUp");
            }
            c = currentScrollTop;
        };
    };

    var _init = function () {
        addListeners();
    };

    return {
        init: _init
    };
}());

//auto init
window.site.init();
