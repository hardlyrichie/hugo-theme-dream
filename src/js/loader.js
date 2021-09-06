$(window).on('load', function() {
    // Animate loader off screen
    $("#load").fadeOut("fast", () => {
        $("#contents").css("visibility", "visible");
    });
});