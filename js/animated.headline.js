jQuery(document).ready((function(s){var e,a,n=2500,t=3800;function d(s){var i=c(s);if(s.parents(".cd-headline").hasClass("type")){var e=s.parent(".cd-words-wrapper");e.addClass("selected").removeClass("waiting"),setTimeout((function(){e.removeClass("selected"),s.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")}),500),setTimeout((function(){l(i,150)}),1300)}else if(s.parents(".cd-headline").hasClass("letters")){var a=s.children("i").length>=i.children("i").length;r(s.find("i").eq(0),s,a,50),o(i.find("i").eq(0),i,a,50)}else s.parents(".cd-headline").hasClass("clip")?s.parents(".cd-words-wrapper").animate({width:"2px"},600,(function(){h(s,i),l(i)})):s.parents(".cd-headline").hasClass("loading-bar")?(s.parents(".cd-words-wrapper").removeClass("is-loading"),h(s,i),setTimeout((function(){d(i)}),t),setTimeout((function(){s.parents(".cd-words-wrapper").addClass("is-loading")}),800)):(h(s,i),setTimeout((function(){d(i)}),n))}function l(s,i){s.parents(".cd-headline").hasClass("type")?(o(s.find("i").eq(0),s,!1,i),s.addClass("is-visible").removeClass("is-hidden")):s.parents(".cd-headline").hasClass("clip")&&s.parents(".cd-words-wrapper").animate({width:s.width()+10},600,(function(){setTimeout((function(){d(s)}),1500)}))}function r(i,e,a,t){if(i.removeClass("in").addClass("out"),i.is(":last-child")?a&&setTimeout((function(){d(c(e))}),n):setTimeout((function(){r(i.next(),e,a,t)}),t),i.is(":last-child")&&s("html").hasClass("no-csstransitions")){var l=c(e);h(e,l)}}function o(s,i,e,a){s.addClass("in").removeClass("out"),s.is(":last-child")?(i.parents(".cd-headline").hasClass("type")&&setTimeout((function(){i.parents(".cd-words-wrapper").addClass("waiting")}),200),e||setTimeout((function(){d(i)}),n)):setTimeout((function(){o(s.next(),i,e,a)}),a)}function c(s){return s.is(":last-child")?s.parent().children().eq(0):s.next()}function h(s,i){s.removeClass("is-visible").addClass("is-hidden"),i.removeClass("is-hidden").addClass("is-visible")}s(".cd-headline.letters").find("b").each((function(){var e=s(this),a=e.text().split(""),n=e.hasClass("is-visible");for(i in a)e.parents(".rotate-2").length>0&&(a[i]="<em>"+a[i]+"</em>"),a[i]=n?'<i class="in">'+a[i]+"</i>":"<i>"+a[i]+"</i>";var t=a.join("");e.html(t).css("opacity",1)})),e=s(".cd-headline"),a=n,e.each((function(){var i=s(this);if(i.hasClass("loading-bar"))a=t,setTimeout((function(){i.find(".cd-words-wrapper").addClass("is-loading")}),800);else if(i.hasClass("clip")){var e=i.find(".cd-words-wrapper"),n=e.width()+10;e.css("width",n)}else if(!i.hasClass("type")){var l=i.find(".cd-words-wrapper b"),r=0;l.each((function(){var i=s(this).width();i>r&&(r=i)})),i.find(".cd-words-wrapper").css("width",r)}setTimeout((function(){d(i.find(".is-visible").eq(0))}),a)}))}));