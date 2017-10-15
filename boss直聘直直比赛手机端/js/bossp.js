$(function(){
    //添加编号
    $(".wrap_664 ul li").each(function(){
        var n=$(this).index()+1;
        if(n<10){
            $(this).children('.num').children('span').html("0"+n).attr('id','0'+n);
        }else{
            $(this).children('.num').children('span').html(+n).attr('id',+n);
        }
    });
    
    $("html,body").animate({scrollTop:$("#15").offset().top},1000);

});