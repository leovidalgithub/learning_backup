
$( "#target" ).submit(function( event ) {
	var username = $( '#username').val();
	$.get('/api/asking?username=' + username, function(data) {
		$( '#div1 span').html('<h3>' + data + '</h3>');
	});
	event.preventDefault(); // return false;
});

$( '#getButton' ).click(function(event) {
	$.post('/api/asking', function(data) {
		$( '#div2 span').text( data );
	});
});

$( '#btn2' ).click( function( event ) {
	var vari = 'TU MADRE EN TANGAS';
	vari = JSON.stringify(vari);
	$("<p>").text( vari ).appendTo( '#div3' ).delay( 800 ).fadeOut( 1400 );
});
