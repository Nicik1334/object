$('div[class=headers]').html(nav1.import.body.innerHTML)
$('div[class=footers]').html(foot.import.body.innerHTML)

var num = 0
var ib
var s = 0
var b = 0

$('.divs .bt1 .Next').click(function() { //第一个下一部的点击事件
	if (($('.xm').val() == '') || ($('.sj').val() == '') || ($('.wz').val() == '') || ($('.dz').val() == '')) { //判定整体是否为空
		console.log('空') //如果为空则执行下列函数体

		if (($('.xm').val() == '')) { //if姓名的value值等于空时
			$('.xm').next().css('opacity', '1')
			$('.xm').focus()
			$('.right input,.left input').css('border-bottom', '2px solid #ccc')
			$('.xm').css('border-bottom', '2px solid red')
			var ib = $('.xm').next('.tips')
			setTimeout(function() {
				ib.css('opacity', '0')
			}, 2000)
		} else {
			if (($('.sj').val().length !== 11)) { //if手机的长度值等于11时
				$('.sj').next().css('opacity', '1')
				$('.sj').focus()
				$('.right input,.left input').css('border-bottom', '2px solid #ccc')
				$('.sj').css('border-bottom', '2px solid red')
				var ib = $('.sj').next('.tips')
				setTimeout(function() {
					ib.css('opacity', '0')
				}, 2000)
				if(($('.sj').val().length == '')){   //if手机的value值等于空时
					$('.sj').next().css('opacity', '0')
					$('.sj').next().next().css('opacity', '1')
					$('.sj').focus()
					$('.right input,.left input').css('border-bottom', '2px solid #ccc')
					$('.sj').css('border-bottom', '2px solid red')
					var ib = $('.sj').next('.tips').next('.tipss')
					setTimeout(function() {
						ib.css('opacity', '0')
					}, 2000)
				}
			} else {
				if (($('.wz').val() == '')) { //如果位置的value的值等于空时
					$('.wz').next().css('opacity', '1')
					$('.wz').focus()
					$('.right input,.left input').css('border-bottom', '2px solid #ccc')
					$('.wz').css('border-bottom', '2px solid red')
					var ib = $('.wz').next('.tips')
					setTimeout(function() {
						ib.css('opacity', '0')
					}, 2000)
				} else {
					if (($('.dz').val() == '')) { //如果地址的value的值等于空时
						$('.dz').next().css('opacity', '1')
						$('.dz').focus()
						$('.right input,.left input').css('border-bottom', '2px solid #ccc')
						$('.dz').css('border-bottom', '2px solid red')
						var ib = $('.dz').next('.tips')
						setTimeout(function() {
							ib.css('opacity', '0')
						}, 2000)
					} else {
						$('dz').next('.tips').css('opacity', '0')
					}
				}
			}
		}
	} else {
		console.log('不空') //如果不为空则执行下列函数体
		num++ //如果全部不为空，则可以点击下一步
		$('.divs').animate({
			left: '-960px'
		}, 1000) //整体向左平移，然后修改顶上li的样式
		$('.bots li').eq(num).attr('class', 'reds').siblings().removeAttr('class')
	}
})

$('.divs .bt2 .Next').click(function() { //第二个下一部的点击事件
	if (($('.xms').val() == '') || ($('.sjs').val() == '') || ($('.wzs').val() == '') || ($('.dzs').val() == '')) { //判定整体是否为空
		console.log('空') //如果为空则执行下列函数体

		if (($('.xms').val() == '')) { //if姓名的value值等于空时
			$('.xms').next().css('opacity', '1')
			$('.xms').focus()
			$('.right input,.left input').css('border-bottom', '2px solid #ccc')
			$('.xms').css('border-bottom', '2px solid red')
			var ib = $('.xms').next('.tips')
			setTimeout(function() {
				ib.css('opacity', '0')
			}, 2000)
		} else {
			if (($('.sjs').val().length !== 11)) { //if手机的value值等于空时
				$('.sjs').next().css('opacity', '1')
				$('.sjs').focus()
				$('.right input,.left input').css('border-bottom', '2px solid #ccc')
				$('.sjs').css('border-bottom', '2px solid red')
				var ib = $('.sjs').next('.tips')
				setTimeout(function() {
					ib.css('opacity', '0')
				}, 2000)
			} else {
				if (($('.wzs').val() == '')) { //如果位置的value的值等于空时
					$('.wzs').next().css('opacity', '1')
					$('.wzs').focus()
					$('.right input,.left input').css('border-bottom', '2px solid #ccc')
					$('.wzs').css('border-bottom', '2px solid red')
					var ib = $('.wzs').next('.tips')
					setTimeout(function() {
						ib.css('opacity', '0')
					}, 2000)
				} else {
					if (($('.dzs').val() == '')) { //如果地址的value的值等于空时
						$('.dzs').next().css('opacity', '1')
						$('.dzs').focus()
						$('.right input,.left input').css('border-bottom', '2px solid #ccc')
						$('.dzs').css('border-bottom', '2px solid red')
						var ib = $('.dzs').next('.tips')
						setTimeout(function() {
							ib.css('opacity', '0')
						}, 2000)
					} else {
						$('dzs').next('.tips').css('opacity', '0')
					}
				}
			}
		}
	} else {
		console.log('不空') //如果不为空则执行下列函数体
		num++ //如果全部不为空，则可以点击下一步
		$('.divs').animate({
			left: -960 * num + 'px'
		}, 1000) //整体向左平移，然后修改顶上li的样式
		$('.bots li').eq(num).attr('class', 'reds').siblings().removeAttr('class')
	}

})

