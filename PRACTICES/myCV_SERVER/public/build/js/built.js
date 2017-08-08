"use strict";angular.module("myAppCV",["pascalprecht.translate"]).config(["$translateProvider",function(e){e.registerAvailableLanguageKeys(["es","en","fr"],{"en*":"en","uk*":"en","us*":"en","es*":"es","fr*":"fr"}).useStaticFilesLoader({prefix:"locale/lang_",suffix:".json"}).preferredLanguage("en").fallbackLanguage("en").determinePreferredLanguage(function(){return window.navigator.userLanguage||window.navigator.language})}]).run([function(){}]).controller("mainController",["$translate","$timeout","$http",function(e,t,n){var a=this;a.data={},t(function(){a.myIdiom=e.use()}),a.submit=function(){},a.idiomChange=function(t){a.myIdiom=t,e.use(t)},t(function(){n.get("http://localhost:8080/cc/").then(function(e){console.log(e.data,"11")}).catch(function(e){})},2e3)}]).factory("myFactory",[function(){return{fn:function(){return"Pajúo"}}}]),jQuery(document).ready(function(e){setTimeout(function(){e("h1.responsive-headline").fitText(1,{minFontSize:"40px",maxFontSize:"90px"}),e("header, #idioms").css("opacity","1")},800),e("#idioms .selected").mouseenter(function(n){e("#idioms .choose").clearQueue().show().animate({opacity:"1",left:"5px","z-index":"15"},"slow",t)});var t=function(){e("#idioms .choose").bind("mouseleave click",function(t){e("#idioms .choose").animate({opacity:"0",left:"-70px","z-index":"5"},"slow",function(){e("#idioms .choose").hide().unbind()})})};e(".jsInit").parallax({imageSrc:"./images/collage-4.png",speed:.4,position:"center center",zIndex:"0",androidFix:!1,iosFix:!1}),e(".smoothscroll").on("click",function(t){t.preventDefault();var n=this.hash,a=e(n);e("html, body").stop().animate({scrollTop:a.offset().top},800,"swing",function(){window.location.hash=n})});var n=e("section"),a=e("#nav-wrap a");n.waypoint({handler:function(t){var n=e(this.element);"up"===t&&(n=n.prev());var o=e('#nav-wrap a[href="#'+n.attr("id")+'"]');a.parent().removeClass("current"),o.parent().addClass("current")},offset:"18%"});new Waypoint({element:document.getElementById("mySkills"),handler:function(){var t=["photoshop","illustrator","wordpress","css","html5","jquery"];e("#resume ul.skills li span").each(function(n){e(this).addClass(t[n])}),this.destroy()},offset:"bottom-in-view"}),new Waypoint({element:document.getElementById("contact"),handler:function(){setTimeout(function(){e("#contact .touchIcon").addClass("spin")},1e3),this.destroy()},offset:"15%"});var o=e(window).height();e("header").css({height:o}),parseInt(e("#about").css("height"),10)<o&&e("#about").css({height:o}),parseInt(e("#portfolio").css("height"),10)<o&&e("#portfolio").css({height:o}),parseInt(e("#contact").css("height"),10)<o&&e("#contact").css({height:o}),e(window).on("resize",function(){e("header").css({height:e(window).height()}),e("body").css({width:e(window).width()})}),e(window).on("scroll",function(){var t=e("header").height(),n=e(window).scrollTop(),a=e("#nav-wrap");n>.2*t&&n<t&&e(window).outerWidth()>768?a.fadeOut("fast"):n<.2*t?a.fadeIn(1e3).removeClass("opaque"):a.fadeIn(1e3).addClass("opaque")}),e(".flexslider").flexslider({initDelay:0,animation:"fade",slideshowSpeed:6e3,animationSpeed:700,slideshow:!0,randomize:!1,pauseOnAction:!0,pauseOnHover:!1}),e("form#contactForm button.submit").click(function(){e("#image-loader").fadeIn();var t="contactName="+e("#contactForm #contactName").val()+"&contactEmail="+e("#contactForm #contactEmail").val()+"&contactSubject="+e("#contactForm #contactSubject").val()+"&contactMessage="+e("#contactForm #contactMessage").val();return e.ajax({type:"POST",url:"inc/sendEmail.php",data:t,success:function(t){"OK"==t?(e("#image-loader").fadeOut(),e("#message-warning").hide(),e("#contactForm").fadeOut(),e("#message-success").fadeIn()):(e("#image-loader").fadeOut(),e("#message-warning").html(t),e("#message-warning").fadeIn())}}),!1})});