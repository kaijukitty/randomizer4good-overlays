$( document ).ready(function() {
    $('.slideshow').slick({
        "arrows": false,
        "dots": false,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "infinite": true,
        "autoplay": true,
        "autoplaySpeed": 6000,
        "speed": 1500,
        "fade": true,
        "slide": ".slide"
    });
});