$('.tit .btn').click(function () {
    // $('.nav').css({display:"block"})
    // $('.nav').show();
    //  $('.nav').slideDown();
    // $('.nav').toggle();
    // $('.nav').fadeToggle();
    $('.nav').slideToggle();
    $(this).toggleClass("on")
});

// banner
$(document).ready(function () {
    $('.ban').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });
});