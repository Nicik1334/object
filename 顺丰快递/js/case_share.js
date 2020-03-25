$(function() {
	<!------------------ 	分页点击事件 ------------------------->
	$('.twos,.four').click(function() {
		$('.mids').hide()
		$('.mid').show()
	})
	$('.ones').click(function() {
		$('.mids').show()
		$('.mid').hide()
	})
	
	
	<!------------------ 	分页点击事件 ------------------------->

	$('.alling').click(function() {
		$('.mid').hide()
		$('.mids,.mids li').show()
		$('.mids').animate({
			height: '1280px'
		}, 500)
		$('.next').show()
	})
	
	
	
	
	<!------------------ 	种类筛选事件 ------------------------->
	$('.alling').click(function() {
		$('.mids li,.mids').show()
		$('.qbhy').text($(this).html())
	})
	$('.scs').click(function() {
		$('.mids li,.mid').hide()
		$('.mids .sc,.mids').show()
		$('.qbhy').text($(this).html())
		$('.mids').animate({
			height: '634px'
		}, 500)
		$('.next').hide()
	})
	$('.yls').click(function() {
		$('.mids li,.mid').hide()
		$('.mids .yl,.mids').show()
		$('.qbhy').text($(this).html())
		$('.mids').animate({
			height: '634px'
		}, 500)
		$('.next').hide()
	})
	$('.sxs').click(function() {
		$('.mids,mids li,.mid').hide()
		$('.qbhy').text($(this).html())
		$('.mid').show()
		$('.next').hide()
	})
	$('.kxs').click(function() {
		$('.mids li,.mid').hide()
		$('.mids .kx,.mids').show()
		$('.qbhy').text($(this).html())
		$('.mids').animate({
			height: '634px'
		}, 500)
		$('.next').hide()
	})
	<!------------------ 	种类筛选事件 ------------------------->
})
