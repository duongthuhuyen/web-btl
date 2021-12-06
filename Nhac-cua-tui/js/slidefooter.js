$(document).ready(function () {
    $('.t-box-list-cooperation').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows:true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:"<button type='button' class='slick-prev pull-left'><span class='material-icons'>arrow_back_ios</span></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><span class='material-icons'>arrow_forward_ios</span></button>"
    });
});