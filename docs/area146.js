// JavaScript code.
$(document).ready(function () {
    // Set listeners.
    $("#tree").mouseover(function () {
        show();
    });
    $("#tree").click(function () {
        show();
    });
    $("#tree").mouseleave(function () {
        $("#tree").css("width", "16px");
        $("#tree").css("height", "16px");
        $("#tree").css("overflow", "hidden");
        $("#tree ul").css("display", "none");
        $("#tree .menu_icon").css("display", "inline");
    });
    function show() {
        $("#tree").css("width", "auto");
        $("#tree").css("height", "auto");
        $("#tree").css("overflow", "auto");
        $("#tree ul").css("display", "block");
        $("#tree .menu_icon").css("display", "none");
    }
});