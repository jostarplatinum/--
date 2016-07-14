$(function(){
	$(".daohangR-1").hover(function(){
		$(".daohangR-1-1").show();
	},function(){
		$(".daohangR-1-1").hide();
	})
})
$(function(){
	$(".daohangR-4").hover(function(){
		$(".daohangR-4-1").show();
	},function(){
		$(".daohangR-4-1").hide();
	})
})
$(function(){
	$(".daohangR-5").hover(function(){
		$(".erweima").show();
	},function(){
		$(".erweima").hide();
	})
})
$(function(){
	$(".daohangR-7").hover(function(){
		$(".daohangR-7-1").show();
	},function(){
		$(".daohangR-7-1").hide();
	})
})
$(function(){
	$(".daohangR-8").hover(function(){
		$(".daohangR-8-1").show();
	},function(){
		$(".daohangR-8-1").hide();
	})
})
$(function(){
	var Lunbo=$(".tm_lunbo");
	var lunbo=$(".lunbo")[0];
	var as=$(".a_img",lunbo);
	var top=$(".banner_top",lunbo);
	var bottom=$(".banner_bottom",lunbo);
	var len=as.length;
	var liv=$("li",lunbo);
	var next=0;
	var index=0;
	var flag=true;
	var arrColor=['#1281d8','#ccedf2','#e7b3b9','#e8e8e8','#8cb4d5','#e8e8e8']

	as.css({"opacity":0})
	as.eq(0).css({"opacity":1})
	Lunbo.css({"background":"#1281d8"})
	liv.eq(0).css({width:18,height:18,"background":"#f1f1f1","border":"2px solid #8ea5a9"})
	var t=setInterval(moveL,2000);
	function moveL(){
		next++;
		if(next==len){
			next=0;
			top.css({"display":"block"});
			bottom.css({"display":"block"});
		}else{
			top.css({"display":"none"});
			bottom.css({"display":"none"});
		}
		as.css({"opacity":0})
		as.eq(next).animate({"opacity":1})
		Lunbo.css({"background":arrColor[next]})
		liv.eq(next).css({width:18,height:18,"background":"#f1f1f1","border":"2px solid #8ea5a9"})
		liv.eq(index).css({width:18,height:18,"background":"#8ea5a9"})
		index=next;
	}

	as.hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(moveL,2000);
	})

	liv.mouseover(function(){
		if(flag){
			flag=false;
			clearInterval(t);
			var index=$(this).index();
			if(index==0){
				top.css({"display":"block"});
				bottom.css({"display":"block"});
			}else{
				top.css({"display":"none"});
				bottom.css({"display":"none"});
			}
			liv.css({"background":"#8ea5a9"})
			liv.eq(index).css({width:18,height:18,"background":"#f1f1f1","border":"2px solid #8ea5a9"})
			as.css({"opacity":0})
			Lunbo.css({"background":arrColor[index]})
			as.eq(index).animate({"opacity":1},function(){
				flag=true;
				next=index;
			})
		}
		
	})
})

$(function(){
	var arrColor=['#e54077','#427def','#7847ed','#e54077','#6347ed','#427def','#fa5c5c',
	'#f7a831','#f7a831','#427def','#dd2727','#427def','#f7a831','#3bc7b0','#dd2727','#3bc7b0']
	$(".fenlei-1").hover(function(){
		var index=$(this).index();
		$(".fenlei-1").eq(index).css({"background":"#fff"});
		$(".a-0").eq(index).css({"color":arrColor[index],"fontWeight":"bold"});
		$(".i-2").eq(index).css({"color":arrColor[index]});
	},function(){
		$(".fenlei-1").css({"background":""})
		$(".a-0").css({"color":"#222","fontWeight":"normal"})
		$(".i-2").css({"color":"#777777"})
	})
})


$(function(){
	$(".banner_top").hover(function(){
		$(".banner_top").animate({opacity:1});
	},function(){
		$(".banner_top").animate({opacity:0.8});
	})
})

$(function(){
	$(".banner_bottom").hover(function(){
		$(".banner_bottom").animate({opacity:1});
	},function(){
		$(".banner_bottom").animate({opacity:0.8});
	})
})

$(function  () {
	
//fixed输入框
	var topbar=$(".topbar");
	var flag1=true;
	var flag2=true;

	$(window).scroll(function  () {
		var obj=document.documentElement.scrollTop?document.documentElement:document.body;
		
		if (obj.scrollTop>800) {
			if (flag1) {
				flag1=false;
				topbar.animate({top:0},function  () {
					flag2=true;
				})
			};
		} else {
			if (flag2) {
				flag2=false;
				topbar.animate({top:-50},function  () {
					flag1=true;
				})
			};
		}
	})

})


// $(function  () {
//  /*返回顶部*/	
//      var totop=$(".totop");
// 		totop.click(function(){
// 			var obj=document.documentElement.scrollTop?document.documentElement:document.body;
// 			obj.animate({scrollTop:0})
// 		})


// })

$(function(){
	 	$(".totop").backTop();
	 	//$(".backtop") 返回按钮父容器     
		})


$(function  () {
	var xiaotubiao=$(".xiaotubiao");
	var tan=$(".tan");

	xiaotubiao.hover(function  () {
		$(this).children(".tan").fadeIn()
		.animate({right:35})
	},function  () {
		$(this).children(".tan").fadeOut()
		.animate({right:55})
	})



	var xiaotubiao1=$(".xiaotubiao1");
	var tan=$(".tan");

	xiaotubiao1.hover(function  () {
		$(this).children(".tan").css({display:"block",opacity:0.8,})
		.animate({right:35})
	},function  () {
		$(this).children(".tan").css({display:"none",opacity:0,marginRight:0})
		.animate({right:55})
	})



	var xiaotubiao2=$(".xiaotubiao2");
	var tan=$(".tan");

	xiaotubiao2.hover(function  () {
		$(this).children(".tan").css({display:"block",opacity:0.8,})
		.animate({right:35})
	},function  () {
		$(this).children(".tan").css({display:"none",opacity:0,marginRight:0})
		.animate({right:55})
	})


	var totop=$(".totop");
	var tan=$(".tan");

	totop.hover(function  () {
		$(this).children(".tan").css({display:"block",opacity:0.8,})
		.animate({right:35})
	},function  () {
		$(this).children(".tan").css({display:"none",opacity:0,marginRight:0})
		.animate({right:55})
	})

	var fenlei=$(".fenlei-1");
	var son=$(".fenlei_son");

	fenlei.hover(function  () {
		$(this).children(".fenlei_son").show();
	},function  () {
		$(this).children(".fenlei_son").hide()
	})

})