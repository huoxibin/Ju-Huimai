$(document).ready(function(){
//---------------------------------------regTop------------------------------------------------------
	//注册方式切换
	$(".borderNo").eq(0).click(function(){
		$(this).css({border:"1px solid #e2e2e2",borderBottom:"1px solid #fff",color:"red"}).
		siblings(".borderNo").css({border:"1px solid #fff",borderBottom:"1px solid #e2e2e2",color:""});
		$(".divInp").eq(0).html("<input class='inp1 bginp' type='text' placeholder='手机号' /><span>-手机号码不是一个有效的号码</span>");
		$(".pInp1").html('<input class="inp2 bginp" type="text" placeholder="手机验证码" /><input class="inp3" type="button" value="获取手机验证码" />');
		
	});
	$(".borderNo").eq(1).click(function(){
		$(this).css({border:"1px solid #e2e2e2",borderBottom:"1px solid #fff",color:"red"}).
		siblings(".borderNo").css({border:"1px solid #fff",borderBottom:"1px solid #e2e2e2",color:""});
		$(".divInp").eq(0).html("<input class='inp1 bginp' type='text' placeholder='email' /><span>-邮箱地址不能为空</span>");
		$(".pInp1").html('<input class="inp2 bginp" type="text" placeholder="邮箱验证码" /><input class="inp3" type="button" value="获取邮箱验证码" />');
	});
	
	
	
	
	
	
	
	
	
	
	
})
