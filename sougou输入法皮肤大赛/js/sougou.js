$(function() {
    // 菜单导航
    $(".head_bg ul li").click(function() {
        $(this).addClass('on').siblings().removeClass("on");
    });
    // 获奖页面按钮
    $(".show_title a").click(function() {
        $(this).addClass('on').siblings().removeClass("on");
    });
    //右侧菜单
    var Ww = $(window).width() //获取浏览器宽度
    if (Ww < 1449) {
         $(window).scroll(function() {
            if ($(window).scrollTop() > 660) {
                $(".sg_warp .menu").addClass("fixd0");
                $(".menu").css({"left":"inherit"})
            } else {
                $(".sg_warp .menu").removeClass("fixd0");
                 $(".menu").css({"left":"50%"})
            }
        });
    } else {
        $(window).scroll(function() {
            if ($(window).scrollTop() > 660) {
                $(".sg_warp .menu").addClass("fixd");
            } else {
                $(".sg_warp .menu").removeClass("fixd");
            }
        });
    };
});
