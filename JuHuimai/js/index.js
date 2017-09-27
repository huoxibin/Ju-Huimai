$(document).ready(function(){	
//---------------------------list-----------------------------------------
	
	//-----右侧添加背景-----
	for(var i=0;i<$(".research p").length;i++){
		$(".research p").eq(i).css({background:"url(img/right"+(i+1)+".jpg) no-repeat 9px 6px"});
	  	remove($(".research p"),i);
	}
	
	//-----右侧划过函数------
	function remove(obj,l){
		obj.eq(l).hover(function(){
			$(this).css({background:"red"});
			$(this).stop(true).animate({top:-45},300);
		},function(){
			$(this).css({background:"url(img/right"+(l+1)+".jpg) no-repeat 9px 6px"});
			$(this).stop(true).animate({top:0},300);
		});
	}
	
	//-----购物车划过效果-----
	$(".car").hover(function(){
		$(this).css({background:"red url(img/car.jpg) no-repeat 8px 10px"});
	},function(){
		$(this).css({background:""});
	});
	
	$(window).scroll(function(){
		scrollTop();
	});
	
	//-----文档滑动底端显示以及点击回到顶部函数------
	function scrollTop(){
		var $scroll=$(document).scrollTop();
		if($scroll>1000){
			$(".hid").stop(true).animate({bottom:0},100);
		}else{
			$(".hid").stop(true).animate({bottom:-45},100);
		}
		if($scroll>$(".floor").eq(0).offset().top){
			$("#location").show();
		}else{
			$("#location").hide();
		}
		//-----楼层效果判断初始------
		
		/*if($scroll<$(".floor").eq(1).offset().top){
			fn1(0);
		}else if($scroll<$(".floor").eq(2).offset().top){
			fn1(1);
		}else if($scroll<$(".floor").eq(3).offset().top){
			fn1(2);
		}else if($scroll<$(".floor").eq(4).offset().top){
			fn1(3);
		}else if($scroll<$(".floor").eq(5).offset().top){
			fn1(4);
		}else if($scroll<$(".floor").eq(6).offset().top){
			fn1(5);
		}else if($scroll<$(".floor").eq(7).offset().top){
			fn1(6);
		}else if($scroll>=$(".floor").eq(7).offset().top){
			fn1(7);
		}*/
		
		//-----楼层效果判断优化------
		
		var l=Math.floor(($scroll-$(".floor").eq(1).offset().top)/710)+1;
		$("#location li").eq(l).find(".num").hide().siblings(".word").css({background:"red",color:"#fff",display:"block"});
		$("#location li").eq(l).siblings("li").find(".num").css({background:"",color:"",display:"block"}).siblings(".word").hide();
		
	}
	
	//-----楼层点击效果-----
   	$("#location li").click(function () { 
        $("body,html").animate({scrollTop:$(".floor").eq($(this).index()).offset().top},200);
   	});	
   	
   	//-----楼层划过效果-----
	$("#location li").hover(function () {
        $(this).find(".num").hide().siblings(".word").css({ display: "block", background:"red", color: "#fff" });
    }, function () {
        $(this).find(".num").css({display:"block"}).siblings(".word").hide().css({ display:"none"});
   		scrollTop();
    });
        
	var $top=$("body").offset().top;
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
	
	
//-----------------bannner---------------------
	var num=1;
	var timer=null;
	function time(){
		timer=setInterval(function(){
			$(".banner").css({
				background:"url(img/banner"+(num%7+1)+".jpg) no-repeat scroll center center"
			});
			$(".banner_c p span").eq(num%7).css({background:"red",opacity:"1"}).
			siblings().css({background:"#333",opacity:"0.5"});
			num++;
		},3000);
	}
	time();
	$(".banner_c p span").hover(function(){
		clearInterval(timer);
		timer=null;
	},function(){
		time();
	});
	for(var i=0;i<$(".banner_c p span").length;i++){
		$(".banner_c p span").eq(i).css({left:585+i*28+"px"});
		$(".banner_c p span:first").css({background:"red",opacity:"1"});
		$(".banner_c p span").eq(i).click(function(){
			clearInterval(timer);
			timer=null;
			$(this).css({background:"red",opacity:"1"}).siblings().css({background:"#333",opacity:"0.5"});
			$(".banner").css({
				background:"url(img/banner"+($(this).index()+1)+".jpg) no-repeat scroll center center"
			});
			num=$(this).index();
		});
	}
	$(".banner_c p span")
	
	//-----二级菜单用json插入并滑动效果-----
	$.get("json/index.json",function(msg){
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
			},100);	
		});
	}
	
