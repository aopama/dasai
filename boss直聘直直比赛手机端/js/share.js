$(function(){
    
    // 判断是否是微信浏览器打开
    function is_weixn(){  
        var ua = navigator.userAgent.toLowerCase();  
        if(ua.match(/MicroMessenger/i)=="micromessenger") {  
            weixin = true;  
        } else {  
            weixin = false;  
        }  
    }
    // 弹出分享提示
    $('.vote a').click(function(){
        is_weixn();
        if (weixin == false) {
            $(".share").show();
            $('.shade').show();
        } else {
            $(".sharew").show();
            $('.shade').show();
        }
        
    });
    // 点击遮罩隐藏分享
    $(document).on('touchend', '.shade,.share,.sharew', function() {
        $('.shade,.share,.sharew').hide(10);
    });
    //跳转相应位置
   //  var nid='7';
   //  // 获取作品序号
   //  Htop=$("#"+nid).offset().top+(nid*30);
   // $("html,body").animate({scrollTop:Htop}, 1000);
})