$(function(){
    //底部导航
    $('.head_nav ul li').click(function(){
        $(this).addClass("on").siblings().removeClass('on');
    })
    //右侧浮层
    $(window).scroll(function() {
        
        if($(".nav").hasClass("nav_rule")){
                if ($(window).scrollTop() > 627) {
                    $(".nav").addClass("fixd");
                } else {
                    $(".nav").removeClass("fixd");
                }
        }else{
                if ($(window).scrollTop() > 853) {
                    $(".nav").addClass("fixd");
                } else {
                    $(".nav").removeClass("fixd");
                }
        }     
    });
    //作品展示页tab
    // $('.tab_list ul li').click(function(){
    //     $(this).addClass("on").siblings().removeClass('on');
    // })
 //复选框
    $(".icheck").click(function(event) {
        var $this=$(this)
        if($this.hasClass('check')){
            $this.removeClass('check')
            $this.children('i').removeClass('icon-ok-sign')
            $this.find('input').removeAttr('check')
        }else{
            $this.addClass('check')
            $this.children('i').addClass('icon-ok-sign')
            $this.find('input').attr('checked',true);
        }
    }); 
    //banner动画
    var i=0
     function ab(){
        if(i<2){
        i++
         $('.music .bg_d img').attr('src', 'boss/animate/'+ i +'.png');
        }else{
            i=0;
        $('.music .bg_d img').attr('src', 'boss/animate/'+ i +'.png');
        }
    }
    setInterval(ab,500);
    //添加编号
    $(".show_main ul li").each(function(){
        var n=$(this).index()+1;
        if(n<10){
            $(this).children('.num').children('span').html("0"+n);
        }else{
            $(this).children('.num').children('span').html(+n);
        }
    });
    

});
// 获取第几个生成二维码
$(function() {
       $(".show_main ul li .vote").click(function(){
            $("#code").empty();
            var num=$(this).parent("li").index()+1;
            $.ajax({
                url: '/path/to/file',
                type: 'POST',
                dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
                data: {param1: 'value1'},
            })
            .done(function() {
                console.log("success");
            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            });
            
            var url="http://www.ui.cn/?num=" + num;
            var str = toUtf8(url);
            $("#code").qrcode({
                render: "table",
                width:150,
                height:150,
                text: str
            });
        });
    })
    function toUtf8(str) {

        var out, i, len, c;

        out = "";

        len = str.length;

        for (i = 0; i < len; i++) {

            c = str.charCodeAt(i);

            if ((c >= 0x0001) && (c <= 0x007F)) {

                out += str.charAt(i);

            } else if (c > 0x07FF) {

                out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));

                out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));

                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));

            } else {

                out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));

                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));

            }

        }
        return out;
    }