$('.divs .bt3 .Next').click(function() { //第三个下一部的点击事件
	num++ //如果全部不为空，则可以点击下一步
	if (num >= 3) {
		num = 3
	}
	if (s == 1) {
		$('.divs').animate({
			left: -960 * num + 'px'
		}, 1000) //整体向左平移，然后修改顶上li的样式
		$('.bots li').eq(num).attr('class', 'reds').siblings().removeAttr('class')
	}

})

$('.good').click(function() { //同意协议的点击事件
	s++
	if (s == 1) {
		$('.good').css('background', 'red')
	}
	if (s == 2) {
		$('.good').css('background', 'white')
		s = 0
	}
})

$('.divs li .step').click(function() { //上一步的点击事件，然后向左平移一定的距离，然后修改上面li的样式
	num--
	if (num <= 0) {
		num = 0
	}
	$('.divs').animate({
		left: -960 * num + 'px'
	}, 1000)
	$('.bots li').eq(num).attr('class', 'reds').siblings().removeAttr('class')
})

$('.left input').focus(funs) //左边输入框聚焦事件

function funs() {
	$('.right input,.left input').css('border-bottom', '2px solid #ccc') //聚焦后下边框变样式
	$(this).css('border-bottom', '2px solid red')
	/* if($(this).val() == '' ){
		$(this).next('.tips').css('opacity','1')
	}
	var ib = $(this).next('.tips')
	setTimeout(function(){
			ib.css('opacity','0')
			// console.log(377)
		},2000) */
}

$('.right input').focus(function() { //右边输入框聚焦事件
	$('.right input,.left input').css('border-bottom', '2px solid #ccc')
	$(this).css('border-bottom', '2px solid red')
})
$('.right input,.left input').blur(function() { //失焦后所有样式变灰
	$('.right input,.left input').css('border-bottom', '2px solid #ccc')
})

$('.mids .top a').click(function() { //切换显示隐藏点击事件
	var vas = $(this).index()
	$(this).css({
		background: '#dc1e32',
		color: 'white'
	}).siblings().css({
		background: 'white',
		color: 'black'
	})
	$('.mids .bot,.bot1,.bot-last').hide()
	$('.mids').children().eq(vas + 1).show()
})

setInterval(function() {
	if (s == 1) {
		$('#plays').css('cursor', 'pointer')
	}
	if (s != 1) {
		$('#plays').css('cursor', 'not-allowed')
	}
}, 1000)


$('.nav a').click(function() {
	var inds = $(this).index()
	$(this).css({
		'border-bottom': '2px white solid',
		'color': 'white'
	}).siblings().css({
		'border-bottom': '2px transparent solid',
		'color': '#999'
	})
	$('.mids ,.mids-m ,.mids-r').hide()
	$('.main').children().eq(inds + 1).show()
})


$('.tabk li').click(function() {
	var nad = $(this).index()
	$(this).css({
		'color': '#dc1e32',
		'border-bottom': '2px solid #dc1e32'
	}).siblings().css({
		'color': '#606060',
		'border-bottom': ' 2px solid transparent'
	})
})

$('.updom').click(function() { //点击显示隐藏滑动事件
	b++
	if (b == 1) {
		$('.imgtwo,.imgone').hide()
		$('.imgtwo').show()
	}
	if (b == 2) {
		$('.imgtwo,.imgone').hide()
		$('.imgone').show()
		b = 0
	}
	if (b == 1) {
		$('.hide').slideDown()
	} else {
		$('.hide').slideUp()
	}
})


