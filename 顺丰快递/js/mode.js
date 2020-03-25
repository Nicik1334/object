    //    var topf = document.getElementsByClassName('topfixed')[0]
				// var scrollTop = 0;
				// var time;
				// window.onscroll=function(){
				// 	// 3.获取滚动条的位置
				// 	scrollTop = document.documentElement.scrollTop;
				// 	// console.log(scrollTop)
				//   if(scrollTop>400){
				// 		topf.style.display = 'block'
				// 	}else{
				// 		topf.style.display = 'none'
				// 	}
				// }
				// 	topf.onclick=function(){
				// 		time = setInterval(function(){
				// 			window.scrollBy(0,-30)
				// 			if(scrollTop<=0){
				// 				clearInterval(time)
				// 			}
				// 		},10)
				// 		}
				
				
				var nav = document.getElementsByClassName('nav')[0];
				var main = document.getElementsByClassName('main')[0];
				var bannerd = document.getElementsByClassName('banner')[0];
				var topf = document.getElementsByClassName('topfixed')[0]
				var scrollTop = 0;
				var time;
				
				window.onscroll = function() {
					scrollTop = document.documentElement.scrollTop;
					var endTopd = main.offsetTop + bannerd.offsetHeight
					if (scrollTop >= endTopd) {
						nav.style.position = 'fixed';
						nav.style.top = '0';
					}
					if (scrollTop < endTopd) {
						nav.style.position = 'relative';
						nav.style.top = '0px';
					}
				
					if (scrollTop > 400) {
						topf.style.display = 'block'
					} else {
						topf.style.display = 'none'
					}
				
					topf.onclick = function() {
						time = setInterval(function() {
							window.scrollBy(0, -30)
							if (scrollTop <= 0) {
								clearInterval(time)
							}
						}, 10)
					}
				}
				
				
				$(function(){
				 $('.dl').click(function(){
					 $('.str').slideToggle()
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