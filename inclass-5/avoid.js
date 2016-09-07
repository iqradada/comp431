window.onload = function(e){
	
	document.getElementById(buttonDiv).style="position: relative";
	if (IsMouseOver(buttonDiv) && !e.shiftKey){ 
		var bd = document.getElementById(buttonDiv);
		goLeft(bd);
	}
}
function clickedMe (){
	document.getElementById(congrats).style="display:block";
}

function goRight(obj){             
	obj.style.right = 10px;
	window.setTimeout(goLeft, 100);
}
function goLeft(obj){
	obj.style.left = 10px;
	window.setTimeout(goRight, 100);
}