 $(function(){
 	var docao = $(window).height();
 	console.log(docao);
 	$('.container-fluid').css({'height':docao});

 	$(window).resize(function(){
	 	var docao = $(window).height();
	 	console.log(docao);
	 	$('.container-fluid').css({'height':docao});

 	})   
})

	//khi click vao nut menu
	$('.nutquay').click(function(){
		$('menucanh').addClass('ra');
		return false;
	})
 