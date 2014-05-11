$( document ).ready(function() {
	

	$("button").click(function() {
		var mole = $(".mole").toArray();
		var elemlength = mole.length;
		var randomnum = Math.floor(Math.random()*elemlength);
		var randomitem = mole[randomnum];
		$(randomitem).css("display", "block").addClass("active");		
	});
	
	
	$(".mole").click(function() {
	
		if ($(this).hasClass("active")) {
			$(this).css("display", "none").removeClass("active");
		}
	});

});
