//文档就绪
$(function(){
//	回到顶部按钮对象
	var topcontrol = $('#topcontrol');
	var nav = $('.nav-wrap');
	var navPos = nav.offset().top;
	var navHeight = nav.outerHeight();
	
	//滚动条事件
	$(window).scroll(function(e){
		
		//获得滚动条位置
		var sTop = $(window).scrollTop();
//		alert(sTop);
		if(sTop >= 200){
			
			topcontrol.fadeIn(300);
		}else{
			topcontrol.fadeOut(300);
		}
		
		if(sTop >= navPos ){
			if (!(nav.hasClass('fix'))) {
				nav.addClass('fix');
				$('.banner').css('margin-bottom',navHeight);
			}
		} else{
				if (nav.hasClass('fix')) {
					nav.removeClass('fix');
					$('.banner').css('margin-bottom',0);
				}
			
		}
		
		//滚动监听高亮
		 var introPos = {
		 	start : $('#post-intro').offset().top - navHeight,
		 	end:$('#post-intro').offset().top + $('#post-intro').outerHeight() - navHeight
		 }
		if (sTop >= introPos.start && sTop < introPos.end) {
			if (!($('.intro').hasClass('active'))) {
				$('.intro').addClass('active');
			} 
		} else{
			if (($('.intro').hasClass('active'))) {
				$('.intro').removeClass('active');
			}
		}		
		
		
		var inusage = {
		 	start : $('#post-usage').offset().top - navHeight,
		 	end:$('#post-usage').offset().top + $('#post-usage').outerHeight() - navHeight
		 }
		if (sTop >= inusage.start && sTop < inusage.end) {
			if (!($('.usage').hasClass('active'))) {
				$('.usage').addClass('active');
			} 
		} else{
			if (($('.usage').hasClass('active'))) {
				$('.usage').removeClass('active');
			}
		}		
		
		
		
		var choiceness = {
		 	start : $('#choiceness').offset().top - navHeight,
		 	end:$('#choiceness').offset().top + $('#choiceness').outerHeight() - navHeight
		 }
		if (sTop >= choiceness.start && sTop < choiceness.end) {
			if (!($('.choice').hasClass('active'))) {
				$('.choice').addClass('active');
			} 
		} else{
			if (($('.choice').hasClass('active'))) {
				$('.choice').removeClass('active');
			}
		}		
		
		
	});
	
	topcontrol.click(function(){
		
		$('html,body').animate({scrollTop:0},1000);
		
	});
	
	//网页导航锚点过渡
	$('.nav-wrap a').click(function(){
		//获得对应区域网页原点位置
		var objTop = $(this.hash).offset().top - navHeight + 7;
		$('html,body').animate({scrollTop:objTop},1000);
		
		return false;
	});
	
});