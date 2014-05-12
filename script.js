$(document).on('ready',function(){
    setInterval(whaka,500);
  });
	
	function whaka(){
		var mole = $(".mole").toArray();
		var elemlength = mole.length;
		var randomnum = Math.floor(Math.random()*elemlength);
		var randomitem = mole[randomnum];
		//$(randomitem).css("display", "block").addClass("active");
		$(randomitem).removeClass("explode").toggle().toggleClass("active");		
	}
	
	
$(document).ready(function(){

	//$("#container").css( 'cursor', 'url(mallet.png), auto' );

	$(".mole").click(function() {
	//alert("!! whaka !!");
		if ($(this).hasClass("active")) {
			$(this).css("display","none").addClass("explode");
		}
	});
	
});



