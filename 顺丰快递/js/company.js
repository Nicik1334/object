$(function() {

	$('.nav div').click(function() {
		var ind = $(this).index()
		$('.nav div a').css({
			'border-bottom': '2px solid #F1F1F1',
			'color': '#000000'
		})
		$(this).find('a').css({
			'border-bottom': '2px solid red',
			'color': 'red'
		})
		$('.nav-alls div').eq(ind).show().siblings().hide()
	})
})
