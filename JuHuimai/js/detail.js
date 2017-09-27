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
	
//-------------------------nav-------------------------------------------
	
	$(".p1 a:first").css({background:"#e21939",color:"#fff"});
	$(".p1 a").click(function(){
		$(this).css({background:"#e21939",color:"#fff"});
		$(this).siblings().css({background:"#fff",color:"#000"});
	});
	
	//-----选项卡-----
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
	
	//-----封装a划过函数-----
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
	
//------------------------details--------------------------------------------
	//-----划过效果-----
	hover2($(".pDetail a"));
	$(".bgf5 span").hover(function(){
		$(this).css({background:"#fff"});
		$(".hider").show();
	},function(){
		$(this).css({background:""});
		$(".hider").hide();
	});
	
	//-----加减号点击数字变化-----
	
	var val=$("#text").val();
	var num=$(".p1 strong").html();
	var sub;
	$("#btn1").click(function(){
		val--;
		if(val<1){
			val=1;
		}
		sub=num*val;
		$("#text").val(val);
		$(".p1 strong").html(sub.toFixed(1));
	});
	$("#btn2").click(function(){
		val++;
		sub=num*val;
		$("#text").val(val);
		$(".p1 strong").html(sub.toFixed(1));
	})
	
	//-----放大镜效果------
	
	$("#dragmove").hover(function(){
		$("#moveImg").show();
		$(".enlarge").show();
	},function(){
		$("#moveImg").hide();
		$(".enlarge").hide();
		
	});
	$("#dragmove").mousemove(function(ev){
		ev=ev||event;
		var L=ev.clientX-$("#moveImg").width()/2-$("#dragmove").offset().left;
		var T=ev.clientY-$("#moveImg").height()/2-$("#dragmove").offset().top;
		
		L=0;
		if(T<0){
			T=0;
		}
		if(T>$("#dragmove").height()-$("#moveImg").height()){
			T=$("#dragmove").height()-$("#moveImg").height()
		}
		$("#moveImg").css({
			left:L+"px",
			top:T+"px"
		});
		$(".enlarge img").css({
			left:-1.11*L+"px",
			top:-1.11*T+"px"
		});
	});
	
	//-----列表图片点击变换图片效果-----
	
	$(".draglist img").click(function(){
		$("#dragmove").css({background:"url(../img/drag"+$(this).index()+".jpg) no-repeat",backgroundSize:"cover"});
		$(".enlarge").html("<img src='../img/drag"+$(this).index()+".jpg' alt='' />");
	});	
	
	//-----二级菜单用json插入并移上效果----
	
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
	
	//-----列表项菜单用json插入并移上效果------
	
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

//----------------------goodsList-------------------------------------
	
	var arrImg=["img/mainimg1.jpg","img/mainimg2.jpg","img/mainimg3.jpg","img/mainimg4.jpg","img/mainimg5.jpg",
	"img/mainimg6.jpg","img/mainimg7.jpg","img/mainimg8.jpg","img/mainimg9.jpg"];
	var arrText=["优雅100经典设计款全棉斜纹印花四件套","LOVO 罗莱家纺出品全棉斜纹床品套件四件套 兔斯基","雅鹿全棉四件套纯棉套件床上用品 回忆蓝 1.8米床",
	"现货带票【送钢化膜皮套】Huawei/华为 P8...","Xiaomi/小米 红米手机3 红米3 全网通手机","小米Xiaomi/小米 小米Note顶配版全网...",
	"Huawei/华为 荣耀6 Plus高配版 移动...","康婷瑞倪维儿活肤营养水80ml","2016春秋季新款韩版胖MM大码女装宽松中长款假..."];
	var arrNum=["189.0","399.0","333.0","3980.0","750.0","2699.0","78.0","97.0","78.0"];
	for(var i=0;i<9;i++){
		var $li=$("<li></li>").appendTo($(".goodsUl"));
		var $liImg=$("<img src='../"+arrImg[i]+"' title='"+arrText[i]+"' />").appendTo($li);
		var $div=$("<div></div>").appendTo($li);
		var $p=$("<p>"+arrNum[i]+"</p>").appendTo($div);
		var $p=$("<p>"+arrText[i]+"</p>").appendTo($div);
	}
	
	//-----div鼠标以上向上运动------
	
	$(".goodsUl li").hover(function(){
		$(".goodsUl li div").eq($(this).index()).stop(true).animate({top:107},200);
	},function(){
		$(".goodsUl li div").eq($(this).index()).stop(true).animate({top:133},200);
	});
	
	//-----点击向左向右-----
	
	var L=$(".goodsUl").offset().left-$(".goodsDiv").offset().left;
	$(".goodsLeft").click(function(){
		L=L+190;
		if(L>0){
			L=0;
		}
		$(".goodsUl").stop(true).animate({left:L},500);
	});
	$(".goodsRight").click(function(){
		L=L-190;
		if(L<-570){
			L=-570;
		}
		$(".goodsUl").stop(true).animate({left:L},500);
	});

