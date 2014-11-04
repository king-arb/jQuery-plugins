$(document).ready(function(){
	var div1 = $("#div1").offset().top;
	var div2 = $("#div2").offset().top;
	var div3 = $("#div3").offset().top;
	var div4 = $("#div4").offset().top;
	var div5 = $("#div5").offset().top;
	$("#a1").click(function(){
		$('html, body').animate({scrollTop:div1}, 'slow');
		return false;
	});
		
	$("#a2").click(function(){
		$('html, body').animate({scrollTop:div2}, 'slow');
		return false;
	});
		
	$("#a3").click(function(){
		$('html, body').animate({scrollTop:div3}, 'slow');
		return false;
	});
		
	$("#a4").click(function(){
		$('html, body').animate({scrollTop:div4}, 'slow');
		return false;
	});
		
	$("#a5").click(function(){
		$('html, body').animate({scrollTop:div5}, 'slow');
		return false;
	});
		
});
