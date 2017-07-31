$(document).ready(function() {

    var waypoint = $('section').waypoint({ // returns an array of all matched elements
        handler: function(direction) {
            var active_section = this.element;
            // if (direction === "up") {
            //     direc = 'up';
            // } else {
            //     direc = 'down';
            // }
            // console.log(direction + ' ' + active_section.id);
        },

        // offset: '50px'
    });

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
