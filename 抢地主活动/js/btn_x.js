
$(document).ready(function(){
 $(".bg_bxz").click(function(){
  $("#t").fadeIn();
  $(".mask").show();
 $(this).parents("body").addClass("ov");
});
 $(".btn_x").click(function(){
  $("#t").fadeOut();
   $(".mask").hide();
  $(this).parents("body").removeClass("ov");
});
  $(".mask").click(function(){
  $("#t").fadeOut();
   $(".mask").hide();
  $(this).parents("body").removeClass("ov");
});
 //我的简历弹框
 $(".bg_bxy").click(function(){
  $("#t1").fadeIn();
});
 $(".btn_x1").click(function(){
  $("#t1").fadeOut();
});
 //固定顶部 console.log(h)
 $(document).scroll(function(){
  h=$(document).scrollTop();
  if (h>80) {
    $(".entrance").addClass("gdtop");
  }else{
    $(".entrance").removeClass("gdtop");
  }
});
});









