
$(function() {
        //关闭弹框
        $(".close_box").on('touchend',function(e){
        $('.mask').hide();
        $(this).parent().parent().hide();
        e.preventDefault();//阻止“默认行为”
    })
    $(".not_win_main a").on('touchend',function(e){
        $('.mask').hide();
        $(this).parent().parent().hide();
    })
});
