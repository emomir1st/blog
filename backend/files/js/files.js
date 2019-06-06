var nutphai = document.querySelector('.phai'),
	nuttrai =document.querySelector('.trai'),
	noidungslide =document.querySelector('.noidungslide');
 
// click vao nut phai thi cho nut trai hien len
// va slide dich sang 
nutphai.addEventListener('click',function(){
	// cho chinh no bien mat 
	this.classList.remove('active');
	// cho trai hien ra 
	nuttrai.classList.add('active');
	//xoa qay lai
	noidungslide.classList.remove('quaylai');
	// cho slide truot sang 
	noidungslide.classList.add('truotSang');
	
})
nuttrai.addEventListener('click',function(){
	// cho chinh no bien mat 
	this.classList.remove('active');
	// cho phai hien ra 
	nutphai.classList.add('active');
	// xoa class truot sang
	noidungslide.classList.remove('truotSang');
	// cho slide quay lai 
	noidungslide.classList.add('quaylai');
	
})
