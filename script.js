
$(document).on('ready',function(){
	
	
	$(".mole").addClass("inactive");


	var score=0;
	
	//$("#container").css( 'cursor', 'url(mallet.png), auto' );

	$(".mole").click(function() {
	//alert("!! whaka !!");
	score = score+1;
	
	$(".score span").html(score);
	
		//if ($(this).hasClass("active")) {
			$(this).addClass("explode").delay( 800 ).hide(0);
		//}
		
	});

	
    setInterval(whaka,500);
    
    
});


	function whaka(){
		var mole = $(".mole").toArray();
		var elemlength = mole.length;
		var randomnum = Math.floor(Math.random()*elemlength);
		var randomitem = mole[randomnum];
		//$(randomitem).css("display", "block").addClass("active");
		$(randomitem).removeClass("explode");
		
		$(randomitem).removeClass("inactive");
		$(randomitem).addClass("active");
		
		//delay goes here
		setTimeout(function() {
		$(randomitem).addClass("inactive");	
		$(randomitem).removeClass("active");
		},1000);
		
	}
	
	

	

