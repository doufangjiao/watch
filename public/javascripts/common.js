$("#cancel").click(function(){
		$("#cover-wrap").css({"display":"none"});
	});
	$("#search").click(function(){
		$("#cover-wrap").css({"display":"block"});
	});
	$("#cover").click(function(event){
	    event.stopPropagation();
	});
	$("#cover-wrap").click(function(){
	   $("#cover-wrap")[0].style.display = "none";
	});


$(".search-three").click(function(){
	$("#sidebar").stop(true).animate({left:"+0"},"slow");
	// $("#sidebar").css({"left":"0"});
	$("#sidebar-wrap").css({"display":"block"});
	
});
$("#sidebar").click(function(event){
    event.stopPropagation();
});
$("#sidebar-wrap").click(function(){
	$("#sidebar").stop(true).animate({left:"-260px"},"slow");
    $("#sidebar-wrap")[0].style.display = "none";
});


	window.onload = function(){

		  var oTop = document.getElementById("back");
		  var screenw = document.documentElement.clientWidth || document.body.clientWidth;
		  var screenh = document.documentElement.clientHeight || document.body.clientHeight;
		  oTop.style.left = screenw - oTop.offsetWidth +"px";
		  oTop.style.top = screenh - oTop.offsetHeight + "px";
		  window.onscroll = function(){
		    var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
		    oTop.style.top = screenh - oTop.offsetHeight + scrolltop +"px";
		  }
		  oTop.onclick = function(){
		    document.documentElement.scrollTop = document.body.scrollTop =0;
		  }
	} 