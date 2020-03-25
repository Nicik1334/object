$(function(){
	$('.top').animate({'margin-left':'42%','opacity':'1'},1000)
	$('.mis').animate({'margin-left':'335px','opacity':'1'},1000)
	setInterval(function(){
		if(scrollY>200){
		$('.ains').animate({'margin-left':'335px','opacity':'1'},1000)
	}
	},100)
	setInterval(function(){
		if(scrollY>880){
		$('.skill').animate({'margin-left':'335px','opacity':'1'},1100)
	}
	},100)
	
	var font
	var ind
	$('.jds li').click(function(){
		$(this).find('b').hide()
		$(this).find('span').show()
		ind = $(this).find('span').html()
		$(this).find('div').find('p').animate({'width':ind},1000)
		
		$(this).find('span').text('0%')
		font = $(this).find('span')
		var nums = 0
		var timeb = setInterval(fun,1)
		
		function fun(){
			nums++
			if(nums>=parseInt(ind)){
				clearInterval(timeb)
			}
		font.text(nums+'%')
		 
		}
	})
})