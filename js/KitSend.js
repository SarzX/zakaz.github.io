function getNextField(a){for(var t=1;a.find("input[name="+t+"]").length;)t++;return t}function fancyOpen(a){return $.fancybox(a,{padding:0,fitToView:!1,scrolling:"no",beforeShow:function(){$(".fancybox-wrap").addClass("beforeShow"),device.mobile()||($("html").addClass("fancybox-lock"),$(".fancybox-overlay").html($(".fancybox-wrap")))},afterShow:function(){$(".fancybox-wrap").removeClass("beforeShow"),$(".fancybox-wrap").addClass("afterShow"),setTimeout((function(){$(".fancybox-wrap").css({position:"absolute"}),$(".fancybox-inner").css("height","auto")}),200)},beforeClose:function(){$(".fancybox-wrap").removeClass("afterShow"),$(".fancybox-wrap").addClass("beforeClose")},afterClose:function(){$(".fancybox-wrap").removeClass("beforeClose"),$(".fancybox-wrap").addClass("afterClose")}}),!1}var customHandlers=[];$(document).ready((function(){var a=/^\+\d \(\d{3}\) - \d{3} - \d{2} - \d{2}$/;function t(){var a=document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop;customHandlers.onScroll&&customHandlers.onScroll(a)}$.validator.addMethod("customPhone",(function(t){return a.test(t)})),$(".ajax, .b-btn-submit").parents("form").each((function(){$(this).validate({rules:{email:"email",phone:"customPhone"},validClass:"valid",errorElement:"span"}),$(this).find("input[name=phone]").length&&$(this).find("input[name=phone]").mask("+7 (999) - 999 - 99 - 99",{placeholder:"_"})})),$(window).scroll(t),t(),$(".fancy").each((function(){var a=$($(this).attr("data-block")),t=$(this);t.fancybox({padding:0,content:a,helpers:{overlay:{locked:!0}},btnTpl:{smallBtn:'<button data-fancybox-close class="fancybox-close-small" title="Закрыть"></button>'},beforeShow:function(){if($(".fancybox-wrap").addClass("beforeShow"),a.find(".custom-field").remove(),t.attr("data-value")){var e=getNextField(a.find("form"));a.find("form").append("<input type='hidden' class='custom-field' name='"+e+"' value='"+t.attr("data-value")+"'/><input type='hidden' class='custom-field' name='"+e+"-name' value='"+t.attr("data-name")+"'/>")}t.attr("data-beforeShow")&&customHandlers[t.attr("data-beforeShow")]&&customHandlers[t.attr("data-beforeShow")](t)},afterShow:function(){$(".fancybox-wrap").removeClass("beforeShow"),$(".fancybox-wrap").addClass("afterShow"),t.attr("data-afterShow")&&customHandlers[t.attr("data-afterShow")]&&customHandlers[t.attr("data-afterShow")](t),a.find("input[type='text'],input[type='number'],textarea").eq(0).focus()},beforeClose:function(){$(".fancybox-wrap").removeClass("afterShow"),$(".fancybox-wrap").addClass("beforeClose"),t.attr("data-beforeClose")&&customHandlers[t.attr("data-beforeClose")]&&customHandlers[t.attr("data-beforeClose")](t)},afterClose:function(){$(".fancybox-wrap").removeClass("beforeClose"),$(".fancybox-wrap").addClass("afterClose"),t.attr("data-afterClose")&&customHandlers[t.attr("data-afterClose")]&&customHandlers[t.attr("data-afterClose")](t)}})}));var e=!1;$("body").on("mouseup",".b-popup *, .b-popup",(function(){e=!0})),$("body").on("mousedown",".fancybox-slide",(function(){e=!1})).on("mouseup",".fancybox-slide",(function(){e||$.fancybox.close()})),$(".b-go").click((function(){var a=$($(this).attr("data-block")),t=$(this).attr("data-offset")||0,e=$(this).attr("data-duration")||800;return $("body, html").animate({scrollTop:a.offset().top-t},e),!1})),$(".fancy-img").fancybox({padding:0}),$(".goal-click").click((function(){$(this).attr("data-goal")&&yaCounter12345678.reachGoal($(this).attr("data-goal"))})),$(".ajax").parents("form").submit((function(){if(0==$(this).find("input.error,select.error,textarea.error").length){var a=$(this);$(a.attr("data-block"));a.find(".ajax").attr("onclick","return false;"),a.attr("data-beforeAjax")&&customHandlers[a.attr("data-beforeAjax")]&&customHandlers[a.attr("data-beforeAjax")](a),a.attr("data-goal")&&yaCounter12345678.reachGoal(a.attr("data-goal")),$.ajax({type:$(this).attr("method"),url:$(this).attr("action"),data:a.serialize(),success:function(t){$link="1"==t?a.find(".b-thanks-link"):$(".b-error-link"),a.attr("data-afterAjax")&&customHandlers[a.attr("data-afterAjax")]&&customHandlers[a.attr("data-afterAjax")](a),$.fancybox.close(),$link.click()},error:function(){$.fancybox.close(),$(".b-error-link").click()},complete:function(){a.find("input.valid, textarea.valid").removeClass("valid"),a.find(".ajax").removeAttr("onclick"),a.find("input[type=text],textarea").val(""),a.find(".b-count-current").val("2")}})}else $(this).find("input.error,select.error,textarea.error").eq(0).focus();return!1})),$("body").on("click",".ajax",(function(){return $(this).parents("form").submit(),!1}))}));