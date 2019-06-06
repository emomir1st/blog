//Script for Menu Trasition 
$(function(){
	var docao = $(window).height();
	console.log(docao);
	$('.container-fluid').css({'height':docao});

	$(window).resize(function(){
		var docao = $(window).height();
		console.log(docao);
		$('.container-fluid').css({'height':docao});

	})   

	$('.nutmenu').click(function(){
		console.log('show responsive menu')
		$('.menucanh').addClass('ra');
		return false;
	})

	$('#tat').click(function(){
		console.log('close responsive menu')
		$('.menucanh').removeClass('ra');
		return false;
	})	

})

