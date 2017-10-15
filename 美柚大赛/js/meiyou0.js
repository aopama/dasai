$(function(){
    //所有作品
    var len=$(".list_cont ul li").length;
    if(len>8){
        $(".ls1").show();
    }
    if(len>16){
        $(".ls2").show();
    }
})