jQuery(document).ready(function( $ ) { 
        $('.video').fitVids({ });

        $(window).scroll(function() {
                if ($(document).scrollTop() > 50) {
                        $('.header').addClass('shrink');
                        console.log("scroll");
                } else {
                $('.header').removeClass('shrink');
          }
        });
});