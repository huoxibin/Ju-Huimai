$(document).ready(function(){
	
	//----------------------------------------------list----------------------
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
	
	$(".car").hover(function(){
		$(this).css({background:"red url(../img/car.jpg) no-repeat 8px 10px"});
	},function(){
		$(this).css({background:""});
	});
	
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
	
	//----------------------------------------------header----------------------
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
	})
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
	
	//----------------------------------------------nav----------------------
	
	$(".p1 a:first").css({background:"#e21939",color:"#fff"});
	$(".p1 a").click(function(){
		$(this).css({background:"#e21939",color:"#fff"});
		$(this).siblings().css({background:"#fff",color:"#000"});
	});
	
	
	
	//选项卡
	$(".button a:first").css({background:"#fff",borderBottom:"1px solid #fff"});
	$(".button a:first").mouseover(function(){
		$(this).css({background:"#fff",borderBottom:"1px solid #fff"}).siblings().css({background:"#f7f7f7",borderBottom:"1px solid #e7e7e7"});
		$(".btnbox").show();
		$(".btnbox2").hide();
	});
	$(".button a:last").mouseover(function(){
		$(this).css({background:"#fff",borderBottom:"1px solid #fff"}).siblings().css({background:"#f7f7f7",borderBottom:"1px solid #e7e7e7"});
		$(".btnbox").hide();
		$(".btnbox2").show();
	});
	function hover(obj){
		for(var i=0;i<obj.length;i++){
			obj.eq(i).hover(function(){
				$(this).css({color:"#eb1539"});
			},function(){
				$(this).css({color:""});
			});
		}
	}	
	function hover2(obj){
		for(var i=0;i<obj.length;i++){
			obj.eq(i).hover(function(){
				$(this).css({color:"#eb1539",textDecoration:"underline"});
			},function(){
				$(this).css({color:"",textDecoration:"none"});
			});
		}
	}
	hover($(".boxLogin"));
	hover($(".top p a"));
	hover2($(".btnbox2 li a"));
	
	
	
	//----------------------------------------------content----------------------
	//--------轮播图---------
	var num=1;
	var timer=null;
	function time1(){
		timer=setInterval(function(){
			$(".content").css({
				background:"url(../img/content"+(num%3+1)+".jpg) no-repeat scroll center top"
			});
			$(".contSpot span").eq(num%3).css({background:"dodgerblue",height:20,width:20,opacity:1}).
			siblings().css({background:"#000",height:18,width:18,opacity:0.8});
			num++;
		},3000);
	}
	time1();
	$(".contSpot span").hover(function(){
		clearInterval(timer);
		timer=null;
		$(".content").css({
			background:"url(../img/content"+($(this).index()+1)+".jpg) no-repeat scroll center top"
		});
		$(this).css({background:"dodgerblue",height:20,width:20,opacity:1}).
		siblings().css({background:"#000",height:18,width:18,opacity:0.8});
		num=$(this).index();
	},function(){
		time1();
	});

	//-------------二级菜单-------------
	$.get("../json/fresh.json",function(msg){
		addCont(msg);
		contHover();
	});
	function addCont(json){
		for(var key in json){
			var catalog=json[key].catalog;
			var detail=json[key].detail;
			var $li=$("<li></li>").appendTo($(".contList"));
			var $a=$("<a class='acontList' src='javascript:;'>"+catalog+"</a>").appendTo($li);
			var $P=$("<p class='pCont'></p>").appendTo($li);
		
			var $div=$("<div class='divNav'></div>").appendTo($(".contNav"));
			var $aA=$("<a src='javascript:;' class='aCont'>"+catalog+"</a>").appendTo($div);
			var $span=$("<span class='spanCont'></span>").appendTo($div);
		
			var arr2=detail.split(" ");
			for(var j=0;j<arr2.length;j++){
				var $aP=$("<a src='javascript:;'>"+arr2[j]+"</a>").appendTo($P);
				var $aSpan=$("<a src='javascript:;'>"+arr2[j]+"</a>").appendTo($span);
			}
			hover($(".contList a"));
			hover($(".spanCont a"));
		}
	}
	function contHover(){
		var timer=null;
	  	$(".contList li").hover(
	  	function(){
	  		clearTimeout(timer);
			timer=null;
		    $(this).css({background:"#fff",color:"#fff",borderLeft:"3px solid red"});
		    $(".contNav").show();
		  	$(".contNav").css({top:$(this).index()*90});
		    $(".contNav .divNav").eq($(this).index()).show().siblings().hide();
	   	},function(){
			$(this).css({background:"",color:"",borderLeft:""});
			timer=setTimeout(function(){
				$(".contNav").hide();
			},20);	
	  });
		$(".contNav").hover(function(){
			clearTimeout(timer);
			timer=null;
			//$(".banner_l li").eq($(this).index()).css({background:"red",color:"#fff"});
			$(this).show();
		},function(){
			timer=setTimeout(function(){
				//$(".banner_l li").eq($(this).index()).css({background:"",color:""});
				$(".contNav").hide();
			},20);	
		});
	}
		
	$.get("../json/index.json",function(msg){
		addBanner(msg);
		bannerHover();
	});
	
	function addBanner(json){
		for(var key in json){
			var catalog=json[key].cat[0].catalog;
			var $liNav= $("<li>"+catalog+"</li>").appendTo($(".banner_l"));
			var catchild=json[key].cat[0].catchild;
			var $liP= $("<p>"+catchild+"</p>").appendTo($liNav);
			var $div=$("<div class='bannerNav'></div>").appendTo($("#bNav"));
			var $leftDiv=$("<div class='leftNav left'></div>").appendTo($div);
			var $divright=$("<div class='rightNav right'></div>").appendTo($div);
			for(var i=0;i<json[key].sub.length;i++){
				var subject=json[key].sub[i].subject;
				var detail=json[key].sub[i].detail;
				var $subUl=$("<ul></ul>").appendTo($leftDiv);
				var $liTitle=$("<li class='liTitle'></li>").appendTo($subUl);
				var $aA=$("<a src='javascript:;' class='aTitle'>"+subject+"</a>").appendTo($liTitle);
				var $span=$("<span></span>").appendTo($liTitle);
				var arr=detail.split(" ");
				for(var j=0;j<arr.length;j++){
					var $liDetail=$("<a src='javascript:;' class='liDetail'>"+arr[j]+"</a>").appendTo($span);
				}
			}
			for(var i=0;i<json[key].gro.length;i++){
				var groom=json[key].gro[i].groom;
				var list=json[key].gro[i].list;
				var $pgro=$("<p class='pGroom'>"+groom+"</p>").appendTo($divright);
				var arr1=list.split(" ");
				for(var j=0;j<arr.length;j++){
					var $agro=$("<a src='javascript:;' class='aGroom'>"+arr1[j]+"</a>").appendTo($divright);
				}
			}
		}
		hover2($("#bNav a"));
	};
	function bannerHover(){
		var timer=null;
		$(".hTop").hover(function(){
			clearTimeout(timer);
			timer=null;
			$(".banner_l").show();
		},function(){
			timer=setTimeout(function(){
				$(".banner_l").hide();
			},100);	
		});
	
	  	$(".banner_l li").hover(
	  	function(){
	  		clearTimeout(timer);
			timer=null;
		    $(this).css({background:"red",color:"#fff"});
		    $("#bNav").show();
		    if($(this).index()==0){
		  	    $("#bNav").css({top:0});
		    }else{
		  	    $("#bNav").css({top:($(this).index()*2-1)*32});
		    }
		    $("#bNav .bannerNav").eq($(this).index()).show().siblings().hide();
	   	},function(){
			$(this).css({background:"",color:""});
			timer=setTimeout(function(){
				$("#bNav").hide();
				$(".banner_l").hide();
			},100);	
	  });
		$("#bNav").hover(function(){
			clearTimeout(timer);
			timer=null;
			//$(".banner_l li").eq($(this).index()).css({background:"red",color:"#fff"});
			$(this).show();
		},function(){
			timer=setTimeout(function(){
				//$(".banner_l li").eq($(this).index()).css({background:"",color:""});
				$("#bNav").hide();
				$(".banner_l").hide();
			},100);	
		});
	}

