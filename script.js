$(document).ready(function () {
    window.scrollTo(1368, 0);
})

$(window).on('beforeunload', function () {
    $(window).scrollTop(0);
    $(window).scrollLeft(1368);
});

$("body").css("overflow", "hidden");

$("#play").on("click", function () {
    $("#tape").attr("src", "./tape giphy.gif")
    $("#tape").css("height", "200")
    $("#tape").css("width", "320")
    $("#tape").css("padding", "10")
    $("#boombox").css("animation", "shake 1s")
    $("#boombox").css("animation-iteration-count", "infinite")
    $("#tape").css("animation", "shake 1s")
    $("#tape").css("animation-iteration-count", "infinite")
    $("#play").css("animation", "shake 1s")
    $("#play").css("animation-iteration-count", "infinite")
    $("#name").css("animation", "expand 1s forwards")
})

$("#play").click(function () {
    $('html, body').delay(3000).animate({
        scrollTop: 802
    }, 2000);
})
$("#key2").click(function () {
    $('html, body').animate({
        scrollTop: 1604
    }, 2000);
})
$("#back-horiz").click(function () {
    $('html, body').animate({
        scrollTop: 802
    }, 2000);
})
$("#key1").click(function () {
    $('html, body').animate({
        scrollLeft: 0
    }, 2000);
})
$("#key3").click(function () {
    $('html, body').animate({
        scrollLeft: 2736
    }, 2000);
})
$("#back-vert-two").click(function () {
    $('html, body').animate({
        scrollLeft: 1368
    }, 2000);
})
$(".arrow").click(function () {
    $('html, body').animate({
        scrollLeft: 1368
    }, 2000);
})
