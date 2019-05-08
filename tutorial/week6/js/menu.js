$(document).ready(function() {
    $("nav").accessibleDropDown();
    $('nav ul li a').hover(function() {
        $(this).stop().animate({
            paddingRight: '2.5em'
        },
        1000);
    },
    function() {
        $(this).stop().animate({
            paddingRight: '1.2em'
        },
        1000);
    }); // end nav hover
}); //end ready
$.fn.accessibleDropDown = function() {
    var el = $(this);
    $("a", el).focus(function() {
        $(this).parents("li").addClass("hover");
    }).blur(function() {
        $(this).parents("li").removeClass("hover");
    });
};