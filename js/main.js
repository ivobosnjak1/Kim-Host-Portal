!function(i){"use strict";i(window).on("load",(function(){i("#preloader-active").delay(450).fadeOut("slow"),i("body").delay(450).css({overflow:"visible"})})),i(window).on("scroll",(function(){i(window).scrollTop()<400?(i(".header-sticky").removeClass("sticky-bar"),i("#back-top").fadeOut(500)):(i(".header-sticky").addClass("sticky-bar"),i("#back-top").fadeIn(500))})),i("#back-top a").on("click",(function(){return i("body,html").animate({scrollTop:0},800),!1}));var e=i("ul#navigation");e.length&&e.slicknav({prependTo:".mobile_menu",closedSymbol:"+",openedSymbol:"-"}),function(){var e=i(".slider-active");function o(e){e.each((function(){var e=i(this),o=e.data("delay"),t="animated "+e.data("animation");e.css({"animation-delay":o,"-webkit-animation-delay":o}),e.addClass(t).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",(function(){e.removeClass(t)}))}))}e.on("init",(function(e,t){o(i(".single-slider:first-child").find("[data-animation]"))})),e.on("beforeChange",(function(e,t,s,n){o(i('.single-slider[data-slick-index="'+n+'"]').find("[data-animation]"))})),e.slick({autoplay:!1,autoplaySpeed:4e3,dots:!1,fade:!0,arrows:!1,prevArrow:'<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',nextArrow:'<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0}},{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1}}]})}();var o=i(".h1-testimonial-active");o.length&&o.slick({dots:!1,infinite:!0,speed:1e3,autoplay:!0,loop:!0,arrows:!0,prevArrow:'<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',nextArrow:'<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!1,arrow:!1}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1}}]});var t,s=i("select");s.length&&s.niceSelect(),i(".brand-active").slick({dots:!1,infinite:!0,autoplay:!0,speed:400,arrows:!1,slidesToShow:5,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:3,infinite:!0,dots:!1}},{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0,dots:!1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),i("[data-background]").each((function(){i(this).css("background-image","url("+i(this).attr("data-background")+")")})),(new WOW).init(),i("#mc_embed_signup").find("form").ajaxChimp(),(t=i(".single_gallery_part, .img-pop-up")).length&&t.magnificPopup({type:"image",gallery:{enabled:!0}}),(t=i(".popup-video")).length&&t.magnificPopup({type:"iframe"}),i(".counter").counterUp({delay:10,time:3e3}),i("#datepicker1").datepicker(),i("#timepicker").timepicker(),i(".snake").snakeify({speed:200}),i("#bar1").barfiller(),i("#bar2").barfiller(),i("#bar3").barfiller(),i("#bar4").barfiller(),i("#bar5").barfiller(),i("#bar6").barfiller()}(jQuery);