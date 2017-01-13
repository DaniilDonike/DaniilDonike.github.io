var rand = function(vvod) { // random function 
	vvod = $('input').val(); // from and to
	var rando = Math.floor(Math.random() * vvod), // random string
		textr = $('p').text(rando); // paragraf text
	console.log(rando); // inspection
}


var button = $('button').click(function() {
	rand(); // function call 
});
