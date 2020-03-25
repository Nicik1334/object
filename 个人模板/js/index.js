var num = 0
		var num1 = 0
		var arr1 = ['一', '名', '设', '计', '工', '作', '者','师']
		var arr2 = ['您', '身', '边', '交', '互', '设', '计','']
		var res = [arr1, arr2]
		var time1
		var time2

		time1 = setInterval(funs, 100)
		
		function funs() {
			num++
			if (num > 7) {
				num1++
				clearInterval(time1)
				setTimeout(function() {
					time2 = setInterval(func, 100)
				}, 1000)
			}
			if (num1 > 1) {
				num1 = 0
			}
			$('.tet').css('width', '400px')
			$('.tet p').append(res[num1][num-1])
		}
		
		function func() {
			num--
			if (num < 0) {
				num = 0
				$('.tet p').html('')
				clearInterval(time2)
				time1 = setInterval(funs, 100)
			}
			$('.tet').css('width', (num * 50) + 'px')
		}