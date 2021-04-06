function buttonclicked(){
	var inputfromprompt = prompt("What is your name?");
	if(inputfromprompt == "3"){
		alert("Correct");
		jquerywow();
	}
	else{
		alert("WRONG!!!");
	}
}
function jquerywow(){
	$("#load").fadeIn(1000).delay(2000).fadeOut(1000);
}