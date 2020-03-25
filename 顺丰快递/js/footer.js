$('div[class=headers]').html(nav1.import.body.innerHTML)
      $('div[class=footers]').html(foot.import.body.innerHTML)

      /* ---------------index topfixed 点击事件--------------------- */
      var topf = document.getElementsByClassName('topfixed')[0]
      var scrollTop = 0;
      var time;
      window.onscroll = function() {
      	// 3.获取滚动条的位置
      	scrollTop = document.documentElement.scrollTop;
      	if (scrollTop > 400) {
      		topf.style.display = 'block'
      	} else {
      		topf.style.display = 'none'
      	}
      }
      topf.onclick = function() {
      	time = setInterval(function() {
      		window.scrollBy(0, -30)
      		if (scrollTop <= 0) {
      			clearInterval(time)
      		}
      	}, 10)
      }

      /* ---------------index topfixed 点击事件--------------------- */

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
      		nav.style.top = '0';
      	}

      	if (scrollTop > 400) {
      		topf.style.display = 'block';
      	} else {
      		topf.style.display = 'none';
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
