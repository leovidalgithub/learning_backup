$(window).load(function() {
    $('.flexslider').flexslider({
        initDelay: 0,
        animation: "fade", // slide
        slideshowSpeed: 2000,
        animationSpeed: 600,
        slideshow: true,
        randomize: true,
        pauseOnAction: true,
        pauseOnHover: false,
        controlNav: true, // not working
        directionNav: true,  // not working
        prevText: "Previous", // not working
        nextText: "Next", // not working
        start: function(){console.log('start');},
        before: function(){console.log('before');},
        after: function(){console.log('after');},
        end: function(){console.log('end');}
    });
});