//------------------------recommend---------------------------------------
	
	//-----添加li并添加定时器实现向上向下运动切换-----
	
	for(var i=0;i<arrImg.length;i++){
		var $li=$("<li></li>").appendTo($(".showUl"));
		var $liImg=$("<img src='../"+arrImg[i]+"' />").appendTo($li);
		var $p=$("<p>"+arrText[i]+"</p>").appendTo($li);
		var $p=$("<p style='color:red;'>"+arrNum[i]+"</p>").appendTo($li);
	}
	
	//-----封装向上运动的定时器函数-----
	
	function move1(){
		var timer=null;
		var T=0;
		timer=setInterval(function(){
			T=T-150;
			if(T<-750){
				clearInterval(timer);
				timer=null;
				move2();
			}
			$(".showUl").stop(true).animate({top:T});
			
		},2000);
	}
	
	//-----封装向下运动的定时器函数-----
	
	function move2(){
		var time=null;
		var T=-900;
		time=setInterval(function(){
			T=T+150;
			if(T>-150){
				clearInterval(time);
				time=null;
				move1();
			}
			$(".showUl").stop(true).animate({top:T});
			
		},2000);
	}
	move1();	
	
//-----------------------posTop------------------------------------
	
	//-----定位划过效果-----
	
	$(".posTop a").hover(function(){
		$(this).css({background:"red",border:"1px solid red",color:"#fff"});
	},function(){
		$(this).css({background:"",border:"",color:""});
		scrollfn();
	});
	
	//-----左边定位点击效果-----
	
	$(".posTop a").click(function(){
		$(this).css({background:"red",border:"1px solid red",color:"#fff"}).
		siblings().css({background:"",border:"",color:""});
		$("body,html").animate({scrollTop:$(".recomRight div").eq($(this).index()).offset().top-37},200);
	});	
	
	//-----右边定位点击效果-----
	
	$(".posTop2 a").click(function(){
		$(this).css({background:"orange",color:"#fff"}).
		siblings().css({background:"",color:""});
		$("body,html").animate({scrollTop:$(".recomRight div").eq($(this).index()-1).offset().top-37},200);
		return false;
	});
	
	//-----文档滑动效果-----
	
	$(window).scroll(function(){
		scrollfn();
	});
	
	//-----封装文档滑动效果函数-----
	
	function scrollfn(){
		var $scroll=$(document).scrollTop();
		if($scroll>1041){
			$(".posTop").css({position:"fixed",top:0});
			$(".posTop2").css({position:"fixed",top:0});
		}else{
			$(".posTop").css({position:"absolute",top:1041});
			$(".posTop2").css({position:"absolute",top:1041});
		}
		if($scroll<$(".recomRight div").eq(1).offset().top-39){
			fn3(0,0);
		}else if($scroll<$(".recomRight div").eq(2).offset().top-39){
			fn3(1,1);
		}else if($scroll<$(".recomRight div").eq(3).offset().top-39){
			fn3(2,2);
		}else if($scroll<$(".recomRight div").eq(4).offset().top-39){
			fn3(3,3);
		}else if($scroll<$(".recomRight div").eq(5).offset().top-39){
			fn3(3,4);
		}else{
			fn3(3,5);
		}
		function fn3(l,t){
			$(".posTop a").eq(l).css({background:"red",border:"1px solid red",color:"#fff"}).
			siblings().css({background:"",border:"",color:""});
			$(".posTop2 a").eq(t).css({background:"orange",color:"#fff"}).
			siblings().css({background:"",color:""});
		}
	}

//----------------------footend-------------------------------------
	//-----a划过效果-----
	hover2($(".footer_l a"));
	$(".about a:first").css({borderLeft:"none"});
	$(".about a:last").css({borderLeft:"none",paddingLeft:0});
	hover2($(".about a"));
	hover2($(".end a"));
});
