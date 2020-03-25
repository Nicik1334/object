
			
			
			$(function(){
				 $('.dl').click(function(){
					 $('.str').slideDown()
				 })
					$('.stop .sm').click(function(){
					  $('.sbot').show()
						$('.sbot2').hide()
						$('.stop a').css({color: "#000",background: "white","border-bottom": "1px solid #f1f1f1"})
						$(this).css({color: "#dc1e32",background: "#f2f2f2","border-bottom": "1px red solid"})
						
					})
				 
				 $('.stop .zh').click(function(){
				   $('.sbot').hide()
				 	$('.sbot2').show()
					$('.stop a').css({color: "#000",background: "white","border-bottom": "1px solid #f1f1f1"})
				 	$(this).css({color: "#dc1e32",background: "#f2f2f2","border-bottom": "1px red solid"})
				 })
					 $('.cha').click(function(){
						 $('.str').hide()
					 })
					 
				})