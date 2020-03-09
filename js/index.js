

$('.tray-scroll-wrap').css({   //侧边栏目录隐藏
	'left': -$(document).width()
}).hide()


$('.shop').click(function() {   //点击隐藏目录
	$('.tray-scroll-wrap').animate({
		'left': -$(document).width()
	}, 200, function() {
		$('.tray-scroll-wrap').hide()
	})
})

$('.navigation').click(function() {   //点击显示目录
	$('.tray-scroll-wrap').show()
	$('.tray-scroll-wrap').animate({
		'left': '0'
	}, 200)
})

$(document).scroll(function(){
	if($(document).scrollTop() >50){
		$('.header-content').css({'position':'fixed','top':'0','z-index':'10','width':'100%'})
	}else{
		$('.header-content').css({'position':'relative'})
	}
	
})


