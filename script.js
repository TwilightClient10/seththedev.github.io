$(document).ready(function(){
	$("#intro").fadeIn(1000).delay(2000).fadeOut(1000, function(){
		$("#load").fadeIn(1000).delay(2000);
	});
	finished();
});
function finished(){
	$("#load").fadeOut(function(){
		$(".loader").fadeOut(1000);
		$("#done").fadeIn(100).delay(2000).fadeOut(1000);
		$("#close").fadeIn(1000);
	});
}