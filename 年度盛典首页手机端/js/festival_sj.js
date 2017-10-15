$(function(){
    //tab导航栏
    $('.container .tab ul li').bind('touchstart',function(){
        $(this).addClass('on').siblings().removeClass('on');
    })
    //点击加载更多
            // $.ajax({
            //     type:"POST",
            //     url:"",
            //     data:{sum:sum},
            //     success:function(json){
     $('.list_warp .more a').bind('touchstart',function(){
                for(var i=3;i>=0;i--){
                    $(".list_ul").append(
                            '<li>'+
                                '<div class="name_pic">' + 
                                    '<img src="images/festival_sj/1.jpg" alt="">'+
                                    '<div class="bianma">'+
                                        '<span>'+'11'+'</span>' +
                                        '<i>'+'</i>'+
                                    '</div>'+
                                    '<div class="love_number cl">'+
                                        '<em class="z">'+'</em>'+
                                        '<span id="piao_11" class="z">'+
                                            '11'+
                                        '</span>'+
                                    '</div>'+
                                '</div>'+ 
                                '<div class="title">'+
                                    '大表哥'+
                                '</div>'+
                                '<div class="yes_you">'+
                                    '<a class="pc_sure" href="javascript:;" title="">投一票</a>'+
                                '</div>'+
                                '<img class="list_bg" src="images/festival_sj/bg0.png" alt="">'+
                                '<div class="h-aside-show"></div>'+
                            '</li>'
                        );
                }          
        // }
        // });
    })       
})
//投票
// $(function(){
//     $('.yes_you  a').bind('touchstart',function(){
//         $.ajax({
//         type:'post',
//         url:'http://pingxuan.ui.cn/vote',
//         data:data,
//         dataType:'json',
//         success:function(msg){
//            console.log(msg);
//         },
//         error:function(){
//             console.log('error');
//         }
//     });
//     })
// })








