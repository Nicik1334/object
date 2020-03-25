/* -------------------点击切换窗口事件 ----------------------*/
$('.ld').click(function() {
	$('.alls .one,.two,.three,.four').css('display', 'none')
	$('.nav div a').css('border-bottom', '2px solid #F1F1F1')
	$(this).css('border-bottom', '2px solid red')
	$('.two').css('display', 'block')
	$('.banner').css('background', 'url(imgs/SF-CN--Service.jpg) no-repeat center/100% 100%')
})
$('.tc').click(function() {
	$('.alls one,.two,.three,.four').css('display', 'none')
	$('.nav div a').css('border-bottom', '2px solid #F1F1F1')
	$(this).css('border-bottom', '2px solid red')
	$('.one').css('display', 'block')
	$('.banner').css('background', 'url(imgs/-004.jpg) no-repeat center/100% 100%')
})
$('.gj').click(function() {
	$('.alls .one,.two,.three,.four').css('display', 'none')
	$('.nav div a').css('border-bottom', '2px solid #F1F1F1')
	$(this).css('border-bottom', '2px solid red')
	$('.three').css('display', 'block')
	$('.banner').css('background', 'url(imgs/gj.jpg) no-repeat center/100% 100%')
})
$('.fw').click(function() {
	$('.alls .one,.two,.three,.four').css('display', 'none')
	$('.nav div a').css('border-bottom', '2px solid #F1F1F1')
	$(this).css('border-bottom', '2px solid red')
	$('.four').css('display', 'block')
	$('.banner').css('background', 'url(imgs/zzi.jpg) no-repeat center/100% 100%')
})
/* -------------------点击切换窗口事件 ----------------------*/