//---------------------------main-------------------------------------------------

	var arrTitle=["泸州老窖官方品牌旗舰店","北大仓官方品牌旗舰店","枝江酒官方品牌旗舰店","五粮液官方品牌旗舰店","今世缘官方品牌旗舰店","扳倒井官方品牌旗舰店","伊力特官方品牌旗舰店",
	"酒鬼酒官方品牌旗舰店","剑南春官方品牌旗舰店","经典玉液官方品牌旗舰店","厚工坊官方品牌旗舰店","杜康官方品牌旗舰店","金六福官方品牌旗舰店","杏花酒家官方旗舰店","迎驾贡酒官方品牌旗舰店",
	"水井坊官方品牌旗舰店","双喜酒官方品牌旗舰店","茅台白金酒品牌旗舰店","一品坊官方品牌旗舰店","王祖烧坊官方旗舰店","衡水老白干官方品牌旗舰店","伊力王官方品牌旗舰店","贵州五星官方品牌旗舰店",
	"兰陵官方品牌旗舰店","宝丰官方品牌旗舰店","黄金酒官方品牌旗舰店","黔茅古酱官方品牌旗舰店","丛台官方品牌旗舰店","星芝官方品牌旗舰店","九星官方品牌旗舰店","汾酒集团祥和官方品牌旗舰店","汤沟官方品牌旗舰店",
	"古越龙山品牌旗舰店","舍得官方品牌旗舰店","中酿酒鬼官方品牌旗舰店","天地缘官方品牌旗舰店","董酒官方品牌旗舰店","古贝春官方品牌旗舰店","陈坛老窖官方品牌旗舰店","珠海全达官方旗舰店","俊景洋酒城品牌旗舰店",
	"百加得官方品牌旗舰店","真露官方品牌旗舰店","詹姆士品牌旗舰店","黄尾袋鼠品牌旗舰店","卡斯特品牌旗舰店","茅台葡萄酒品牌旗舰店","丁闻品牌旗舰店","御马酒庄官方品牌旗舰店","盛世夏都官方品牌旗舰店","王朝国际品牌旗舰店",
	"越千年品牌旗舰店","尼雅官方品牌旗舰店","玛丽官方品牌旗舰店","祁连传奇官方品牌旗舰店","人头马君度官方旗舰店"]
	for(var i=0;i<18;i++){
		var $Li=$("<li></li>").appendTo($("#main_t ul:first"));
		$Li.html("<img src='img/alcohol"+(i+1)+".jpg' title='"+arrTitle[i]+"' />");
	}
	for(var i=0;i<10;i++){
		var $Li=$("<li></li>").appendTo($("#main_t ul:last"));
		$Li.html("<img src='img/alcohol"+(i+19)+".jpg' />");
	}
	for(var i=0;i<11;i++){
		var $Li=$("<li></li>").appendTo($("#main_c ul"));
		$Li.html("<img src='img/alcohol"+(i+29)+".jpg' />");
	}
	for(var i=0;i<17;i++){
		var $Li=$("<li></li>").appendTo($("#main_b ul"));
		$Li.html("<img src='img/alcohol"+(i+40)+".jpg' />");
	}
	$(".main>div:first").show();
	$(".main li img").hover(function(){
		$(this).stop(true).animate({left:-100},500);
	},function(){
		$(this).stop(true).animate({left:0},500);
	});
	$("#main_t span:last").css({left:1140});
	$("#main_t span:first").click(function(){
		$("#doubLeft").stop(true).animate({left:0},500);
	});
	$("#main_t span:last").click(function(){
		$("#doubLeft").stop(true).animate({left:-1198},500);
	});
	$("#main_1 a:first").css({color:"#eb1539"});
	for(var i=0;i<$("#main_1 a").length;i++){
		$("#main_1 a").eq(i).hover(function(){
			$("#movePic").animate({left:$(this).offset().left-$(".main").offset().left},300);
			$(this).css({color:"#eb1539"}).siblings().css({color:"#67656a"});
			$(".main>div").eq($(this).index()).show().siblings("div").hide();
		},function(){
			
		});
	}
	//-----------------main1---------------------
	var arrTit=["聚会买商贸公司","好儿女易购连锁店","非凡旅行社","邯郸市至美家具","珍积成二毛烧鸡","奔跑吧！兄弟",
	"梨尚往来礼盒酒","丛台酒官方旗舰店","女人坊","麦格蓝灯饰","雷的灯饰","宴酒坊",
	"爱尚鲜花店","谦磊鑫干果店","聚会买家装自营店","聚会买农贸自营店","聚会买私房菜","聚会买经典玉液旗舰店",
	"聚会买泸州老窖官方旗舰店","聚会买景芝品牌旗舰店","商家店铺名称","聚会买泸州老窖官方品牌旗舰店","聚会买剑南春官方品牌旗舰店","聚会买水井坊旗舰店"]
	
	//----篮球运动效果-----
	for(var i=0;i<24;i++){
		var $Li=$("<li></li>").appendTo($(".main1Ul"));
		$Li.html("<img src='img/hot"+(i+1)+".jpg' title='"+arrTit[i]+"' />");
	}
	$(".main1Ul li img").hover(function(){
		$(this).stop(true).animate({top:10},300,function(){
			$(this).stop(true).animate({top:20},300,function(){
				$(this).stop(true).animate({top:15},200,function(){
					$(this).stop(true).animate({top:20},200,function(){
						$(this).stop(true).animate({top:18},100,function(){
							$(this).stop(true).animate({top:20},100)
							});
						});
					});
				});
			});
		},function(){
				
		});
		
