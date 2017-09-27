$(document).ready(function(){
	
//---------------------------list-----------------------------------------
	//-----右侧定位划过效果-----
	
	for(var i=0;i<$(".research p").length;i++){
		$(".research p").eq(i).css({background:"url(../img/right"+(i+1)+".jpg) no-repeat 9px 6px"});
	  	remove($(".research p"),i);
	}
	function remove(obj,l){
		obj.eq(l).hover(function(){
			$(this).css({background:"red"});
			$(this).stop(true).animate({top:-45},300);
		},function(){
			$(this).css({background:"url(../img/right"+(l+1)+".jpg) no-repeat 9px 6px"});
			$(this).stop(true).animate({top:0},300);
		});
	}
	
	//-----购物车划过效果-----
	
	$(".car").hover(function(){
		$(this).css({background:"red url(../img/car.jpg) no-repeat 8px 10px"});
	},function(){
		$(this).css({background:""});
	});
	
	//-----文档滑动底端显示以及点击回到顶部函数------
	
	$(window).scroll(function(){
		var $scroll=$(document).scrollTop();
		if($scroll>1000){
			$(".hid").stop(true).animate({bottom:0},100);
		}else{
			$(".hid").stop(true).animate({bottom:-45},100);
		}
	});
	$(".hid").click(function(){
		 $("body,html").stop(true).animate({ scrollTop: 0},500);
	});
	
//-------------------------header-------------------------------------------
	//----封装划过隐藏消失函数-----
	
	function hideShow($abc,$obj,attr){
		var timer=null;
		$abc.hover(function(){
			clearTimeout(timer);
			timer=null;
			$(this).css({background:attr});
			$obj.show();
		},function(){
			$(this).css({background:""});
			timer=setTimeout(function(){
				$obj.hide();
			},100);	
		});
		$obj.hover(function(){
			clearTimeout(timer);
			timer=null;
			$abc.css({background:attr});
			$(this).show();
		},function(){
			timer=setTimeout(function(){
				$abc.css({background:""});
				$obj.hide();
			},100);	
		});
	}
	
	hideShow($(".header_c>a:first"),$("#loca"),"#fff");
	hideShow($(".header_c>a:last"),$("#coll"),"#fff");
	hideShow($(".pad25"),$("#app"),"#fff");
	hideShow($(".pad13"),$("#mark"),"#fff");
	hideShow($(".header_l span"),$("#city"));
	hideShow($(".pad28"),$("#product"));
	hover2($(".header a"));
	$("#city a").hover(function(){
		$(this).css({background:"red",color:"#fff",textDecoration:"none"});
	},function(){
		$(this).css({background:"#fff",color:""});
	});
	var arrTop=["食品生鲜","服装服饰","个护化妆","手机数码","家用电器","家居日用","酒类饮料","母婴用品"]
	for(var i=0;i<arrTop.length;i++){
		var $product=$("<a href='javascript:;' /></a>").appendTo($("#product li:first"));
		$product.html(arrTop[i]);
		$product.hover(function(){
			$(this).css({color:"orange",textDecoration:"underline"});
		},function(){
			$(this).css({color:"",textDecoration:"none"});
		})
	}	
	
	//-----封装a划过函数-----	
	function hover2(obj){
		for(var i=0;i<obj.length;i++){
			obj.eq(i).hover(function(){
				$(this).css({color:"#eb1539",textDecoration:"underline"});
			},function(){
				$(this).css({color:"",textDecoration:"none"});
			});
		}
	}
	
	
	
	
	
	
	
	
	
	
//----------------------balance-------------------------------------
	//-----a划过效果-----
	hover2($(".footer_l a"));
	$(".about a:first").css({borderLeft:"none"});
	$(".about a:last").css({borderLeft:"none",paddingLeft:0});
	hover2($(".about a"));
	hover2($(".end a"));

	
	
	
	
	
})
