		window.onload = function(){
		changeColor();
		}
		function changeColor(){
		var colorList = ["#3d3b4f","#75664d","#a78e44","#ae7000","#b35c44","#a88462","#845a33","#21a675","#057748","#789262","#50616d","#41555d","#db5a6b","#a98175","#9d2933","#1685a9","#065279","#003472","#2e4e7e","#4a4266","#426666","#815463","#003371","#56004f","#c93756","#cb3a56","#161823","#5d513c","#549688","#d9b611","#0aa344"];
		for(var i=0;i<colorList.length;i++){
		var bgColor = getColorByRandom(colorList);
		}
		function getColorByRandom(colorList){
		var colorIndex = Math.floor(Math.random()*colorList.length);
		var color = colorList[colorIndex];
		colorList.splice(colorIndex,1);
		return color;
		}
			document.body.bgColor =bgColor;
		}	// JavaScript Document