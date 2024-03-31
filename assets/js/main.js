var s1 = 0;
function checkScroll() {
    if ($(".overlay").css('display') !== "none") {
        $('body').css('overflow', 'hidden');
    }
    else {
        $('body').css('overflow', 'scrcoll');
    }
}
$(".button-click").click(function () {
    $(".overlay").show();
    $(".menu-mb").toggle(1);
    checkScroll();
})
$(".overlay").click(function () {
    $(this).hide();
    $("overlay").hide();
})