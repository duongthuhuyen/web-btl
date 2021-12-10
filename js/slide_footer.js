$(document).on('ready', function() {
    $(".center").slick({
    infinite: true,
    centerMode: true,
    slidesToShow: 6,
    // slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 1300,
    variableWidth: true,

    swipeToSlide: true
    });

});