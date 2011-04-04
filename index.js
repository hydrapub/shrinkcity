var count =0;
window.onload = init;
function init(){
	intro(); 	
}
function intro(){
	$("#scene0").addClass("reveal").find(".teller").addClass("reveal");
	$("img.center-img").addClass("zoom");
	$("#scene0").click(function(){
		$(this).hide().next().addClass("reveal");
		scene01();	
	});
}
function scene01(){
	$("#scene0").detach();
	$("#scene01").find(".teller").addClass("reveal");
	$(".charactor-area").click(function(){
		count = count+1;
		if(count ==1){				
		$(this).find(".bubble-to-left").addClass("bubble-bounce").css({opacity:1});
		}else if(count ==2){
			$(".chosen-panel").addClass("move-up");
		}else if(count ==4){
			$(".panel > div.charactor-holder").detach();
			$(".charactor-response-area img.selected").addClass("reveal");
		}			
	});	
	$(".chosen-panel").find("li#emo1 a").click(function(){
		moveDown();		
		$(".bubble-to-left-player").addClass("bubble-bounce").css({opacity:1});	
		$(".charactor-response-area img#01").addClass("selected");
		
	});
	$(".chosen-panel").find("li#emo2 a").click(function(){
		moveDown();		
		$(".bubble-to-right-player").addClass("bubble-bounce").css({opacity:1});
		$(".charactor-response-area img#02").addClass("selected");
	});
}
function moveDown(){
	$(".chosen-panel").removeClass("move-up");
	$(".charactor-area").addClass("blur");
	count = count+1;
}
/*function scene02(){
	
}*/