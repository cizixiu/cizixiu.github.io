

jinrishici.load(function(result) {
        
        $("#jinrishici-sentence-user").html(		
			
             "<ul>" +	
			        "<li>经典句子："+result.data.content+"</li>" +	
			        "<li>诗词名字：《"+result.data.origin.title+"》</li>" +
						"<li>诗词作者："+result.data.origin.author+"</li>" +
						"<li>作者时代："+result.data.origin.dynasty+"</li>" +
					"</ul>"+	
			"<div >诗词全文："+result.data.origin.content+"</div>" 
			        );
    });
    jinrishici.load(function(result) {
       
        $("#jinrishici-s").html(						        
			"<span>"+result.data.content+"</span>"+
			"<span>——"+result.data.origin.author+"（"+result.data.origin.dynasty+"）"+"</span>"

			        );
    });
    jinrishici.load(function(result) {
        
        $("#jinrishici-sentence-quanwen").html(		
			"<p class='s-title'>"+result.data.origin.title+"</p>" +
			"<p class='s-author'>"+result.data.origin.dynasty+"·"+result.data.origin.author+" " +"</p>" +
			
			"<p class='s-content'>"+result.data.origin.content+"</p>" 
			        );
	 var break_line=document.getElementById("jinrishici-sentence-quanwen");
	 var content=break_line.innerHTML;
	 break_line.innerHTML=content.replace(/。/g,"<br>");  
	 var content=break_line.innerHTML;
	 break_line.innerHTML=content.replace(/,/g,""); 
	 var content=break_line.innerHTML;
	 break_line.innerHTML=content.replace(/！/g,"<br>");
	 var content=break_line.innerHTML;
	 break_line.innerHTML=content.replace(/？/g,"<br>");
   	var content=break_line.innerHTML;
	 break_line.innerHTML=content.replace(/，/g,"<br>");
        var content=break_line.innerHTML;
	 break_line.innerHTML=content.replace(/代/g,"");
    });
