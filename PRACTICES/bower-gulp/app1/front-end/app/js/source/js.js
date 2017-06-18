$( ".myIcon" ).mouseover( function( event ) {
	$( this ).animate({
		"opacity": 0.85,
		"font-size": "62px"
	}, 3000, function() {
		$(this).css({
			'font-size': '32px',
			'opacity': 1
		});
	});
});

