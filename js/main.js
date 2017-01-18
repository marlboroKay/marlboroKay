
;$(function(){
	//$('ul.navbar-collapse').hide()
	
})

;$(function(){
	'use strict'

	/*汉堡折叠菜单*/
	var navBtn = $('.navbar-toggle');
	navBtn.click(function(){
		
		if ($('ul.navbar-collapse').is(':visible')) {
			$('ul.navbar-collapse').fadeOut('slow');
		}else{
			$('ul.navbar-collapse').fadeIn('slow');
		}
	})
	/*侧边栏，遮罩层，回到顶部*/
	var menu = $('.menu'),
		mask = $('.mask'),
		backTop = $('.back-to-top'),
		slider_traget = $('#slider_traget');

	function show(){
		mask.fadeIn();
		menu.animate({'right':0});
	}

	function hide(){
		mask.fadeOut();
		menu.animate({'right':-menu.width()})
	}

	if(document.body.clientWidth>768){
		slider_traget.on('click',function(){
		show();
		return false;
		})
		mask.on('click',function(){
			hide();
		})
	}

	backTop.on('click',function(){
		$('html,body').animate({scrollTop:0},800);
	})

	$(window).on('scroll',function(){
		if($(window).scrollTop() > $(window).height()){
			backTop.fadeIn();
		}
		else{
			backTop.fadeOut();
		}
	})
	$(window).trigger('scroll');
	/*上下边框延时显示*/
	setTimeout(function(){
		$('.line-top').css({'width':'100%','background':'#fff'});
	},1500)
	setTimeout(function(){
		$('.line-bottom-replace').css({'width':'100%','background':'#fff'});
	},1500)
	/*对联延时显示*/
	setTimeout(function(){
		var subHead = $('div.inner p');
		$(subHead[0]).addClass('sub-heading-show');
	},1000)

	setTimeout(function(){
		var subHead = $('div.inner p');
		$(subHead[1]).addClass('sub-heading-show');
	},2000)

	setTimeout(function(){
		var subHead = $('div.inner p');
		$(subHead[2]).addClass('sub-heading-show');
	},3000)

	/*更多点击下滚动*/
	var btnDown = $('#main-btn')
	btnDown.on('click',function(){
		$('html,body').animate({scrollTop:850},800);
	})
	/*点击个人介绍*/
	var links = $('ul.container li div.link');
	var persons = $('.list-contain div.list');
	for(var i=0;i<links.length;i++){
		$(links[i]).click(function(i){
			return function(){
				$(persons[i]).fadeIn().siblings().fadeOut();
			}
			
		}(i))
	}
	/*导航点击*/
	var navs = $('ul.navbar-collapse li');
	for(var i=0;i<navs.length;i++){
		$(navs[i]).click(function(i){
			return function(){
				$('html,body').animate({scrollTop:850},800);
				$(persons[i]).fadeIn().siblings().fadeOut();
			}
			
		}(i))
	}


	/*广告轮播*/
	function showImg(index){
		var adHeight = $('.ad').height();
		$('.slider').animate({'top':-adHeight*index+'px'},1000);
		
	}
	
	var index = 0;
	var orderBy = 'ASC';/*辅助变量用来控制index自减或自增*/
	var len = $('.slider li').length;
	var adTimer;
	$('.ad').hover(function(){
		clearInterval(adTimer);
	},function(){
		adTimer = setInterval(function(){
			showImg(index);
			if(orderBy=='ASC'){
				if(index<len-1){
					index++;
				}else{
					orderBy='DSC';
				}
			}
			if(orderBy=='DSC'){
				if(index==0){
					orderBy='ASC';
				}else{
					index--;
				}
			}
		},2000)
	}).trigger('mouseleave')

	/*主题切换*/
	
	$('#inset a').click(function(){
		switchSkin(this.id)
		$('html,body').animate({scrollTop:850},'fast');
	});
	var cookie_skin = $.cookie('MyCssSkin');
		if(cookie_skin){
			switchSkin(cookie_skin);
		}
	function switchSkin(skinName){
		$('#cssfile').attr('href','css/'+skinName+'.css');
		$.cookie('MyCssSkin',skinName,{path:'/',expires:10});
	}
	
})


