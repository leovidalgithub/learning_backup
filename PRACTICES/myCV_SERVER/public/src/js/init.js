/*-----------------------------------------------------------------------------------
/* Init JS
-----------------------------------------------------------------------------------*/
 jQuery(document).ready(function($) {

     /*----------------------------------------------------*/
     /* FitText Settings for Header H1 and Portfolio H2
     /* Show Header (and Idioms) for the first time when loaded
     ------------------------------------------------------ */
     setTimeout(function() {
         $('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '75px' });
         $('#portfolio h2').fitText(1, { minFontSize: '30px', maxFontSize: '85px' });
         $(document.body).css('opacity', '1');
     }, 800);

     /*----------------------------------------------------*/
     /* Idioms options show/hide
     ------------------------------------------------------ */
    $('#idioms .selected').mouseenter(function(event) {
        $('#idioms .choose').clearQueue().show().animate({
            opacity: '1',
            right: '8px',
            'z-index': '15'
        },'slow', idiomsClose);
    });
    let idiomsClose = function() {
        $('#idioms .choose').bind('mouseleave click',function(event) {
            $('#idioms .choose').animate({
                opacity: '0',
                right: '-70px',
                'z-index': '5'
            },'slow',function() {
                $('#idioms .choose').hide().unbind();
            });
        });
    };
    // opacity: '1',
    // left: '5px',
    // 'z-index': '15'
    //
    // opacity: '0',
    // left: '-70px',
    // 'z-index': '5'

     /*----------------------------------------------------*/
     /* Parallax Settings
     ------------------------------------------------------ */
     $('.jsInit').parallax({
         imageSrc: './images/collage-4.png',
         speed: .4,
         position:'center center',
         zIndex:'0',
         androidFix: false,
         iosFix: false
     });

    /*----------------------------------------------------*/
    /* Smooth Scrolling
    ------------------------------------------------------ */
   $('.smoothscroll').on('click',function (e) {
        e.preventDefault(); // this prevents from href="#about" to go
	    let target = this.hash;
        let $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1100, 'swing', () => {
	        window.location.hash = target; // ???
	    });
	});

/*----------------------------------------------------*/
/* Waypoints
------------------------------------------------------*/
    /*----------------------------------------------------*/
    /* Waypoint - Highlight the current section in the navigation bar
    ------------------------------------------------------*/
	let sections = $("section");
	let navigation_links = $("#nav-wrap a");
	sections.waypoint({
        handler: function(direction) {
            let active_section = $(this.element);
    		if (direction === "up") active_section = active_section.prev();
    		let active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');
            navigation_links.parent().removeClass("current");
    		active_link.parent().addClass("current");
		},
		offset: '18%'
	});
    /*----------------------------------------------------*/
    /* Waypoint - Adding skill classes to animate skill-bars
    ------------------------------------------------------*/
    let skillsWaypoint = new Waypoint({
      element: document.getElementById('mySkills'),
      handler: function() {
          let skills = [
              'AngularJS',
              'Angular4',
              'NodeJS',
              'ExpressJS',
              'JavaScript',
              'Sass',
              'jQuery',
              'MongoDB',
              'HTML_CSS',
              'Bootstrap',
              'Git',
              'Gulp',
              'PHP',
              'Scrum',
              'NET',
              'Jasmine',
              'Webpack'
          ];
           $('#resume ul.skills li span').each(function( index ) {
               $(this).delay(3000).addClass(skills[index]);
           });
          this.destroy(); // skillsWaypoint.destroy();
      },
      offset: '23%'
    //   offset: 'bottom-in-view'
    });
    /*----------------------------------------------------*/
    /* Waypoint - Adding spin class to GET IN TOUCH icon
    ------------------------------------------------------*/
    let getintouchWaypoint = new Waypoint({
      element: document.getElementById('contact'),
      handler: function() {
          setTimeout(function(){
              $('#contact .touchIcon').addClass('spin');
          },1000);
          this.destroy();
      },
      offset: '15%'
    });

    /*----------------------------------------------------*/
    /*	Setting min-height of all sections as window-height
    ------------------------------------------------------ */
     let checkHeights = () => {
            let windowHeight =  $(window).height();
            let myArray = ['header', 'about', 'resume', 'portfolio', 'contact'];
            for (let index=0; index<myArray.length;index++) {
                $(`#${myArray[index]}`).css({ 'min-height': windowHeight });
            }
    }
    checkHeights();

   $(window).on('resize', () => {
       checkHeights();
   })

    /*----------------------------------------------------*/
    /*	Fade In/Out Primary Navigation
    ------------------------------------------------------*/
   $(window).on('scroll', function() {

        let h = $('header').height();
        let y = $(window).scrollTop();
        let nav = $('#nav-wrap');

	   if ( (y > h*.20) && (y < h) && ($(window).outerWidth() > 768 ) ) {
	      nav.fadeOut('fast');
	   } else {
         if (y < h*.20) {
            nav.fadeIn(1000).removeClass('opaque');
         } else {
            nav.fadeIn(1000).addClass('opaque');
         }
      }
	});

/*----------------------------------------------------*/
/*	Modal Popup
------------------------------------------------------*/
    // $('.item-wrap a').magnificPopup({
    //    type:'inline',
    //    fixedContentPos: false,
    //    removalDelay: 200,
    //    showCloseBtn: false,
    //    mainClass: 'mfp-fade'
    // });
    // $(document).on('click', '.popup-modal-dismiss', function (e) {
    // 		e.preventDefault();
    // 		$.magnificPopup.close();
    // });

/*----------------------------------------------------*/
/*	Flexslider
/*----------------------------------------------------*/
   // $('.flexslider').flexslider({
   //    namespace: "flex-",
   //    controlsContainer: ".flex-container",
   //    animation: 'slide',
   //    controlNav: true,
   //    directionNav: false,
   //    smoothHeight: true,
   //    slideshowSpeed: 7000,
   //    animationSpeed: 600,
   //    randomize: false,
   // });
   // $('.flexslider').flexslider({
   //     initDelay: 0,
   //     animation: "fade", // slide
   //     slideshowSpeed: 6000,
   //     animationSpeed: 700,
   //     slideshow: true,
   //     randomize: false,
   //     pauseOnAction: true,
   //     pauseOnHover: false
   //  //    smoothHeight: true
   //  //    start: function(){console.log('start');},
   //  //    before: function(){console.log('before');},
   //  //    after: function(){console.log('after');},
   //  //    end: function(){console.log('end');}
   // });

   // THIS IS THE LAST I DID
//    $('.bxslider').bxSlider({
//         mode: 'horizontal',
//         useCSS: false,
//         infiniteLoop: false,
//         hideControlOnEnd: true,
//         easing: 'easeOutElastic',
//         speed: 2000
//     });

});
