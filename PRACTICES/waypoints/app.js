$(document).ready(function() {

    var waypoint = $('section').waypoint({ // returns an array of all matched elements
        handler: function(direction) {
            var active_section = this.element;
            // console.log(direction + ' ' + active_section.id);
        },
        // offset: '50px',
        // offset: '25%',
        // offset: 'bottom-in-view'
    });

    // *********************************************** inview
        var inview = new Waypoint.Inview({
            // element: $('section')[1],
            element: $('#section2'),
            enter: function(direction) {
<<<<<<< HEAD
=======
                $('#section2').css('color','yellow');
>>>>>>> e6af4e8388d517c7bdbd2b889ecf746628eb3794
                console.log('Enter triggered with direction ' + direction)
        },
            entered: function(direction) {
                console.log('Entered triggered with direction ' + direction)
<<<<<<< HEAD
=======
                $('#section2').css('color','white');
>>>>>>> e6af4e8388d517c7bdbd2b889ecf746628eb3794
        },
            exit: function(direction) {
                console.log('Exit triggered with direction ' + direction)
        },
            exited: function(direction) {
                console.log('Exited triggered with direction ' + direction)
        }
    });

    // *********************************************** sticky
        var sticky = new Waypoint.Sticky({
            element: $('#sticky')[0]
        });

        setTimeout(function(){
<<<<<<< HEAD
            sticky.destroy();
=======
            // sticky.destroy();
>>>>>>> e6af4e8388d517c7bdbd2b889ecf746628eb3794
        },3000);
    // *******************************************************




    /*----------------------------------------------------*/
    /* Smooth Scrolling
    ------------------------------------------------------ */
       $('.smoothscroll').on('click',function (e) {
    	    e.preventDefault();
    	    var target = this.hash,
    	    $target = $(target);
            console.log($target);
    	    $('html, body').stop().animate({
    	        'scrollTop': $target.offset().top
    	    }, 1200, 'swing', function () {
    	        window.location.hash = target;
    	    });
    	});



});
