/*!
 * description: 弹框
 * require: jquery-1.10.2.js
 * relevancy: modal.css
 * 
 * date: 2015-08-27
 * update: (2015-XX-XX XX:XX)
 */
$(function(){
	$(document).on('click','[data-target]',function(event){
		// 获取弹框id
		var modalBox = $(this).attr('data-target');
		var modalBoxPos = $(modalBox).find(".modal_effect");
		box = $(this).attr('rel');
		// 显示弹框
		modal(modalBox,modalBoxPos);
	});
});
modal = function(box,pos) {
	$('body').addClass('modal_open').append('<div class="modal_backdrop"></div>');
	$('body').css('padding_right','15px');
	$(box).addClass("in");	
	$(".modal_backdrop").bind('click', function() {
		$(box).removeClass("in");
		$(".show_main ul li .vote a").removeClass("on");
		$('.modal_backdrop').remove();
		$('body').removeClass("modal_open");
		$('body').css('padding_right','0');	
	});

};
	