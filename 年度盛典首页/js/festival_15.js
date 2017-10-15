$(function() {
    //弹框
    //弹框
    //  state = false;
    // //请求判断
    // function check_apply(){

    //     $.ajax({
    //         type:'get',
    //         url:'check_apply',
    //         dataType:'json',
    //         async : false,
    //         success:function(msg){
    //             if(!msg.state){
    //                 state = true;
    //             }else{
    //                 alert(msg.msg);
    //             }
    //         },
    //         error:function(){
    //             alert('网络请求失败,请重试');
    //         }   
    //     });

    //     return state;

    // }


    // //团队
    // $(".team_parent").click(function(){

    //     if(check_apply())
    //     $(".mask").show();
    //     $(".team_box").show();
    // });
    // $(".team_box .close_box").click(function(){
    //     $(".team_box").hide();
    //     $(".mask").hide();
    // })

    // //个人
    // $(".designer_parent").click(function(){
    //   if(check_apply())
    //     $(".mask").show();
    //     $(".designer_box").show();
    // });
    // $(".designer_box .close_box").click(function(){
    //     $(".designer_box").hide();
    //     $(".mask").hide();
    // })

    // //培训
    // $(".peixun_parent").click(function(){
    //      if(check_apply())
    //     $(".mask").show();
    //     $(".peixun_box").show();
    // });
    // $(".peixun_box .close_box").click(function(){
    //     $(".peixun_box").hide();
    //     $(".mask").hide();
    // })


    //静态
    //团队
    $(".team_parent").click(function() {
        $(".mask").show();
        $(".team_box").show();
    });
    $(".team_box .close_box").click(function() {
            $(".team_box").hide();
            $(".mask").hide();
        })
        //个人
    $(".designer_parent").click(function() {
        $(".mask").show();
        $(".designer_box").show();
    });
    $(".designer_box .close_box").click(function() {
            $(".designer_box").hide();
            $(".mask").hide();
        })
        //培训
    $(".peixun_parent").click(function() {
        $(".mask").show();
        $(".peixun_box").show();
    });
    $(".peixun_box .close_box").click(function() {
            $(".peixun_box").hide();
            $(".mask").hide();
        })
        // 弹框END
        //右侧菜单
    $(function() {
        $(window).scroll(function() {
            if ($(window).scrollTop() > 751) {
                $(".festival_tab").addClass('fixd');
            } else {
                $(".festival_tab").removeClass('fixd');
            }
        });
        //当点击跳转链接后，回到页面顶部位置
        $(".festival_tab .down").click(function() {
            $('body,html').animate({
                    scrollTop: 0
                },
                500);
            return false;
        });

    });
    //导航定位 
    $(".festival_tab #nav1").click(function() {
        var a = $(".festival .warp .flow").offset().top;
        $("html,body").animate({
            scrollTop: a
        }, 1000)
    });
    $(".festival_tab #nav2").click(function() {
        var a = $(".festival .warp .team").offset().top;
        $("html,body").animate({
            scrollTop: a
        }, 1000)
    });
    $(".festival_tab #nav3").click(function() {
        var a = $(".festival .warp .candidate").offset().top;
        $("html,body").animate({
            scrollTop: a
        }, 1000)
    });
    $(".festival_tab #nav4").click(function() {
        var a = $(".festival .warp .training").offset().top;
        $("html,body").animate({
            scrollTop: a
        }, 1000)
    });
    $(".festival_tab #nav5").click(function() {
        var a = $(".festival .warp .rule").offset().top;
        $("html,body").animate({
            scrollTop: a
        }, 1000)
    });
    //申请优秀设计师轮播移动上去效果
    $('.warp span').hover(function() {
            $(this).addClass('on').siblings().removeClass("on");
        }, function() {
            $(this).removeClass('on');
        })

});
