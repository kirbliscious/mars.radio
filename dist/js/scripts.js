jQuery(document).ready(function( $ ) { 
        //$('.video').fitVids({ customSelector: "iframe[src^='https://drive.google.com/file/d/1j3SPcu9vqB0AtA5cug5AjnWLVEOzSvO8/preview']"});

        $(window).scroll(function() {
                if ($(document).scrollTop() > 50) {
                        $('.header').addClass('shrink');
                        console.log("scroll");
                } else {
                $('.header').removeClass('shrink');
          }
        });
});