//---------------------main2--------------------------------------------------

	var arrImg=["img/mainimg1.jpg","img/mainimg2.jpg","img/mainimg3.jpg","img/mainimg4.jpg","img/mainimg5.jpg",
	"img/mainimg6.jpg","img/mainimg7.jpg","img/mainimg8.jpg","img/mainimg9.jpg"];
	var arrText=["优雅100经典设计款全棉斜纹印花四件套","LOVO 罗莱家纺出品全棉斜纹床品套件四件套 兔斯基","雅鹿全棉四件套纯棉套件床上用品 回忆蓝 1.8米床",
	"现货带票【送钢化膜皮套】Huawei/华为 P8...","Xiaomi/小米 红米手机3 红米3 全网通手机","小米Xiaomi/小米 小米Note顶配版全网...",
	"Huawei/华为 荣耀6 Plus高配版 移动...","康婷瑞倪维儿活肤营养水80ml","2016春秋季新款韩版胖MM大码女装宽松中长款假..."];
	var arrNum=["189.0","399.0","333.0","3980.0","750.0","2699.0","78.0","97.0","78.0"];
	for(var i=0;i<1;i++){
		var $Li1=$("<li></li>").appendTo($("#mDiv1"));
		var $img=$("<img src='"+arrImg[8]+"' title='"+arrText[8]+"' />").appendTo($Li1);
		var $p1=$("<p></p>").appendTo($Li1);
		$p1.html(arrText[8]);
		var $span1=$("<span></span>").appendTo($Li1);
		$span1.html("商城价：<em>"+arrNum[8]+"</em>");
	}
	for(var i=0;i<2;i++){
		var $Li2=$("<li></li>").appendTo($("#mDiv2"));
		var $img=$("<img src='"+arrImg[7-i]+"' title='"+arrText[7-i]+"' />").appendTo($Li2);
		var $p2=$("<p></p>").appendTo($Li2);
		$p2.html(arrText[7-i]);
		var $span2=$("<span></span>").appendTo($Li2);
		$span2.html("商城价：<em>"+arrNum[7-i]+"</em>");
	}
	for(var i=0;i<5;i++){
		var $Li3=$("<li></li>").appendTo($("#mDiv3"));
		var $img=$("<img src='"+arrImg[i+2]+"' title='"+arrText[i+2]+"' />").appendTo($Li3);
		var $p3=$("<p></p>").appendTo($Li3);
		$p3.html(arrText[i+2]);
		var $span3=$("<span></span>").appendTo($Li3);
		$span3.html("商城价：<em>"+arrNum[i+2]+"</em>");
	}
	for(var i=0;i<5;i++){
		var $Li4=$("<li></li>").appendTo($("#mDiv4"));
		var $img=$("<img src='"+arrImg[i+1]+"' title='"+arrText[i+1]+"' />").appendTo($Li4);
		var $p4=$("<p></p>").appendTo($Li4);
		$p4.html(arrText[i+1]);
		var $span4=$("<span></span>").appendTo($Li4);
		$span4.html("商城价：<em>"+arrNum[i+1]+"</em>");
	}
	for(var i=0;i<5;i++){
		var $Li5=$("<li></li>").appendTo($("#mDiv5"));
		var $img=$("<img src='"+arrImg[i]+"' title='"+arrText[i]+"' />").appendTo($Li5);
		var $p5=$("<p></p>").appendTo($Li5);
		$p5.html(arrText[i]);
		var $span5=$("<span></span>").appendTo($Li5);
		$span5.html("商城价：<em>"+arrNum[i]+"</em>");
	}
	$("#mainDiv ul:last").show().siblings("ul").hide();
	$("#mainList li:last").css({
		borderBottom:"2px solid #e72645",
		color:"#b24155",
		background:"url(img/mainbg.jpg) no-repeat center bottom"
	});
	$("#mainList li").hover(function(){
		$(this).css({
			borderBottom:"2px solid #e72645",
			color:"#b24155",
			background:"url(img/mainbg.jpg) no-repeat center bottom"
		}).siblings().css({
			borderBottom:"2px solid #f1f1f1",
			color:"#666666",
			background:""
		});
		$("#mainDiv ul").eq($(this).index()).show().siblings("ul").hide();
	},function(){
		
	});
	hover2($("#mainDiv p"));
	
