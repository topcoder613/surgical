jQuery(document).ready(function($){
	$('.flip').each(function (){
	var effect=$(this).data('effect');
	$(this).flip({
	axis:effect,
	trigger: 'hover'
		});
		
	});
		
	$('.face a').on('touchstart',function(e){
		e.stopPropagation();
	})
			
	$('.flip').each(function(){ 
		$(this).on('touchstart', function(){
		$(this).flip('toggle'); 
		}); 
	});
	
		
	$('.flip[data-height="equal"]').each(function(){ 	
		var maxHeight = 0;
		
		$('.cfb-section').each(function(){
			if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
		});
		
		$('.flip[data-height="equal"] .cfb-section').height(maxHeight);

	});
				
});



