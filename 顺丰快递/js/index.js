/* ---------------index small-head hover事件--------------------- */
				$('.inputd').focus(function() {
					$('.textd').css({
						'display': 'block',
						'margin-top': '0px'
					}).focus()
					$('.input1').hide()
					$('#in').css({
						'height': '167px',
						'top': '-167px'
					})
				})

				$('.textd').blur(function() {
					$('.textd').hide()
					$('.input1').css('display', 'block')
					$('#in').css({
						'height': '123px',
						'top': '-123px'
					})
					$('.inputd').css({
						'width': '263px',
						'float': 'left',
						'margin-bottom': '18px'
					})
					$('#inputz').css('float', 'left')
				})
				/* ---------------index small-head hover事件--------------------- */

				/* ---------------index mid 点击事件--------------------- */
				$('.nav li').eq(0).click(function() {
					$('.two').css('display', 'none')
					$('.one').css('display', 'block')
					$('.nav li').css({
						'border-bottom': '2px solid #b1b1b1',
						'background': 'none'
					})
					$(this).css({
						'border-bottom': '2px solid #d92437',
						'background': 'url(imgs/business-select.png)no-repeat center bottom'
					})
				})
				$('.nav li').eq(1).click(function() {
					$('.one').hide()
					$('.two').show()
					$('.nav li').css({
						'border-bottom': '2px solid #b1b1b1',
						'background': 'none'
					})
					$(this).css({
						'border-bottom': '2px solid #d92437',
						'background': 'url(imgs/business-select.png)no-repeat center bottom'
					})
				})


				/* ----------------index banner无缝轮播图 --------------------------*/
				$(function() {
					$('.banner ul li').eq(1).css({
						'left': $(document).width() + 'px'
					})
					var num1 = 0
					var num2 = 0
					var timer

					timer = setInterval(funt, 5000)

					function funt() {
						num1++;
						if (num1 > 1) {
							num1 = 0
						}
						$('.banner ul li').eq(num1).css({
							'left': $(document).width() + 'px'
						}).animate({
							'left': '0px',
							'z-index': '0'
						}, 1000)
						$('.banner ul li').eq(num2).animate({
							'left': -$(document).width() + 'px'
						}, 1000)
						$('#bann-btn span').eq(num1).addClass('bann-one').siblings().removeClass('bann-one')
						num2 = num1;
					}

					$('#bann-btn span').click(function() {
						clearInterval(timer)
						var inds = $(this).index()
						$(this).addClass('bann-one').siblings().removeClass('bann-one')
						$('.banner ul li').eq(inds).css({
							'left': $(document).width() + 'px',
							'z-index': '10'
						}).animate({
							'left': '0px'
						}, 1000, function() {
							$('.banner ul li').css('z-index', '0')
							if (inds == 0) {
								$('.banner ul li').eq(0).css('z-index', '1')
							}
						})
						num2 = num1 = inds
					})

					$('.banner ul').mouseover(function() {
						clearInterval(timer)
					})

					$('.banner ul').mouseout(function() {
						timer = setInterval(funt, 5000)
					})
				})
				/* ----------------index banner无缝轮播图 --------------------------*/
