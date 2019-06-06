document.addEventListener("DOMContentLoaded", function(){
	//khai bao bien can su dung trong app nay
	var tg = document.getElementsByClassName('tamgiac');
	var tamgiac = tg[0];
	console.log(tg[0]);
	var danhsach = document.getElementsByClassName('danhsach');
	var danhsach = danhsach[0];

	// su dung ham onclick va toggle Class cho tam giac doi mau
	tamgiac.onclick = function(){

		console.log('ban vua click');
		this.classList.toggle('tamgiactrang');
		danhsach.classList.toggle('profile_ra');
	}

}, false)