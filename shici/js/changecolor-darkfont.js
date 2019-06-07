		window.onload = function(){
		changeColor();
		}
		function changeColor(){
		/*var colorList = ["#3d3b4f","#75664d","#a78e44","#ae7000","#b35c44","#a88462","#845a33","#21a675","#057748","#789262","#50616d","#41555d","#db5a6b","#a98175","#9d2933","#1685a9","#065279","#003472","#2e4e7e","#4a4266","#426666","#815463","#003371","#56004f","#c93756","#cb3a56","#161823","#5d513c","#549688","#d9b611","#0aa344"];*/
		var colorList = ["#f6bfbc","#d0af4c","#deb068","#e6b422","#d9a62e","#c89932","#38b48b","#80aba9","#8b968d","#b79b5b","#f5b199","#80989b","#c4a3bf","#eebbcb","#e8d3c7","#e8d3d1","#e5abbe","#e4ab9b","#d8a373","#9d896c","#a89dac","#9e8b8e","#cd8c5c","#cbb994","#95949a","#d6c6af","#bfa46f","#9e9478","#a59564","#c7b370","#dcd3b2","#a2d7dd","#abced8","#918754","#ada250","#d3cbc6","#d4dcd6","#c8c2be","#83ccd2","#a1a46d","#59b9c6","#d7cf3a","#c5c56a","#c3d825","#e0ebaf","#d8e698","#c7dc68","#aacf53","#b9d08b","#f8f4e6","#ede4cd","#f8b862","#cee4ae","#ede1a9","#e4dc8a","#a8c97f","#9ba88d","#f8e58c","#c8d5bb","#c1d8ac","#a8bf93","#f2c9ac","#93ca76","#fddea5","#fce2c4","#badcad","#c0c6c9","#dddcd6","#afafb0","#f4dda5","#bed2c3","#efcd9a","#ffd900","#e0c38c","#f3bf88","#fcd575","#fbd26b","#eec362","#bed3ca","#92b5a9","#ebd842","#7ebeab","#fbca4d","#fcc800","#e6b422"];
		for(var i=0;i<colorList.length;i++){
		var bgColor = getColorByRandom(colorList);
		}
		function getColorByRandom(colorList){
		var colorIndex = Math.floor(Math.random()*colorList.length);
		var color = colorList[colorIndex];
		colorList.splice(colorIndex,1);
		return color;
		}
			/*document.body.bgColor =bgColor;*/
		document.getElementById('cb').style.background=bgColor;
		}	// JavaScript Document