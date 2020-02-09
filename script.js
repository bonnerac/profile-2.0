window.onload = function () {
    window.scrollTo(1368, 0);
}
$("body").css("overflow", "hidden");

$("#button").click(function () {
    $('html, body').animate({
        scrollTop: 802
    }, 2000);
})
$(".clicker-two").click(function () {
    $('html, body').animate({
        scrollTop: 1604
    }, 2000);
})
$("#back-horiz").click(function () {
    $('html, body').animate({
        scrollTop: 802
    }, 2000);
})
$("#card-about-me").click(function () {
    $('html, body').animate({
        scrollLeft: 0
    }, 2000);
})
$("#card-portfolio").click(function () {
    $('html, body').animate({
        scrollLeft: 2736
    }, 2000);
})
$("#back-vert-two").click(function () {
    $('html, body').animate({
        scrollLeft: 1368
    }, 2000);
})
$("#back-vert-one").click(function () {
    $('html, body').animate({
        scrollLeft: 1368
    }, 2000);
})
