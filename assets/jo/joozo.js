/*Top fouscImg Control */
$(document).ready(function () {
    var owl = $("#owl-demo");
    owl.owlCarousel({
        items: 3, //10 items above 1000px browser width
        itemsDesktop: [1000, 3], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 3], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 0
        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
    });
    // Custom Navigation Events
    $(function () {
        owl.trigger('owl.play', 6000); //owl.play event accept autoPlay speed as second parameter
    })
});

$(function () {
    // 二维码
    var timer2;
    $(".qr-code").hover(function () {
        clearTimeout(timer2);
        setTimeout(function () {
            $(".code-img").stop().fadeIn();
        }, 100);
    }, function () {
        clearTimeout(timer2);
        timer2 = setTimeout(function () {
            $(".code-img").stop().fadeOut();
        }, 600);
    });
    // 弹窗遮罩
    $('.login').click(function () {
        $('.dia-reg-login').addClass('open');
        $('body').addClass('u-overflow-hidden');
        $("#user_login").focus();
        document.onkeydown = function () {
            if (event.keyCode == 13) {
                $("#wp-login").click();
            }
        }
    });
    // 微信分享
    $('.btn-weixin').click(function () {
        $('.dia-weixin').addClass('open');
        $('body').addClass('u-overflow-hidden');
    });
    //如果需要点击 overlay 关闭弹窗的话，注意阻止事件冒泡
    $('.dia-weixin .weixin-con').on('click', function (e) {
        e.stopPropagation();
    });
    $('.dia-weixin').on('click', function () {
        $('.dia-weixin').removeClass('open');
        $('body').removeClass('u-overflow-hidden');
    });

    /* Toggle menú de móviles  */
    $('.btn-menu').on('click', function (e) {
        e.preventDefault();
        $('.nav-sub-menu').slideToggle(200);
    }); // fin click

     
    // $(window).scroll(scrollHide);
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.fix-layout').fadeIn();
        } else {
            $('.fix-layout').fadeOut();
        }
    });
    $('.return-top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});

$(function(){
	$(".random-img img").attr("src",function(){
		return "http://cdn.iteasea.com/assets/randomImg/"+Math.floor(Math.random()*38+1)+".jpeg"
	});
});
