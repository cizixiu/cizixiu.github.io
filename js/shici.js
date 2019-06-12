
    jinrishici.load(function(result) {
        
        $("#jinrishici-sentence-user").html(		
			
             "<ul>" +
			        
			"<li><strong>诗 词：</strong>"+result.data.content+"</li>" +
			        "<li>《"+result.data.origin.title+"》</li>" +
						"<li>"+result.data.origin.author+"</li>" +
						"<li>"+result.data.origin.dynasty+"</li>" +
						
					"</ul>"
			        );
    });
    jinrishici.load(function(result) {
        
        $("#jinrishici-s").html(						        
			"<span>"+result.data.content+"</span>"+
			/*"<span>——"+result.data.origin.author+"（"+result.data.origin.dynasty+"）"+"</span>"*/

			        );
    });
