jQuery(document).ready(function($){
	var effect=$(this).data('effect');
	$('.cfb-flip').each(function (){
		
	var effect=$(this).data('effect');
	$(this).flip({
	axis:effect,
	trigger: 'hover'
	});
	
	});

	$('.cfb-face a').on('touchstart',function(e){
		e.stopPropagation();
	})

	$('.cfb-flip').each(function(){ 
	$(this).on('touchstart', function(){
	$(this).flip('toggle'); 
	}); 
	});

	
	$('.cfb-flip[data-height="equal"]').each(function(){ 	
		var maxHeight = 0;
		
		$('.cfb-data').each(function(){
			if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
		});
		
		$('.cfb-flip[data-height="equal"] .cfb-data').height(maxHeight);

	});

});

