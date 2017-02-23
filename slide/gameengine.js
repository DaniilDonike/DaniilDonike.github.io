var i = 1;

var left = function() {
	$('.no').click(function() {
		if(i == 3) {
			$('.cards2').removeClass('cards2').addClass('cards');
			i = 0;
		}
		$('#o'+ i).removeClass('cards').addClass('cards2');
		i++;
		console.log(i);
	});
}

var right = function(){
	$('.yes').click(function() {
		i--;
		$('#o'+ i).removeClass('cards2').addClass('cards');
		if(i == 0) {
			i = 1;
		}
		console.log(i);
	});
}



setInterval(left(), right());

























