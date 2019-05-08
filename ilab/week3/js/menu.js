$(document).ready(function() {
    $("nav").accessibleDropDown();
}); //end ready
$.fn.accessibleDropDown = function() {
    var el = $(this);
    $("a", el).focus(function() {
        $(this).parents("li").addClass("hover");
    }).blur(function() {
        $(this).parents("li").removeClass("hover");
    });
}