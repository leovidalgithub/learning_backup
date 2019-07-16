let socket;
$( document ).ready( function() {
    $( '#requestsInput input' ).focus();
    // socket = io.connect('http://stress-server.leovidal.es/');
    socket = io.connect( 'http://localhost:8085/' );
});

$( "#myForm" ).submit( function( event ) {
    event.preventDefault();
    let resultsElement = $( '#results' ).find( 'ul' );
    resultsElement.empty();
    let num = $( '#requestsInput input' ).val() || 100;
    $( '#requestsInput input' ).val( num );
    let radio = $( 'input:radio[name=options]:checked' ).val();
    let cont = 0;
    let average = 0;
    let beginGlobalTime = Date.now();

    if( radio == 'socket' ) {
        runSocket();
    } else {
        let url = radio == 'local' ? 'http://localhost:8085/' : 'http://stress-server.leovidal.es/';
        runRequest( url );
    }

        function runSocket() {
            let beginTime;
            socket.on( 'socket_response', function ( data ) {
                if( data.success ) {
                    printLine( data, beginTime );
                }
                if( cont >= num ) {
                    printFinish();
                    //socket.disconnect();
                } else {
                    emit();
                }
            });
            emit();
            function emit() {
                beginTime = Date.now();
                socket.emit( 'giveMyTokenBack', { msg : 'Give me my token, pajuo' } );
            }
        }

        function runRequest( url ) {
            let beginTime = Date.now();
            $.get( url )
            .done( function( data ) {
                if( data.success ) {
                    printLine( data, beginTime );
                }
                if( cont >= num ) {
                    printFinish();
                } else {
                    runRequest( url );
                }
            });
        }

//****************************************************************************************
        function printLine( data, beginTime ) {
            let endTime = Date.now();
            let timeSpent = ( endTime - beginTime );
            average += timeSpent;
            resultsElement.append( `<li>${++cont} - ${data.token} - ${timeSpent} mill</li>` );
            scrollDownPlease();
        }

        function printFinish() {
            let endTime = Date.now();
            let timeSpent = ( endTime - beginGlobalTime );
            let inOneSecond = ( ( num * 1000 ) / timeSpent ).toFixed( 2 );
            average = ( average / num ).toFixed( 2 );
            resultsElement.append( `<li class="result">AVERAGE PER REQUEST = ${average} mill</li>` );
            resultsElement.append( `<li class="result">GLOBAL TIME SPENT = ${timeSpent} mill</li>` );
            resultsElement.append( `<li class="result">IN ONE SECOND = ${inOneSecond} REQUESTS</li>` );
            scrollDownPlease();
        }

});

    function scrollDownPlease() {
        let objDiv = document.getElementById( 'results' );
        objDiv.scrollTop = objDiv.scrollHeight;
    }
