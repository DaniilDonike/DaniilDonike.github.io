var turnon = function(){
	$('.button').click(function() {
		$('.menu').css({
			'transform':' translateY(0)'
		});
	});

	$('.close').click(function() {
				$('.menu').css({
			'transform':' translateY(-100%)'
		});
	});
};


var pov = setInterval(
	turnon()
	);