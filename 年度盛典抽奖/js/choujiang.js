$(function() {
    $('.warp .menu ul li').click(function() {
            $(this).addClass('on').siblings().removeClass("on");
        })
        // 右侧菜单定位
       var maxw=$(window).width();
       console.log(maxw);
       if(maxw>1407){
             $(".warp .menu").removeClass('on1').addClass('on');
       }else{
            $(".warp .menu").removeClass('on').addClass('on1');
       }
    $(window).scroll(function() {
        if ($(window).scrollTop() > 635) {
            $(".warp .menu").addClass('fixd');
        } else {
            $(".warp .menu").removeClass('fixd');
        }
    });
    //点击微信
    $(".warp .menu .share .share_main a.weixin").click(function() {
        var display = $('.warp .menu .share .share_main a.weixin .img').css('display');
        if (display == 'none') {
            $(this).addClass('on');
        } else {
            $(this).removeClass('on');
        }
    });
        //关闭弹框
    $(".close_box").click(function(){
        $('.mask').hide();
        $(this).parent().parent().hide();
    })
    $('.not_win_main a').click(function(){
       $('.mask').hide();
        $(this).parent().parent().hide();
    })
});
