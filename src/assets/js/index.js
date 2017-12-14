window.midleTopSection = function () {

    var $textDoomObj = $("#top-section").find("#text");
    var top = $("#top-section").height() / 2 - $textDoomObj.height() / 2;
    var left = $("#top-section").width() / 2 - $textDoomObj.width() / 2;
    if ($(document).width() > 742) {
        top -= 100;
    }
    var windowLeft = $("#top-section").width() / 2 - $("#desccription").find("#window").width() / 2;

    $textDoomObj.css({
        "top": top,
        "left": left
    });

    $("#desccription").find("#window").css({
        "left": windowLeft
    });


};

$(window).on("resize", function () {
    window.midleTopSection();
});

$(window).on("scroll", function () {

    var scroll = $(document).scrollTop();

    $('.box').waypoint(function (dir) {
        var animation = $(this).attr("data-target");
        if (dir === 'down' && !$(this).hasClass(animation)) {
            $(this).addClass(animation);
        }
    }, {
        offset: '80%'
    })

});