//-------------------------floorList-------------------------------------

	var arrList=[["芒果桃李","凤梨蓝莓","口香糖","棒棒糖","软糖","奶糖","果冻","杏仁","红枣"],
				["连衣裙","连体裤","短外套","风衣","POLO衫","迷彩裤","登山鞋","高跟鞋","拉杆箱"],
				["香水","底妆","腮红","眼部","唇部","沐浴","润肤","颈部","手足"],
				["iPhone","联通4G","电信4G","电池","智能手环","智能手表","智能眼镜","智能家居","体感车"],
				["电风扇","净化器","加湿器","吸尘器","取暖电器","饮水机","电饭煲","电磁炉","电炖锅"],
				["床品套件","被子","餐具","LED灯","装饰灯","收纳用品","雨伞雨具","浴室用品","净化除味"],
				["白酒","啤酒","养生酒","蜂蜜","茶叶","奶茶","麦片谷物","咖啡","果味冲调"],
				["特配奶粉","宝宝沐浴","儿童防晒","爽身粉","奶瓶清洗","孕妇护肤","浴室用品","吸奶器","理发器"]];
	var arrDivColor=["#8dd512","#ff9229","#2abff7","#fe7a65","#83cfff","#ffbb00","#84aeff","#c87bff"];
	var ulArr=[["精挑细选","保健食品","进口水果","糖果巧克力"],["精挑细选","女装馆","T恤","中长款半身裙"],
			   ["精挑细选","美容护肤","香水彩妆","面部护肤"],["精挑细选","网卡","热卖手机","手机配件"],
			   ["精挑细选","大 家 电","大家电","生活电器"],["精挑细选","家纺","家具","厨具"],
			   ["精挑细选","酒水","冲调饮品","饮料饮品"],["精挑细选","尿裤湿巾","玩具","婴儿尿裤"]];
	
	for(var i=0;i<$(".floor").length;i++){
		$(".floor_l h3").eq(i).html(i+1+"F<a href='javascript:;'>"+arrTop[i]+"</a>");
		for(var j=0;j<9;j++){
			var $A=$("<a href='javascript:;'></a>").appendTo($(".floorDiv").eq(i));
			$A.html(arrList[i][j]);
		}
		$(".floorDiv").eq(i).css({background:arrDivColor[i]});
		$(".floorImg").eq(i).html("<img src='img/floor"+(i+1)+".jpg' />");
		$(".divList").eq(i).css({borderTop:"1px solid"+arrDivColor[i]});
		$(".floor_r").eq(i).css({borderTop:"1px solid"+arrDivColor[i]});
		
		for(var j=0;j<4;j++){
			var $Li=$("<li></li>").appendTo($(".ulList").eq(i));
			$Li.html(ulArr[i][j]);
		}
		for(var j=0;j<4;j++){
			var $aUl=$("<ul></ul>").appendTo($(".divList").eq(i));
			//$aLi.html(ulArr[i][j]);
			for(var k=0;k<8;k++){
				var $aLi=$("<li></li>").appendTo($aUl);
				var $aImg=$("<img src='img/goods"+(k+1)+".jpg' />").appendTo($aLi);
				var $aP=$("<p></p>").appendTo($aLi);
				$aP.html(arrText[k]);
				var $aP=$("<p class='pLine'></p>").appendTo($aLi);
				$aP.html(arrNum[k]);
				var $aP=$("<p class='colorRed'></p>").appendTo($aLi);
				$aP.html(arrNum[k]);
				var $aA=$("<a href='javascript:;' title='加入购物车'></a>").appendTo($aLi);
				
			}
		}
		
		for(var j=0;j<14;j++){
			var $listLi=$("<li></li>").appendTo($(".imgList").eq(i));
			$listLi.html("<img src='img/logo"+(j+1)+".jpg' />");	
		}
		var $aFlist=$("<a href='javascript' /></a>").appendTo($(".floor_r").eq(i));
		$aFlist.html("<img src='img/flist"+(i+1)+".jpg' />");
		var $aUlist=$("<a href='javascript' /></a>").appendTo($(".floor_r").eq(i));
		$aUlist.html("<img src='img/ulist"+(i+1)+".jpg' />");
		
		
	}
	hover($(".floor_l h3 a"));
	//floorDiv里a划过效果；
	for (var i=0;i<$(".floorDiv").length;i++){
		floorHover($(".floorDiv"),i);
		liHover($(".ulList"),$(".divList"),i);
		posHover(i);
	}
	function floorHover(obj,l){
		obj.eq(l).children("a").hover(function(){
			$(this).css({color:"#fff",background:arrDivColor[l]});
		},function(){
			$(this).css({color:"#666465",background:"#fff"});
		});	
	}
	function liHover(obj,$abc,l){
		$abc.eq(l).children(" ul:first").show();
		obj.eq(l).children("li").css({borderBottom:"1px solid"+arrDivColor[l]});
		obj.eq(l).children("li:first").css({color:arrDivColor[l],border:"1px solid"+arrDivColor[l],borderBottom:"1px solid #fff"});
		obj.eq(l).children("li").hover(function(){
			$(this).css({color:arrDivColor[l],border:"1px solid"+arrDivColor[l],borderBottom:"1px solid #fff"})
			.siblings().css({color:"",border:"1px solid #dddddd",borderBottom:"1px solid"+arrDivColor[l]});
			$abc.eq(l).children("ul").eq($(this).index()).show().siblings().hide();
		},function(){
			
		});	
	}
	
	function posHover(l){
		$(".floor_b").eq(l).hover(function(){
			$(".posLeft").eq(l).toggle();
			$(".posRight").eq(l).toggle();
		});
		var L=$(".imgList").offset().left-$(".floor_b").offset().left;
		$(".posLeft").eq(l).click(function(){
			L=L+121;
			if(L>0){
				L=0;
			}
			$(".imgList").eq(l).animate({left:L},500);
		});
		$(".posRight").eq(l).click(function(){
			L=L-121;
			if(L<$(".floor_b").width()-$(".imgList").width()){
				L=$(".floor_b").width()-$(".imgList").width();
			}
			$(".imgList").eq(l).animate({left:L},500);
		});
	}
		
		
	//购物车功能
	
	/*var num=0;
	$(".divList a").click(function(){
		var $shop=$("<img src='img/goods1.jpg' />");
		($shop).appendTo($("body"));
		var L=$(".car").offset().left+$(".car").width()/2;
		var T=$(".car").offset().top+$(".car").height()/2;
		$shop.animate({left:L,top:T,width:0,height:0,opacity:0.3},1000,function(){
			$shop.remove();
			$(".car").html("购物车"+ ++num);
		});
	});	*/
		
		
		
	
	//-----------------shops---------------------
	var arrShop=["新丹兰.尚街","稽山新天地","乐颐电脑大厦","义商国际服装批发基地","北方装饰城","启信灯饰广场",
	"鑫港国际电器城","亚森家具城","国风购物广场","康德商场"]
	for(var i=0;i<10;i++){
		var $shopLi=$("<li></li>").appendTo($(".shopList"));
		var $aShop=$("<a href='javascript:;'></a>").appendTo($shopLi);
		$(".shopList li").eq(4).css({marginRight:0});
		$(".shopList li").eq(9).css({marginRight:0});
		$aShop.html("<img src=img/shops"+(i+1)+".jpg />");
		var $pShop=$("<p></p>").appendTo($shopLi);
		$pShop.html(arrShop[i]);
		var $div=$("<div></div>").appendTo($shopLi);
		$div.html("<img src=img/bord1.png />");
		$(".shopList li div").eq(5).html("<img src=img/bord2.png />");
	}
	for(var i=0;i<14;i++){
		var $wrapLi=$("<li></li>").appendTo($(".wrapList"));
		var $aWrap=$("<a href='javascript:;'></a>").appendTo($wrapLi);
		$(".wrapList li").eq(6).css({marginRight:0});
		$(".wrapList li").eq(13).css({marginRight:0});
		$aWrap.html("<img src='img/wrap"+(i+1)+".jpg' />");
	}
	
//--------------------------foot------------------------------------------
	for(var i=0;i<$(".foot a").length;i++){
		$(".foot a").eq(i).css({
			background:"url(img/sevices"+(i+1)+".jpg) no-repeat 13px 0"
		});
	}
	hover2($(".footer_l a"));
	for(var i=0;i<$(".data li").length;i++){
		$(".data li").eq(i).css({
			background:"url(img/data"+(i+1)+".jpg) no-repeat"
		});
	}
	$(".links a:last").css({borderRight:"none"});
	hover2($(".links a"));
	$(".about a:first").css({borderLeft:"none"});
	$(".about a:last").css({borderLeft:"none",paddingLeft:0});
	hover2($(".about a"));
	hover2($(".end a"));
	
});