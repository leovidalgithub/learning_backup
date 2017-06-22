$( document ).ready( function() {
    $( '#requestsInput input' ).focus();
});

$( "#myForm" ).submit( function( event ) {
    let radio = $( 'input:radio[name=options]:checked' ).val();
    let url = radio == 'local' ? 'http://localhost:8085/' : 'http://stress-server.leovidal.es/';
    event.preventDefault();
    $( '#results' ).find( 'ul' ).empty();
    let num = $( '#requestsInput input' ).val() || 100;
    $( '#requestsInput input' ).val( num );
    stressServer();
    let cont = 0;
    let average = 0;
    let beginGlobalTime = Date.now();
    let resultsElement = $( '#results' ).find( 'ul' );

        function stressServer() {
            let beginTime = Date.now();
            $.get( url )
            .done( function( data ) {
                if( data.success ) {
                    let endTime = Date.now();
                    let timeSpent = ( endTime - beginTime );
                    average += timeSpent;
                    resultsElement.append( `<li>${++cont} - ${data.token} - ${timeSpent} mill</li>` );
                    scrollDownPlease();
                }
            })
            .fail( function( err ) {
                console.log( err );
            })
            .always( function() {
                if( cont >= num ) {
                    let endTime = Date.now();
                    let timeSpent = ( endTime - beginGlobalTime );
                    let inOneSecond = ( ( num * 1000 ) / timeSpent ).toFixed( 2 );
                    resultsElement.append( `<li class="result">AVERAGE PER REQUEST = ${average / num} mill</li>` );
                    resultsElement.append( `<li class="result">GLOBAL TIME SPENT = ${timeSpent} mill</li>` );
                    resultsElement.append( `<li class="result">IN ONE SECOND = ${inOneSecond} REQUESTS</li>` );
                    scrollDownPlease();
                    return
                } else {
                    stressServer();
                }
            });
        }
});

    function scrollDownPlease() {
        let objDiv = document.getElementById( 'results' );
        objDiv.scrollTop = objDiv.scrollHeight;
    }