//-------------------------------foodList-----------------------------------
	var arrtext=["跳过新鲜甜酸角 进口新鲜水果罗望子甜角","4斤装泰国进口龙眼 去枝 小核新鲜桂圆水果湿桂圆","南非进口红西柚葡萄柚 新鲜水果 酸爽味苦回甘",
				"（测试商品）安岳黄柠檬 2斤 新鲜柠檬水果 胜青柠檬 中果 非大果","（测试商品）山竹大果 约2斤 泰国进口水果 新鲜水果","（测试商品）海南青芒 芒果1-2个 约2斤装","（测试商品）苹果陕西红富士80#苹果水果10斤装 苹果 新鲜水果",
				"（测试商品）马陆夏黑葡萄1斤【3斤起拍】毁包赔 新鲜水果 黑提 无核 葡萄","蟹黄包180g 火锅丸子澳门豆捞食材蟹子包 蟹子丸 海鲜水产 鱼丸蟹类制品","悦胜 挪威超新鲜三文鱼 三文鱼中断刺身进口海鲜 广东2份包邮 三文鱼新鲜"]
	var arrnum=["53.3","39.5","47.0","20.0","28.0","20.0","85.0","20.0","19.0","78.0"];
	var arrval=["62.9","47.4","56.4","24.0","33.6","24.0","102.0","24.0","22.0","95.0"];
	function fn(l,Img){
		for(var i=0;i<10;i++){
			var $aLi=$("<li></li>").appendTo($(".foodUl").eq(l));
			if(i<5){
				$aLi.css({left:i*244,top:10});
			}else{
				$aLi.css({left:(i-5)*244,top:300})
			}
			var $aImg=$("<img src='../img/"+Img+(i+1)+".jpg' title='"+arrtext[i]+"' />").appendTo($aLi);
			var $aA=$("<a class='liA' href='detail.html'>"+arrtext[i]+"</a>").appendTo($aLi);
			var $aSpan1=$("<span class='redColor'>"+arrnum[i]+"</span>").appendTo($aLi);
			var $aSpan2=$("<span class='lineTh'>"+arrval[i]+"</span>").appendTo($aLi);
			var $aA2=$("<a class='liA2' href='javascript:;' title='加入购物车'></a>").appendTo($aLi);
			hover($aA);
			$aLi.hover(function(){
				$(this).css({height:268,border:"2px solid red"});
				$(".liA2").eq($(this).index()+l*10).show();
			},function(){
				$(this).css({height:260,border:""});
				$(".liA2").eq($(this).index()+l*10).hide();
			});
		}
	}
	fn(0,"food");
	fn(1,"candy");
	fn(2,"milk");
	
	
	
	//------------------looklike---------------
	for(var i=0;i<$(".lookLike li").length;i++){
		$(".lookLike li").eq(i).css({left:i*169});
	}
	var timer=null;
	function time(){
		timer=setInterval(function(){
			move();
		},2000);
	}
	time();	
	
	function move(){
		$(".lookLike li:first").stop(true).animate({left:-169},500,function(){
			$(".lookLike li:first").css({left:$(".lookLike li:last").offset().left-$(".lookLike").offset().left+169}).appendTo($(".lookLike"));
		});
		$(".lookLike li:first").next().stop(true).animate({left:0},500).next().stop(true).animate({left:169},500)
		.next().stop(true).animate({left:338},500).next().stop(true).animate({left:507},500);
	}
	function move2(){
		$(".lookLike li:last").stop(true).animate({left:845},500,function(){
			$(".lookLike li:last").css({left:$(".lookLike li:first").offset().left-$(".lookLike").offset().left-169}).prependTo($(".lookLike"));
		});
		$(".lookLike li:first").stop(true).animate({left:169},500).next().stop(true).animate({left:338},500)
		.next().stop(true).animate({left:507},500).next().stop(true).animate({left:676},500);
	}
	$(".lookLike").hover(function(){
		clearInterval(timer);
		timer=null;
	},function(){
		time();
	});
	$(".spanLeft").click(function(){
		clearInterval(timer);
		timer=null;
		move();
	});
	$(".spanRight").click(function(){
		clearInterval(timer);
		timer=null;
		move2();
	});
//---------------------------footend--------------------------------
	hover2($(".footer_l a"));
	$(".about a:first").css({borderLeft:"none"});
	$(".about a:last").css({borderLeft:"none",paddingLeft:0});
	hover2($(".about a"));
	hover2($(".end a"));
})
