$(window).on('scroll', function () {
    if ($(this).scrollTop() > 200) {
        if (!$('.navbar').hasClass('expand')) {
            $('.navbar').addClass('expand');
        }
    } else {
        if ($('.navbar').hasClass('expand')) {
            $('.navbar').removeClass('expand');
        }
    }
});