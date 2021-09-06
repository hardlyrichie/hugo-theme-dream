$(window).on('load', function() {
    // Animate loader off screen
    $("#load").fadeOut("slow", () => {
        $("#contents").css("visibility", "visible");
    });
});