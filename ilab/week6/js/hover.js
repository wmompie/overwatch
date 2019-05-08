$(document).ready(function() {
    // mediaMenu hover starts
    $('#dashboard').hover(function(){
        $(this).stop().animate({
            left: '0',
            backgroundColor: '#3a5173'
        },
        500,
        'easeOutCubic'
        ); // end animate
    },
    function(){
        $(this).stop().animate({
            left: '-100px',
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
    }); // end mediaMenu hover
    
    // aside hover starts
    $('aside').hover(function(){
        $(this).stop().animate({
            backgroundColor: '#ff9c00',
            border: '10px solid #ff9c00',
            color: '#3a5173'
        },
        500,
        'easeOutCubic'
        ); // end animate
    },
    function(){
        $(this).stop().animate({
            backgroundColor: '#333',
            border: '10px solid RGBa(255,255,255,.5)',
            color: '#dadaed'
        },
        500,
        'easeOutCubic'); // end animate
    }); // end aside hover

});//end slider