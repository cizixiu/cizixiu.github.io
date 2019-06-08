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
        break_line.innerHTML=content.replace(/、/g,"<br>"); 
	 var content=break_line.innerHTML;
	 break_line.innerHTML=content.replace(/！/g,"<br>");   
     	 var content=break_line.innerHTML;
	 break_line.innerHTML=content.replace(/：/g,"<br>"); 
	 var content=break_line.innerHTML;
	 break_line.innerHTML=content.replace(/？/g,"<br>");
   	 var content=break_line.innerHTML;
	 break_line.innerHTML=content.replace(/，/g,"<br>");
     var content=break_line.innerHTML;
	 break_line.innerHTML=content.replace(/唐代/g,"唐");
             var content=break_line.innerHTML;
	 break_line.innerHTML=content.replace(/宋代/g,"宋");
             var content=break_line.innerHTML;
	 break_line.innerHTML=content.replace(/元代/g,"元");     
        var content=break_line.innerHTML;
	 break_line.innerHTML=content.replace(/明代/g,"明");     
        var content=break_line.innerHTML;
	 break_line.innerHTML=content.replace(/清代/g,"清");     
        var content=break_line.innerHTML;
	 break_line.innerHTML=content.replace(/晋代/g,"晋");     
  

    });


