$(document).ready(function() {

    $('.jsInit').parallax({
        imageSrc: './img/img2.jpg',
        speed: .5,
        position:'center center'
    });

    // (function(){
    //     var parallax = document.querySelectorAll('.parallax'); // find all 'parallax' clases returns an array-like-object
    //     var speed = 0.5;
    //     var cont = 0;
    //     window.onscroll = function(){
    //         [].slice.call(parallax).forEach(function(el,i){ // Array.prototype.call(obj) is used to convert an array-like-object into Array
    //             var windowYOffset = window.pageYOffset; // get number of pixels document has scrolled vertically
    //             var elBackgrounPos = '50% ' + (windowYOffset * speed * -1) + 'px';
    //             el.style.backgroundPosition = elBackgrounPos;
    //         });
    //     };
    // })();

});
