document.addEventListener("DOMContentLoaded",function(){
	// bien su dung 
	var bacham = document.getElementById('bacham');
	var hienthi_bacham = document.getElementsByClassName('nutbacham_noidung');
	var hienthi_bacham = hienthi_bacham[0];

	//su dung ham onclick
	bacham.onclick = function(){
		hienthi_bacham.classList.toggle('hienthi_bacham');
		console.log('Click ba cham');
	}
},false)
