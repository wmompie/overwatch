$(document).ready(function() {
    // hover starts
    $('#dashboard').hover(function(){
        $(this).stop().animate({
            left: '0',
            backgroundColor: '#483838'
        },
        500,
        'easeOutCubic'
        ); // end animate
    },
    function(){
        $(this).stop().animate({
            left: '-92px',
            backgroundColor: '#e1e2dd'
        },
        1500,
        'easeOutBounce'); // end animate
    }); // end hover
    
    $('#dashboard img').hover(function(){
        $(this).stop().animate({
            opacity: 1.0
        },
        500);
    },
    function(){
        $(this).stop().animate({
            opacity: 0.4
        },
        500);
    }); // end hover

});//end slider