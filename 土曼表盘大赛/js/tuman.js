$(function(){
    $('.modal_Box .sex .right>span>em').click(function(){
        $(this).parent('span').addClass('on').siblings().removeClass('on');
    })
    //作品列表
    $(".show .tab_t a").click(function(){
        $(this).addClass('on').siblings().removeClass("on");
    })
    //banner动画
    var i=0
     function ab(){
        if(i<4){
        i++
         $('.gif img').attr('src', 'tuman/'+ i +'.png');
        }else{
            i=0;
        $('.gif img').attr('src', 'tuman/'+ i +'.png');
        }
    }
    setInterval(ab,500);
})










