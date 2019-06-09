document.addEventListener("DOMContentLoaded", function(){
	// body...
	var nut = document.getElementsByClassName('admin');
	var nut = nut[0];
	var table = document.getElementsByClassName('table');	
	console.log(nut);
	console.log(table[0]);
	console.log('chao Ngan');
	nut.onclick = function() {
		console.log('chao Chi Ngan aj');
		nut.classList.toggle('phanquyen');
	}

}, false)